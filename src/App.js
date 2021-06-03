import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import { incrementNum, decrementNum } from "./actions";

function App() {
  const count = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="redux_counter_container">
        <h1 className="redux_counter_container__title">
          Increment/Decrement Counter
        </h1>
        <h4 className="redux_counter_container__subtitle">Using Redux</h4>
        <div className="redux_counter_container__action">
          <a href="#" onClick={() => dispatch(decrementNum(1))}>
            -
          </a>
          <input
            type="text"
            className="redux_container__action__input"
            value={count}
            readOnly
          />
          <a href="#" onClick={() => dispatch(incrementNum(5))}>
            +
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
