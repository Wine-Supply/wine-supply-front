import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUtils, Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
//import UserList from "./Users";
import WineList from "./WineList";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import WineEdit from "./WineEdit";
import WineCreate from "./WineCreate";
import Charts from "./Charts";
import NewsletterForm from "./NewsletterForm";
import { Layout } from "react-admin";
import { MyMenu } from "./CustomStyle";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
  return fetchUtils.fetchJson(url, options);
};

const api = restProvider(
  "https://wine-supply-back-production.up.railway.app",
  httpClient
);

export const MyLayout = (props) => <Layout {...props} menu={MyMenu} />;

const AdminDash = () => {
  const token = localStorage.getItem("token");
  const data = {};
  // const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState("loading");
  const checkadmin = async () => {
    let response = await axios.post(
      "https://wine-supply-back-production.up.railway.app/AdminStatuscheck",
      null,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json, charset=utf-8",
        },
      }
    );
    if (response.data === "Admin User") {
      setIsAdmin("granted");
    } else {
      // setIsAdmin("notgranted")
      // navigate("/");
      // window.location.replace("http://localhost:3000")
    }
  };

  useEffect(() => {
    checkadmin();
  }, [isAdmin]);

  if (isAdmin === "loading") return <p>Loading ...</p>;

  return (
    <Admin
      basename="/admin"
      layout={MyLayout}
      dataProvider={api}
      dashboard={Charts}
    >
      {/* <Resource name='chart' list={Charts}/> */}
      <Resource
        name="admin/wines"
        list={WineList}
        create={WineCreate}
        edit={WineEdit}
        delete={WineList}
      />
      <Resource name="admin/users" list={UserList} edit={UserEdit} />
      <Resource name="newsletter" list={NewsletterForm} />
    </Admin>
  );
};

export default AdminDash;
