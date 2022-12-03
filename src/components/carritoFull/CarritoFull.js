import { Drawer } from "@mui/material";
import CartProducts from "../CartProducts/CartProducts";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../redux/action-creators";

const CarritoFull = () => {
  const cartOpen = useSelector((state) => state.openCart);
  let dispatch = useDispatch();

  return (
    <Drawer anchor="right" open={cartOpen} onClose={() => dispatch(openCart())}>
      <CartProducts />
    </Drawer>
  );
};

export default CarritoFull;
