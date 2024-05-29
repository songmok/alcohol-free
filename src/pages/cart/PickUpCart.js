import { ConfigProvider } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { Common } from "../../styles/CommonCss";
import { PB20 } from "../../styles/basic";
import { TotalPayWrap, TotalTh } from "../../styles/cart/CartTableCss";
import { BigButton, SButton } from "../../styles/common/reviewProductCss";
import { TableCustom } from "../../styles/common/tableCss";
import { cartCountState } from "../../atom/CountState";
import CountKey from "../../components/basic/CountKey";
import { useMutation } from "react-query";

const PickUpCart = ({ pickupData }) => {
  const navigate = useNavigate();
  // const [cartCount, setCartCount] = useRecoilState(cartCountState);
  const [showModal, setShowModal] = useState(false);
  const [countState, setCountState] = useRecoilState(cartCountState);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const calculatePaymentAmount = (price, amount) => {
    return (price * amount).toLocaleString(); // 콤마를 추가하여 반환합니다.
  };

  const totalOrderAmount = pickupData => {
    let total = 0;
    pickupData?.forEach(item => {
      total += item.price * item.amount;
    });
    return total;
  };

  useEffect(() => {
    setCountState(pickupData);
  }, []);

  const columnsH = [
    {
      title: "",
      dataIndex: "key",
    },
    {
      title: "이미지",
      dataIndex: "picture",
      render: (pic, record) => (
        <img style={{ width: "80px" }} src={`${pic}`} alt={`${pic}`} />
      ),
    },
    {
      title: "상품정보",
      dataIndex: "name",
    },
    {
      title: "매장",
      dataIndex: "marketname",
    },
    {
      title: "수량",
      dataIndex: "key",
      render: (text, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CountKey id={record.key} countState={record} />
        </div>
      ),
    },
    {
      title: "결제금액",
      dataIndex: "price",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* {calculatePaymentAmount(record.price, cartCount[record.key])} 원 */}
          {record.price.toLocaleString()}원
        </div>
      ),
    },
    {
      title: "삭제",
      render: record => (
        <div>
          <SButton onClick={handleDelete(record)}>삭제</SButton>
        </div>
      ),
    },
  ];

  const handleDelete = re => {
    // const postCard = {
    //   stock: re.code,
    //   amount: count,
    //   price: serverData[0].price,
    // };
  };

  // const deleteCartMutation = useMutation({
  //   mutationFn: () => deleteAddCart({ postcard }),
  //   onSuccess: () => {},
  // });
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Common.color.p900,
          },
          components: {
            Table: {
              headerBg: "none",
              headerColor: Common.color.p500,
            },
          },
        }}
      >
        <TableCustom
          // rowSelection={rowSelection}
          columns={columnsH}
          dataSource={pickupData}
          pagination={false}
        />
        {/* {showModal && <RvModal onClose={handleCloseModal} />} */}
      </ConfigProvider>
      <div
        style={{
          width: "100%",
          height: "1px",
          background: `${Common.color.p900}`,
        }}
      ></div>
      <TotalPayWrap>
        <TotalTh>
          <PB20>결제금액</PB20>
          <PB20>배송비</PB20>
          <PB20></PB20>
          <PB20>예상결제금액</PB20>
        </TotalTh>
        <TotalTh>
          <PB20>{totalOrderAmount(pickupData).toLocaleString()} 원</PB20>
          <PB20>0원</PB20>
          <PB20>=</PB20>
          <PB20>{totalOrderAmount(pickupData).toLocaleString()} 원</PB20>
        </TotalTh>
      </TotalPayWrap>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
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
      </div>
    </div>
  );
};

export default PickUpCart;
