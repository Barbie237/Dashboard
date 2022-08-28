import "./login.scss";
import {useForm} from "react-hook-form";
import {passwordRegex, emailRegex,} from "../../common/regex";

const Login = () => {
  //val par défaut(useForm())
  const {register, handleSubmit, formState:{errors}} = useForm();
  const onclick = (data) => {
      console.log(data);
      
  }
  
  return (
    <form>
      <label> Username : </label>
      <input {...register("username", 
      {required:"Le nom utilisateur est recquis!", 

       })}
      //...recopier une valeur actuelle en mémoire et j'ajoute à ca la nouvelle val
      placeholder="Anna1"  
      /> 
      <label> Email : </label>
      <input 
      placeholder="anne@gmail.com"
      {...register("email",
      {required: "L'adresse Email est obligatoire!",
      pattern:{value:emailRegex, message:"Veuillez entrer une adresse email valide"}
      }
      )}
      />
      <label> Password : </label>
      <input {...register("email",
      {required: "L'adresse Email est obligatoire!",
      pattern:{value:passwordRegex, message:"Veuillez entrer un mot de passe"}
      }) 
      }
      />
      <button onClick={handleSubmit(onclick)}
      type="submit"
      > Connexion </button>
    </form>
    
  )
}

export default Login
