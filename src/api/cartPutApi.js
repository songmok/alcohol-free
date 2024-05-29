import jwtAxios from "../util/jwtUtil";
import { SERVER_URL } from "./config";

export const cartPutApi = async ({ code, market, delivery, amount }) => {
  const body = {
    alcoholcode: code,
    marketname: market,
    amount: amount,
    delivery: delivery,
  };
  console.log("body", body);
  try {
    const response = await jwtAxios.put(`${SERVER_URL}/shoppingbasket`, body);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
  }
};
