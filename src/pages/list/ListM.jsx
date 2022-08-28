import "./list.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import DatatableM from "../../Components/datatable/DatatableM";

const ListB = () => {
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableM/>
      </div>
    </div>
  )
}

export default ListB
