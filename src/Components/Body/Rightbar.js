import ima from "../../assets/Rightbar.png";
import "./RightFloater.css";
export default function Rightbar(){
    return (
        <div className="Rightbar" style={{width:'500px'}} >
            <img src= {ima} alt="Subscrption Plan" className="RightFloater" style={{height:'78%'}}/>            
        </div>
    );
}