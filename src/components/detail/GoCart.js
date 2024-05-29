import React, { useState } from "react";
import MapModal from "../modal/MapModal";
import { BigButton, PlaceBt } from "../../styles/common/reviewProductCss";
import CartModal from "../modal/CartModal";
import { Common } from "../../styles/CommonCss";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { deleteAddCart, postAddCart } from "../../api/productApi";
import { useSetRecoilState } from "recoil";
import { cartCountState } from "../../atom/CountState";

export const GoMapModal = () => {
  const [isMapModalOpen, setMapModalOpen] = useState(false);

  const { code } = useParams();
  const handleOpenMapModal = () => {
    setMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setMapModalOpen(false);
  };

  return (
    <div>
      {isMapModalOpen && <MapModal onClose={handleCloseMapModal} code={code} />}
      <PlaceBt onClick={handleOpenMapModal}> 판매처 선택</PlaceBt>
    </div>
  );
};

//
export const GoCartModal = ({ postcard }) => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const addCartMutation = useMutation({
    mutationFn: () => postAddCart({ postcard }),
    onSuccess: () => {
      setCartModalOpen(true);
    },
  });

  const handleOpenCartModal = () => {
    addCartMutation.mutate(postcard);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <div>
      {isCartModalOpen && <CartModal onClose={handleCloseCartModal} />}
      <BigButton
        onClick={handleOpenCartModal}
        style={{
          background: `${Common.color.p000}`,
          border: `1px solid ${Common.color.p300}`,
        }}
      >
        장바구니 담기
      </BigButton>
    </div>
  );
};
