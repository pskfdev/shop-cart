import { Link } from "react-router";
import type { Route } from "../+types/root";
//Components
import { Button } from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }];
}

function about() {
  return (
    <div>
      <h1>About</h1>
      
      <Button asChild className="bg-orange-500 hover:bg-orange-300">
        <Link to="/">Home page</Link>
      </Button>
    </div>
  );
}

export default about;
