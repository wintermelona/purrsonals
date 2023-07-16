import { Select, Option } from "@material-tailwind/react";

const AdminDonation = () => {
    return <div className="collapse collapse-arrow bg-white border-[#efeeee] border-2 w-full">
        <input type="checkbox" />
        <div className="collapse-title text-md">
            Donation ID
            <div className="badge bg-[#9cbf62] border-0 text-white ml-2">Card/GCash</div>
        </div>
        <div className="collapse-content">
            <h1>Amount:</h1>
            <h1>Email Address:</h1>
            <h1>Card Number:</h1>
            <h1>Expires:</h1>
            <h1>CVC:</h1>
            <h1>Holder Name:</h1>
        </div>
    </div>
};
export default AdminDonation