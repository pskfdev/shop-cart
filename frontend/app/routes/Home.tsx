import { Link } from "react-router";
import type { Route } from "../+types/root";
//Components
import BannerHome from "@/components/banner/BannerHome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shopcart - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function Home() {
  return (
    <>
      <BannerHome />
    </>
  );
}

export default Home;
