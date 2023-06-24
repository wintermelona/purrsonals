import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>
            <Navbar />
            <div className="hero h-screen relative" style={{ backgroundImage: 'url(/h3.png)' }}>
                <div className="text-center absolute inset-x-0 top-16">
                    <h1 className="xl:text-7xl lg:text-6xl font-gilroy font-bold mb-6">
                        About <span className="text-[#C5996C]">Us</span>
                    </h1>
                    <p className="xl:text-2xl lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Phasellus congue iaculis suscipit. Nulla facilisi.</p>
                </div>
            </div>

            {/* MISSION?? VISION?? */}
            < div className="hero h-[70vh]" >
                <div className="hero-content flex-col lg:flex-row w-[71rem] h-[29rem] my-12">
                    <img src="/c1.png" className="max-w-sm rounded-3xl shadow-2xl" />
                    <div className="ml-20">
                        <h3 className="text-xl font-thin text-[#a3a3a1] pb-5">WHAT'S OUR DRIVE?</h3>
                        <h1 className="text-5xl font-bold">Inspiration by
                            <span className="text-[#C5996C]"> love:</span> <br />
                            <span className="text-[#C5996C]">Transform</span> stay cats lives</h1>
                        <p className="py-6 text-xl">Our inspiration comes from the countless stray cats who are seeking love, care,
                            and a place to call home. These resilient feline friends have endured hardships, yet they continue to exhibit
                            unwavering affection and loyalty. It is their indomitable spirit that fuels our passion for connecting them
                            with compassionate individuals like you.</p>
                    </div>
                </div>
            </div >

            {/* CATS W ADOPTER */}
            <div className="hero-[60vh] mb-18">
                <div className="content rounded-3xl w-[71rem] h-[29rem] mx-auto flex flex-col justify-center items-center my-10">
                    <h1 className="text-5xl font-bold text-center">
                        Adopting is not only a <span className="text-[#C5996C]">life-changing</span> decision, <br />
                        but also a  <span className="text-[#C5996C]">deeply rewarding</span> experience.
                    </h1>
                    <div className="flex justify-center items-center pt-10 space-x-20">
                        <div className="card w-80 shadow-xl">
                            <figure>
                                <img src="/c2.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            </div>
                        </div>

                        <div className="card w-80 shadow-xl">
                            <figure>
                                <img src="/c2.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="card w-80 shadow-xl">
                            <figure>
                                <img src="/c2.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* WHY */}
            <div className="hero h-[100vh]">
                <div className="hero-content bg-[#f0f7ed] rounded-3xl w-[75rem] h-[38rem] flex justify-between m-20 p-20">
                    <div className="m-50">
                        <h3 className="text-xl font-thin text-[#a3a3a1] pb-5">WHY US?</h3>
                        <h1 className="text-5xl font-bold">Find your <span className="text-[#C5996C]">match</span> here <br />
                            at Purrsonals</h1>
                        <p className="py-6 text-xl text-[#78818a]">We've created a user-friendly platform that makes <br />
                            it easy for potential adopters to browse through <br />
                            profiles of cats in need and find their perfect match. <br />
                            Our dedicated team works tirelessly to ensure that <br />
                            all cats listed on our site are well-cared for, <br />
                            and ready to embark on their new journey.</p>
                    </div>
                    <div className="flex h-[30rem] space-x-20">
                        <div className="flex flex-col space-y-10 pt-28">
                            <div className="grid w-44 h-44 card bg-white rounded-box place-items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>content</div>
                            <div className="grid w-44 h-44 card bg-white rounded-box place-items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>content</div>
                        </div>
                        <div className="flex flex-col space-y-10">
                            <div className="grid w-44 h-44 card bg-white rounded-box place-items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>content</div>
                            <div className="grid w-44 h-44 card bg-white rounded-box place-items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>content</div>
                        </div>
                    </div>
                </div>
            </div >

            {/*STEPS*/}
            <div className="hero h-[70vh] mb-14">
                <div className="content flex flex-col justify-center items-center">
                    <h3 className="text-xl text-[#a3a3a1] text-center pb-5">HOW DO WE DO IT?</h3>
                    <h1 className="text-5xl font-bold text-center">
                        The Journey to <span className="text-[#C5996C]">Forever</span> Homes.
                    </h1>
                    <div className="flex w-[75rem] h-64 pt-10 space-x-16 justify-center items-center">
                        <div className="flex flex-col w-40 border-opacity-50 space-y-5">
                            <div className="grid w-20 h-20 bg-[#FEF3E4] text-[#C5996C] text-2xl font-bold rounded-full place-items-center">01</div>
                            <div className="grid h-20">
                                <h1 className="text-xl font-bold pb-2">Title 01</h1>
                                <p className="text-md w-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-40 border-opacity-50 space-y-5">
                            <div className="grid w-20 h-20 bg-[#FEF3E4] text-[#C5996C] text-2xl font-bold rounded-full place-items-center">02</div>
                            <div className="grid h-20">
                                <h1 className="text-xl font-bold pb-2">Title 02</h1>
                                <p className="text-md w-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-40 border-opacity-50 space-y-5">
                            <div className="grid w-20 h-20 bg-[#FEF3E4] text-[#C5996C] text-2xl font-bold rounded-full place-items-center">03</div>
                            <div className="grid h-20">
                                <h1 className="text-xl font-bold pb-2">Title 03</h1>
                                <p className="text-md w-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-40 border-opacity-50 space-y-5">
                            <div className="grid w-20 h-20 bg-[#FEF3E4] text-[#C5996C] text-2xl font-bold rounded-full place-items-center">04</div>
                            <div className="grid h-20">
                                <h1 className="text-xl font-bold pb-2">Title 04</h1>
                                <p className="text-md w-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-40 border-opacity-50 space-y-5">
                            <div className="grid w-20 h-20 bg-[#FEF3E4] text-[#C5996C] text-2xl font-bold rounded-full place-items-center">05</div>
                            <div className="grid h-20">
                                <h1 className="text-xl font-bold pb-2">Title 05</h1>
                                <p className="text-md w-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NOTE */}
            < div className="hero h-[70vh] mb-32" >
                <div className="hero-content flex-col lg:flex-row w-[71rem] h-[29rem] my-12">
                    <img src="/c1.png" className="max-w-sm rounded-3xl shadow-2xl" />
                    <div className="ml-20">
                        <h3 className="text-xl font-thin text-[#a3a3a1] pb-5">NOTE FROM US</h3>
                        <h1 className="text-5xl font-bold">Make a
                            <span className="text-[#C5996C]"> difference,</span> one<br />
                            <span className="text-[#C5996C]">person</span> at a time.</h1>
                        <p className="py-6 text-xl">You're not only saving a life but also becoming part
                            of a network of individuals who share a deep appreciation for these beautiful creatures. We encourage our adopters
                            to share their stories, experiences, and photos on our platform, fostering a sense of community and inspiring others to
                            open their hearts to stray cats <br/> in need.</p>
                    </div>
                </div>
            </div >

            <Footer />
        </>
    );
}