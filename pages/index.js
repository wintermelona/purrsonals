import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Index() {
  const [counts, setCounts] = useState({})
  useEffect(() => {
    getCounts()

  }, [])


  async function getCounts() {
    const result = await fetch('/api/counter').then((res) => res.json()).catch((error) => alert(error))
    // console.log(await result)
    setCounts(result)
  }

  return (
    <>
      <Head>
        <title>Purrsonals</title>
        <link rel="icon" href="/small-logo.png" />
      </Head>

      <Navbar />

      {/* HEADER */}
      <div className="hero min-h-screen flex relative" style={{ backgroundImage: 'url(/bg1.png)' }}>
        <div className="header flex-1">
          <div className="header-content">
            <div className="content-left pl-28 pb-60">
              <h1 className="text-6xl font-gilroy">
                Every cat deserves <br />
                a <span className="text-[#C5996C]">loving home.</span>
              </h1>
              <h2 className="py-6 text-2xl">
                We inspire and empower communities to make a <br />
                difference in the lives of stray cats. Find your new <br />best friend and give a cat a loving home.
              </h2>
              <div className="buttons space-x-6 text-xl">
                <Link href="/adopt">
                  <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-gilroy px-12 py-3 rounded-full">
                    Adopt Now
                  </button>
                </Link>
                <Link href="/purrmate">
                  <button className="bg-transparent ease-in duration-150 hover:bg-[#9A7856] text-[#C5996C] hover:text-white font-gilroy border border-[#C5996C] px-12 py-3 rounded-full">
                    Find my Purrmate
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="img flex-1 absolute top-16 right-[8rem] z-10">
          <img src="/h2.png" style={{ width: '48vw', objectFit: 'cover' }} />
        </div>

        {/* HEADER CARDS */}
        <div className="card absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0 z-0">
          <div className="flex justify-center items-center space-x-10 text-center">
            <div className="c1 w-56 h-44 p-6 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.08)' }}>
              <h1 className="mb-2 text-[#C5996C] text-7xl font-gilroy">{counts.catsTotal}</h1>
              <p className="text-2xl">Cats</p>
            </div>
            <div className="c2 w-56 h-44 p-6 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.08)' }}>
              <h5 className="mb-2 text-[#C5996C] text-7xl font-gilroy tracking-tight">{counts.applicationsDone}</h5>
              <p className="text-2xl">Adopted</p>
            </div>
            <div className="c3 w-56 h-44 p-6 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.08)' }}>
              <h5 className="mb-2 text-[#C5996C] text-7xl font-gilroy tracking-tight">{counts.applicationsOngoing}</h5>
              <p className="text-2xl">Ongoing</p>
            </div>
            <div className="c4 w-56 h-44 p-6 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.08)' }}>
              <h5 className="mb-2 text-[#C5996C] text-7xl font-gilroy tracking-tight">{counts.donationsTotal}</h5>
              <p className="text-2xl">Donations</p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row w-[71rem] h-[29rem] mt-40 mb-32">
          <img src="/c1.png" className="max-w-sm rounded-3xl shadow-2xl" />
          <div className="ml-20">
            <h3 className="text-xl font-thin text-[#a3a3a1] pb-5">WHO ARE WE?</h3>
            <h1 className="text-5xl font-gilroy">At Purrsonals, we connect <br />
              <span className="text-[#C5996C]">hearts</span> and save
              <span className="text-[#C5996C]"> lives.</span></h1>
            <p className="py-6 text-2xl">Our mission is to connect these adorable feline friends with compassionate individuals and families who are looking to <br />
              open their hearts and homes to a new furry family member.</p>
            <Link href="/about">
              <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy px-10 py-2 rounded-full">
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CATS 1450*/}
      <div className="hero-min-[70vh]">
        <div className="content bg-[#f0f7ed] rounded-3xl w-[78rem] mx-auto flex flex-col justify-center items-center py-10">
          <h3 className="text-xl font-thin text-[#a3a3a1] text-center pb-5">MEET THE CATS</h3>
          <h1 className="text-5xl font-gilroy text-center">
            Cats waiting for their <span className="text-[#C5996C]">forever</span> <br />
            homes.
          </h1>
          <div className="flex justify-center items-center pt-10 space-x-10">
            <div className="card w-80 shadow-xl bg-white">
              <figure>
                <img className="w-[25rem] h-44 object-none" src="/4.png" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Hiro</h2>
                <p>Hiro is a rescue kitten. Sweet and playful!</p>
                <div className="flex space-x-2">
                  <div className="badge text-[#C5996C] bg-[#FEF3E4] border-none w-40">9 months</div>
                  <div className="badge text-[#86A355] bg-[#E1F7F1] border-none w-40">1.8 kg</div>
                </div>
              </div>
            </div>

            <div className="card w-80 shadow-xl bg-white">
              <figure>
                <img className="w-[25rem] h-44 object-none" src="/6.png" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Bummy</h2>
                <p>Bummy is a really affectionate and curious cat.</p>
                <div className="flex space-x-2">
                  <div className="badge text-[#C5996C] bg-[#FEF3E4] border-none w-40">7 months</div>
                  <div className="badge text-[#86A355] bg-[#E1F7F1] border-none w-40">1.9 kg</div>
                </div>
              </div>
            </div>

            <div className="card w-80 shadow-xl bg-white">
              <figure>
                <img className="w-[25rem] h-44 object-none" src="/2.png" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kurmo</h2>
                <p>Kurmo is an playful and fun-loving companion to have around.</p>
                <div className="flex space-x-2">
                  <div className="badge text-[#C5996C] bg-[#FEF3E4] border-none w-40">1 year</div>
                  <div className="badge text-[#86A355] bg-[#E1F7F1] border-none w-40">2.3 kg</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <Link href="/cats">
              <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy px-10 py-2 rounded-full">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* PURRMATE */}
      <div className="hero min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row w-[1140px] h-[462px] mt-12">
          <div className="mr-20">
            <h3 className="text-xl font-thin text-[#a3a3a1] pb-5">CAN'T CHOOSE?</h3>
            <h1 className="text-5xl font-gilroy">We can recommend one <br />
              just for <span className="text-[#C5996C]">you!</span></h1>
            <p className="py-6 text-2xl text-[#78818a]">Try Purrmate, a recommender feature where we suggest a cat that fits your preferences, lifestyle, and compatability factors.</p>
            <Link href="/purrmate">
              <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy px-10 py-2 rounded-full">
                Purrmate
              </button>
            </Link>
          </div>
          <img src="/c1.png" className="max-w-sm rounded-3xl shadow-2xl" />
        </div>
      </div>

      {/* ADOPT */}
      <div className="hero-min-[85vh] ">
        <div className="content bg-[#f0f7ed] rounded-3xl w-[78rem] mx-auto flex flex-col justify-center items-center py-10">
          <h3 className="text-xl font-thin text-[#a3a3a1] text-center pb-5">READY TO ADOPT?</h3>
          <h1 className="text-5xl font-gilroy text-center">
            Just follow our <span className="text-[#C5996C]">steps</span> and<br />
            get <span className="text-[#C5996C]">ready</span> to meet your <span className="text-[#C5996C]">new friend</span>
          </h1>
          <div className="flex justify-center items-center pt-10">
            <div className="flex w-full space-x-16">
              <div className="flex flex-col w-full justify-center">
                <div className="flex items-center">
                  <div className="grid w-10 h-10 card bg-[#C5996C] text-white rounded-full mr-4 place-items-center">
                    <h1 className="font-gilroy text-2xl">1</h1>
                  </div>
                  <div className="flex w-60 h-28 card my-4">
                    <h1 className="font-gilroy text-xl">Step 1</h1>
                    <p className="text-lg text-[#78818a]">Visit our cats tab and choose a pet that you want to adopt</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="grid w-10 h-10 card bg-[#C5996C] text-white rounded-full mr-4 place-items-center">
                    <h1 className="font-gilroy text-2xl">2</h1>
                  </div>
                  <div className="flex w-60 h-28 card my-4">
                    <h1 className="font-gilroy text-xl">Step 2</h1>
                    <p className="text-lg text-[#78818a]">Press the "adopt" button on the cat or go to our adopt tab</p>
                  </div>
                </div>
              </div>

              <img src="/c1.png" className="max-w-sm rounded-3xl shadow-2xl w-72 h-80" />

              <div className="flex flex-col w-full justify-center">
                <div className="flex items-center">
                  <div className="grid w-10 h-10 card bg-[#C5996C] text-white rounded-full mr-4 place-items-center">
                    <h1 className="font-gilroy text-2xl">3</h1>
                  </div>
                  <div className="flex w-60 h-28 card my-4">
                    <h1 className="font-gilroy text-xl">Step 3</h1>
                    <p className="text-lg text-[#78818a]">Fill up the form. Complete it everything and click submit!</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="grid w-10 h-10 card bg-[#C5996C] text-white rounded-full mr-4 place-items-center">
                    <h1 className="font-gilroy text-2xl">4</h1>
                  </div>
                  <div className="flex w-60 h-28 card my-4">
                    <h1 className="font-gilroy text-xl">Step 4</h1>
                    <p className="text-lg text-[#78818a]">Track your application by going to the track status page</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <Link href="/adopt">
              <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy px-10 py-2 rounded-full">
                Adopt Now
              </button>
            </Link>
          </div>
        </div>
      </div >

      {/*FAQs*/}
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row w-[1140px] h-[462px] mt-12">
          <div>
            <div className="collapse collapse-plus my-5 custom-collapse" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)', width: '427px' }}>
              <input type="checkbox" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                FAQ 1
              </div>
              <div className="collapse-content">
                <p className="font-gilroy">Can I adopt more than 1 cat?</p>
                <p className="font-gilroyLight">Absolutely! Just submit a separate application.</p>
              </div>
            </div>


            <div className="collapse collapse-plus my-5" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>
              <input type="checkbox" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                FAQ 2
              </div>
              <div className="collapse-content">
                <p className="font-gilroy">What is my next step after submitting?</p>
                <p className="font-gilroyLight">You will just have to wait as we will examine your answers thoroughly. You can check the status of your application through the track status page.</p>
              </div>
            </div>

            <div className="collapse collapse-plus my-5" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>
              <input type="checkbox" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                FAQ 3
              </div>
              <div className="collapse-content">
                <p className="font-gilroy">I can't choose which one to adopt. What should I do?</p>
                <p className="font-gilroyLight">If you can't decide which cat to adopt, head to our Purrmate page where we will suggest a suitable cat for you based on your answers..</p>
              </div>
            </div>

            <div className="collapse collapse-plus my-5" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>
              <input type="checkbox" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                FAQ 4
              </div>
              <div className="collapse-content">
              <p className="font-gilroy">Can I donate?</p>
                <p className="font-gilroyLight">Yes! On your top left screen, you can see the donate button. You can donate using card or gcash.</p>
              </div>
            </div>
          </div>

          <div className="ml-20">
            <h3 className="text-xl font-thin text-[#a3a3a1] pb-5">FAQ</h3>
            <h1 className="text-5xl font-gilroy">Do you have any <br />
              <span className="text-[#C5996C]">questions?</span> We'll try <br />
              to<span className="text-[#C5996C]"> answer</span> them.</h1>
            <p className="py-6 text-2xl text-[#78818a]">Welcome to our FAQ section, where we address the most common questions and concerns our valued visitors and adoptees have.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
