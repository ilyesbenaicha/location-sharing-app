import React from 'react'
import './UsersList.css'
import { UserItem } from './UserItem'
const UsersList =props => {
 
    if(props.items.length === 0){
        return(
            <div>
             <h2>  no Users found !!</h2> 
            </div>
        )
    }
    return (
        <ul>
            {props.items.map(user =>(
              <UserItem key={user.id} id={user.id} image={user.image} name={user.name}  placeCount={user.placeCount}/>
            ))}
        </ul>
    )
  
}

export default UsersList