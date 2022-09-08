import React from 'react';
import '../../css/index.css'
import { Card } from '../../components/Card/Card';
import { Banner } from '../../components/Banner/Banner';

export const Main = (props) => {
  function renderCards() {
    
    while (props.offers?.length || props.banners?.length) {
      let offersSpliced = props.offers.splice(0, 4)
      let bannersSpliced = props.banners.splice(0, 1)

      return (
        <>
          <div className="container">
            <div className="cards__inner">
              {
                offersSpliced?.map((item, index) =>
                  <Card
                    key={index}
                    logo={item.logo}
                    slogan={item.slogan}
                    name={item.name}
                    amount={item.amount}
                    term={item.term}
                    percent={item.percent}
                    minAge={item.minAge}
                    maxAge={item.maxAge}
                    href={item.trackerLink == null ? item.link : item.trackerLink}
                    getItemText={props.getItemText}
                  />
                )
              }
            </div>
          </div>

          <>
            {
              bannersSpliced?.map((item, index) =>
                <Banner
                  key={index}
                  logo={item.logo}
                  color={item.color}
                  title={item.title}
                  text={item.text}
                  link={item.link}
                  
                />
              )
            }
          </>
        </>
      )
    }
  }

  return (
    <div className="cards">
      {
        Array.from({ length: props.offers?.length }, () => renderCards())
      }
    </div>
  )
}