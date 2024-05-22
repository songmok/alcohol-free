import React from "react";

import {
  CounterButton,
  CounterValue,
  CounterWrapper,
} from "../../styles/basic/CountCss";
import { useRecoilState } from "recoil";
import { cartCountState } from "../../atom/CountState";

const CountKey = ({ id }) => {
  const [cartCount, setCartCount] = useRecoilState(cartCountState);

  const handleMinus = () => {
    setCartCount(prevCart => {
      const updatedCart = { ...prevCart };
      updatedCart[id] = Math.max((prevCart[id] || 0) - 1, 0);
      return updatedCart;
    });
  };

  const handlePlus = () => {
    setCartCount(prevCart => {
      const updatedCart = { ...prevCart };
      updatedCart[id] = (prevCart[id] || 0) + 1;
      return updatedCart;
    });
  };

  return (
    <CounterWrapper>
      <CounterButton onClick={handleMinus}>
        <img
          style={{ width: "13px", height: "13px" }}
          src={process.env.PUBLIC_URL + "/images/minus.svg"}
          alt="minus"
        />
      </CounterButton>
      <CounterValue>{cartCount[id]}</CounterValue>
      <CounterButton style={{ fontSize: "16px" }} onClick={handlePlus}>
        <img
          style={{ width: "13px", height: "13px" }}
          src={process.env.PUBLIC_URL + "/images/plus.svg"}
          alt="plus"
        />
      </CounterButton>
    </CounterWrapper>
  );
};

export default CountKey;
