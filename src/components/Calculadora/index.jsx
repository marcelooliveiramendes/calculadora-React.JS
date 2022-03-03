import { useState } from 'react';
import './style.css';

export default function Calculadora() {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operetor, setOperator] = useState();




    const handleGetNum = (e) => {
        var input = e.target.value;
        if(num === 0){
          setNum(input)
        }else{
          setNum(num + input);
        }
    }

    const clear = () =>{
      setNum(0);
    }

    const handleOperator = (e) => {
      var inputOperator = e.target.value;
      setOperator(inputOperator);
      setNum2(num);
      setNum(0);
    }

    const calculate = () => {
      if(operetor === "/"){
        setNum(parseFloat(num2) / parseFloat(num))
      }
      if(operetor === "X"){
        setNum(parseFloat(num2) * parseFloat(num))
      }
      if(operetor === "-"){
        setNum(parseFloat(num2) - parseFloat(num))
      }
      if(operetor === "+"){
        setNum(parseFloat(num2) + parseFloat(num))
      }
    }


    return(
        <div className='content'>
          <div className='result'>
            <h1>{num}</h1>
          </div>
          <div className="btns">
            <button onClick={clear} className={'clearBtn'}>C</button>
              <button onClick={handleOperator} value={'/'}>/</button>
              <button onClick={handleOperator} value={'X'}>X</button>

              <button onClick={handleGetNum} value={7}>7</button>
                <button onClick={handleGetNum} value={8}>8</button>
                <button onClick={handleGetNum} value={9}>9</button>
                <button onClick={handleOperator} value={'-'}>-</button>

                <button onClick={handleGetNum} value={4}>4</button>
                <button onClick={handleGetNum} value={5}>5</button>
                <button onClick={handleGetNum} value={6}>6</button>
                <button onClick={handleOperator} value={'+'}>+</button>

                <button onClick={handleGetNum} value={1}>1</button>
                <button onClick={handleGetNum} value={2}>2</button>
                <button onClick={handleGetNum} value={3}>3</button>
                <button onClick={calculate} className={"equal"}>=</button>

                <button onClick={handleGetNum} value={0}>0</button>
                <button onClick={handleGetNum} value={"00"}>00</button>
                <button>.</button>

          </div>
        </div>
    )
}
