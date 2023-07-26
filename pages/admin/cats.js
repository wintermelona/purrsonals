import Head from 'next/head';
import AdminNav from '@/components/AdminNav';
import CatProf from '@/components/CatProf';
import {
    Input,
    Radio,
    Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

function EditCat({ cat, onSubmit }) {
    const [id, setId] = useState(cat.id);
    const [name, setName] = useState(cat.name);
    const [sex, setSex] = useState(cat.sex);
    const [age, setAge] = useState(cat.age);
    const [description, setDescription] = useState(cat.description);
    const [image, setImage] = useState(cat.image);

    return <dialog id="edit_cat_modal" className="modal">
        <form method="dialog" className="modal-box bg-white w-auto">
            <button className="btn btn-sm btn-circle btn-ghost text-[#4B4B4B] absolute right-2 top-2">✕</button>
            <h1 className="text-[#4B4B4B] text-sm">Edit Cat Details</h1>
            <div className="w-72 my-5">
                <Input label="Name" value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
            </div>

            <div className="w-72 mb-5">
                <Input label="Age" value={age} onChange={(e) => {
                    setAge(e.target.value);
                }} />
            </div>

            <label className="text-[#4B4B4B] ">Sex</label>
            <div className="flex gap-10 mb-5">
                <Radio id="male" name="type" label="Male" onClick={() => setSex("Male")} />
                <Radio id="female" name="type" label="Female" onClick={() => setSex("Female")} />
            </div>

            <div className="w-72 mb-5">
                <Textarea label="Description" value={description} onChange={(e) => {
                    setDescription(e.target.value);
                }} />
            </div>

            <label className="text-[#4B4B4B]">Upload a photo</label>
            <div>
                <input type="file" className="file-input w-72 mt-2" onChange={e => setImage(e.target.files[0])} />
            </div>
            <button className="border-0 bg-[#9cbf62] mt-4 ease-in duration-150 hover:bg-[#8cac58] text-md text-white font-gilroy normal-case h-8 w-20 rounded-full"
                onClick={() => onSubmit({
                    id,
                    name,
                    sex,
                    age,
                    description,
                    image,
                })}>Save</button>
        </form>
    </dialog>
}

export default function Cats() {
    const [cats, setCats] = useState([]);
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [deleteMode, setDeleteMode] = useState(false);
    const [image, setImage] = useState("")

    const [editMode, seteditMode] = useState(true);
    const [editingCat, setEditingCat] = useState();

    const [searchQuery, setSearchQuery] = useState("");
    const [searchedCats, setSearchedCats] = useState([]);

    useEffect(() => {
        getCats()
    }, [image])
    // console.log("client ", cats)

    const getCats = async () => {
        const result = await fetch(`/api/cats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const catsInDb = await result.json();
        setCats(catsInDb);

        if (searchQuery) {
            const filteredCats = catsInDb.filter((cat) => {
                return cat.name.toLowerCase().includes(searchQuery.toLowerCase());
            });
            setSearchedCats(filteredCats);
        } else {
            setSearchedCats(catsInDb);
        }
    };

    const filteredCats = searchedCats;

    const addCatHandler = async () => {

        const formData = new FormData();
        formData.append("name", name);
        formData.append("sex", sex);
        formData.append("age", age);
        formData.append("description", description);
        formData.append("image", image);
        // console.log("image", image)
        const result = await fetch('/api/cats/', {
            method: "POST",
            body: formData
        }).then((res) => res.json())

        // console.log("result ", result)

        if (name && age && sex && description) {
            setCats((cats) => {
                return [...cats, {
                    name,
                    age,
                    sex,
                    description,
                    image: result.image
                }]
            });
            setName('');
            setAge('');
            setDescription('');
            setImage('');
        }

        alert(result.message)
    }

    const editCatHandler = (cat) => {
        setEditingCat(cat);
        window.edit_cat_modal?.showModal()
    }

    const saveEditedCat = async (cat) => {
        const formData = new FormData();
        formData.append("name", cat.name);
        formData.append("sex", cat.sex);
        formData.append("age", cat.age);
        formData.append("description", cat.description);
        formData.append("image", cat.image);
        // console.log("image", image)
        // console.log('form data ', Object.fromEntries(formData))
        const result = await fetch(`/api/cats/${cat.id}`, {
            method: "PATCH",
            body: formData
        })

        const res = await result.json() // get updated cat image link from cloudinary
        // console.log("res ", res)
        setName('');
        setAge('');
        setDescription('');
        alert(res.message)
        return res.image
    }

    const deleteCatHandler = async (cat) => {
        const confirmed = window.confirm(`Are you sure you want to delete ${cat.name}?`);
        if (!confirmed) {
            return;
        }

        if (deleteMode) {
            setCats((cats) => {
                return cats.filter((c) => c !== cat);
            });
            setDeleteMode(false);
            seteditMode(true);
        }

        const result = await fetch(`/api/cats/${cat.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <>
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <div className="flex bg-[#f8f9f8] w-full">
                <AdminNav />

                <div className="py-12 px-20 w-full">
                    <h1 className="font-gilroy text-2xl">Cats</h1>
                    <div className="buttons space-x-4 mt-5 flex">
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
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
                                onClick={() => getCats()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="white"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                        </div>

                        <button className="btn border-0 bg-[#9cbf62] ease-in duration-150 hover:bg-[#8cac58] text-lg text-white font-gilroy normal-case w-32 rounded-full" onClick={() => window.my_modal_4.showModal()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" /> </svg>
                            Add
                        </button>
                        <dialog id="my_modal_4" className="modal">
                            <form method="dialog" className="modal-box bg-white w-auto">
                                <button className="btn btn-sm btn-circle btn-ghost text-[#4B4B4B] absolute right-2 top-2">✕</button>
                                <h1 className="text-[#4B4B4B] text-sm">Input cat details</h1>
                                <div className="w-72 my-5">
                                    <Input label="Name" value={name} onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                </div>

                                <div className="w-72 mb-5">
                                    <Input label="Age" value={age} onChange={(e) => {
                                        setAge(e.target.value);
                                    }} />
                                </div>

                                <label className="text-[#4B4B4B] ">Sex</label>
                                <div className="flex gap-10 mb-5">
                                    <Radio id="male" name="type" label="Male" onClick={() => setSex("Male")} />
                                    <Radio id="female" name="type" label="Female" onClick={() => setSex("Female")} />
                                </div>

                                <div className="w-72 mb-5">
                                    <Textarea label="Description" value={description} onChange={(e) => {
                                        setDescription(e.target.value);
                                    }} />
                                </div>

                                <label className="text-[#4B4B4B]">Upload a photo</label>
                                <div>
                                    <input type="file" className="file-input w-72 mt-2" onChange={e => setImage(e.target.files[0])} />
                                </div>
                                <button className="border-0 bg-[#9cbf62] mt-4 ease-in duration-150 hover:bg-[#8cac58] text-md text-white font-gilroy normal-case h-8 w-20 rounded-full"
                                    onClick={() => addCatHandler()}>Save</button>
                            </form>
                        </dialog>

                        <button className="btn bg-transparent border-[#ff5e57] ease-in duration-150 hover:bg-[#ff5e57] hover:text-white hover:border-0 text-lg text-[#ff5e57] font-gilroy normal-case w-32 rounded-full" onClick={() => {
                            setDeleteMode(!deleteMode);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" /> </svg>
                            Delete
                        </button>
                    </div>

                    <div className="flex w-full flex-wrap">
                        {filteredCats.map((cat, idx) => {
                            return (
                                <div key={idx}>
                                    <CatProf
                                        cat={cat}
                                        deleteMode={deleteMode}
                                        onDelete={() => deleteCatHandler(cat)}
                                        editMode={editMode}
                                        onEdit={() => editCatHandler(cat)}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {editingCat && <EditCat cat={editingCat} onSubmit={(newCat) => {
                        setCats(cats.map((cat) => {
                            // console.log("cat", cat)
                            if (editingCat === cat) {
                                // console.log("newimagelink ",  newImageLink);
                                // newCat.image = newImageLink
                                // console.log("newcat", newCat)
                                // Some voodoo going on here im sorry
                                const newImageLink = saveEditedCat(newCat).then(() => newCat).catch((error) => console.log("Something went wrong: newCat"))
                            }
                            return cat;

                        }))
                    }} />}
                </div>
            </div>
        </>
    );
}