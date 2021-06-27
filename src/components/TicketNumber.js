import Number from './NumberSelected';
import {useState } from 'react';
import '../css/TicketNumber.css'
function TicketNumber() {

    const [numberSelected, setNumberSelected] = useState(JSON.stringify([]));
    const [selectCount, setSelectCount] = useState(0);
    const [cleared, setCleared] = useState(false);
    const [total, setTotal] = useState([0]);

    const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const clear = () => {
        window.location.reload(false);
        setTotal([])
        setNumberSelected([])
        setSelectCount(selectCount, 1)
        setCleared(true)
    }

    const cashPressed = () => {
        const checkCount = parseInt(selectCount);
        if (checkCount < 5) {
            alert("Please select 5 numbers!")

        }

        else {
            alert("The total is:" + total)
        }
    }

    const newArr = [];
    function randomButton(Arr) {
        var rand = Arr[Math.floor(Math.random() * Arr.length)];
        if (!newArr.includes(rand)) {
            newArr.push(rand);
        } else {
            randomButton(Arr);
        }
    }


    return (
        <div className="TicketNumber">
            <div className="number-buttons">
                {numberArr.map((num) => {
                    return <Number num={num} />
                })}
                <button onClick={cashPressed} className="bigButtons">
                    Cash
                </button>
                <button onClick={clear} className="bigButtons">
                    Clear
                </button>
                <button onClick={randomButton(numberArr)} className="bigButtons">
                    Random
                </button>
            </div>
        </div>
    )
}

export default TicketNumber;