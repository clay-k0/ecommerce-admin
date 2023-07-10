"use client";

import { Heading } from "@/components/ui/heading";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description={`Manage your ${data.length > 0 ? `${data.length}` : ""} ${
          data.length === 1 ? "order" : "orders"
        }`}
      />
      <DataTable searchKey='products' columns={columns} data={data} />
    </>
  );
};
