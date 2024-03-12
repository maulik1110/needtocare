import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import resList from "../utils/product";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withpromotedlabel } from "./ResCard";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const [searchtext, setSearchtext] = useState("");
  const [filteredres, setFilteredres] = useState(resList); //use so that search featuure are copied here
  console.log("render");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=30.7333148&lng=76.7794179"
    );
    const json = await data.json();
    console.log(json);
  };

  const Promotedlabel = withpromotedlabel(ResCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>You are offline please connect your internet</h1>;
  }

  return listOfRes.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-[5vw]">
      <div className="topfearure lg:flex gap-5">
        <div className="search">
          <input
            type="text"
            className="border border-black px-4 py-1 rounded"
            name=""
            id=""
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchtext);
              const searchfilter = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredres(searchfilter);
            }}
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            const filterlist = listOfRes.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListOfRes(filterlist);
            console.log(listOfRes);
          }}
          className="px-4 pu-1 rounded bg-red-100 cursor-pointer border-gray-700	 "
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container lg:flex lg:flex-wrap justify-center items-center gap-2 ">
        {/* {filteredres.map((restaurant, index) => (
          restaurant.data.promoted ? <Promotedlabel resData={restaurant}/> :
          <ResCard key={index} resData={restaurant} />
          ))} */}
        {filteredres.map((restaurant, index) =>
          restaurant.info.promoted ? (
            <Promotedlabel resData={restaurant} />
          ) : (
            <ResCard key={index} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
