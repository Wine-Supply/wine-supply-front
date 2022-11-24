import { DetailStyled, WineData,} from "./DetailStyled"
import { ButtonBuyNow, ButtonAddToCart } from "../utils/utils"

interface Props {
  propsItem:{
    name: string
    description: string
    type: string 
    body: string
    cropYear: number
    origin: number
    volume: number
    alcoholVolume: number
    rating: number
    images: string
    strain: string
    price: number
  }
}

export default function Detail({propsItem}: Props){
  return (
    <DetailStyled>
      <div className={"bg-container"}>
         <img className={"bg"} src={propsItem.images} alt="bg" />
         <img className={"img"} src={propsItem.images} alt="img" />
      </div> 
      <WineData>
        <div>
          <div className={'wine'}>
            <h1>
              {propsItem.name}
            </h1>
            <span>{propsItem.rating}/5★</span>
          </div>
          <p className={'body'}>
            {propsItem.body}
          </p>
        </div>
        <div className={'data'}>
          <div>
            <h3>Type: {propsItem.type}</h3>
            <h3>Year: {propsItem.cropYear}</h3>
            <h3>Origin: {propsItem.origin}</h3>
          </div>
          <div>
            <h3>Strain: {propsItem.strain}</h3>
            <h3>Volume: {propsItem.volume}ml</h3>
            <h3>Alcohol: {propsItem.alcoholVolume}vl</h3>
          </div>
        </div>
        <p className={'description'}>
         {propsItem.description}
        </p>
      </WineData>
      <div className="column">
        <h3 className={"price"}>${propsItem.price}</h3>
        <p className={"add"}>Add to WishList +</p>
        <ButtonAddToCart>Add to Cart</ButtonAddToCart>
        <ButtonBuyNow>Buy now</ButtonBuyNow>
      </div>
    </DetailStyled>
  )
}