import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./button";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

// Mocking the deleteTransaction function for the sake of this example
async function deleteTransaction(id: string) {
  await deleteDoc(doc(db, "transaction", id)); // Use the id parameter here
  console.log(`delete ${id}`);
}

export type Transaction = {
  id: string; // Added an id property to Transaction type
  title: string;
  description: string;
  amount: string;
  transactionType: string;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "transactionType",
    header: "Income/Expense",
  },
  {
    id: "action",
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <Button
          className="bg-red-600 text-white hover:bg-red-600/85"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          Delete
        </Button>
      );
    },
  },
];
