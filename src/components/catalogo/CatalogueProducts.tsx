import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { getWines } from '../../redux/action-creators'
import { Link } from "react-router-dom"
import Card from "../card/Card"
import { CatalogoContainer, TitleCategory } from "./CatalogoStyle"
import {State} from '../../redux/reducer/index'

export default function CatalogueProducts() {

  const Products = useSelector((state:State) => state.allWines)

  let dispatch: Dispatch<any> = useDispatch()

  useEffect(()=>{
    if(Products!.length === 0){
      dispatch(getWines())
    }
  },[]) 

  return (
    <CatalogoContainer>
      <div>
        <TitleCategory>Most Recommended</TitleCategory>
        <div className="productCointainer">
          {Products?.map((el) =>{
            return <Link to={`detail/${el.id}`} key={el.id}>
            <Card
              name = {el.name}
              descriptions = {el.description}
              img = {el.images[0]}
              price={el.price}
              rating={el.rating}
            />
            </Link>
          })}
        </div>
      </div>
    </CatalogoContainer>
  )
}
