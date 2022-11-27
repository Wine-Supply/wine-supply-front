import React, {useState} from "react";
// import validate from "./validateFormErrors";
import axios from "axios";
import { FormStyled } from "./FormStyled";
import { ButtonSaveChanges, ButtonSubscribe } from "../utils/utils"

function validate(formData) {
	let errors = {};
	const blanks = /^\s+$/;
	const validateLetters = /^[0-9a-zA-Z ]+$/;

	if (!formData.name || formData.name?.length === 0) {
		errors.name = "Please enter the product name";
	} else if (formData.name?.length > 20) {
		errors.name = "The name cannot have more than 20 characters";
	} else if (formData.name?.match(blanks)) {
		errors.name = "The name cannot contain only blank spaces";
	} else if (!formData.name?.match(validateLetters)) {
		errors.name = "You can only use alphanumeric characters";
	} else if (
		!formData.description ||
		formData.description?.length < 20 ||
		formData.description?.length > 150
	) {
		errors.description =
			"The description must have between 20 and 150 characters";
	} else if (formData.description?.match(blanks)) {
		errors.description = "The text cannot contain only blank spaces";
	} else if (formData.type?.length === 0) {
		errors.type = "Please choose at least one type";
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
		1902, 1901, 1900
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
		price: 0
	});

	function handleChangeText(event) {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });

		setTimeout(() => {
			setErrors(
				validate({
					...formData,
					[name]: value
				})
			);
		}, 1000);
	}

	function handleChangeSelect(e) {
		const { name, value } = e.target;
		if (!formData[name].includes(value)) {
			setFormData({
				...formData,
				[name]: [...formData[name], value]
			});
			setTimeout(() => {
				setErrors(
					validate({
						...formData,
						[name]: value
					})
				);
			}, 2000);
		}
	}

	function handleChangeImages(event) {
		const { name } = event.target;
		setFormData({ ...formData, [name]:event.target.files[0] });
		
		setTimeout(() => {
			setErrors(
				validate({
					...formData,
					[name]: event.target.files[0]
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
			data.append('name', formData.name); 
			data.append('brand', formData.brand); 
			data.append('description', formData.description); 
			data.append('type', formData.type); 
			data.append('body', formData.body); 
			data.append('cropYear', formData.cropYear); 
			data.append('origin', formData.origin); 
			data.append('zone', formData.zone); 
			data.append('volume', formData.volume); 
			data.append('alcoholVolume', formData.alcoholVolume); 
			data.append('rating', formData.rating); 
			data.append('strain', formData.strain); 
			data.append('stock', formData.stock); 
			data.append('price', formData.price); 
			data.append('images', formData.images); 

			const response = await axios.post(
				"http://localhost:3001/admin/post",
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
					price: 0
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
		<FormStyled>
			<form onSubmit={handleSubmit}>
				<h2>Add Wine</h2>
				<select id="cropYear" name="cropYear" onChange={handleChangeText}>
					<option>year...</option>
					{years.map((e) => (
						<option key={e} value={e}>
							{e}
						</option>
					))}
				</select>
				<hr></hr>
				<input
					type="text"
					placeholder="name..."
					onChange={handleChangeText}
					name="name"
					value={formData.name}
				/>
				{errors.name && <p className="error">{errors.name}</p>}
				<input
					type="text"
					placeholder="brand..."
					onChange={handleChangeText}
					name="brand"
					value={formData.brand}
				/>
				<input
					type="text"
					placeholder="origin..."
					onChange={handleChangeText}
					name="origin"
					value={formData.origin}
				/>
				<input
					type="text"
					placeholder="zone..."
					onChange={handleChangeText}
					name="zone"
					value={formData.zone}
				/>
				<input
					type="text"
					placeholder="body..."
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
				<select
					id="type"
					value={formData.type}
					onChange={handleChangeText}
					name="type"
				>
					<option value={0}>Choose type ...</option>
					<option value={"red"}>Red</option>
					<option value={"white"}>White</option>
				</select>
				<hr></hr>
				<textarea
					value={formData.description}
					placeholder="Description..."
					onChange={handleChangeText}
					name="description"
				/>
				{errors.description && <p className="error">{errors.description}</p>}
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
				<label for="img">Select image:</label>
				<input type="file" id="img" name="images" accept="image/*" onInput={handleChangeImages}></input>
				
				{/* <label htmlFor="images">Images:</label>
				<br />
				<input
					type="text"
					value={formData.images}
					name="images"
					onChange={handleChangeImages}
				/> */}
			<br />
				<label htmlFor="stock">Stock:</label>
				
				<input
					type="number"
					onChange={handleChangeText}
					name="stock"
					value={formData.stock}
				/>
				<br />
				<label htmlFor="price">Price:</label>
				
				<input
					type="number"
					onChange={handleChangeText}
					name="price"
					value={formData.price}
				/>
				{Object.keys(errors).length > 0 ? (
					<button type="submit" disabled={true} key={Math.random()}>
						Cannot Submit, complete fields as required
					</button>
				) : (
					<ButtonSubscribe type="submit" key={Math.random()}>
						Add Wine
					</ButtonSubscribe>
				)}
			</form>
			<br />
			<ButtonSaveChanges type="button" onClick={handleErrorsCheck}>
				Save Changes
			</ButtonSaveChanges>
			<button type="button" onClick={() => console.log(formData)}></button>
		</FormStyled>
	);
}
