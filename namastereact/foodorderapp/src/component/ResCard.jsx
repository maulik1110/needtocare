import React from "react";
import resList from "../utils/product";
import CON_URL from "../utils/urls";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, areaName, avgRating } =
    resData?.info;
  return (
    // <div className="md:w-1/2 xl:w-1/4 p-4 flex rounded-md flex-shrink-0 w-1/3">
    //   <div className=" w-[15vw] bg-white rounded-lg shadow-md p-1 ">
    //     <img
    //       // src={`https://media-assets.swiggy.com/swiggy/image/uploa…uto,q_auto,w_660/${cloudinaryImageId}`}
    //       src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
    //       alt=""
    //     />
    //     <h2>{name}</h2>
    //     <h3>{cuisines}</h3>
    //     <p>{areaName}</p>
    //   </div>
    // </div>
    <div className="shadow-lg h-[70vw] w-full lg:w-[20vw] lg:h-[25vw] rounded-lg p-3 text-left  text-slate-800 lg:flex-wrap overflow-hidden">
      <img
        className="rounded-lg w-full lg:h-[15vw] h-[45vw] flex justify-center items-center "
        // src={`https://media-assets.swiggy.com/swiggy/image/uploa…uto,q_auto,w_660/${cloudinaryImageId}`}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt=""
      />
      <h2 className="font-bold text">{name}</h2>
      <h3 className="font-medium">
        {cuisines.slice(0, 3).join(", ")}
        {cuisines.length > 3 ? "..." : ""}
      </h3>
      <p>{areaName}</p>
      <p>{avgRating}</p>
    </div>
  );

};
export const withpromotedlabel = (ResCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="bg-white text-black absolute my-5 px-3 rounded-md mx-3">Promoted</label>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard;
