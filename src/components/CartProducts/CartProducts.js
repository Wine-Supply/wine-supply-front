import { useDispatch, useSelector } from 'react-redux';
import { getItemsStorage } from '../../redux/action-creators';
import { Wrapper } from "./CartProductsStyle";
import CartItem from './CartItem'

const CartProducts = () => {

  const Items = useSelector((state) => state.itemsStorage);
  let dispatch = useDispatch()

  const clearItem = (_id) =>{
    let algo = Items.filter(item => item._id !== _id)
    let addItemStorage = JSON.stringify(algo)
    localStorage.setItem('item', addItemStorage)
    dispatch(getItemsStorage())
  }
  
  return (
    <Wrapper>
    <h2>Your Shopping Cart</h2>
    {Items.length === 0 ? <p>No items in cart.</p> : null}
    {Items.map(item => (
      <div key={item._id}>
        <CartItem
            item={item}
            _id={item._id}
            name={item.name}
            img={item.img}
            price={item.price}
            clearItem={clearItem}
            />
            </div>
        ))}

</Wrapper>
  )
}

export default CartProducts
