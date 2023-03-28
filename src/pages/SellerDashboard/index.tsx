import { useEffect, useState } from "react";
import useUserStore from "../../stores/userStore";
import SellerDashboardService from "./services";
import { SellerDetails, SellerTransactions } from "./types";

const SellerDashboard = () => {
    const userStore = useUserStore((state) => state);
    const [userId, setUserId] = useState(userStore.getUserDetails().id);
    const [userDetails, setUserDetails] = useState<SellerDetails>({
        sellerName: "",
        email: "",
        phone: "",
        taxId: "",
        bankDetails: "",
        createdAt: "",
        accountNumber: "",
    });
    const [transactions, setTransactions] = useState<SellerTransactions[]>([]);
    const [qrCode, setQrCode] = useState("");

    useEffect(() => {
        SellerDashboardService.getSellerTransactions(userId).then((res) => {
            setTransactions(res.data);
        });

        SellerDashboardService.getSellerDetails(userId).then((res) => {
            setUserDetails(res.data);
        });
    }, []);

    const generateQrCodeAndShow = () => {
        SellerDashboardService.generateQrCode(userId).then((res) => {
            const blob = new Blob([res.data], { type: 'image/png' });

            // Blob'dan URL oluşturuluyor.
            const url = URL.createObjectURL(blob);

            setQrCode(url);
        });
    };

    return (
        <div className="bg-gradient-to-b from-main-500 to-main-100">
            <div className="w-full py-40">
                <div className="container mx-auto">
                    <h1 className="font-domine text-center text-white font-semibold text-[22px]">-Seller Dashboard-</h1>
                    <div className="flex flex-wrap">
                    <div className="w-[20%] bg-main-400 rounded-md flex justify-center flex-col items-center p-4 gap-[10px]">
                        <div className="w-[250px] h-[250px]">
                            <img src="./../avatar.jpg" alt="avatar" className="rounded-[50%] w-full h-full object-cover border-main-300 border-4" />
                        </div>
                        <div className="text-white font-semibold bg-main-300 rounded-md w-full p-2">
                            <h2 className="my-[2px]">Name: {userDetails.sellerName}</h2>
                            <h2 className="my-[2px]">Email: {userDetails.email}</h2>
                            <h2 className="my-[2px]">Phone: {userDetails.phone}</h2>
                            <h2 className="my-[2px]">Tax ID: {userDetails.taxId}</h2>
                            <h2 className="my-[2px]">Account Number: {userDetails.accountNumber}</h2>
                            <h2 className="my-[2px]">Bank Details: {userDetails.bankDetails}</h2>
                            <h2 className="my-[2px]">Created: {userDetails.createdAt.substring(0,10)}</h2>
                        </div>
                    </div>
                    <div className="w-[80%] flex flex-col items-start p-4 gap-[30px]">
                        <div className="flex gap-[10px]">
                            <button onClick={generateQrCodeAndShow} className="h-fit flex items-center gap-[3px] bg-main-300 text-white p-2 font-semibold rounded-md font-domine">
                                <span className="material-icons">qr_code_2</span>
                                <span>Generate QR Code</span>
                            </button>
                            {qrCode && <img src={qrCode} alt="qr code" className="w-[250px] h-[250px]" />}
                        </div>
                        <div className="bg-main-400 p-2 w-full rounded-md">
                            <h2 className="text-white font-semibold text-[22px]">Recent Transactions</h2>
                            <div className="bg-main-300 p-2 rounded-md font-semibold text-white">
                                <table className="w-full">
                                    <tr>
                                        <th className="bg-main-600 border-2 border-main-500">Transaction ID</th>
                                        <th className="bg-main-600 border-2 border-main-500">Amount</th>
                                        <th className="bg-main-600 border-2 border-main-500">Buyer ID</th>
                                        <th className="bg-main-600 border-2 border-main-500">Date</th>
                                        <th className="bg-main-600 border-2 border-main-500">Item Id</th>
                                    </tr>
                                    {transactions.map((transaction) => (
                                        <tr>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.id}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.amount}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.buyerId}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.createdAt}</td>
                                            <td className="bg-main-400 border-2 border-main-500">{transaction.purchaseItemId}</td>
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

export default SellerDashboard;