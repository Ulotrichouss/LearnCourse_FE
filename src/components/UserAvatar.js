import React from "react";
import { UserIcon } from "@heroicons/react/outline";
function UserAvatar(props) {
  return (
    <>
    {/* http://127.0.0.1:8000/storage/courses/K2ZGoBLvhUO2nvoaxsJYy5GlnzLwQK6YNRXfIB0b.png */}
      {props.link ? (
        <img
          src={"https://coursespec.000webhostapp.com/storage/" + props.link}
          className="w-10 h-10 mr-3 object-cover rounded-full shadow"
        />
      ) : (
        <div className="mr-3 bg-green-400 text-white font-medium text-3xl h-10 w-10 rounded-full flex justify-center uppercase">
          <UserIcon className="w-5 text-white" />
        </div>
      )}
    </>
  );
}

export default UserAvatar;
