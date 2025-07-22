import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Basic route
  /* index("routes/Home.tsx"),
  route("about", "routes/About.tsx"), */

  // parent route client
  route("/", "./layouts/MainLayout.tsx", [
    // child routes
    index("./routes/Home.tsx"),
    route("about", "./routes/About.tsx"),
    route("products", "./routes/Product.tsx"),
    route("contact", "./routes/Contact.tsx"),
  ]),

  // parent route admin
  route("/admin", "./layouts/AdminLayout.tsx", [
    // child routes
    index("./routes/admin/AdminHome.tsx"),
    route("manage-product", "./routes/admin/ManageProduct.tsx"),
    route("manage-product/:productId", "./routes/admin/ProductEdit.tsx"),
    route("manage-user", "./routes/admin/ManageUser.tsx"),
    route("manage-user/:userId", "./routes/admin/UserEdit.tsx"),
  ]),
] satisfies RouteConfig;
