import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div>
        <div className=" flex items-center justify-evenly border-b border-gray-200">
          <div className=" cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className=" font-semibold text-gray-600 text-lg">For You</h1>
          </div>
          <div className=" cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className=" font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        <div>
          <div className=" flex items-center p-4">
            <div>
              <Avatar
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                size="40"
                round={true}
              />
            </div>
            <input className=" w-full outline-none border-none text-xl ml-2" type="text" placeholder="What is happening?!" />
          </div>

          <div className=" flex items-center justify-between p-4 border-b border-gray-200">
            <div>
                <CiImageOn size="24px" />
            </div>
            <button className=" bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
