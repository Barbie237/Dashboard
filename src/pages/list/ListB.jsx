import "./list.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import DatatableB from "../../Components/datatable/DatatableB";

const ListB = () => {
  
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
