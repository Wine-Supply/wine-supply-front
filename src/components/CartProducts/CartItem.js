import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
//import {ItemContainer, AmountSeccion} from './CartItemStyle'
import {Wrapper} from './CartItemStyle'

const CartItem = ({_id, img, name, price, clearItem}) => {

let stock = 10

const [totalItem, setTotalItem] = useState(1)
const [totalPrice, setTotalPrice] = useState(price)

useEffect(() => {
  setTotalPrice(price * totalItem)
}, [totalItem])

const addItem =()=> totalItem === stock ? totalItem : setTotalItem(totalItem + 1)
const subsItem =()=> totalItem === 0 ? totalItem : setTotalItem(totalItem - 1)

  return (
    <Wrapper>
    <div>
        <h3>{name}</h3>
        <div className="information">
            <p>Price: ${price}</p>
            <p>Total: ${totalPrice.toString().substring(0,6)}</p>
        </div>
        <div className="buttons">
            <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={subsItem}
            >
                -
            </Button>
            <p>{totalItem}</p>            
            <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={addItem}
            >
                +
            </Button>
        </div>
    </div>
    <img src={img} alt={name} />

    <button onClick={()=>{clearItem(_id)}} >X</button>
</Wrapper>
      
  )
}

export default CartItem

/* <ItemContainer>
        <div className='image-main'>
          <img src={img} />
        </div>

        <h2>{name}</h2>

        <p>c/u $ {price}</p>

        <AmountSeccion>
          <button onClick={subsItem} >-</button>
          <p>{totalItem}</p>
          <button onClick={addItem} >+</button>
        </AmountSeccion>

        <p>TOTAL = ${totalPrice.toString().substring(0,6)}</p>

        <button onClick={()=>{clearItem(_id)}} >X</button>

      </ItemContainer> */