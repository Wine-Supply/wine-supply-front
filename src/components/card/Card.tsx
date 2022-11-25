import {CardContainer, CardInformation, ButtonAddCart} from './CardStyle'

type CardProps ={
    name: string
    img: string
    descriptions: string
    price: number
    rating: number
}

const Card: React.FC<CardProps> = ({name, img, descriptions, price, rating}) => {
  return (
    <CardContainer>
      <div className='imageMain' >
        <img src={img} alt={name} />
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
          <ButtonAddCart>add to cart</ButtonAddCart>
        </div>
      </CardInformation>      
    </CardContainer>
  )
}

export default Card;