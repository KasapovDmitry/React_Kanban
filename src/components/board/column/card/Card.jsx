import React from 'react'
import Basket from '../../../../assets/img/Basket'
import {useNavigate} from "react-router-dom";

export default function Card(props) {
  
  const navigate = useNavigate();

  return (
    <div className='card'>
      <h3 className='card__title'
        onClick={() => navigate(`/tasks/${props.id}`)}
      >{props.name}</h3>
      <div className="card__del"
        onClick={(e) => {
              props.onRemove(props.id)
              e.stopPropagation();
          }}>
        <Basket />
      </div>
    </div>
  )
}

