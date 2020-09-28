import PleaseSignin from "../components/PleaseSignin";
import OrderList from "../components/OrderList";

const OrderPage = (props) => {
  return (
    <PleaseSignin>
      <OrderList />
    </PleaseSignin>
  );
};

export default OrderPage;
