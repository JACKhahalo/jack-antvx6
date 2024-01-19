<template>
  <div id="graph-container"></div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { Graph, Shape } from '@antv/x6';
import { grahpStore } from '../../../pinia/graph';
import { Export } from '@antv/x6-plugin-export';
import { Transform } from '@antv/x6-plugin-transform';
import { Selection } from '@antv/x6-plugin-selection';
import { Snapline } from '@antv/x6-plugin-snapline';
import { Keyboard } from '@antv/x6-plugin-keyboard';
import { Clipboard } from '@antv/x6-plugin-clipboard';
import { History } from '@antv/x6-plugin-history';
const store = grahpStore();
let graph: Graph;

onMounted(() => {
  console.log('onMounted');
  window.__x6_instances__ = [];
  graph = reactive(
    new Graph({
      container: document.getElementById('graph-container') as HTMLElement,
      autoResize: true,
      background: {
        color: '#F2F7FA',
      },
      grid: {
        visible: true,
        type: 'fixedDot',
        args: {
          color: '#333c4d',
        },
      },
      panning: true,
      mousewheel: true,
      connecting: {
        router: 'manhattan',
        connector: {
          name: 'rounded',
          args: {
            radius: 8,
          },
        },
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: true,
        snap: {
          radius: 8,
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#000000',
                strokeWidth: 1,
                targetMarker: {
                  name: null,
                },
              },
            },
            router: {
              name: 'manhattan',
            },
            connector: {
              name: 'jumpover',
            },
            zIndex: 0,
          });
        },
        validateConnection({ targetMagnet }) {
          return !!targetMagnet;
        },
      },
    })
  ) as unknown as Graph;
  store.currentGraphChange(graph);
  store.leftSideCanRender();
  graph
    .use(
      new Transform({
        resizing: true,
        rotating: true,
      })
    )
    .use(
      new Selection({
        rubberband: true,
        showNodeSelectionBox: true,
      })
    )
    .use(new Snapline())
    .use(new Keyboard())
    .use(new Clipboard())
    .use(new History())
    .use(new Export());
  graph.on('node:click', (options: any) => {
    console.log(options, 'node');
    store.defaultSettingsChange(1);
    store.currentNodeChange(options);
  });
  graph.on('edge:click', (options: any) => {
    const cell = options.cell;
    if (
      typeof store.currentEdge == 'object' &&
      cell.id != store.currentEdge.cell.id
    ) {
      if (store.currentEdge.cell.hasTools('onhover')) {
        store.currentEdge.cell.removeTools();
      }
    }
    // console.log(cell.id, store.currentEdge.cell.id);
    console.log(options, 'edge');
    store.defaultSettingsChange(2);
    store.currentEdgeChange(options);
    //显示标点
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.x6-port-body'
    ) as NodeListOf<SVGElement>;
    showPorts(ports, true);
    cell.addTools(
      [
        {
          name: 'vertices',
          args: {
            attrs: {
              r: '3',
              stroke: '#3c4260',
              strokeWidth: 1,
              fill: '#fff',
            },
          },
        },
        {
          name: 'segments',
          args: {
            snapRadius: 20,
            attrs: {
              fill: '#444',
            },
          },
        },
        {
          name: 'boundary',
          args: {
            padding: 10,
            attrs: {
              fill: '#7c68fc',
              stroke: '#333',
              strokeWidth: 0.5,
              fillOpacity: 0.2,
            },
          },
        },
        {
          name: 'target-arrowhead',
          args: {
            attrs: {
              stroke: '#333',
              strokeWidth: 1,
              fill: '#000000',
            },
          },
        },
        {
          name: 'source-arrowhead',
          args: {
            attrs: {
              stroke: '#ffffff',
              strokeWidth: 1,

              fill: '#000000',
            },
          },
        },
      ],
      'onhover'
    );
  });
  graph.on('blank:click', (options) => {
    console.log(options, 'blank');
    store.defaultSettingsChange(0);
    //关闭连接点
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.x6-port-body'
    ) as NodeListOf<SVGElement>;
    showPorts(ports, false);
    //关闭线段选取
    if (typeof store.currentEdge == 'object') {
      const cell = store.currentEdge.cell;

      if (cell.hasTools('onhover')) {
        cell.removeTools();
      }
    }
  });

  // 控制连接桩显示/隐藏
  const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
    for (let i = 0, len = ports.length; i < len; i += 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden';
    }
  };

  graph.on('node:mouseenter', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.x6-port-body'
    ) as NodeListOf<SVGElement>;
    showPorts(ports, true);
  });

  graph.on('node:mouseleave', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.x6-port-body'
    ) as NodeListOf<SVGElement>;
    showPorts(ports, false);
  });

  // graph.on('edge:mouseenter', ({ cell }) => {
  //   cell.addTools(
  //     [
  //       {
  //         name: 'vertices',
  //         args: {
  //           attrs: {
  //             r: '3',
  //             stroke: '#3c4260',
  //             strokeWidth: 1,
  //             fill: '#fff',
  //           },
  //           onClick({ view }: any) {
  //             const edge = view.cell;
  //             edge.attr({
  //               line: {
  //                 strokeDasharray: '5, 10',
  //                 strokeDashoffset:
  //                   (edge.attr('line/strokeDashoffset') | 0) + 20,
  //               },
  //             });
  //           },
  //         },
  //       },
  //       {
  //         name: 'segments',
  //         args: {
  //           snapRadius: 20,
  //           attrs: {
  //             fill: '#444',
  //           },
  //         },
  //       },
  //       // {
  //       //   name: 'boundary',
  //       //   args: {
  //       //     padding: 10,
  //       //     attrs: {
  //       //       fill: '#7c68fc',
  //       //       stroke: '#333',
  //       //       strokeWidth: 0.5,
  //       //       fillOpacity: 0.2,
  //       //     },
  //       //   },
  //       // },
  //     ],
  //     'onhover'
  //   );
  // });
  // graph.on('edge:mouseleave', ({ cell }) => {
  //   if (cell.hasTools('onhover')) {
  //     setTimeout(() => {
  //       cell.removeTools();
  //     }, 1000);
  //   }
  // });

  window.__x6_instances__.push(graph);
});
</script>
<style></style>
