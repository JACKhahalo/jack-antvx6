<template>
  <div id="graph-container"></div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { Graph, Shape } from '@antv/x6';
import { grahpStore } from '../../../pinia/graph';

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
        allowBlank: false,
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
    .use(new History());
  graph.on('node:click', (options: any) => {
    // console.log(options);
    store.defaultSettingsChange(false);
    store.currentNodeChange(options);
  });
  graph.on('blank:click', (options) => {
    console.log(options);
    store.defaultSettingsChange(true);
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
  window.__x6_instances__.push(graph);
});
</script>
<style></style>
