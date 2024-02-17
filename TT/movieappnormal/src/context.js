import React, { createContext, useContext, useEffect, useState } from "react";
const API_URL = `https://www.omdbapi.com/?apikey=71aac2c2&s=superman`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [loading,setLoading] = useState(true)
    const [movie,setMovie] = useState([])
    const [isError,setIsError] = useState({show:"false",msg:""})

    const getMovie = async (url)=>{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        if(data.response === "True"){
            setLoading(false)
            setMovie(data.Search)
        }else{
            setIsError({
                show: "True",
                msg: data.error
            })
        }
    }
    useEffect(()=>{
        getMovie(API_URL)
    },[])


  return (
    <AppContext.Provider
      value={{ name: "Maulik", age: 21, studies: "AIML", where: "Chandigarh",movie,isError,loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
