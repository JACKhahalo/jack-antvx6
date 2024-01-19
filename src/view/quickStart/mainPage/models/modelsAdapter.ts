import * as items from './item.json';
import { Node } from '@antv/x6';
import models from './index';
class divNode {
  name!: string;
  fullName!: string;
  settings!: Node.Metadata;
  constructor(name: string, fName: string, settings: Node.Metadata) {
    this.name = name;
    this.fullName = fName;
    this.settings = settings;
  }
}

items.default.forEach((item) => {
  let name = item.rid.substring(item.rid.lastIndexOf('/') + 1);
  let fullName = item.name;
  let settings = {
    width: item.revision.graphic.width,
    height: item.revision.graphic.height,
    attrs: item.revision.graphic.attrs,
    markup: item.revision.graphic.markup,
  };
  let t = new divNode(name, fullName, settings);
  models.set(name, t);
});

export default models;
