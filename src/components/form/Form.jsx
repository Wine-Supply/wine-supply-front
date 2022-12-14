import React, { useState } from "react";
// import validate from "./validateFormErrors";
import axios from "axios";
import { FormStyled } from "./FormStyled";
import { ButtonSaveChanges } from "../utils/utils";
import Footer from "../Footer/Footer";
import Navbar from "../nav/navbar";

function validate(formData) {
  let errors = {};
  const blanks = /^\s+$/;
  const validateLetters = /^[0-9a-zA-Z ]+$/;
  const noHtml = /<(“[^”]*”|'[^']*'|[^'”>])*>/;
  const specialCharacters = /^[-@./#&+,':;!"\w\s]*$/;

  if (!formData.name || formData.name?.length === 0) {
    errors.name = "Please enter the product's name";
  } else if (formData.name?.length > 20) {
    errors.name = "The name cannot have more than 20 characters";
  } else if (formData.name?.match(blanks)) {
    errors.name = "The name cannot contain only blank spaces";
  } else if (!formData.name?.match(validateLetters)) {
    errors.name = "You can only use alphanumeric characters for the name field";
  } else if (
    !formData.description ||
    formData.description?.length < 20 ||
    formData.description?.length > 150
  ) {
    errors.description =
      "The description must have between 20 and 150 characters";
  } else if (
    formData.description?.match(blanks) ||
    formData.description?.match(noHtml) ||
    !formData.description?.match(specialCharacters)
  ) {
    errors.description =
      "The text cannot contain only blank spaces o any of these characters <\"\"''>";
  } else if (formData.type?.length === 0) {
    errors.type = "Please choose at least one type";
  } else if (!formData.brand || formData.brand?.length === 0) {
    errors.brand = "Please enter the product's brand";
  } else if (
    !formData.brand?.match(validateLetters) ||
    formData.brand?.match(blanks)
  ) {
    errors.brand =
      "You can only use alphanumeric characters for the brand field";
  } else if (!formData.origin || formData.origin?.length === 0) {
    errors.origin = "Please enter the product's origin";
  } else if (
    !formData.origin?.match(validateLetters) ||
    formData.origin?.match(blanks)
  ) {
    errors.origin =
      "You can only use alphanumeric characters for the origin field";
  } else if (!formData.zone || formData.zone?.length === 0) {
    errors.zone = "Please enter the product's zone";
  } else if (
    !formData.zone?.match(validateLetters) ||
    formData.zone?.match(blanks)
  ) {
    errors.zone = "You can only use alphanumeric characters for the zone field";
  } else if (!formData.body || formData.body?.length === 0) {
    errors.body = "Please enter the product's body";
  } else if (
    !formData.body?.match(validateLetters) ||
    formData.body?.match(blanks)
  ) {
    errors.body = "You can only use alphanumeric characters for the body field";
  } else if (!formData.strain || formData.strain?.length === 0) {
    errors.strain = "Please enter the product's grape variety";
  } else if (
    !formData.strain?.match(validateLetters) ||
    formData.strain?.match(blanks)
  ) {
    errors.strain =
      "You can only use alphanumeric characters for the grape variety";
  } else if (!formData.cropYear || formData.cropYear?.length === 0) {
    errors.cropYear = "Please enter the product's year";
  } else if (!formData.volume || formData.volume?.length === 0) {
    errors.volume = "Please enter the product's volume";
  } else if (!formData.alcoholVolume || formData.alcoholVolume?.length === 0) {
    errors.alcoholVolume = "Please enter the product's alcohol volume";
  } else if (!formData.stock || formData.stock?.length === 0) {
    errors.stock = "Please enter the stock available";
  } else if (!formData.price || formData.price?.length === 0) {
    errors.price = "Please enter the product's price";
  } else if (!formData.images || formData.images?.length === 0) {
    errors.images = "Please upload an image";
  }

  return errors;
}

