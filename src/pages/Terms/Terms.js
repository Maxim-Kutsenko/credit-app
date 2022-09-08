import React, { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import "../../css/index.css";
import { Loader } from "../../components/Loader/Loader";
import { MAIN_URL } from "../..";
import { KEY } from "../..";
import { RES_URL } from "../..";

export const Terms = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getResData = () => {
    fetch(RES_URL, {
      method: "POST",
    })
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
  const getData = () => {
    fetch(MAIN_URL, {
      method: "POST",
      timeout: 0,
      body: JSON.stringify({ key: KEY }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },

        (error) => {
          getResData()
        }
      );
  };

  useEffect(() => {
    getData();
  }, []);

  function getItemText(name) {
    let out = "";
    if(data.text_blocks !== undefined) {
      data.text_blocks.find((item) => {
        if (item.name === name) out = item.text;
      });
      return out;
    }
  }

  if (error) return <div>Error: {error.message}</div>;
  if (loading || data.text_blocks === undefined) return <Loader />;
  return (
    <>
      <header className="terms-header">
        <div className="container">
          <Link to="/" className=" terms-logo">
            <img src="./img/logo.svg" alt="logo" />
          </Link>
        </div>
      </header>
      <div className="container">
        <div className="polic">
          <h2 className="subtitile terms-title">{getItemText('1-u')}</h2>
          <p>
            {getItemText('2-u')}
          </p>
          <p>
            {getItemText('2.1-u')}
          </p>
          <p>
          {getItemText('2.2-u')}
          </p>
          <p>
            {getItemText('2.3-u')} <Link to="/policy" >{getItemText('3-u')}</Link>
          </p>
          <p>
          {getItemText('6-u')}
          </p>
          <ul>
            {getItemText('7-u').split(';').map((item,index) => <li key={index}>{item}</li>)}
          </ul>
          <p>
          {getItemText('8-u')}
          </p>
        </div>
      </div>
      <Footer textBlocks={data.text_blocks} getItemText={getItemText} />
    </>
  );
};
