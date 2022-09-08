import React from 'react';
import '../../css/index.css'



export const InfoList = (props) => {


    function filterList(list) {

        return list.map(([key, value], index) => {

            if (value !== null && key !== 'info_id' && key !== 'name')
                return (
                    <li key={index}>{value}</li>
                )
        })
    }

    return (
        <div className="information__item">
            <h3 className="information__title">{props.name}</h3>
            <ul className="information__list">
                {
                    filterList(props.list)
                }
            </ul>
        </div>
    )
}


