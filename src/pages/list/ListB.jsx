import "./list.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import DatatableB from "../../Components/datatable/DatatableB";
import {useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const ListB = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => { 
   if(user===null) {
       navigate("/login", {replace:true});
     }
   }, [navigate, user])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableB/>
      </div>
    </div>
  )
}

export default ListB
