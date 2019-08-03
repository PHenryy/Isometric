import Isometric from "./Isometric";

const x: number = 100;
const y: number = 100;
const z: number = 100;

figma.showUI(__html__, { width: 800 });

figma.ui.onmessage = msg => {
  if (msg.type === "create-rectangles") {
    const isometric = new Isometric(0, 0, 100, 100, 100);
    const nodes = isometric.generatePlanes();
    figma.group(nodes, figma.currentPage);
    figma.currentPage.selection = nodes;

    // figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
