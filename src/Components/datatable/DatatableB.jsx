import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows} from "../../datatablesourceB";
import {Link} from "react-router-dom"
import {useState} from "react";

const DatatableB = () => {
  const [data,setData] = useState(userRows);
  
  const handleDelete = (id) => {
       setData(data.filter(item=>item.id !== id))
  };

  const actionColumn = [
    { 
      field: "action", 
      headerName: "Action", 
      width: 200, 
      renderCell:(params) => {
      return (
      <div className="cellAction">
        <Link to="/users/test" style={{ textDecoration: "none"}}>
           <div className="viewButton"> View </div>
        </Link>
        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}> Delete </div>        
      </div>
    )
  } }]
  return (
    <div className="datatable">
      <div className="datatableTitle">
          Add New Budget
          <Link to="/budget/new" style={{ textDecoration: "none"}} className="link">
            Add New
          </Link>
      </div>
       <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      
    </div>
  )
}

export default DatatableB