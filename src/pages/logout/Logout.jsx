import "./logout.scss";
import React from 'react';
import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Logout = () => {
  const user = localStorage.removeItem("user");
  const navigate = useNavigate();
  useEffect(() => {
   if(user) {
       navigate("/login", {replace:true});
     }
   }, [navigate, user])
  return (
    
      <div className="logOut">
        Logout Succeed
      </div> 
    
  )
}

export default Logout
