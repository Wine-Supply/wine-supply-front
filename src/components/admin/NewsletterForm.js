import { useState } from "react";
import {
  Form,
  TextInput,
  SaveButton,
  RichTextField,
  Button,
} from "react-admin";
import { Grid } from "@mui/material";
import axios from "axios";

const NewsletterForm = () => {
  const [data, setData] = useState({
    subject: "",
    title: "",
    news: "",
    image: "",
  });

  const defaultValues = () => ({
    subject: "",
    title: "",
    news: "",
    image: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(data);
  };

  const onSubmit = async (e) => {
    await axios
      .post(
        "https://wine-supply-back-production.up.railway.app/newsletter",
        data
      )
      .then((res) =>
        setData({
          subject: "",
          title: "",
          news: "",
          image: "",
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <Form defaultValues={defaultValues}>
      <Grid container>
        <Grid item md={7} xs={12}>
          <TextInput
            source="subject"
            name="subject"
            value={data.subject}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={7} xs={12}>
          <TextInput
            source="title"
            name="title"
            value={data.title}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={7} xs={12}>
          <TextInput
            source="news"
            name="news"
            value={data.news}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            source="image"
            name="image"
            value={data.image}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          {/* <SaveButton onClick={handleSubmit(onSubmit)}/> */}
          <SaveButton onClick={onSubmit} />
        </Grid>
      </Grid>
    </Form>
  );
};

export default NewsletterForm;
