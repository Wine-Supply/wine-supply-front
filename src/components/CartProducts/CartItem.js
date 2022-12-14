import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { Wrapper } from "./CartItemStyle";
import { useDispatch } from "react-redux";
import {
  addCuantityItems,
  clearItemToCart,
  getTotalItems,
  getTotalPrice,
  subtractCuantityItems,
} from "../../redux/action-creators";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CartItem = ({
  _id,
  img,
  name,
  price,
  cuantity,
}) => {
  let stock = 10;

  const [totalPrice, setTotalPrice] = useState(price);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setTotalPrice(price * cuantity);
    dispatch(getTotalItems())
    dispatch(getTotalPrice())
  }, [cuantity]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addItem = () => {
    if (cuantity === stock) return;
    dispatch(addCuantityItems(_id))
  };

  const subsItem = () => {
    if (cuantity < 2) {
      handleOpen();
      return cuantity;
    } else {
      dispatch(subtractCuantityItems(_id))
    }
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">
              ¿You want to remove this product from the cart?
            </h2>
            <p id="parent-modal-description">{name}</p>

            <Button
              onClick={() => {
                dispatch(clearItemToCart(_id))
                dispatch(getTotalItems())
                dispatch(getTotalPrice())
              }}
            >
              ACCEPT
            </Button>
            <Button
              onClick={() => {
                handleClose();
              }}
            >
              CANCEL
            </Button>
          </Box>
        </Modal>
      </div>
      <Wrapper>
        <div className="main">
          <h3>{name}</h3>
          <div className="information">
            <p>Price: ${price}</p>
            <p>Total: ${totalPrice.toString().substring(0, 6)}</p>
          </div>
          <div className="buttons">
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={subsItem}
            >
              -
            </Button>
            <p>{cuantity}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={addItem}
            >
              +
            </Button>
          </div>
        </div>
        <img src={img} alt={name} />
        <button onClick={handleOpen}>X</button>
      </Wrapper>
    </>
  );
};

export default CartItem;
