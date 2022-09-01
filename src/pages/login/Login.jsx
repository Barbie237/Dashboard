import "./login.scss";
import {useForm} from "react-hook-form";
import {emailRegex,} from "../../common/regex";
import Navbar from "../../Components/navbar/Navbar";
import {useNavigate} from "react-router-dom";

const Login = () => {
    //val par défaut(useForm())
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onclick = (data) => {
        console.log(data);
        login(data);
    }
    //fake
    const navigate = useNavigate();
    const fakeDb = [
        {
            "username": "Barbara1",
            "email": "annebarbaratebu@gmail.com",
            "password": "Teb's_237",
            "role": "Admin"

        },
        {
            "username": "pintor",
            "email": "pintor@gmail.com",
            "password": "pinT@r2.ç",
            "role": "Admin"
        },
        {
            "username": "Jo",
            "email": "jo@gmail.com",
            "password": "Jo1@h.&1",
            "role": "gestionnaire"

        },
        {
            "username": "marIej1",
            "email": "mariej@gmail.com",
            "password": "maRieJ2.&",
            "role": "membre"
        },
        {
            "username": "mamour1A",
            "email": "mamour@gmail.com",
            "password": "password",
            "role": "membre"
        },
        {
            "username": "papou",
            "email": "papou@gmail.com",
            "password": "papou2.0",
            "role": "membre"
        },
        {
            "username": "coco1",
            "email": "coco@gmail.com",
            "password": "Coco&1A",
            "role": "membre"
        }
    ]

    function login(data) {
        console.log("login",data);
       const loggedUser = fakeDb.find(item => item.password === data.password.trim() && item.email === data.email.trim());
        if (loggedUser) {
            console.log("login ok");
            localStorage.setItem("user", JSON.stringify(loggedUser))
            navigate("/", {replace: true})
        } else {
            console.log("login no");
            console.log("No user with provided credentials where founded");
        }
    }

    return (
        <div className="login">
            <div className="newContainer">
                <div className="body">

                    <section style={{backgroundImage: "url('./img/Vv.jpg')"}}>
                        <form>
                            <h1> Authentification </h1>

                            <label> {errors.username ? errors.username.message : "Username :"}  </label>
                            <input {...register("username",
                                {
                                    required: "Le nom utilisateur est recquis!",

                                })}
                                //...recopier une valeur actuelle en mémoire et j'ajoute à ca la nouvelle val
                                   placeholder="Anna1"
                            />
                            <label> {errors.email ? errors.email.message : "Email :"} </label>
                            <input
                                placeholder="anne@gmail.com"
                                {...register("email",
                                    {
                                        required: "L'adresse Email est obligatoire!",
                                        pattern: {
                                            value: emailRegex,
                                            message: "Veuillez entrer une adresse email valide"
                                        }
                                    }
                                )}
                            />
                            <label> {errors.password ? errors.password.message : "Password :"} </label>
                            <input type={"password"} {...register("password",
                                {
                                    required: "Le mot de passe est obligatoire!"
                                })
                                   }
                            /><label> {errors.role ? errors.role.message : "Role :"} </label>
                            <input {...register("Role",
                                {
                                    required: "Le role est obligatoire!"
                                })
                                   }
                            />
                            <button
                                onClick={handleSubmit(onclick)}
                                type="submit">
                                Connexion
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login


