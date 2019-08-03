export default class Isometric {
  x: number;
  y: number;
  l: number;
  w: number;
  h: number;

  constructor(x: number, y: number, l: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.w = w;
    this.h = h;
  }

  generateLeftPlane() {
    const left: VectorNode = figma.createVector();
    const { x, y, l, w, h } = this;
    left.vectorPaths = [
      {
        windingRule: "EVENODD",
        data: `M ${x} ${y} L ${x - l} ${y - l * 0.5} L ${x - l} ${y -
          h -
          l * 0.5} L ${x} ${y - h * 1} Z`
      }
    ];
    left.fills = [{ type: "SOLID", color: { r: 0.36, g: 0.36, b: 0.36 } }];
    left.strokes = [];
    return left;
  }

  generateRightPlane() {
    const right: VectorNode = figma.createVector();
    const { x, y, l, w, h } = this;
    right.vectorPaths = [
      {
        windingRule: "EVENODD",
        data: `M ${x} ${y} L ${x + w} ${y - w * 0.5} L ${x + w} ${y -
          h -
          w * 0.5} L ${x} ${y - h * 1} Z`
      }
    ];
    right.fills = [{ type: "SOLID", color: { r: 0.52, g: 0.52, b: 0.52 } }];
    right.strokes = [];
    return right;
  }

  generateTopPlane() {
    const top: VectorNode = figma.createVector();
    const { x, y, l, w, h } = this;
    top.vectorPaths = [
      {
        windingRule: "EVENODD",
        data: `M ${x} ${y - h} L ${x - l} ${y - h - l * 0.5} L ${x -
          l +
          w} ${y - h - (l + w) * 0.5} L ${x + w} ${y - h - w * 0.5} Z`
      }
    ];
    top.fills = [{ type: "SOLID", color: { r: 0.63, g: 0.63, b: 0.63 } }];
    top.strokes = [];
    return top;
  }

  generatePlanes() {
    const left: VectorNode = this.generateLeftPlane();
    const right: VectorNode = this.generateRightPlane();
    const top: VectorNode = this.generateTopPlane();
    const nodes = [left, right, top];
    return nodes;
  }
}
