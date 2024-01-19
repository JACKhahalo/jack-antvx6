//节点转换器
class adapterNode {
  id!: string;
  shape!: string;
  x!: number;
  y!: number;
  label!: string;
  width!: number;
  height!: number;
  angle: number = 0;
  zIndex: number = 0;
  data!: object;
  constructor(arg: any) {
    this.id = arg.id;
    // this.shape = arg.definition.substring(arg.definition.lastIndexOf('/') + 1);
    this.shape = 'ConnectivePoint_1';
    this.label = arg.label;
    this.x = arg.position.x;
    this.y = arg.position.y;
    this.height = arg.size.height;
    this.width = arg.size.width;
    this.angle = arg.angle;
    this.zIndex = arg.zIndex;
    this.data = adapterData(arg.args, arg.props);
  }
}
//边转换器
class adapterEdge {
  id!: string;
  source!: object;
  target!: object;
  shape = 'divEdge';
  vertices!: object;
  constructor(arg: any) {
    this.id = arg.id;
    this.source = arg.source;
    this.target = arg.target;
    this.vertices = arg.vertices;
  }
}
//数据转换
const adapterData = (args: object, props: object) => {
  const attribute = [];
  const configuration: { label: string; type: string; value: any }[] = [];

  attribute.push({
    label: '大纲级别',
    type: 'input-number',
    value: props.outlineLevel,
  });

  Object.entries(args).forEach(([key, value]) => {
    let t = {
      label: key,
      type: 'input',
      value: value,
    };
    configuration.push(t);
  });
  return {
    attribute: attribute,
    configuration: configuration,
  };
};
//引脚转换
const adapterPort = (pins: any) => {};

const adapter = (targetJSON: any) => {
  const results: (adapterEdge | adapterNode | undefined)[] = [];
  const target = Object.entries(targetJSON.default).map((item) => item[1]);
  target.forEach((item) => {
    let t;
    switch (item!.shape) {
      case 'diagram-component':
        t = new adapterNode(item);
        break;
      case 'diagram-component-edge':
        t = new adapterEdge(item);
        break;
      case 'diagram-edge':
        t = new adapterEdge(item);
        break;
    }
    results.push(t);
  });

  return results;
};

export default adapter;
