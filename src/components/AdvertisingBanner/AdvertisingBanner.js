import React from 'react';
import '../../css/index.css'


export const AdvertisingBanner = (props) => {


  const [classNameAttr, dataKeyAttr] = props.code.split('|')

  return (
    <div className='abc1' style={{marginBottom: 40}}>
      <div><ins className={classNameAttr} data-cp-size={300} data-key={dataKeyAttr}></ins></div>
    </div>
  )
}