import { useEffect, useState } from "react";
import useUserStore from "../../stores/userStore";
import BuyerDashboardService from "./service";
import { AddBuyerBalanceState, BuyerDetails, BuyerTransactionsState, BuyerWallet } from "./types";

const BuyerDashboard = () => {
    const userStore = useUserStore((state) => state);

    const [wallet, setWallet] = useState<BuyerWallet>();
    const [userId, setUserId] = useState(userStore.getUserDetails().id);
    const [userDetails, setUserDetails] = useState<BuyerDetails>({
        customerName: "",
        email: "",
        phone: "",
        bankDetails: "",
        createdAt: "",
    });
    const [transactions, setTransactions] = useState<BuyerTransactionsState[]>([]);
    const [balanceRequest, setBalanceRequest] = useState<AddBuyerBalanceState>({
        amount: 0,
        id: userId,
    });

    useEffect(() => {
        BuyerDashboardService.getBuyerTransactions(userId).then((res) => {
            setTransactions(res.data);
        }).catch((err) => {
            console.log(err);
        });

        BuyerDashboardService.getBuyerDetails(userId).then((res) => {
            setUserDetails(res.data);
        }).catch((err) => {
            console.log(err);
        });

        BuyerDashboardService.getBuyerWalletBalance(userId).then((res) => {
            setWallet(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const addBalance = () => {
        BuyerDashboardService.addBuyerBalance(balanceRequest).then((res) => {
            setWallet(res.data);
        });
    }

    const createWallet = () => {
        BuyerDashboardService.createBuyerWallet(userId).then((res) => {
            setWallet(res.data);
        });
    }

    const handleInputChange = (e: any) => {
        setBalanceRequest({
            ...balanceRequest,
            amount: parseInt(e.target.value)
        });
    }

    return (
        <div className="bg-gradient-to-b from-main-500 to-main-100">
            <div className="w-full py-40">
                <div className="container mx-auto">
                    <h1 className="font-domine text-center text-white font-semibold text-[22px]">-Buyer Dashboard-</h1>
                    <div className="flex flex-wrap">
                    <div className="w-[20%] bg-main-400 rounded-md flex justify-center flex-col items-center p-4 gap-[10px]">
                        <div className="w-[250px] h-[250px]">
                            <img src="./../avatar.jpg" alt="avatar" className="rounded-[50%] w-full h-full object-cover border-main-300 border-4" />
                        </div>
                        <div className="text-white font-semibold bg-main-300 rounded-md w-full p-2">
                            <h2 className="my-[2px]">Name: {userDetails.customerName}</h2>
                            <h2 className="my-[2px]">Email: {userDetails.email}</h2>
                            <h2 className="my-[2px]">Phone: {userDetails.phone}</h2>
                            <h2 className="my-[2px]">Bank Details: {userDetails.bankDetails}</h2>
                            <h2 className="my-[2px]">Created: {userDetails.createdAt.substring(0,10)}</h2>
                        </div>
                    </div>
                    <div className="w-[80%] flex flex-col items-start p-4 gap-[30px]">
                        <div className="flex gap-[10px]">
                            {wallet ? (
                                <>
                                    <div className="bg-main-400 p-2 rounded-md font-semibold text-white">
                                        <h2>Total Balance: {wallet.balance}TL</h2>
                                    </div>
                                    <button onClick={addBalance} className="flex items-center gap-[3px] bg-main-300 text-white p-2 font-semibold rounded-md font-domine">
                                        <span className="material-icons">add_circle</span>
                                        <span>Add Balance</span>
                                    </button>
                                    <div className="flex items-center gap-[5px]">
                                        <label className="text-white">Amount:</label>
                                        <input type="number" onChange={handleInputChange} className="border-2 border-main-300 w-[20%] outline-none text-[20px]" />
                                    </div>
                                </>
                            ):(
                                <button onClick={createWallet} className="flex items-center gap-[3px] bg-main-300 text-white p-2 font-semibold rounded-md font-domine">
                                    <span className="material-icons">add_circle</span>
                                    <span>Create Wallet</span>
                                </button>
                            )}
                        </div>
                        <div className="bg-main-400 p-2 w-full rounded-md">
                            <h2 className="text-white font-semibold text-[22px]">Recent Transactions</h2>
                            <div className="bg-main-300 p-2 rounded-md font-semibold text-white">
                                <table className="w-full">
                                    <tr>
                                        <th className="bg-main-600 border-2 border-main-500">Transaction ID</th>
                                        <th className="bg-main-600 border-2 border-main-500">Amount</th>
                                        <th className="bg-main-600 border-2 border-main-500">Date</th>
                                        <th className="bg-main-600 border-2 border-main-500">Status</th>
                                        <th className="bg-main-600 border-2 border-main-500">Seller Id</th>
                                        <th className="bg-main-600 border-2 border-main-500">Item Id</th>
                                    </tr>
                                    {transactions.map((transaction) => (
                                        <tr>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.id}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.amount}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.createdAt}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.status}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.sellerId}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.purchasedItemId}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerDashboard;