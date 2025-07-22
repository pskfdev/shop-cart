import React from "react";
import type { Route } from "./+types/UserEdit";

type Props = {};

function UserEdit({ params }: Route.LoaderArgs) {
  return <div>UserEdit{params.userId}</div>;
}

export default UserEdit;
