import { useEffect, useState } from "react";

const AdminDonation = ({ ...donation }) => {
  // console.log("DATA", donation)

  return (
    <>
      <div className="collapse collapse-arrow bg-white border-[#efeeee] border-2 w-full">
        <input type="checkbox" />
        <div className="collapse-title text-md flex justify-between">
          <div>
            Donation ID: {donation.id}
          </div>
          <div className={`badge w-16 ${donation.type === "card" ? "bg-[#003087]" : "bg-[#017cfe]"} border-0 text-white capitalize`}>
            {donation.type}
          </div>
        </div>
        <div className="collapse-content">
          {donation.type === "card" ? (
            <div>
              <h1>Holder Name: {donation.name}</h1>
              <h1>Email Address: {donation.email}</h1>
              <h1>Amount: {donation.amount}</h1>
              <h1>Card Number: {donation.cardNumber}</h1>
            </div>
          ) : (
            <div>
              <h1>Gcash Holder Name: {donation.name}</h1>
              <h1>Amount:{donation.amount}</h1>
              <h1>Reference Number:{donation.referenceNumber}</h1>
              <h1>Gcash Number:{donation.gCashNumber}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDonation;
