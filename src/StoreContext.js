import { createContext } from "react";

export const store = createContext({
  selectedLayer: 'layerId',
  layers = [
    {
      name: "layer 0",
      x: 0,
      y: 0,
      w: 100,
      h: 100,
      files: ['file1'],
      id: 'layer-id'
    }
  ]
})