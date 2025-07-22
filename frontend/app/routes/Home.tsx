import { Link } from "react-router";
import type { Route } from "../+types/root";
//Components
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Button asChild className="bg-orange-500 hover:bg-orange-300">
        <Link to="/about">About page</Link>
      </Button>
    </div>
  );
}

export default Home;
