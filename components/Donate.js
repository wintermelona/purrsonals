import Link from "next/link";
import useScrollPosition from '@/hooks/useScrollPosition';
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React, { useState, useContext } from "react";
import {signIn, signOut, useSession} from 'next-auth/react';
import {  Input, Typography, Tabs, } from "@material-tailwind/react";
import {  CreditCardIcon, LockClosedIcon, } from "@heroicons/react/24/solid";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
}


const Donate = () => {
    const [type, setType] = useState("card");
    const [cardExpires, setCardExpires] = useState("");

    //CARD
    const [cardAmount, setCardAmount] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");

    //GCASH
    const [gcashAmount, setGcashAmount] = useState("");
    const [refNum, setRefNum] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gcashNum, setGcashNum] = useState("");

    const addDonation = async (e) => {
        e.preventDefault()
        let data;
        if(type === "card") {
            data = {
                type,
                cardAmount,
                email,
                cardNumber,
                cardName,
            }
        }

        if(type === "gcash") {
            data = {
                type,
                firstName,
                lastName,
                gcashAmount,
                refNum,
                gcashNum
            }
        }
        console.log('data, ', data)
        const result = await fetch(`/api/donations`, { method: "POST", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                data
            )
        })
        const res = await result.json()
        alert(res.message)
    // console.log(res)
}


  return (
    <>
    <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-aristotelica font-bold text-xl w-44 h-8 pt-2 rounded-full place-content-center"
      onClick={() => window.my_modal_3.showModal()}>Donate</button>
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box bg-white w-auto" >
        <button className="btn btn-sm btn-circle btn-ghost absolute text-[#4B4B4B] right-2 top-3">✕</button>
        <div className="signin p-5">
          <div className="text-center">
            <h1 className="font-bold text-[#4B4B4B] font-gilroy text-4xl">Donate</h1>
            <h2 className="font-gilroyLight text-[#4B4B4B] text-lg py-5">Lomre lorem lorem lorem</h2>
          </div>
          <Tabs value={type} className="overflow-hidden">
            <Tabs.Header className="relative z-0">
              <Tabs.Tab value="card" className="font-gilroyLight" onClick={() => setType("card")}>
                Card
              </Tabs.Tab>
              <Tabs.Tab value="gcash" className="font-gilroyLight" onClick={() => setType("gcash")}>
                GCash
              </Tabs.Tab>
            </Tabs.Header>
            <Tabs.Body
              className="!overflow-x-hidden !overflow-y-hidden"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}>


                {/* CARD */}
              <Tabs.Panel value="card" className="p-0">
                <div className="pt-2 flex flex-col gap-4">

                  <div className="pt-4">
                    <Input label="Amount" value={cardAmount} onChange={(e) => setCardAmount(e.target.value)} />
                  </div>

                  <div className="font-gilroyLight">
                    <label className="label">
                      <span className="label-text">Personal Details</span>
                    </label>
                    <Input type="email" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className="pb-4 font-gilroyLight">
                    <label className="label">
                      <span className="label-text">Card Details</span>
                    </label>

                    <Input
                      label="Card Number"
                      maxLength={19}
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                      icon={
                        <CreditCardIcon className="h-5 w-5 text-blue-gray-300" />
                      }
                    />
                    <div className="my-4 flex items-center gap-4 w-[416px]">
                    <Input label="Holder Name" value={cardName} onChange={(e) => setCardName(e.target.value)}/>
                      
                        
                    </div>
                  </div>
                  <Link href="/">
                    <button className="grid h-11 w-full bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white text-lg font-gilroy font-bold rounded-md place-content-center"
                    onClick={(e) => addDonation(e)}
                    >
                      Donate
                    </button>
                  </Link>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60">
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Donations are
                    secure and encrypted
                  </Typography>
                </div>
              </Tabs.Panel>

                {/* GCASH */}
              <Tabs.Panel value="gcash" className="p-0">
                <div className="pt-2 flex flex-col gap-4">
                  <div className="font-gilroyLight">
                    <label className="label">
                      <span className="label-text">GCash Details</span>
                    </label>
                    <h1 className="text-center">Dyne Andrei A. <br />
                      09064114130</h1>
                  </div>f

                  <div className="pt-4">
                    <Input label="Amount" value={gcashAmount} onChange={(e) => setGcashAmount(e.target.value)} />{}
                  </div>

                  <div className="pb-4 font-gilroyLight">
                    <label className="label">
                      <span className="label-text">Donation Details</span>
                    </label>

                    <Input
                      label="Reference Number"
                      maxLength={19}
                      value={formatCardNumber(refNum)}
                      onChange={(event) => setRefNum(event.target.value)}
                    />
                    <div className="my-4 flex items-center gap-4">
                      <Input
                        label="First Name"
                        containerClassName="min-w-[72px]"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <Input
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        containerClassName="min-w-[72px]"
                      />
                    </div>
                    <Input label="GCash Number" value={gcashNum} onChange={(e) => setGcashNum(e.target.value)} maxLength={11}/>
                  </div>
                  <Link href="/">
                    <button className="grid h-11 w-full bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white text-lg font-gilroy font-bold rounded-md place-content-center"
                    onClick={(e) => addDonation(e)}
                    >
                      Donate
                    </button>
                  </Link>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Donations are
                    secure and encrypted
                  </Typography>
                </div>
              </Tabs.Panel>
            </Tabs.Body>
          </Tabs>
        </div>
      </form>
    </dialog></>
  )
}

export default Donate