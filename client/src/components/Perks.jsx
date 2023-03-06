import React from "react";
import {
  FaWifi,
  FaParking,
  FaTv,
  FaDog,
  FaDoorOpen,
  FaSwimmingPool,
} from "react-icons/fa";

const Perks = ({ selected, onChange }) => {
  const handleCbClick = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  };
  return (
    <div className="flex flex-col mt-5">
      <label className="text-gray-600 font-medium pl-2 text-xl">Perks:</label>
      <div className="px-2 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-6 py-5 gap-2">
        <label className="flex gap-2 items-center border rounded-lg p-2 shadow-lg">
          <input
            type="checkbox"
            name="wifi"
            onChange={handleCbClick}
             checked={selected.includes("wifi")}
          />
          <FaWifi />
          <span className="text-[0.8rem]">Wifi</span>
        </label>
        <label className="flex gap-2 items-center border rounded-lg p-1 shadow-lg">
          <input type="checkbox" name="parking" onChange={handleCbClick}  checked={selected.includes("parking")}/>
          <FaParking />
          <span   className="text-[0.8rem]">Free parking</span>
        </label>
        <label className="flex gap-2 items-center border rounded-lg p-1 shadow-lg">
          <input type="checkbox" name="tv" onChange={handleCbClick} checked={selected.includes("tv")} />
          <FaTv />
          <span   className="text-[0.8rem]">TV</span>
        </label>
        <label className="flex gap-2 items-center border rounded-lg p-1 shadow-lg">
          <input type="checkbox" name="pets" onChange={handleCbClick}  checked={selected.includes("pets")}/>
          <FaDog />
          <span   className="text-[0.8rem]">Pets</span>
        </label>
        <label className="flex gap-2 items-center border rounded-lg p-1 shadow-lg">
          <input type="checkbox" name="entrance" onChange={handleCbClick}  checked={selected.includes("entrance")}/>
          <FaDoorOpen />
          <span   className="text-[0.8rem]">Private Entrance</span>
        </label>
        <label className="flex gap-2 items-center border rounded-lg p-1 shadow-lg">
          <input type="checkbox" name="pool" onChange={handleCbClick} checked={selected.includes("pool")} />
          <FaSwimmingPool />
          <span  className="text-[0.8rem]">Pool</span>
        </label>
      </div>
    </div>
  );
};

export default Perks;
