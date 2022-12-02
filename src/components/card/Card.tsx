
import { Link } from 'react-router-dom'
import {CardContainer, CardInformation, ButtonAddCart} from './CardStyle'

interface CardProps {
    _id: string
    name: string
    img: string
    descriptions: string
    price: number
    rating: number
    addStorageItem?:any
}

const Card: React.FC<CardProps> = ({_id, name, img, descriptions, price, rating, addStorageItem}) => {

  return (
    <CardContainer>
      <div className='imageMain' >
        <Link to={`detail/${_id}`}>
          <img src={img} alt={name} />
        </Link>
      </div>
      <CardInformation>
        <div className='rankingStyle'>
          <p>{rating}/5</p>
        </div>

        <h2>{name}</h2>
        
        <div className='descriptionStyle'>
          <span>Description</span>
          <p>{descriptions.substring(0,30)}...</p>
        </div>

        <div className='cardFooter'>
          <p>${price}</p>
          <ButtonAddCart onClick={()=>addStorageItem(_id, name, img, descriptions, price, rating)} >add to cart</ButtonAddCart>
        </div>
      </CardInformation>      
    </CardContainer>
  )
}

export default Card;