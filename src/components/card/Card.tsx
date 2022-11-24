import {CardContainer, CardInformation, ButtonAddCart} from './CardStyle'

type CardProps ={
    name: string
    img: string
    descriptions: string
    precio: number
    ranking: number
}

const Card: React.FC<CardProps> = ({name, img, descriptions, precio, ranking}) => {
  return (
    <CardContainer>
      <div>
        <img src={img} alt={name} />
      </div>
      <CardInformation>
        <div className='rankingStyle'>
          <p>{ranking}/5</p>
        </div>

        <h2>{name}</h2>
        
        <div className='descriptionStyle'>
          <span>Description</span>
          <p>{descriptions}</p>
        </div>

        <div className='cardFooter'>
          <p>${precio}</p>
          <ButtonAddCart>add to cart</ButtonAddCart>
        </div>
      </CardInformation>      
    </CardContainer>
  )
}

export default Card;