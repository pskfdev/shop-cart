import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Basic route
  /* index("routes/Home.tsx"),
  route("about", "routes/About.tsx"), */

  // parent route
  route("/", "./layouts/MainLayout.tsx", [
    // child routes
    index("./routes/Home.tsx"),
    route("about", "./routes/About.tsx"),
  ]),
] satisfies RouteConfig;
