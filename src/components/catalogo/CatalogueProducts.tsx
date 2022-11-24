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
    
      dispatch(getWines())
    
  },[]) 

console.log(Products)
const catalogo =[
  {name: 'Vino Altaland',
    img: 'https://tiendadevinos.ar/wp-content/uploads/2020/10/Libertad-Altaland-Pinot-noir-Patagonia.jpg',
    descriptions: 'Altaland TINTO HISTÓRICO MALBEC PETIT VERDOT de bodegas La Libertad',
    precio: 299.99,
    ranking: 4},
    {name: 'Vino Altaland',
    img: 'https://tiendadevinos.ar/wp-content/uploads/2020/10/Libertad-Altaland-Pinot-noir-Patagonia.jpg',
    descriptions: 'Altaland TINTO HISTÓRICO MALBEC PETIT VERDOT de bodegas La Libertad',
    precio: 299.99,
    ranking: 4},
    {name: 'Vino Altaland',
    img: 'https://tiendadevinos.ar/wp-content/uploads/2020/10/Libertad-Altaland-Pinot-noir-Patagonia.jpg',
    descriptions: 'Altaland TINTO HISTÓRICO MALBEC PETIT VERDOT de bodegas La Libertad',
    precio: 299.99,
    ranking: 4}
]


  return (
    <CatalogoContainer>
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
    </CatalogoContainer>
  )
}
