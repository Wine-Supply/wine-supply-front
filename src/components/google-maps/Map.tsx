type Props = {
  street: string;
  placeNumber: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
};

export default function Map({
  street,
  placeNumber,
  country,
  state,
  city,
  postalCode,
}: Props) {
  return (
    <iframe
      className="map"
      title="User's location"
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=${street}+${placeNumber}
      ,${city}+${state}+${country},${postalCode}&key=AIzaSyBmv7ldtsGd2PDnI0sCSJfrlNUuA4GuaX0`}
    ></iframe>
  );
}
