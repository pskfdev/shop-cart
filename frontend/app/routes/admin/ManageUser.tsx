import React from "react";
//Components
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router";

type Props = {};

function ManageUser({}: Props) {
  return (
    <main className="h-screen flex flex-col mt-5 space-y-10 px-10">
      <h2>Manage product</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Pongsakan</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>22/07/25</TableCell>
            <TableCell className="flex gap-2 justify-end">
              <Link to="/admin/manage-user/1">
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

export default ManageUser;
