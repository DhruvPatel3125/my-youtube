import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={()=>toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ReeS5Zn86e8s2K8UfnHkPRbTIdB0IYre6kDMlWDmQskvjQWI4OVmX3V5n5VFZZ98NaA&usqp=CAU"
          alt="menu"
        />
        <a href="/">
        <img
          className="h-8 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnDBkNofkaZMvpZ42PyxDtYLNt3K4WCnkkkefrwLpRL0ILT21GUEK7U-_mYI1qZboGQ&usqp=CAU"
          alt="logo"
        />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
