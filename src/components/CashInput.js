import {useState} from 'react';
import image from "../images/pic.jpg" 
import '../css/CashInput.css'

function CashInput(){

    const [total,setTotal]= useState([0]);

    const moneyClicked = (number) => {
        let total1= parseInt(total);    
         total1+= number;
         setTotal(total1);
    }
    

    return(
        <div className="cashInput">
            <center><img className="image" src={image} alt="image"/></center>
            <div className="moneyButtons">
                 <button onClick={()=>moneyClicked(1)} style={{width:"40%"}}>$1</button>
                <button onClick={()=>moneyClicked(5)} style={{width:"40%"}}>$5</button>
                <button onClick={()=>moneyClicked(10)} style={{width:"40%"}}>$10</button>
                <button onClick={()=>moneyClicked(20)} style={{width:"40%"}}>$20</button>
                <h5>Total: ${total}</h5>
            </div>
        </div>  
    )
}


export default CashInput;