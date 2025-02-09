"use client";

import { useEffect, useState } from "react";

// Load the `model-viewer` module only in the browser
export default function ModelViewer(props: any) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    import("@google/model-viewer"); // Ensure it's loaded only on the client
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents hydration mismatch

  return (
    <model-viewer
      {...props}
      style={{ width: "400px", height: "500px" }}
    ></model-viewer>
  );
}
