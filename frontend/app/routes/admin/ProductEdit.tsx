import React from "react";
import type { Route } from "./+types/ProductEdit";

type Props = {};

function ProductEdit({ params }: Route.LoaderArgs) {
  return <div>ProductEdit{params.productId}</div>;
}

export default ProductEdit;
