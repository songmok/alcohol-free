import React from "react";
import { Common } from "../../styles/CommonCss";
import { BigButton, DeleteButton } from "../../styles/common/reviewProductCss";
import { useNavigate } from "react-router";

const CartOrderDelButton = ({ handleOpenCartAllDeleteModal }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <div className="cart-button">
        <BigButton
          style={{
            background: `${Common.color.b900}`,
            color: ` ${Common.color.p000}`,
            border: "none",
            fontSize: "16px",
            fontWeight: "normal",
          }}
          onClick={() => navigate(`/paycom`)}
        >
          주문하기
        </BigButton>
        <DeleteButton
          onClick={() => {
            handleOpenCartAllDeleteModal();
          }}
        >
          전체 삭제하기
        </DeleteButton>
      </div>
    </div>
  );
};

export default CartOrderDelButton;
