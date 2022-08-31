import {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import "./list.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Datatable from "../../Components/datatable/Datatable";

const List = () => {

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
        <Datatable/>
        
      </div>
    </div>
  )
}

export default List
