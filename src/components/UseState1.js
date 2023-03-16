import React, { useState } from "react";

const UseState1 = () => {
  // const arr = useState(10)

  // variable, method

  const [coin, setCoin] = useState(0);

  // let a = 10

  // function updateA(){
  //   console.log("Click Done")
  //   a = a + 1
  // }

  // function updateCoin(){
  //   console.log("Click Done")
  //   setCoin(coin + 1)
  // }

  return (
    <div>
      <h1>{coin}</h1>
      <button onClick={() => setCoin(coin + 1)}>Update Coin</button>
    </div>
  );
};

export default UseState1;
