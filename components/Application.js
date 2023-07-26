import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const Application = ({ editable, filter = "", ...data }) => {
  const [status, setStatus] = useState(data.status);

  const editApplication = async (id, status) => {
    const data = await fetch(`/api/application/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status,
      }),
    });
    const res = await data.json();
    alert(res.message);
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500";
      case "Screening":
        return "bg-orange-300";
      case "Processing":
        return "bg-blue-500";
      case "Completed":
        return "bg-[#9cbf62]";
      default:
        return "bg-gray-500";
    }
  };
  const show = filter === ""  ? true : filter == data.status.toLowerCase() // show all (true) if filter is empty, else check the filter conditions
  // console.log("show ", show, "filter ", typeof filter)
  return (
    <>
    {
      show ? <div className="collapse collapse-arrow bg-white border-[#efeeee] border-2 w-full">
      <input type="checkbox" />
      <div className="collapse-title text-md flex justify-between items-center">
        <div>Application ID: {data.id}</div> {filter == data.status}
        <div
          className={`badge w-24 border-0 text-white ml-2 ${getStatusColorClass(
            status
          )}`}
        >
          {status}
        </div>
      </div>
      <div className="collapse-content">
        <p>First Name: {data.firstname} </p>
        <p>Last Name: {data.lastname} </p>
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
        {editable && (
          <div>
            <div className="w-72 pt-4">
              <Select
                label="Status of Application"
                onChange={(value) => {
                  setStatus(value);
                }}
                value={status} // Add this line to set the initial selected value in the dropdown
              >
                <Option value="Pending">Pending</Option>
                <Option value="Screening">Screening</Option>
                <Option value="Processing">Processing</Option>
                <Option value="Completed">Completed</Option>
              </Select>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="border-0 bg-[#9cbf62] ease-in duration-150 hover:bg-[#8cac58] text-md text-white font-gilroy normal-case h-8 w-20 rounded-full"
                onClick={() => editApplication(data.id, status)}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div> : 
    ""
    }
    </>
  );
};

export default Application;
