import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const AdminApplication = () => {
    const [status, setStatus] = useState();

    return <div className="collapse collapse-arrow bg-white border-[#efeeee] border-2 w-full">
        <input type="checkbox" />
        <div className="collapse-title text-md">
            Application ID
            <div className="badge bg-[#9cbf62] border-0 text-white ml-2">{status ?? "Status"}</div>
        </div>
        <div className="collapse-content">
            <p>Name: </p>
            <p>Address: </p>
            <p>Phone: </p>
            <p>Email: </p>
            <p>Occupation: </p>
            <p>Adopted before?: </p>
            <div className="divider" />
            <p>Describe ideal cat: </p>
            <p>Type of building: </p>
            <p>Renting?: </p>
            <div className="w-72 pt-4">
                <Select label="Status of Application" onChange={(value) => {
                    setStatus(value)
                }}>
                    <Option value="Status1">Status1</Option>
                    <Option value="Status2">Status2</Option>
                    <Option value="Status3">Status3</Option>
                </Select>
            </div>
            <div className="flex justify-end">
                <button className="border-0 bg-[#9cbf62] ease-in duration-150 hover:bg-[#8cac58] text-md text-white font-gilroy normal-case h-8 w-20 rounded-full">Save</button>
            </div>
        </div>
    </div>
};
export default AdminApplication