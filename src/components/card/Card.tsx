import {CardContainer, CardInformation, ButtonAddCart} from './CardStyle'

interface Props {
  propsItem:{
    name: string
    img: string
    descriptions: string
    precio: number
    ranking: number
  }
}

export default function Card({propsItem}: Props) {
  return (
    <CardContainer>
      <div>
        <img src={propsItem.img} alt={propsItem.name} />
      </div>
      <CardInformation>
        <div className='rankingStyle'>
          <p>{propsItem.ranking}/5</p>
        </div>

        <h2>{propsItem.name}</h2>
        
        <div className='descriptionStyle'>
          <span>Description</span>
          <p>{propsItem.descriptions}</p>
        </div>

        <div className='cardFooter'>
          <p>${propsItem.precio}</p>
          <ButtonAddCart>add to cart</ButtonAddCart>
        </div>
      </CardInformation>      
    </CardContainer>
  )
}
