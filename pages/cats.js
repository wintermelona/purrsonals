import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cats() {
    return (
        <>
            <Head>
                <title>Cats</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>
            <Navbar />

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/h4.png)' }}>
                <div class="relative w-full h-[70%]">
                    <div class="absolute top-0 right-0 h-96 w-[48%]">
                        <div class="w-2/3">
                            <h1 className="xl:text-7xl lg:text-6xl font-gilroy font-bold">
                                <span className="text-[#C5996C]">Meet</span> the Cats
                            </h1>
                            <h2 className="py-6 xl:text-2xl lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue iaculis suscipit. Nulla facilisi.
                            </h2>
                        </div>
                        <div className="flex text-center space-x-12">
                            <div className="c1 w-32 h-32 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.08)' }}>
                                <h1 className="mb-2 text-[#C5996C] text-5xl font-bold">XX</h1>
                                <p className="text-xl">Male</p>
                            </div>
                            <div className="c2 w-32 h-32 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.08)' }}>
                                <h5 className="mb-2 text-[#C5996C] text-5xl font-bold tracking-tight">XX</h5>
                                <p className="text-xl">Female</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*1st*/}
            <div className="hero h-[70vh] mt-16">
                <div className="h-5/6 items-center space-y-16">
                    <div className="flex justify-center items-center space-x-16 h-[27rem]">

                        {/*CAT 1*/}
                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*CAT 2*/}
                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*CAT 3*/}
                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*2nd*/}
            <div className="hero h-[70vh]">
                <div className="h-5/6 items-center space-y-16">
                    <div className="flex justify-center items-center space-x-16 h-[27rem]">
                        {/*CAT 1*/}
                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*CAT 2*/}
                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*CAT 3*/}
                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*3rd*/}
            <div className="hero h-[70vh] mb-16">
                <div className="h-5/6 items-center space-y-16">
                    <div className="flex justify-center items-center space-x-16 h-[27rem]">
                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                            <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src="/c1.png" />
                            <div className="relative p-10">
                                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <p className="text-md text-white text-justify pb-3">
                                        <span className="font-bold">Name: </span>name <br />
                                        <span className="font-bold">Age: </span>name <br />
                                        <span className="font-bold">Sex: </span>name <br />
                                    </p>
                                    <hr />
                                    <p className="text-md text-white text-justify py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien dui, ullamcorper et consectetur id,
                                        semper eget sem. Sed rutrum, lacus et consequat rutrum, libero nisl tristique nunc, quis dictum odio neque
                                        sit amet orci</p>
                                    <Link href="/adopt">
                                        <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-bold rounded-full">Adopt Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
