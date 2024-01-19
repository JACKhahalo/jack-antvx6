import { Edge } from '@antv/x6';
class divEdge {
  name!: string;
  fullName!: string;
  settings!: Edge.Metadata;
}
const edgeModels: Map<string, divEdge> = new Map();

edgeModels.set('divEdge', {
  name: 'divEdge',
  fullName: 'divEdge',
  settings: {
    inherit: 'edge',
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
  },
});

export default edgeModels;
