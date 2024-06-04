import { Common } from "../../styles/CommonCss";
import { CloseBt } from "../../styles/detail/mapModalWrapCss";
import styled from "@emotion/styled/macro";
import { BigButton, MarginB40 } from "../../styles/common/reviewProductCss";
import { PB16, PB20 } from "../../styles/basic";
import { useWishDeleteMutation } from "../../api/wishListApi";

export const WishDeleteModal = ({ onClose, data }) => {
  const { mutate: wishDeleteMutate } = useWishDeleteMutation();

  const fetchData = code => {
    wishDeleteMutate({
      code: code,
      failFn: () => {
        alert("데이터 호출 실패했습니다");
      },
      errorFn: () => {
        alert("서버상태 불안정 다음에 상품불러오기 시도");
      },
    });
  };

  const CartModalStyle = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  `;
  const CartModalWrap = styled.div`
    position: relative;
    min-width: 350px;
    height: 250px;
    background-color: ${Common.color.p100};
    padding: 20px;
    margin: 0 auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  `;
  const CartModalinfo = styled.div`
    width: 100%;
    /* background-color: aquamarine; */
    position: relative;
    /* display: flex; */
    text-align: center;
    justify-content: center;
    margin: 30px 0 20px 0;
  `;

  return (
    <CartModalStyle>
      <CartModalWrap>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <CloseBt onClick={onClose}>
            <img src={process.env.PUBLIC_URL + "/images/close2.svg"}></img>
          </CloseBt>
        </div>
        <CartModalinfo>
          <PB20 style={{ paddingBottom: "15px" }}>{data.name}</PB20>
          <PB16>{data.marketname}</PB16>
          <MarginB40 />
          <BigButton
            style={{
              background: `${Common.color.p000}`,
              border: `1px solid ${Common.color.p300}`,
            }}
            onClick={() => {
              fetchData(data.code);
              onClose();
            }}
          >
            해당항목 삭제하기
          </BigButton>
        </CartModalinfo>
      </CartModalWrap>
    </CartModalStyle>
  );
};

export default WishDeleteModal;
