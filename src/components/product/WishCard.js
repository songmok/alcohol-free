import { Common } from "../../styles/CommonCss";
import { CardFlex } from "../../styles/main/cardStlye";
import { ProCardContainer } from "../../styles/product/proCardCss";
import OptiPlaceholder from "../image-opti/OptiPlaceholder";
import OptiWireframe from "../image-opti/OptiWireframe";
import useCustomMove from "../../hooks/useCustomMove";
import useModal from "../../hooks/useModal";
import WishDeleteModal from "../modal/WishDeleteModal";

const WishCard = ({ data }) => {
  const {
    isOpen: wishDeleteModalIsOpne,
    modalOpen: wishDeleteModalOpen,
    modalClose: wishDeleteModalClose,
  } = useModal();

  const { moveToDetail } = useCustomMove();

  return (
    <ProCardContainer>
      {wishDeleteModalIsOpne && (
        <WishDeleteModal onClose={wishDeleteModalClose} data={data} />
      )}
      <OptiPlaceholder
        alt=""
        width={240}
        height={240}
        placeholder={
          <div>
            <OptiWireframe width={240} height={240} />
          </div>
        }
        src={data?.picture}
        onClick={() => moveToDetail(data?.code)}
      />
      <CardFlex>
        <div className="tagform">
          <button className="wish-bt" onClick={() => wishDeleteModalOpen()}>
            <img src={process.env.PUBLIC_URL + `/images/star.png`} alt="star" />
          </button>
          <p className="productNm" style={{ color: Common.color.p900 }}>
            {data?.name}
          </p>
        </div>
      </CardFlex>
    </ProCardContainer>
  );
};
export default WishCard;
