import { Node } from '@antv/x6';
class divNode {
  name!: string;
  fullName!: string;
  settings!: Node.Metadata;
}

const models: Map<string, divNode> = new Map();
//初始默认配置
const defaultAttrs = {
  body: {
    stroke: '#fff',
    strokeWidth: 1,
    fill: '#fff',
    style: {
      opacity: 0,
    },
  },
  text: {
    stroke: '#fff',
    strokeWidth: 1,
    fill: '#fff',
  },
};
const defaultPortsAttrs = {
  circle: {
    r: 2,
    magnet: true,
    stroke: '#5F95FF',
    strokeWidth: 1,
    fill: '#fff',
    style: {
      visibility: 'hidden',
    },
  },
  text: {
    text: '',
  },
};
const defaultAttribute = [
  {
    label: '大纲级别',
    type: 'input-number',
    value: 666,
  },
];
const defaultConfiguration = [
  {
    label: 'Name',
    type: 'input',
    value: '666',
  },
  // {
  //   label: 'color',
  //   type: 'color-picker',
  //   value: '#fff',
  // },
  // {
  //   label: 'sex',
  //   type: 'select',
  //   value: '男',
  //   options: [
  //     {
  //       label: '男',
  //       value: '男',
  //     },
  //     {
  //       label: '女',
  //       value: '女',
  //     },
  //   ],
  // },
];

