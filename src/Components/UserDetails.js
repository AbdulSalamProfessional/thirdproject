import { Params, useParams, useSearchParams } from "react-router-dom";
import React, {useEffect,useState} from "react";
const UserDetails = () => {
const {userId} = useParams();
const [searchParams, setSearchParams] = useSearchParams();

console.log(searchParams.get('name'));
console.log(searchParams.get('age'));
console.log(searchParams.getAll('name'));
console.log(searchParams.getAll('age'));

const Reset = () => {
  setSearchParams({name : 'shubham', age : '40'});
}




    const [ data , setData ] = useState({});
  
    useEffect(() => {
    async function getData() {
    const get = await fetch (`https://hub.dummyapis.com/employee? 
    noofRecords=1&idStarts=${userId}`);
    const res = await get.json();
    setData(res[0]);
   }
   getData();
  }, [])

  return (
    <>
    <h4>{data.id}</h4>
    <img  src={data.imageUrl}/>
    <h4>{data.firstName}</h4>
    <h4>{data.lastName}</h4>
    <h4>{data.email}</h4>
    <h4>{data.contactNumber}</h4>
    <h4>{data.age}</h4>
    <h4>{data.dob}</h4>
    <h4>{data.salary}</h4>
    <h4>{data.address}</h4>
    <button onClick={Reset}>Reset</button> 

    </>
  )
}

export default UserDetails