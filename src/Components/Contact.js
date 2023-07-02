import React from 'react';
import { Link,Outlet } from "react-router-dom";


const Contact = () => {
  return (
    <>
    <Link to = {"Instagram"}><h4>Contact via Instagram</h4></Link>
    <Link to = {"Email"}><h4>Contact via Email</h4></Link>
    <Outlet/>
    </>
  )
}

export default Contact