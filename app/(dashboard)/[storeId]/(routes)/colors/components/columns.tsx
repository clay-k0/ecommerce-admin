"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { toast } from "react-hot-toast";

export type ColorColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

const onCopy = (id: string) => {
  navigator.clipboard.writeText(id);
  toast.success(`${id} copied to the clipboard.`);
};

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className='flex items-center gap-x-2'>
        {row.original.value}
        <a
          className='border p-3 rounded-full cursor-pointer'
          onClick={() => onCopy(row.original.value)}
          style={{ backgroundColor: row.original.value }}
        />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
