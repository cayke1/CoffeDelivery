import { useState } from "react";
import minus from "../../../assets/minus.svg"
import plus from "../../../assets/plus.svg"

export function InputNumber() {
    const [inputValue, setInputValue] = useState(0); 

    function handleChangeValue (operator: string) {
        console.log(operator)
        switch (operator) {
            case '-':  {
                if(inputValue >= 1) {
                    setInputValue(inputValue - 1)
                }
                break;
            }
            case '+': {
                setInputValue(inputValue + 1)
                break;
            }
            default:
                return;
        }
    }
    return(
        <div className="flex justify-center items-center w-16 h-9 gap-2 bg-base-button rounded-md">
            <button className="w-[10px]" onClick={() => handleChangeValue('-')}>
                <img src={minus} alt="" />
            </button>
            <p>{inputValue}</p>
            <button className="w-[10px]" onClick={() => handleChangeValue('+')}>
                <img src={plus} alt="" />
            </button>
        </div>
    )
}