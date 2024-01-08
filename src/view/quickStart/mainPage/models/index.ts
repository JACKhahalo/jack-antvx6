const models = new Map();
//初始默认配置
const defaultAttrs = {
  body: {
    stroke: '#fff',
    strokeWidth: 1,
    fill: '#fff',
  },
  path: {
    stroke: '#000000',
    strokeWidth: 1,
    fill: '#fff',
    style: {
      opacity: 1,
    },
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
  {
    label: 'color',
    type: 'color-picker',
    value: '#fff',
  },
  {
    label: 'sex',
    type: 'select',
    value: '男',
    options: [
      {
        label: '男',
        value: '男',
      },
      {
        label: '女',
        value: '女',
      },
    ],
  },
];

models.set('ConnectivePoint_1', {
  name: 'ConnectivePoint_1',
  fullName: 'ConnectivePoint:配电双端电缆终端头@0',
  settings: {
    width: 10,
    height: 15,
    markup: [
      {
        tagName: 'path',
        selector: 'path1',
        groupSelector: 'path',
        attrs: {
          d: 'm0 7l10 0l-5 8l-5 -8zm5 -7l-0.1 7',
        },
      },
    ],
    attrs: { ...defaultAttrs },
    ports: {
      groups: {
        group1: {
          position: {
            name: 'absolute',
          },
          attrs: { ...defaultPortsAttrs },
        },
      },
      items: [
        {
          id: 'ports1',
          group: 'group1',
          args: {
            x: 5,
            y: 1,
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
        attrs: {
          d: 'm0 7l10 0l-5 8l-5 -8zm5 -7l-0.1 7',
        },
      },
    ],
    attrs: {
      ...defaultAttrs,
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
            x: 5,
            y: 1,
          },
        },
      ],
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
        attrs: {
          d: 'm12.959999999999999 12.959999999999999l0 7.68l1.2 -0.24l1.5599999999999998 -0.48l1.3199999999999998 -0.84l1.44 -1.2l0.84 -1.2l0.6 -1.0799999999999998l0.48 -1.2l0.24 -0.84l0 -0.72zm-1.7999999999999998 -1.92l0 -7.799999999999999l-1.7999999999999998 0.48l-1.0799999999999998 0.36l-0.96 0.48l-1.0799999999999998 0.84l-0.96 0.84l-0.48 0.72l-0.6 0.96l-0.6 1.68l-0.24 1.44zm-1.5599999999999998 -3.84l4.8 0l-2.4 -7.199999999999999zm-7.199999999999999 4.92a9.600000000000001 9.600000000000001 0 1 1 19.2 0a9.600000000000001 9.600000000000001 0 1 1 -19.2 0zm-2.4 -0.12l23.999999999999996 0m-11.999999999999998 11.879999999999999l0 -16.68',
        },
      },
    ],
    attrs: {
      ...defaultAttrs,
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
            x: 12,
            y: 12,
          },
        },
      ],
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
        attrs: {
          d: 'm7.319999999999999 0.48l0 13.319999999999999l1.3199999999999998 0l1.0799999999999998 -0.36l0.96 -0.48l0.96 -0.72l0.72 -0.72l0.6 -0.84l0.48 -0.84l0.24 -0.84l0.24 -0.84l0 -0.96l0 -0.96l-0.24 -0.96l-0.36 -0.84l-0.36 -0.72l-0.6 -0.84l-0.6 -0.6l-0.72 -0.6l-0.72 -0.36l-0.96 -0.48l-0.84 -0.24l-0.6 -0.12zm-7.319999999999999 6.72a7.2 7.2 0 1 1 14.399999999999999 0a7.2 7.2 0 1 1 -14.399999999999999 0z',
        },
      },
    ],
    attrs: {
      ...defaultAttrs,
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
            x: 7,
            y: 7,
          },
        },
      ],
    },
  },
});

export default models;
