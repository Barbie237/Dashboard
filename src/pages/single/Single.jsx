import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Chart from "../../Components/chart/Chart";
import List from "../../Components/table/Table";
import "./single.scss";
import {useParams} from "react-router-dom";
import {findUserById} from "../../datatablesource";

const Single = () => {
    const {userId} = useParams();
    const user = findUserById(parseInt(userId))

    console.log(user)
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                     <div className="left">
                     <div className="editButton"> Edit </div>
                     <h1 className="title">Information</h1>
                     <div className="item">
                     <img 
                         src={user.img}
                         alt=""
                         className="itemImg"
                     />
                     <div className="details">
                        <h1 className="itemTitle"> {user.nomPrenom} </h1>
                        <div className="detailItem"> 
                            <span className="itemKey">Email:</span>
                            <span className="itemValue">{user.email}</span>
                        </div>         
                        <div className="detailItem"> 
                            <span className="itemKey">Phone:</span>
                            <span className="itemValue">{user.tel}</span>
                        </div>         
                        <div className="detailItem"> 
                            <span className="itemKey">Address:</span>
                            <span className="itemValue">{user.adresse}</span>
                        </div>
                        {/*<div className="detailItem"> */}
                        {/*    <span className="itemKey">Country:</span>*/}
                        {/*    <span className="itemValue">Cameroon</span>*/}
                        {/*</div>*/}
                     </div>
                     </div>
                     </div>
                     <div className="right">
                        <Chart aspect= {3 / 1} title="User Spending (Last 6 Months)"/> 
                     </div>
                </div>
                <div className="bottom">
                <h1 className="title">Last Transactions</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Single
