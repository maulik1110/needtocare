import React, { useState, useEffect } from "react";

import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import {exerciseOptions, fetchData} from '../utils/fetchData'
// import HorizontalScrollbar from '../components/HorizontalScrollbar'
import HorizontalScrollbar from '../components/HorizontalScrollbar'

// const SearchExercises = ({bodyPart,setBodyParts}) => {
//   // removed setExercises
//   const [search, setSearch] = useState("")
//   const [bodyParts, setBodyParts] = useState([])


//   useEffect(()=>{
//     const fetchExerciseData=async()=>{
//       const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions)
//         setBodyParts(["all",...bodyPartsData])
//     }
//     fetchExerciseData();
//   },[])

//   const handleSearch = async()=>{
//     if(search){
//       const exerciseData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
//       console.log(exerciseData);
//       const searchedExercises = exerciseData.filter((exercise)=>exercise.name.toLowerCase().includes(search)
//       ||exercise.target.toLowerCase().includes(search)
//       ||exercise.equipment.toLowerCase().includes(search)
//       ||exercise.bodyPart.toLowerCase().includes(search))

//       setSearch("");
//       setExercises(searchedExercises)
//     }
//   }
//   return (
//     <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
//       <Typography
//         fontWeight={700}
//         sx={{
//           fontSize: { lf: "40px", xs: "25px" },
//         }}
//         mb="45px"
//         textAlign="center"
//       >
//         Awesome Exercises you <br /> need to try once
//       </Typography>

//       <Box position="relative" mb="65px">
//         <TextField sx={{
//           input: { fontWeight: "700", border:"none", borderRadius:"5px"}, width:{lg: "800px", xs: "350px"}, backgroundColor: "#fff", borderRadius: "40px"
//         }} height=" 70px" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder="Search exercise" type="text" />

//         <Button className="search-btn" sx={{
//           bgcolor: "#ff2625", color:"#fff", textTransform:"none", width:{lg:"110px", xs:"70px"}, fontSize:{lg: " 15px",xs: "10px"}, height:"56px", position:"absolute", right:"0"
//         }} onClick={handleSearch}>Search</Button>

//       </Box>
//       <Box sx={{position:"relative", width:"100%", padding:"20px"}}>
//         <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

//       </Box>
//     </Stack>
//   );
// };

// export default SearchExercises;
// import React, { useEffect, useState } from 'react';
// import { Box, Button, Stack, TextField, Typography } from '@mui/material';

// import { exerciseOptions, fetchData } from '../utils/fetchData';
// import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;