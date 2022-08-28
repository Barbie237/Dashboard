import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Chart from "../../Components/chart/Chart";
import List from "../../Components/table/Table";
import "./single.scss";

const Single = () => {
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
                         src="./img1.jpg"
                         alt=""
                         className="itemImg"
                     />
                     <div className="details">
                        <h1 className="itemTitle"> Anne Barbara </h1>
                        <div className="detailItem"> 
                            <span className="itemKey">Email:</span>
                            <span className="itemValue">annebarbara@gmail.com</span>
                        </div>         
                        <div className="detailItem"> 
                            <span className="itemKey">Phone:</span>
                            <span className="itemValue">+237 655654312</span>
                        </div>         
                        <div className="detailItem"> 
                            <span className="itemKey">Address:</span>
                            <span className="itemValue">Tsinga Village. Yaoundé</span>
                        </div>
                        <div className="detailItem"> 
                            <span className="itemKey">Country:</span>
                            <span className="itemValue">Cameroon</span>
                        </div>
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
