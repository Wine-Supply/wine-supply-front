import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useParams } from "react-router-dom"
import { getWineDetail } from "../../redux/action-creators"
import { State } from '../../redux/reducer/index'
import { DetailStyled, WineData,} from "./DetailStyled"
import { ButtonBuyNow, ButtonAddToCart } from "../utils/utils"

export default function Detail(){

  const { id } = useParams();
  let dispatch: Dispatch<any> = useDispatch()

  // const {
  //   name,
  //   brand,
  //   description,
  //   images,
  //   alcoholVolume,
  //   rating,
  //   price,
  // } = useSelector((state:State) => state.wineDetail)

  const detail = {
    name: "Wine name",
    description: "Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos, sapiente molestiae consequatur temporibus asperiores tempora obcaecati sunt nostrum dicta.", 
    type: "Wine type",
    body: "Wine body",
    cropYear: 2000,
    origin: "rece",
    volume: 500,
    alcoholVolume: 15,
    rating: 4,
    images: "https://pngimg.com/uploads/wine/wine_PNG99057.png",
    strain: "string",
    price: 192,
  }

  useEffect(()=>{
    dispatch(getWineDetail(id))
  },[dispatch, id]) 

  return (
    <DetailStyled>
      <div className={"bg-container"}>
         <img className={"bg"} src={detail.images} alt="bg" />
         <img className={"img"} src={detail.images} alt="img" />
      </div> 
      <WineData>
        <div>
          <div className={'wine'}>
            <h1>
              {detail.name}
            </h1>
            <span>{detail.rating}/5★</span>
          </div>
          <p className={'body'}>
            {detail.body}
          </p>
        </div>
        <div className={'data'}>
          <div>
            <h3>Type: {detail.type}</h3>
            <h3>Year: {detail.cropYear}</h3>
            <h3>Origin: {detail.origin}</h3>
          </div>
          <div>
            <h3>Strain: {detail.strain}</h3>
            <h3>Volume: {detail.volume}ml</h3>
            <h3>Alcohol: {detail.alcoholVolume}vl</h3>
          </div>
        </div>
        <p className={'description'}>
         {detail.description}
        </p>
      </WineData>
      <div className="column">
        <h3 className={"price"}>${detail.price}</h3>
        <p className={"add"}>Add to WishList +</p>
        <ButtonAddToCart>Add to Cart</ButtonAddToCart>
        <ButtonBuyNow>Buy now</ButtonBuyNow>
      </div>
    </DetailStyled>
  )
}