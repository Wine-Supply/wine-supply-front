import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import OriginPie from "./PieOrigin";
import axios from "axios";
import User from "../user-profile/User";
import { Grid, Card } from "@mui/material";
import { PieChart, GroupAdd } from "@mui/icons-material";
import NewUsers from "./NewUsersList";
import CardUser from "./Card";

const token = localStorage.getItem("token");
// let UserData = [];

function Charts() {
  const StatsUserWeek = async () => {
    let result = await axios.get(
      `https://wine-supply-back-production.up.railway.app/admin/stats/perweek?model=UserModel`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json, charset=utf-8",
        },
      }
    );

    setUserDataWeek({
      labels: result.data.map((e) => e._id),
      datasets: [
        {
          label: "New Users (week)",
          data: result.data.map((e) => e.total),
          backgroundColor: [
            "rgb(54, 162, 235)",
            "rgb(255, 99, 132)",
            "rgb(255, 205, 86)",
          ],
          borderColor: "transparent",
          borderWidth: "2",
        },
      ],
    });
  };

  const StatsShoppingWeek = async () => {
    let result = await axios.get(
      `https://wine-supply-back-production.up.railway.app/admin/stats/perweek?model=ShoppingOrder`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json, charset=utf-8",
        },
      }
    );

    setShoppingDataWeek({
      labels: result.data.map((e) => e._id),
      datasets: [
        {
          label: "Shopping Orders (week)",
          data: result.data.map((e) => e.total),
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          borderColor: "rgb(255, 99, 132)",
          borderWidth: "2",
        },
      ],
    });
  };

  const ZonesPie = async () => {
    let result = await axios.get(
      "https://wine-supply-back-production.up.railway.app/admin/stats/wines/fields?origin=1",
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json, charset=utf-8",
        },
      }
    );
    let origins = [undefined, undefined, undefined];
    result.data.map((e) => {
      if (e._id === "mexico") {
        origins[0] = e.count;
      }
      if (e._id === "argentina") {
        origins[1] = e.count;
      }
      {
        if (e._id === "chile") {
          origins[2] = e.count;
        }
      }
    });
    setPieOrigin({
      labels: ["Mexico", "Argentina", "Chile"],
      datasets: [
        {
          label: "Wines by Origin",
          data: origins,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    });
  };

  // const StatsUserMonth = async() => {
  //   let result = await axios.get(`https://wine-supply-back-production.up.railway.app/admin/stats/permonth?model=ShoppingOrder`, {
  //     headers: {
  //       Authorization: `Bearer ${JSON.parse(token)}`,
  //       "Content-Type": "application/json, charset=utf-8",
  //     },
  //   })
  //   console.log(result)
  //   setDataMonth((prev) => ({...prev, users: result}))

  // }
  // const StatsShoppingMonth = async() => {
  //   let result = await axios.get(`https://wine-supply-back-production.up.railway.app/admin/stats/permonth?model=ShoppingOrder`, {
  //     headers: {
  //       Authorization: `Bearer ${JSON.parse(token)}`,
  //       "Content-Type": "application/json, charset=utf-8",
  //     },
  //   })

  //   setDataMonth((prev) => ({...prev, orders: result}))

  // }

  useEffect(() => {
    StatsUserWeek();
    StatsShoppingWeek();
    ZonesPie();
    // StatsUserMonth();
    // StatsShoppingMonth()
  }, []);
  const [userDataWeek, setUserDataWeek] = useState("loading");
  const [shoppingDataWeek, setShoppingDataWeek] = useState("loading");
  const [pieOrigin, setPieOrigin] = useState("loading");
  // const[dataMonth, setDataMonth] = useState("loading");

  if (
    userDataWeek === "loading" ||
    shoppingDataWeek === "loading" ||
    pieOrigin === "loading"
  )
    return <p>Loading...</p>;

  return (
    <div>
      <Grid container>
        <Grid item lg={6} md={12} xs={11}>
          <Grid container>
            <Grid item lg={6} md={12} xs={12}>
              <CardUser
                title={"New Users this month"}
                amount={25}
                icon={<GroupAdd sx={{ fontSize: 40 }} />}
              />
              <CardUser title={"New Users"} amount={25} />
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <CardUser title={"Admins"} amount={8} />
              <CardUser title={"Inactive Users"} amount={4} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={12} xs={11}>
          <NewUsers />
        </Grid>
        <Grid item lg={7} md={6} xs={10}>
          <Grid item lg={6} md={12} xs={12}>
            <h2 style={{ color: "#069bff" }}>New user per week</h2>
            <BarChart chartData={userDataWeek} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <h2 style={{ color: "#ff6384" }}>New orders per week</h2>
            <LineChart chartData={shoppingDataWeek} />
          </Grid>
        </Grid>
        <Grid item lg={4} md={6} xs={10}>
          <div>
            <h1 style={{ textAlign: "center" }}>Wines by origin</h1>
            <OriginPie chartData={pieOrigin} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Charts;
