import TransactionForm from "../components/molecules/TransactionForm";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { signOut } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { DataTable } from "../components/ui/transactionDataTable";
import { columns } from "../components/ui/transactionColumn";
import { useStore } from "../store";

interface Transaction {
  id: string;
  title: string;
  description?: string;
  amount: string;
  transactionType: string;
  uid: string;
}

const Home = () => {
  const navigate = useNavigate();
  const { loggedIn, logOut } = useStore();
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const signout = async () => {
    logOut();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Error signing out: ", err);
    }
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }

    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const querySnapshot = await getDocs(collection(db, "transaction"));
        const list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Transaction[];
        setTransactionList(list);
      } catch (err) {
        setError("Failed to fetch transactions");
        console.error("Error fetching transactions: ", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [loggedIn, navigate]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <Button onClick={signout} className="bg-red-500 hover:bg-red-700 text-white">
          Sign out
        </Button>
      </div>

      <Dialog>
        <DialogTrigger>
          <Button className="mb-4 bg-green-500 hover:bg-green-700 text-white">New Transaction</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogDescription>
              Manage your finances, keep updating your transactions
            </DialogDescription>
          </DialogHeader>
          <TransactionForm />
        </DialogContent>
      </Dialog>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : transactionList.length === 0 ? (
        <div className="text-center">No transactions found</div>
      ) : (
        <DataTable columns={columns} data={transactionList} />
      )}
    </div>
  );
};

export default Home;
