// import React, { useEffect, useState } from 'react'
// import Navbar from './components/Navbar'
// import {FiSearch} from "react-icons/fi"
// import {AiFillPlusCircle} from "react-icons/ai"
// import {collection} from 'firebase/firestore'

// const App = () => {

//   const [contacts, setContacts] = useState([])
//   useEffect(()=>{
//     const getContacts=async ()=>{
//       try {
//         const contactRef = collection(db,"contacts");
//         const contactsSnapshot = await getDocs(contactRef)
//         const contactList=contactsSnapshot.docs.map((doc)=>{
//           return {
//             id:doc.id,
//             ...doc.data()
//           }
//         })
//         console.log(contactList);
//       } catch (error) {
        
//       }
//     }

//     getContacts()
//   },[])
//   return (
//     <div className='max-w-[370px] mx-auto px-4'>
//       <Navbar/>

//       <div className='flex  gap-2'>
//       <div className='flex relative items-center flex-grow' >
//         <FiSearch className='text-white text-3xl absolute ml-1'/>
//         <input type="text"  className='border pl-10 text-white border-white bg-transparent h-10 rounded-md flex-grow' />
//       </div>

//         <AiFillPlusCircle className='text-5xl cursor-pointer text-white '/>
//       </div>
//     </div>
//   )
// }

// export default App
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions


import { db } from './config/firebase'; // Adjust the path to match your actual file structure

const App = () => {

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactRef);
        const contactList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setContacts(contactList); // Update state with retrieved data
        console.log(contactList);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />

      <div className='flex  gap-2'>
        <div className='flex relative items-center flex-grow' >
          <FiSearch className='text-white text-3xl absolute ml-1' />
          <input type="text" className='border pl-10 text-white border-white bg-transparent h-10 rounded-md flex-grow' />
        </div>

        <AiFillPlusCircle className='text-5xl cursor-pointer text-white' />
      </div>
    </div>
  );
};

export default App;
