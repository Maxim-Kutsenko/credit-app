import ReactDOM from "react-dom";

import "./css/index.css";

import { Terms } from "./pages/Terms/Terms";
import { Policy } from "./pages/Policy/Policy";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Footer } from "./pages/Footer/Footer";
import { Header } from "./pages/Header/Header";
import { Conditions } from "./pages/Conditions/Conditions";
import { Main } from "./pages/Main/Main";
import "./css/index.css";
import { Information } from "./pages/Information/Information";
import { Loader } from "./components/Loader/Loader";
import { deviceDataResult } from "./components/device";

export const KEY = "52b6f2ccknjsdkvnklsaedj";
export const MAIN_URL = "https://leadsfin.ru/api/all";
export const RES_URL = `https://leadsfin.xyz/source.php?key=${KEY}`;
export const domain =
  window.location.protocol + "//" + window.location.hostname;

let params = window.location.search
  .replace("?", "")
  .split("&")
  .reduce((p, e) => {
    let a = e.split("=");
    p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    return p;
  }, {});

params = { ...params, ...deviceDataResult };

function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  function getAllData() {
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(res => res.json())
      .then(data => {
        const { region, ip, city } = data
        const {platform, browser} = deviceDataResult
        
        const trackData = {
          ip: ip || null,
          os: platform,
          browser: browser,
          region: region || null,
          city: city || null
        }
        getMainData(trackData)
      },
      (error) => {
        getMainData()
      })
  }





  function getMainData (trackData) {
    fetch(MAIN_URL, {
      method: "POST",
      timeout: 0,
      body: JSON.stringify({
        key: KEY,
        params,
        trackData
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },

        (error) => {
          getResData();
          console.log(error.message);
        }
      );
  };

  function getResData() {
    fetch(RES_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },

        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  };


  useEffect(() => {
    getAllData()
  }, [])

  function getItemText(name) {
    let out = "";
    if (data.text_blocks !== undefined) {
      data.text_blocks.find((item) => {
        if (item.name === name) out = item.text;
      });
      return out;
    }
  }
  if (error) return <div> Error: {error.message} </div>;
  if (loading || data.text_blocks === undefined) return <Loader />;

  return (
    <>
      <Header textBlocks={data.text_blocks} getItemText={getItemText} />{" "}
      <Main
        offers={data.offers}
        banners={data.banners}
        textBlocks={data.text_blocks}
        getItemText={getItemText}
      />{" "}
      <Information
        info={data.info}
        textBlocks={data.text_blocks}
        getItemText={getItemText}
      />{" "}
      <Conditions textBlocks={data.text_blocks} getItemText={getItemText} />{" "}
      <Footer textBlocks={data.text_blocks} getItemText={getItemText} />{" "}
    </>
  );
}

const application = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />{" "}
      <Route path="/terms">
        <Terms />
      </Route>{" "}
      <Route path="/policy">
        <Policy />
      </Route>{" "}
    </Switch>{" "}
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById("root"));
