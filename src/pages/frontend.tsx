import { createRoot } from "react-dom/client";
import { Home } from "./home/Home";

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render(<Home />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
