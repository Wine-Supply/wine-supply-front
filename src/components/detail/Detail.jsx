import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getWineDetail,
  buyItem,
  getWineReviews,
  getUserId,
  showLoginModal,
  getWines,
  clearPage,
} from "../../redux/action-creators";
import {
  Comments,
  CommentsUsers,
  DetailStyled,
  RankingValue,
  WineData,
  Container,
} from "./DetailStyled";
import { ButtonBuyNow, ButtonAddToCart } from "../utils/utils";
import Navbar from "../nav/navbar";
import Footer from "../Footer/Footer";
import CarritoFull from "../carritoFull/CarritoFull";
import { addStorageItem } from "../catalogo/CatalogueProducts";
import LoginModal from "../login-modal/LoginModal";
import Load from "../loading/Load";

export default function Detail() {
  const [userComments, setUserComments] = useState("");
  const [userRating, setUserRating] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const User = useSelector((state) => state.user);
  const wineDetail = useSelector((state) => state.wineDetail);
  const WineReview = useSelector((state) => state.wineReviews);
  const { id } = useParams();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const loginModal = useSelector((state) => state.loginModal);
  const navigate = useNavigate();

  const {
    name,
    brand,
    description,
    images,
    alcoholVolume,
    rating,
    price,
    body,
    type,
    cropYear,
    origin,
    strain,
    volume,
  } = useSelector((state) => state.wineDetail);

  useEffect(() => {
    dispatch(getWineDetail(id));
    dispatch(getWineReviews(id));

    if (token?.length === 0 && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"));

    return () => {
      dispatch(clearPage());
    };
  }, [dispatch, id, token, wineDetail.length]);

  useEffect(() => {
    if (name) {
      setIsLoading(false);
    }
  }, [name]);

  const handleAddItemToCart = () => {
    if (token.length === 0) {
      dispatch(showLoginModal());
    } else
      addStorageItem(id, name, images, description, price, rating, dispatch);
  };

  const handleLogin = () => {
    navigate("/login");
    dispatch(showLoginModal());
  };

  const AddComment = async () => {
    console.log(User);
    const verifyComments = WineReview.filter((wr) => wr.user_id === User._id);
    if (verifyComments.length > 0) {
      let data = {
        review_id: verifyComments[0]._id,
        wine_id: id,
        comment: userComments,
        rating: parseInt(userRating),
      };
      await fetch("https://wine-supply-back-production.up.railway.app/updateReviews", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => alert(response.message))
        .catch((error) => console.error("Error:", error));
    } else {
      let data = {
        user_id: User._id,
        wine_id: id,
        username: User.userName,
        comment: userComments,
        rating: userRating,
      };
      await fetch("https://wine-supply-back-production.up.railway.app/postReviews", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => alert(response.message))
        .catch((error) => console.error("Error:", error));
    }
    dispatch(getWineReviews(id));
    dispatch(getWines());
    setUserComments("");
    document
      .querySelectorAll(".rating-check")
      .forEach((check) => (check.checked = false));
  };

  //<div className={"bg-container"}><img className={"bg"} src={images} alt="bg" /></div>
  return (
    <>
      <Navbar />
      <CarritoFull />
      {isLoading ? (
        <Container>
          <Load />
        </Container>
      ) : (
        <Container>
          <DetailStyled>
            <div className={"bg"}>
              <img className={"img"} src={images} alt="img" />
            </div>
            <WineData>
              <div>
                <div className={"wine"}>
                  <h1>{name}</h1>
                  <span>{rating}/5★</span>
                </div>
                <p className={"body"}>{body}</p>
              </div>
              <div className={"data"}>
                <div>
                  <h3>Type: {type}</h3>
                  <h3>Year: {cropYear}</h3>
                  <h3>Origin: {origin}</h3>
                  <h3>Strain: {strain}</h3>
                </div>
                <div>
                  <h3>Brand: {brand}</h3>
                  <h3>Volume: {volume}ml</h3>
                  <h3>Alcohol: {alcoholVolume}vl</h3>
                </div>
              </div>
              <p className={"description"}>{description}</p>
            </WineData>
            <div className="column">
              <h3 className={"price"}>${price}</h3>
              <p className={"add"}>Add to WishList +</p>
              <div className="btns">
                <ButtonAddToCart
                  onClick={handleAddItemToCart}
                  style={{ transform: "scale(1.5)", margin: "1.2rem" }}
                >
                  Add to Cart
                </ButtonAddToCart>
                <ButtonBuyNow
                  onClick={() => buyItem(id, token)}
                  style={{ transform: "scale(1.5)", margin: "1.2rem" }}
                >
                  Buy now
                </ButtonBuyNow>
              </div>
            </div>
            {loginModal && <LoginModal handleLogin={handleLogin} />}
          </DetailStyled>
          <Comments>
            {token !== "" && (
              <>
                <h2 className="comment-title">
                  Leave your comment about this product
                </h2>
                <textarea
                  value={userComments}
                  onChange={(e) => setUserComments(e.target.value)}
                  type="text"
                  name="textarea"
                  rows="4"
                  className="textarea"
                  placeholder="Write your comment..."
                />
                <RankingValue>
                  <div className="checkPoint">
                    <input
                      className="rating-check"
                      type="radio"
                      name="ranking"
                      id="1"
                      onChange={(e) => setUserRating(e.target.id)}
                    />
                    1★
                  </div>
                  <div className="checkPoint">
                    <input
                      className="rating-check"
                      type="radio"
                      name="ranking"
                      id="2"
                      onChange={(e) => setUserRating(e.target.id)}
                    />
                    2★
                  </div>
                  <div className="checkPoint">
                    <input
                      className="rating-check"
                      type="radio"
                      name="ranking"
                      id="3"
                      onChange={(e) => setUserRating(e.target.id)}
                    />
                    3★
                  </div>
                  <div className="checkPoint">
                    <input
                      className="rating-check"
                      type="radio"
                      name="ranking"
                      id="4"
                      onChange={(e) => setUserRating(e.target.id)}
                    />
                    4★
                  </div>
                  <div className="checkPoint">
                    <input
                      className="rating-check"
                      type="radio"
                      name="ranking"
                      id="5"
                      onChange={(e) => setUserRating(e.target.id)}
                    />
                    5★
                  </div>
                </RankingValue>
                <ButtonBuyNow onClick={AddComment}>Add comment</ButtonBuyNow>
              </>
            )}
            <div>
              {WineReview.length > 0 && (
                <h2 className="comment-title">Comments</h2>
              )}
              {WineReview.length > 0 ? (
                WineReview.map((rew) => {
                  const date = new Date(rew.date).toLocaleDateString("es");
                  return (
                    <CommentsUsers key={rew.review_id}>
                      <h3>{rew.rating}/5★</h3>
                      <div className="user">
                        <h4>{rew.username ? rew.username : rew.user_id}</h4>
                      </div>
                      <p>{rew.comment}</p>
                      <span>date: {date}</span>
                    </CommentsUsers>
                  );
                })
              ) : (
                <h2 className="comment-title">
                  No comments were made about this wine
                </h2>
              )}
            </div>
          </Comments>
        </Container>
      )}
      <Footer />
    </>
  );
}