export default function Form() {
  let years = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
    2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
    1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987,
    1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975,
    1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963,
    1962, 1961, 1960, 1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951,
    1950, 1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941, 1940, 1939,
    1938, 1937, 1936, 1935, 1934, 1933, 1932, 1931, 1930, 1929, 1928, 1927,
    1926, 1925, 1924, 1923, 1922, 1921, 1920, 1919, 1918, 1917, 1916, 1915,
    1914, 1913, 1912, 1911, 1910, 1909, 1908, 1907, 1906, 1905, 1904, 1903,
    1902, 1901, 1900,
  ];

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = React.useState({
    name: "",
    brand: "",
    description: "",
    type: "",
    body: "",
    cropYear: 0,
    origin: "",
    zone: "",
    volume: 0,
    alcoholVolume: 0,
    rating: 0,
    images: "",
    strain: "",
    stock: 0,
    price: 0,
  });

  function handleChangeText(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    setTimeout(() => {
      setErrors(
        validate({
          ...formData,
          [name]: value,
        })
      );
    }, 1000);
  }

  function handleChangeSelect(e) {
    const { name, value } = e.target;
    if (!formData[name].includes(value)) {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
      setTimeout(() => {
        setErrors(
          validate({
            ...formData,
            [name]: value,
          })
        );
      }, 2000);
    }
  }

  function handleChangeImages(event) {
    const { name } = event.target;
    setFormData({ ...formData, [name]: event.target.files[0] });

    setTimeout(() => {
      setErrors(
        validate({
          ...formData,
          [name]: event.target.files[0],
        })
      );
    }, 1000);
  }

  //* handle SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formData));

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("brand", formData.brand);
      data.append("description", formData.description);
      data.append("type", formData.type);
      data.append("body", formData.body);
      data.append("cropYear", formData.cropYear);
      data.append("origin", formData.origin);
      data.append("zone", formData.zone);
      data.append("volume", formData.volume);
      data.append("alcoholVolume", formData.alcoholVolume);
      data.append("rating", formData.rating);
      data.append("strain", formData.strain);
      data.append("stock", formData.stock);
      data.append("price", formData.price);
      data.append("images", formData.images);

      const response = await axios.post(
        "https://wine-supply-back-production.up.railway.app/admin/post",
        data
      );
      if (response.status >= 200 && response.status <= 205) {
        alert("Product added");
        setFormData({
          name: "",
          brand: "",
          description: "",
          type: "",
          body: "",
          cropYear: 0,
          origin: "",
          zone: "",
          volume: 0,
          alcoholVolume: 0,
          rating: 0,
          images: "",
          strain: "",
          stock: 0,
          price: 0,
        });
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (error) {
      alert(`Something went wrong. ${error.message}`);
    }
  };

  //* button validate
  const handleErrorsCheck = (e) => {
    setErrors(validate(formData));
  };

  return (
    <>
      <Navbar />
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <h2>Add Wine</h2>
          <hr></hr>
          <input
            type="text"
            placeholder="Name..."
            onChange={handleChangeText}
            name="name"
            value={formData.name}
          />
          <input
            type="text"
            placeholder="Brand..."
            onChange={handleChangeText}
            name="brand"
            value={formData.brand}
          />
          <input
            type="text"
            placeholder="Origin..."
            onChange={handleChangeText}
            name="origin"
            value={formData.origin}
          />
          <input
            type="text"
            placeholder="Zone..."
            onChange={handleChangeText}
            name="zone"
            value={formData.zone}
          />
          <input
            type="text"
            placeholder="Body..."
            onChange={handleChangeText}
            name="body"
            value={formData.body}
          />
          <input
            type="text"
            placeholder="Grape Variety..."
            onChange={handleChangeText}
            name="strain"
            value={formData.strain}
          />

          <select id="cropYear" name="cropYear" onChange={handleChangeText}>
            <option>Year</option>
            {years.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>

          <select
            id="type"
            value={formData.type}
            onChange={handleChangeText}
            name="type"
          >
            <option value={0}>Choose type</option>
            <option value={"red"}>Red</option>
            <option value={"white"}>White</option>
          </select>

          <input
            type="number"
            id="volume"
            name="volume"
            min="50"
            max="2500"
            step="50"
            placeholder="Volume"
            onChange={handleChangeText}
          ></input>

          <input
            type="number"
            id="alcoholVolume"
            name="alcoholVolume"
            min="2"
            max="20"
            step="0.1"
            placeholder="Alcohol Volume"
            onChange={handleChangeText}
          ></input>

          {/* <label htmlFor="images">Images:</label>
				<br />
				<input
					type="text"
					value={formData.images}
					name="images"
					onChange={handleChangeImages}
				/> */}
          <div>
            <label htmlFor="stock">Stock:</label>

            <input
              type="number"
              onChange={handleChangeText}
              name="stock"
              value={formData.stock}
            />

            <label htmlFor="price">Price:</label>

            <input
              type="number"
              onChange={handleChangeText}
              name="price"
              value={formData.price}
            />
            <div className="div2">
              <label for="img">Upload image:</label>

              <input
                className="img"
                type="file"
                id="img"
                name="images"
                accept="image/*"
                onInput={handleChangeImages}
              ></input>
            </div>
          </div>

          <textarea
            value={formData.description}
            placeholder="Description..."
            onChange={handleChangeText}
            name="description"
          />
          <div className="end">
            <p className="error">
              {errors.name}
              {errors.brand}
              {errors.origin}
              {errors.zone}
              {errors.body}
              {errors.strain}
              {errors.cropYear}
              {errors.type}
              {errors.volume}
              {errors.alcoholVolume}
              {errors.stock}
              {errors.price}
              {errors.images}
              {errors.description}
            </p>
            {Object.keys(errors).length > 0 ? (
              <ButtonSaveChanges
                style={{ transform: "scale(1.3)" }}
                type="submit"
                disabled={true}
                key={Math.random()}
              >
                Add Wine
              </ButtonSaveChanges>
            ) : (
              <ButtonSaveChanges
                style={{ transform: "scale(1.3)" }}
                type="submit"
                key={Math.random()}
              >
                Add Wine
              </ButtonSaveChanges>
            )}
          </div>
        </form>
      </FormStyled>
      <Footer />
    </>
  );
}
/*
<ButtonSaveChanges type="button" onClick={handleErrorsCheck}>
				Save Changes
			</ButtonSaveChanges>
			<button type="button" onClick={() => console.log(formData)}></button>
			*/
