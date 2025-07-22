import React from "react";
//Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router";

type Props = {};

function ManageProduct({}: Props) {
  return (
    <main className="h-screen flex flex-col mt-5 space-y-10 px-10">
      <h2>Manage product</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Apple</TableCell>
            <TableCell>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio.
            </TableCell>
            <TableCell>220.00</TableCell>
            <TableCell className="flex gap-2 justify-end">
              <Link to="/admin/manage-product/2">
                <SquarePen className="text-orange-300" />
              </Link>
              <Trash2 className="text-red-500" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}

export default ManageProduct;
