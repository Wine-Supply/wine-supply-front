import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Card from "../../card/Card";
import { Section } from "./Section";
import { State } from "../../../redux/reducer";
import { getTopRatedWines, getWines } from "../../../redux/action-creators";
import LoginModal from "../../login-modal/LoginModal";
import { useNavigate } from "react-router-dom";

export default function TopRated() {
  const Products = useSelector((state: State) => state.allWines);
  const topWines = useSelector((state: State) => state.topRatedWines);
  const [token, setToken] = useState<string | null>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (topWines.length === 0) {
      dispatch(getWines());
      dispatch(getTopRatedWines());
    }
    if (token?.length === 0 && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"));
  }, [Products, token]);

  const handleLogin = () => {
    navigate("/login");
    setShowModal(false);
  };

  return (
    <Section>
      <h2 className="secondary-heading">Top rated</h2>
      <div className="cards-container">
        {topWines &&
          topWines.map((item) => (
            <Card
              _id={item._id}
              name={item.name}
              descriptions={item.description}
              img={item.images[0]}
              price={item.price}
              rating={item.rating}
              dispatch={dispatch}
              token={token}
              setShowModal={setShowModal}
            />
          ))}
        {showModal && (
          <LoginModal handleLogin={handleLogin} setShowModal={setShowModal} />
        )}
      </div>
    </Section>
  );
}
