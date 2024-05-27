import jwtAxios from "../util/jwtUtil";
import { SERVER_URL } from "./config";

export const cartPutApi = async ({ postCard }) => {
  const body = {
    alcoholcode: code,
    marketname: market,
    amount: amount,
    delivery: delivery,
  };
  try {
    const response = await jwtAxios.get(
      `${SERVER_URL}/shoppingbasket`,
      postCard,
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
  }
};
