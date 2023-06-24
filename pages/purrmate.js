import Head from 'next/head';
import Link from 'next/link';

export default function Purrmate() {
    return (
        <>
            <Head>
                <title>Purrmate</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>
            <div className="hero min-h-screen flex relative">
                <div className="img absolute bottom-0 left-0">
                    <img src="/q3.png" style={{ width: '70vh', objectFit: 'cover' }} />
                </div>

                <div className="flex h-screen">
                    <div className="grid w-96 bg-[#9CBE63]">
                        <Link href="/">
                            <img className="m-5 rounded-full hover:shadow-xl" src="/return-icon.png" />
                        </Link>
                    </div>
                    <div className="grid w-60 place-items-center">
                        <div className="recommender-content">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
