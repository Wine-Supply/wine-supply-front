import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContactUsFormStyled, FormContainer } from "./ContactUsFormStyled";

type Input = {
  name: string;
  mail: string;
  subject: string;
  text: string;
};

function validate(input: Input) {
  let errors: Input = {
    name: "",
    mail: "",
    subject: "",
    text: "",
  };
  const blanks = /^\s+$/;
  const validateLetters = /^[0-9a-zA-Z ]+$/;
  const noHtml = /<(“[^”]*”|'[^']*'|[^'”>])*>/;
  const specialCharacters = /^[<>-@/#&+\w\s]*$/;
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!input.name || input.name?.length === 0) {
    errors.name = "Please complete your name";
  } else if (input.name?.length > 20) {
    errors.name = "The name cannot have more than 20 characters";
  } else if (input.name?.match(blanks)) {
    errors.name = "The name cannot contain only blank spaces";
  } else if (!input.name?.match(validateLetters)) {
    errors.name = "You can only use alphanumeric characters for the name field";
  } else if (!input.mail?.match(emailformat)) {
    errors.name = "Please enter a valid email format";
  } else if (input.mail?.match(noHtml)) {
    errors.name = "Invalid html characters on mail field";
  } else if (!input.mail || input.mail?.length === 0) {
    errors.mail = "Please complete your mail";
  } else if (!input.subject || input.subject?.length === 0) {
    errors.subject = "Please complete your subject";
  } else if (!input.subject?.match(validateLetters)) {
    errors.name =
      "You can only use alphanumeric characters for the subject field";
  } else if (input.subject?.length > 20) {
    errors.name = "The subject cannot have more than 20 characters";
  } else if (!input.text || input.text?.length === 0) {
    errors.text = "Please complete your text";
  } else if (input.text?.match(noHtml)) {
    errors.text = "Invalid characters on text";
  } else if (input.text?.length > 200) {
    errors.text = "The text cannot have more than 200 characters";
  }
  return errors;
}

export default function ContactForm() {
  const [errors, setErrors] = useState({
    name: "",
    mail: "",
    subject: "",
    text: "",
  });
  const [input, setInput] = React.useState({
    name: "",
    mail: "",
    subject: "",
    text: "",
  });

  function handleInput(e: React.BaseSyntheticEvent) {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });

    setTimeout(() => {
      setErrors(
        validate({
          ...input,
          [name]: value,
        })
      );
    }, 1000);
  }

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);

  //*------- SUBMIT FORM-------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validate(input));

    try {
      const response = await axios.post(
        "https://wine-supply-back-production.up.railway.app/contacusmail",
        input
      );
      if (response.status >= 200 && response.status <= 205) {
        alert(
          "Thank you for contacting us, we have received your message. We will respond soon."
        );
        setInput({
          name: "",
          mail: "",
          subject: "",
          text: "",
        });
      } else {
        alert("Something went wrong, please try again");
      }
    } catch (error: any) {
      alert(`Something went wrong. ${error.message}`);
    }
  };

  return (
    <FormContainer>
      <ContactUsFormStyled onSubmit={handleSubmit}>
        <h2>Contact us</h2>
        <hr></hr>
        <label htmlFor="input-name">Name:</label>
        <input
          id="input-name"
          type="text"
          placeholder="Name..."
          name="name"
          value={input.name}
          onChange={handleInput}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <label htmlFor="input-address">Email Address:</label>
        <input
          id="input-address"
          type="mail"
          placeholder="email@example.com"
          name="mail"
          value={input.mail}
          onChange={handleInput}
          required
        />
        {errors.mail && <p className="error">{errors.mail}</p>}
        <label htmlFor="input-subject">Subject:</label>
        <input
          id="input-subject"
          type="text"
          placeholder="text title..."
          name="subject"
          value={input.subject}
          onChange={handleInput}
        />
        {errors.subject && <p className="error">{errors.subject}</p>}
        <label htmlFor="text-message">Message:</label>
        <textarea
          id="text-message"
          placeholder="Message..."
          name="text"
          value={input.text}
          onChange={handleInput}
          rows={5}
          cols={33}
        />
        {errors.text && <p className="error">{errors.text}</p>}
        {Object.values(errors).some((value) => value.length > 0) ? (
          <button
            style={{ transform: "scale(1.3)" }}
            type="submit"
            disabled={true}
            key={Math.random()}
          >
            Submit
          </button>
        ) : (
          <button
            style={{ transform: "scale(1.3)" }}
            type="submit"
            key={Math.random()}
          >
            Submit
          </button>
        )}
      </ContactUsFormStyled>
    </FormContainer>
  );
}
