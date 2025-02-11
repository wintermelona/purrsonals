import Head from 'next/head';
import AdminNav from '@/components/AdminNav';
import { useEffect, useState } from 'react';
import Application from '@/components/Application';

export default function Applications() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getApplications();
    }, [filter]);

    const getApplications = async () => {
        const data = await fetch('/api/application', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        });
        const res = await data.json();
        setData(res);
    };

    const handleSelect = (value) => {
        setFilter(value);
    };

    const handleSearchButtonClick = () => {
        if (searchQuery === "") {
            getApplications();
        } else {
            const filteredData = data.filter((application) =>
                application.id.toString().includes(searchQuery)
            );
            setData(filteredData);
        }
    };

    return (
        <>
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <div className="flex bg-[#f8f9f8] w-full">
                <AdminNav />

                <div className="content py-12 px-20 w-full">
                    <h1 className="font-gilroy text-2xl">Applications</h1>
                    <div className="buttons space-x-4 mt-5 flex">
                        <div className="relative my-4 flex w-full flex-wrap items-stretch">
                            <input
                                name="search"
                                type="search"
                                className="relative w-96 rounded-l border border-solid border-neutral-300 bg-white px-3 py-[0.25rem] outline-none text-neutral-700 transition duration-200 ease-in-out focus:border-[#d3d5d7] focus:text-neutral-700 focus:outline-none"
                                placeholder="Search.."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <button
                                className="relative flex items-center rounded-r bg-[#8b9197] px-6 py-2.5 hover:bg-[#7f848a]"
                                onClick={handleSearchButtonClick} 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <select className="select select-bordered border-neutral-300 bg-white w-40 max-w-xs" defaultValue={"filter"} onChange={(e) => handleSelect(e.target.value)}>
                            <option disabled value={"filter"}>Filter</option>
                            <option value={"pending"}>Pending</option>
                            <option value={"screening"}>Screening</option>
                            <option value={"processing"}>Processing</option>
                            <option value={"completed"}>Completed</option>
                        </select>
                    </div>
                    {data
                        .map((application, index) => (
                            <Application {...application} key={index} editable={true} filter={filter} />
                        ))}
                </div>
            </div>
        </>
    );
}
