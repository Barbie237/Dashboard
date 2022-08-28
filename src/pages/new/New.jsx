import SideBar from "../../Components/sidebar/Sidebar";
import NavBar from "../../Components/navbar/Navbar";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useState} from "react";

const New = ({inputs, title}) => {

  const [file, setFile] = useState("");
  
  return (
    <div className="new">
      <div className="new">
       <SideBar/>
        <div className="newContainer">
        <NavBar/>
          <div className="top">
            <h1> {title} </h1>
          </div>
          <div className="bottom">          
          <div className="left">
            <img 
              src=
                {file 
                  ? URL.createObjectURL(file) 
                  : "./img1.jpg"
                }
            alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file"> 
                image: <DriveFolderUploadOutlinedIcon className="icon"/> 
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}
                 style={{display:"none"}} /> 
              </div>

              {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label> {input.lable} </label>
                <input type={input.type} placeholder={input.placeholder} /> 
              </div>
              ))}
              <button> Envoyer</button>
            </form>
          </div>  
          </div>
       </div>
      </div>
    </div>
  )
}

export default New
 