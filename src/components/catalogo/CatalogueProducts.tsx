import { useEffect, useState } from 'react'
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

  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    if(Products!.length === 0){
      dispatch(getWines())
    }
 //   setAllProducts(Products)
  },[]) 

console.log(Products)

  return (
    <CatalogoContainer>
      <div>
        <TitleCategory>Most Recommended</TitleCategory>
        {/* <div className="productCointainer">
          {Products?.map((el) =>{
            return <Link to={''} key={el.id}>
            <Card
              name = {el.name}
              descriptions = {el.description}
              img = {el.images[0]}
              price={el.price}
              rating={el.rating}
            />
            </Link>
          })}
        </div> */}
      </div>
     {/*  
      <div>
        <TitleCategory>Most Recommended</TitleCategory>
        <div className="productCointainer">
          {catalogo.map(el=>{
            return <Link to={''}>
            <Card
              name = {el.name}
              descriptions = {el.descriptions}
              img = {el.img}
              precio={el.precio}
              ranking={el.ranking}
            />
            </Link>
          })}
        </div>
      </div>

      <div>
        <TitleCategory>Most Recommended</TitleCategory>
        <div className="productCointainer">
          {catalogo.map(el=>{
            return <Link to={''}>
            <Card
              name = {el.name}
              descriptions = {el.descriptions}
              img = {el.img}
              precio={el.precio}
              ranking={el.ranking}
            />
            </Link>
          })}
        </div>
      </div>

      <div>
        <TitleCategory>Most Recommended</TitleCategory>
        <div className="productCointainer">
          {catalogo.map(el=>{
            return <Link to={''}>
            <Card
              name = {el.name}
              descriptions = {el.descriptions}
              img = {el.img}
              precio={el.precio}
              ranking={el.ranking}
            />
            </Link>
          })}
        </div>
      </div>    */}
    </CatalogoContainer>
  )
}
