import { useState } from "react";
import { UserStyled } from "./UserStyled";
import { ButtonSaveChanges } from "../utils/utils"
import { useDispatch } from "react-redux";

function validate(input) {
	let errors = {};
	const blanks = /^\s+$/;
	const validateLetters = /^[0-9a-zA-Z ]+$/;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneformat = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

	if (!input.name || input.name?.length === 0) {
		errors.name = "Please enter a name";
	} else if (input.name?.length < 2) {
		errors.name = "The name cannot have less than 2 characters";
	} else if (input.name?.match(blanks)) {
		errors.name = "The name cannot contain only blank spaces";
	} else if (!input.name?.match(validateLetters)) {
		errors.name = "You can only use alphanumeric characters for the name field";

  } else if (!input.lastName || input.lastName?.length === 0) {
    errors.lastName = "Please enter a lastname";
  } else if (input.lastName?.length < 3) {
    errors.lastName = "The lastname cannot have less than 3 characters";
  } else if (input.lastName?.match(blanks)) {
    errors.lastName = "The lastname cannot contain only blank spaces";
  } else if (!input.lastName?.match(validateLetters)) {
    errors.lastName = "You can only use alphanumeric characters for the lastname field";
	
  } else if (
		!input.userName ||
		input.userName?.length < 3 ||
		input.userName?.length > 14
	) {
		errors.userName = "The User Name must have between 3 and 14 characters";
	} else if (
		input.userName?.match(blanks) || 
    !input.userName?.match(validateLetters)
	) {
		errors.userName = "The User Name cannot contain only blank spaces and only use alphanumeric character";

  } else if (
    !input.email || 
    !input.email?.match(mailformat)
  ) {
    errors.email = "Please, enter a valid email address"

  } else if (
    !input.date_of_birth
  ) {
    errors.date_of_birth = "Please, enter your birthday date"
  
  } else if (
    !input.phone?.match(phoneformat)
  ) {
    errors.phone = "Please, enter a valid phone number"
  }

	return errors;
}

export default function User() {
  //user = await User.findById(user._id, "-hashedPass")
  //req.headers.authorization.startsWith("Bearer")
  
  const user = {
		name: "Cosme",
	  lastName: "Fulanito",
	  userName: "User1",
    email: "user@gmail.com",
	  isAdmin: false,
    isActive: true,
	  hashedPass: "Password123!",
    date_of_birth: 19-10-1990,
    phone: "+54(11)2599-4325",
    avatar: "https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg",
	  membership_id: [],
    isAdmin: "no",
	  address: [],
    whishList:[],
  }

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [input, setInput] = useState({
		name: "",
	  lastName: "",
	  userName: "",
    email: user?.email,
	  isAdmin: false,
    isActive: true,
	  hashedPass: user?.hashedPass,
    date_of_birth: new Date,
    phone: "",
    avatar: "https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg",
	  membership_id: [],
    isAdmin: "",
	  address: [], //* array limit = 3
    whishList:[],
	});

  function handleInput(e) {
		const { name, value } = e.target;

		setInput({ 
      ...input, 
      [name]: value 
    });

		setTimeout(() => {
			setErrors(
				validate({
					...input,
					[name]: value
				})
			);
		}, 1000);
	}

  const handleSubmit =  (e) => {
    console.log(input)
  };

  return (
    <UserStyled>
      <form>
        <div>
          <img src={input.avatar} alt="Avatar"/> 
        </div> 
        <div>
          <label>UserName</label>
          <input
						type="text"
            defaultValue={input.userName}
						placeholder= {input.userName}
						name="userName"
            required={true}
            onChange={(e) => handleInput(e)}
					/>
          <label>Name</label>
          <input
						type="text"
            defaultValue={input.name}
						placeholder= {input.name}
						name="name"
            required={true}
            onChange={(e) => handleInput(e)}
					/>
          <label>Lastname</label>
          <input
						type="text"
            defaultValue={input.lastName}
						placeholder= {input.lastName}
						name="lastName"
            required={true}
            onChange={(e) => handleInput(e)}
					/>
          <label>Mail</label>
          <input
						type="text"
            defaultValue={input.email}
						placeholder= {input.email}
						name="email"
            required={true}
            onChange={(e) => handleInput(e)}
					/>
          <label>Password</label>
          <input
						type="password"
            defaultValue={input.hashedPass}
						placeholder= {input.hashedPass}
						name="hashedPass"
            required={true}
            onChange={(e) => handleInput(e)}
					/>
          <label>Birthday</label>
          <input
						type="date"
            defaultValue={input.date_of_birth}
						placeholder= {input.date_of_birth}
						name="date_of_birth"
            required={true}
            onChange={(e) => handleInput(e)}
					/>
          <label>Phone</label>
          <input
						type="text"
            defaultValue={input.phone}
						placeholder= {input.phone}
						name="phone"
            onChange={(e) => handleInput(e)}
					/>
          <label>Address</label>
          <input
						type="text"
            defaultValue={input.address}
						placeholder= {input.address}
						name="address"
            onChange={(e) => handleInput(e)}
					/>
        </div>
        <span className="error">
					{errors.userName}
          {errors.name}
					{errors.lastName}
          {errors.email}
					{errors.date_of_birth}
					{errors.phone}
					
				</span>
        <ButtonSaveChanges type="submit" key={Math.random()}>
          Save Changes
        </ButtonSaveChanges>
      </form>
      <h2>+ WishList</h2>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </UserStyled>
  );
}