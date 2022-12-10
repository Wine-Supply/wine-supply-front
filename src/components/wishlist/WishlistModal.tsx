import { Modal } from "./ListContainer";

type Props = {
  name: string | undefined;
  img: string | undefined;
  setAddedToWishlist: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function WishlistModal({
  name,
  img,
  setAddedToWishlist,
}: Props) {
  return (
    <Modal>
      <div className="overlay"></div>
      <div className="wishlist-modal">
        <p>{name} has been added to your wishlist!</p>
        <img className="wine-img" src={img} alt={name} />
        <button onClick={() => setAddedToWishlist(false)} className="modal-btn">
          Got it
        </button>
      </div>
    </Modal>
  );
}
