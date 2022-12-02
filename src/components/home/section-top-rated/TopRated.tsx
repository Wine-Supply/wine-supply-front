import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Card from "../../card/Card";
import { Section } from "./Section";
import { State } from "../../../redux/reducer";
import { getTopRatedWines, getWines } from "../../../redux/action-creators";

export default function TopRated() {
  const Products = useSelector((state: State) => state.allWines);
  const topWines = useSelector((state: State) => state.topRatedWines);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (topWines.length === 0) {
      dispatch(getWines());
      dispatch(getTopRatedWines());
    }
  }, [Products]);

  return (
    <Section>
      <h2 className="secondary-heading">Top rated</h2>
      <div className="cards-container">
        {topWines &&
          topWines.map((item) => (
            <Card
              _id={item._id}
              key={item.description}
              name={item.name}
              descriptions={item.description}
              img={item.images[0]}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>
    </Section>
  );
}