models.set('ConnectivePoint_1', {
  name: 'ConnectivePoint_1',
  fullName: 'ConnectivePoint:配电双端电缆终端头@0',
  settings: {
    width: 10,
    height: 15,
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset: 'm0 7l10 0l-5 8l-5 -8zm5 -7l-0.1 7',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: '0',
          group: 'group1',
          args: {
            x: '50%',
            y: 0,
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: '1',
          group: 'group1',
          args: {
            x: '100%',
            y: '50%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: '2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: '3',
          group: 'group1',
          args: {
            x: '0%',
            y: '50%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('ConnectivePoint_3', {
  name: 'ConnectivePoint_3',
  fullName: 'ConnectivePoint:配电站内双端电缆终端头@0',
  settings: {
    width: 10,
    height: 15,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset: 'm0 7l10 0l-5 8l-5 -8zm5 -7l-0.1 7',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: 0,
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('FaultIndicator_1', {
  name: 'FaultIndicator_1',
  fullName: 'FaultIndicator:自动化故障指示器@0',
  settings: {
    width: 24,
    height: 24,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm12.959999999999999 12.959999999999999l0 7.68l1.2 -0.24l1.5599999999999998 -0.48l1.3199999999999998 -0.84l1.44 -1.2l0.84 -1.2l0.6 -1.0799999999999998l0.48 -1.2l0.24 -0.84l0 -0.72zm-1.7999999999999998 -1.92l0 -7.799999999999999l-1.7999999999999998 0.48l-1.0799999999999998 0.36l-0.96 0.48l-1.0799999999999998 0.84l-0.96 0.84l-0.48 0.72l-0.6 0.96l-0.6 1.68l-0.24 1.44zm-1.5599999999999998 -3.84l4.8 0l-2.4 -7.199999999999999zm-7.199999999999999 4.92a9.600000000000001 9.600000000000001 0 1 1 19.2 0a9.600000000000001 9.600000000000001 0 1 1 -19.2 0zm-2.4 -0.12l23.999999999999996 0m-11.999999999999998 11.879999999999999l0 -16.68',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '50%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('PolePSR_2', {
  name: 'PolePSR_2',
  fullName: 'PolePSR:水泥杆耐张杆塔@0',
  settings: {
    width: 14,
    height: 14,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm7.319999999999999 0.48l0 13.319999999999999l1.3199999999999998 0l1.0799999999999998 -0.36l0.96 -0.48l0.96 -0.72l0.72 -0.72l0.6 -0.84l0.48 -0.84l0.24 -0.84l0.24 -0.84l0 -0.96l0 -0.96l-0.24 -0.96l-0.36 -0.84l-0.36 -0.72l-0.6 -0.84l-0.6 -0.6l-0.72 -0.6l-0.72 -0.36l-0.96 -0.48l-0.84 -0.24l-0.6 -0.12zm-7.319999999999999 6.72a7.2 7.2 0 1 1 14.399999999999999 0a7.2 7.2 0 1 1 -14.399999999999999 0z',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '50%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('PolePSR_1', {
  name: 'PolePSR_1',
  fullName: 'PolePSR:水泥杆直线杆塔@0',
  settings: {
    width: 12,
    height: 12,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm0 7.199999999999999a7.2 7.2 0 1 1 14.399999999999999 0a7.2 7.2 0 1 1 -14.399999999999999 0z',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '50%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('PolePSR_3', {
  name: 'PolePSR_3',
  fullName: 'PolePSR:铁塔直线杆塔@0',
  settings: {
    width: 12,
    height: 12,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm0 0l14.399999999999999 0l0 14.399999999999999l-14.399999999999999 0zm14.04 0.36l-13.679999999999998 13.679999999999998m0 -13.679999999999998l13.679999999999998 13.679999999999998',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '50%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('TranssmissionLineRouter', {
  name: 'TranssmissionLineRouter:三相传输线',
  fullName: '三相传输线',
  settings: {
    width: 90,
    height: 10,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,

      path: {
        dx: 50,
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset: 'm10 0h70v30h-70z',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '50%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Breaker_18', {
  name: 'Breaker_18',
  fullName: 'Breaker:变电手车断路器@31',
  settings: {
    width: 10,
    height: 20,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm12 30.6l-6 4l-6 -4m12 -26l-6 -4l-6 4m2.2 3.5l10 0l0 20l-10 0zm4.8 -0.1l-0.1 -7.4m0 34.7l0.1 -7.3',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Disconnector', {
  name: 'Disconnector',
  fullName: 'Disconnector:变电隔离开关@1',
  settings: {
    width: 10,
    height: 20,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset: 'm4 17l0 7m0 -18l0 -6m-3 6l6 0m-3 11l-4 -12',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Fuse_2', {
  name: 'Fuse_2',
  fullName: 'Fuse:跌落式熔断器@1',
  settings: {
    width: 10,
    height: 20,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm0 19l6 0l0 -15l-6 0l0 7l0 8m3 2l0 3m0 -21l0 -3m0 21l0 -18',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('LoadSwitch_4', {
  name: 'LoadSwitch_4',
  fullName: 'LoadSwitch:普通负荷开关@0',
  settings: {
    width: 10,
    height: 20,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm0 19l6 0l0 -15l-6 0l0 7l0 8m3 2l0 3m0 -21l0 -3m0 21l0 -18',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Disconnector_4', {
  name: 'Disconnector_4',
  fullName: 'Disconnector:柱上隔离开关@1',
  settings: {
    width: 10,
    height: 20,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm4.2 26.5l0 13.5m0 -30.7l0 -9.3m-3 9.3l6 0m-3.1 15.9l-4.1 -17.400000000000002',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Disconnector_3', {
  name: 'Disconnector_3',
  fullName: 'Disconnector:柱上隔离开关@0',
  settings: {
    width: 10,
    height: 20,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm9.200000000000001 26.5l0 13.5m0 -30.7l0 -9.3m-3 9.3l6 0m-3.2 16.1l-9 -17',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Fuse_1', {
  name: 'Fuse_1',
  fullName: 'Fuse:跌落式熔断器@0',
  settings: {
    width: 10,
    height: 20,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm4 4l-4 2l4 6l4 7l4 -2l-4 -7l-4 -6m-3 17l0 3m0 -21l0 -3m0.2 3.7l10.4 17.1',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('LoadSwitch_3', {
  name: 'LoadSwitch_3',
  fullName: 'LoadSwitch:普通负荷开关@1',
  settings: {
    width: 10,
    height: 30,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm2 15a2.9999999999999996 2.9999999999999996 0 1 1 6 0a2.9999999999999996 2.9999999999999996 0 1 1 -6 0zm3 25l0 -11m0 -17l0 -12m-5 12l10 0m-5.1000000000000005 16.1l-4 -16',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('LoadSwitch_9', {
  name: 'LoadSwitch_9',
  fullName: 'LoadSwitch:负荷开关@0',
  settings: {
    width: 10,
    height: 30,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm5.1000000000000005 13.3a1.9999999999999996 1.9999999999999996 0 1 1 4 0a1.9999999999999996 1.9999999999999996 0 1 1 -4 0zm2 21.7l0 -11m0 -13l0 -11m-4 11l8.1 0m-4.1 12.6l-7.1000000000000005 -12.1',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('LoadSwitch_8', {
  name: 'LoadSwitch_8',
  fullName: 'LoadSwitch:负荷开关@1',
  settings: {
    width: 10,
    height: 30,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm2 13.3a1.9999999999999996 1.9999999999999996 0 1 1 4 0a1.9999999999999996 1.9999999999999996 0 1 1 -4 0zm2 21.7l0 -11m0 -13l0 -11m-4 11l8.1 0m-4 12.4l-3.9 -12.3',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Breaker_21', {
  name: 'Breaker_21',
  fullName: 'Breaker:普通断路器@1',
  settings: {
    width: 10,
    height: 10,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm4.1 0l0 9.5m4 -2.5l-8.1 5.1000000000000005m0.1 -5.1000000000000005l8 5',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('Breaker_14', {
  name: 'Breaker_14',
  fullName: 'Breaker:自动化断路器@1',
  settings: {
    width: 10,
    height: 30,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm3.8000000000000003 17l1.6 6.1000000000000005l-4.2 0.9l-1.2 -6.1000000000000005zm2.6 -17l0 11.700000000000001m2.3000000000000003 -1.8l-4.6000000000000005 4.3m-0.1 -4.5l4.8 4.6000000000000005',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
models.set('PowerTransformer_6', {
  name: 'PowerTransformer_6',
  fullName: '柱上公变1@0',
  settings: {
    width: 10,
    height: 30,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
      },
    ],
    attrs: {
      ...defaultAttrs,
      path: {
        stroke: '#000000',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          opacity: 1,
        },
        refDKeepOffset:
          'm3.8333333333333344 25.833333333333336l1.583333333333334 0.8333333333333334l2.0000000000000004 0.5833333333333334l1.833333333333334 0l1.5000000000000004 -0.33333333333333337l1.2500000000000004 -0.5l1.0000000000000002 -0.6666666666666667l0.916666666666667 -0.6666666666666667l1.0000000000000002 -1.0833333333333335l-0.916666666666667 -1.0833333333333335l-1.4166666666666672 -1l-1.583333333333334 -0.75l-1.2500000000000004 -0.33333333333333337l-1.4166666666666672 -0.08333333333333334l-1.2500000000000004 0.08333333333333334l-1.3333333333333337 0.33333333333333337l-1.5000000000000004 0.75l-1.3333333333333337 0.8333333333333334l-1.166666666666667 1.25l0.916666666666667 1zm4.500000000000002 12.416666666666668l0 11.666666666666668m-8.333333333333336 -30.833333333333336a8.333333333333336 8.333333333333334 0 1 1 16.66666666666667 0a8.333333333333336 8.333333333333334 0 1 1 -16.66666666666667 0zm0 10a8.333333333333336 8.333333333333334 0 1 1 16.66666666666667 0a8.333333333333336 8.333333333333334 0 1 1 -16.66666666666667 0zm8.333333333333336 -29.083333333333336l0 10.833333333333334',
      },
    },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: {
            ...defaultPortsAttrs,
          },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: '50%',
            y: '0%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
        {
          id: 'ports2',
          group: 'group1',
          args: {
            x: '50%',
            y: '100%',
          },
          attrs: {
            text: {
              text: '',
            },
          },
        },
      ],
    },
    data: {
      attribute: [...defaultAttribute],
      configuration: [...defaultConfiguration],
    },
  },
});
// models.set('PowerTransformer_6', {
//   name: 'PowerTransformer_6',
//   fullName: '柱上专变1@0',
//   settings: {
//     width: 10,
//     height: 30,
//     markup: [
//       {
//         tagName: 'path',
//         selector: 'path1',
//         groupSelector: 'path',
//       },
//     ],
//     attrs: {
//       ...defaultAttrs,
//       path: {
//         stroke: '#000000',
//         strokeWidth: 1,
//         fill: '#fff',
//         style: {
//           opacity: 1,
//         },
//         refDKeepOffset:
//           'm4.6000000000000005 31l1.9000000000000001 1l2.4 0.7000000000000001l2.2 0l1.8 -0.4l1.5 -0.6l1.2 -0.8l1.1 -0.8l1.2 -1.3l-1.1 -1.3l-1.7 -1.2l-1.9000000000000001 -0.9l-1.5 -0.4l-1.7 -0.1l-1.5 0.1l-1.6 0.4l-1.8 0.9l-1.6 1l-1.4000000000000001 1.5l1.1 1.2zm5.4 14.9l0 14m-10 -37a9.999999999999998 9.999999999999998 0 1 1 20 0a9.999999999999998 9.999999999999998 0 1 1 -20 0zm0 12a9.999999999999998 9.999999999999998 0 1 1 20 0a9.999999999999998 9.999999999999998 0 1 1 -20 0zm10 -34.9l0 13',
//       },
//     },
//     ports: {
//       groups: {
//         group1: {
//           position: {
//             name: 'absolute',
//           },
//           attrs: {
//             ...defaultPortsAttrs,
//           },
//         },
//       },
//       items: [
//         {
//           id: 'ports1',
//           group: 'group1',
//           args: {
//             x: '50%',
//             y: '0%',
//           },
//           attrs: {
//             text: {
//               text: '',
//             },
//           },
//         },
//         {
//           id: 'ports2',
//           group: 'group1',
//           args: {
//             x: '50%',
//             y: '100%',
//           },
//           attrs: {
//             text: {
//               text: '',
//             },
//           },
//         },
//       ],
//     },
//     data: {
//       attribute: [...defaultAttribute],
//       configuration: [...defaultConfiguration],
//     },
//   },
// });
export default models;
