"use client";
import "@google/model-viewer";

export default function TerhalSuitcase() {
  return (
    <model-viewer
      src="./suitcase1.glb"
      alt="3D Suitcase"
      auto-rotate
      camera-controls
      style={{ width: "100%", height: "500px" }}
    ></model-viewer>
  );
}




// export default TerhalSuitcase;
