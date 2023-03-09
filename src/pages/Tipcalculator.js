import "../App.css";
import { useEffect, useState } from "react";


export const Tip = () => {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState("15");
    const [split, setSplit] = useState(1);
    const [splitAmount, setSplitAmount] = useState(0);

    function tipChange(e) {
        let value = e.target.value
        setTip(value);
    };

    function handleBillChange(e) {
        setBill(e.target.value);
    }

    function minus() {
        setSplit(oldValue => (oldValue === 1) ? 1 : (oldValue - 1));
    };

    function plus() {
        setSplit(oldValue => oldValue + 1);
    };

    function calculate() {
        const percentage = 1 + parseInt(tip)/100
        const result = (bill * percentage / split).toFixed(2);
        console.log({percentage,result,tip})
        
        setSplitAmount(result);
    }

    useEffect(() => {
        calculate();
    }, [bill, tip, split]);

    return (
        <div className="App calculator">
            <div className="calculatorinfo">
                <div className="tipTitle">
                    <h1>Tip Calculator</h1>
                </div>
                <div className="total">
                    <label>Bill Total ($): </label>
                    <input type="text" size="5" placeholder="0" value={bill} onChange={handleBillChange} />
                </div>
                <div className="tip">
                    <label>Tip (%): </label>
                    <input type="text" size="2" placeholder="0" value={tip} onChange={tipChange} />
                </div>
                <div className="split">
                    <label>Split: </label>
                    <button onClick={minus}>-</button>
                    <span>{split}</span>
                    <button onClick={plus}>+</button>
                </div>
                <div className="amount">
                    <label>Split Amount ($):</label>
                    <span>{splitAmount}</span>
                </div>
            </div>
        </div>
    )
}