import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { SearchCheck } from "lucide-react";

type Props = {};

function InputSearch({}: Props) {
  return (
    <div className="relative">
      <Input type="search" placeholder="Search Product" className="rounded-full" />

      <Button variant="secondary" size="icon" className="size-8 absolute top-0.5 right-1 rounded-full">
        <SearchCheck />
      </Button>
    </div>
  );
}

export default InputSearch;
