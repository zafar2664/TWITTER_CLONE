import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className=" border-b border-gray-200">
      <div>
        <div className=" flex p-4 w-full">
          <Avatar
            src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
            size="40"
            round={true}
          />
          <div className=" ml-2">
            <div className=" flex items-center ">
              <h1 className=" font-bold">Patel</h1>
              <p className=" text-gray-500 text-sm ml-1">
                @patelmernstack . 1m
              </p>
            </div>
            <div>
              <p>Hello developers lets connect to grow together.</p>
            </div>
            <div className=" flex justify-between my-3">
              <div className=" flex items-center">
                <div className=" p-2 hover:bg-green-200 rounded-full cursor-pointer">
                <FaRegComment size="24px" />
                </div>
                
                <p>0</p>
              </div>
              <div className=" flex items-center">
                <div className=" p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                <CiHeart className="ml-1" size="24px" />
                </div>
                
                <p>0</p>
              </div>
              <div className=" flex items-center">
                <div className=" p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                <CiBookmark size="24px" />
                </div>
                
                <p>0</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
