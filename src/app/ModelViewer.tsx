"use client";

import { useEffect, useState } from "react";

// Define types for <model-viewer> props
interface ModelViewerProps extends React.ComponentPropsWithoutRef<"model-viewer"> {}

export default function ModelViewer(props: ModelViewerProps) {
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
