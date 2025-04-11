import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { router } from "./route";

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render(<RouterProvider router={router} />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
