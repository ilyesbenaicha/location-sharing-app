import React from 'react'
import Avatar from '../../shared/UIelements/Avatar'
import './UserItem.css'
import { Link } from 'react-router-dom'
import Card from '../../shared/UIelements/Card'
export const UserItem = props => {
  return (
    <li className="user-item">
    <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
      <div className="user-item__image">
        <Avatar image={props.image} alt={props.alt}/>
      </div>
      <div className="user-item__info">
        <h2>{props.name}</h2>
        <h3>
          {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
        </h3>
      </div>
      </Link>
    </Card>
  </li>
  )
}
