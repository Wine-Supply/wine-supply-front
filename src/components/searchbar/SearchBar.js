import { useState } from "react";
// import axios from "axios";
import { SearchBarStyled } from "./SearchBarStyled";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { searchWines } from "../../redux/action-creators";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  // const [matched, setMatched] = useState([]);

  const handleInputChange = (e) => {
    // e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = () => {
    dispatch(searchWines(input));
    // e.preventDefault();
    // try {
    //   const response = await axios.get(
    //     `https://wine-supply-back-production.up.railway.app/wines/search?input=${input}`
    //   );
    //   if (response.status >= 200 && response.status <= 205) {
    //     setMatched(response.data);
    //     console.log(response.data);
    //   } else {
    //     alert("Something went wrong, please try again");
    //   }
    // } catch (error) {
    //   alert(`Something went wrong. ${error.message}`);
    // }
    setInput("");
  };

  return (
    <SearchBarStyled>
      <input
        type="text"
        value={input}
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <SearchOutlined className="button" type="submit" onClick={handleSubmit}>
        {" "}
        Search{" "}
      </SearchOutlined>
    </SearchBarStyled>
  );
};

export default SearchBar;
