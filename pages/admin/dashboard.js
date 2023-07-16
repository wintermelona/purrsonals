import Head from 'next/head';
import Link from 'next/link';
import AdminNav from '@/components/AdminNav';
import CatProf from '@/components/CatProf';

export default function dashboard() {
    return (
        <>
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <div className="flex bg-[#f8f9f8] w-full">
                <AdminNav />

                <div className="content py-10 px-20">
                    <h1>set</h1>
                    <h1> test</h1>
                </div>
            </div>
        </>
    );
}
