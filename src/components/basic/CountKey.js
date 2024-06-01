import {
  CounterButton,
  CounterValue,
  CounterWrapper,
} from "../../styles/basic/CountCss";

import { useCartPutMutation } from "../../api/cartPutApi";

const CountKey = ({ countState }) => {
  const amount = countState.amount;

  const { mutate: cartPutMutation } = useCartPutMutation();

  const handleMinus = () => {
    cartPutMutation({
      code: countState.id,
      amount: Math.max(amount - 1, 0),
    });
  };

  const handlePlus = () => {
    cartPutMutation({
      code: countState.id,
      amount: Math.max(amount + 1),
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
