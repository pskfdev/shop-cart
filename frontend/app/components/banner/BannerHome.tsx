import { Button } from "../ui/button";

function BannerHome() {
  return (
    <div className="h-[590px] flex items-center bg-blue-200">
      <div className="w-1/2 ml-30 space-y-5">
        <h1>Shopping And</h1>
        <h1>Department Store.</h1>
        <div>
          <h4>Shopping is a bit of a relaxing hobby for me, which</h4>
          <h4>is sometimes troubling for the bank balance.</h4>
        </div>
        <Button className="w-44 rounded-full py-8">Learn More</Button>
      </div>
    </div>
  );
}

export default BannerHome;
