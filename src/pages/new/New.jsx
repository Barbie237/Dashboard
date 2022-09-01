import SideBar from "../../Components/sidebar/Sidebar";
import NavBar from "../../Components/navbar/Navbar";
import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {addUser} from "../../datatablesource";

const New = ({inputs, title}) => {

  const [file, setFile] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onclick = (data) => {
        addUser( {
            username: data.userName,
            img: URL.createObjectURL(file),
            nomPrenom: data.firstnameAndLastName,
            dateNaiss: data.birthday,
            sexe: data.sex,
            tel: data.phone,
            adresse: data.address,
            status: "active"
        });
    }

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
                <input {...register(input.name,
                    {
                        required: input?.required,

                    })}  type={input.type} placeholder={input.placeholder} />
              </div>
              ))}
              <button  onClick={handleSubmit(onclick)} type="submit"> Envoyer</button>
            </form>
          </div>  
          </div>
       </div>
      </div>
    </div>
  )
}

export default New
 