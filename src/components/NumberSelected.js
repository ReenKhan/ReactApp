import '../css/NumberSelected.css'
import { useEffect, useState } from 'react';

function NumberSelected(props) {
    
    let [currentState, setCurrentState] = useState(" NotSelected");
    let [clickState, setClickState] = useState(false)
    const [numberSelected, setNumberSelected] = useState(JSON.stringify([]));
    let [displayNumber, setDisplayNumber] = useState([])
    const [selectCount, setSelectCount] = useState(1);
    const [cleared, setCleared] = useState(false);

    useEffect(() => {
        setDisplayNumber(JSON.parse(numberSelected))
    })

    useEffect(() => {
        if (clickState == false) {
            setCurrentState(" NotSelected")
        }
        else {
            setCurrentState(" Selected")
        }
    })

    useEffect(() => {
        if (setCleared === true) {
            setCleared(false)
            setCurrentState(" NotSelected")
        }

    })

    let numberSelect = JSON.parse(numberSelected)
    const ButtonClick = () => {
        let count = selectCount
        if (clickState === true) {
            setClickState(false)
            if (numberSelect.includes(props.num)) {
                count--;
                setSelectCount(count)
                for (let i = 0; i < numberSelect.length; i++) {
                    if (numberSelect[i] === props.num) {
                        numberSelect.splice(i, 1)
                    }
                }
                setNumberSelected(JSON.stringify(numberSelect))
            }
        }
        else {
            if (count < 6) {
                count++;
                setSelectCount(count)
                setClickState(true);
                numberSelect.push(props.num)
                setNumberSelected(JSON.stringify(numberSelect))
            }
            else {
                alert("Only 5 numbers can be selected")
            }
        }
    }

    return (
        <div>
            <button className={'numberSelected' + currentState} onClick={ButtonClick}>{props.num}</button>
            <div className="display">
            {displayNumber.map((number) => {
                    return <h6>Mark: {number}</h6>
                })}
            </div>
        </div>
    )
}
export default NumberSelected;