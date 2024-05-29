import React, { useState } from "react";

import {
  CounterButton,
  CounterValue,
  CounterWrapper,
} from "../../styles/basic/CountCss";
import { useRecoilState } from "recoil";
import { cartCountState } from "../../atom/CountState";
import { useMutation, useQueryClient } from "react-query";
import { cartPutApi } from "../../api/cartPutApi";

const useCartPutMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    ({ code, amount, market, delivery }) =>
      cartPutApi({ code, amount, market, delivery }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      },
      onError: error => {
        console.error("Error updating cart:", error);
      },
    },
  );
  return { mutate, isLoading };
};

const CountKey = ({ countState }) => {
  const amount = countState.amount;

  const { mutate: cartPutMutation, isLoading: cartPutIsLoading } =
    useCartPutMutation();

  const handleMinus = () => {
    cartPutMutation({
      code: countState.stock,
      market: countState.marketname,
      amount: Math.max(amount - 1, 0),
      delivery: countState.delivery,
    });
  };

  const handlePlus = () => {
    cartPutMutation({
      code: countState.stock,
      market: countState.marketname,
      amount: Math.max(amount + 1),
      delivery: countState.delivery,
    });
  };

  return (
    <CounterWrapper>
      <CounterButton onClick={handleMinus} key={countState.stock}>
        <img
          style={{ width: "13px", height: "13px" }}
          src={process.env.PUBLIC_URL + "/images/minus.svg"}
          alt="minus"
        />
      </CounterButton>
      <CounterValue>{amount}</CounterValue>
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
