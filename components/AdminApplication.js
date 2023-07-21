import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const AdminApplication = ({...data}) => {
    const [status, setStatus] = useState(data.status);
    // console.log("props", {...data })

    const editApplication = async (id, status) => {
        console.log('STATUS, ', status)
        const data = await fetch(`/api/application/${id}`, {method: "PATCH", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                status
            })
        })
        const res = await data.json()
        console.log(res)
        // setData(res)
    }

    return <div className="collapse collapse-arrow bg-white border-[#efeeee] border-2 w-full">
        <input type="checkbox" />
        <div className="collapse-title text-md">
            Application ID: {data.id}
            <div className="badge bg-[#9cbf62] border-0 text-white ml-2">{status}</div>
        </div>
        <div className="collapse-content">
            <p>First Name: {data.firstname} </p>
            <p>Last Name: {data.lastname}  </p>
            <p>Address: {data.address} </p>
            <p>Phone: {data.phone}</p>
            <p>Email: {data.email} </p>
            <p>Occupation: {data.occupation} </p>
            <p>Adopted before?: {data.adoption ? "Yes" : "No"} </p>
            <div className="divider" />
            <p>Cat to be adopted: {data.adoptee} </p>
            <p>Describe ideal cat: {data.description}</p>
            <p>Type of building: {data.buildingType} </p>
            <p>Renting?: {data.renting ? "Yes" : "No"}</p>
            <div className="w-72 pt-4">
                <Select label="Status of Application" onChange={(value) => {
                    setStatus(value)
                }}>
                    <Option value="Pending">Pending</Option>
                    <Option value="Processing">Processing</Option>
                    <Option value="Completed">Completed</Option>
                </Select>
            </div>
            <div className="flex justify-end">
                <button className="border-0 bg-[#9cbf62] ease-in duration-150 hover:bg-[#8cac58] text-md text-white font-gilroy normal-case h-8 w-20 rounded-full" onClick={() => editApplication(data.id, status)}>Save</button>
            </div>
        </div>
    </div>
};
export default AdminApplication