import React from 'react';
import '../../css/index.css'
import { InfoList } from '../../components/InfoList/InfoList';


export const Information = (props) => (
    <div className="information">
    <div className="container">
        <h2 className="subtitle">
            {props.getItemText('i-1')}
        </h2>
        <div className="information__inner">
        {
          props.info?.map((item, index) =>
            <InfoList
              key={index}
              name={item.name}
              list={Object.entries(item)}
            />)

        }

        </div>
    </div>
</div>
)