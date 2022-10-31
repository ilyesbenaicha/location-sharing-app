import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
    const USERS =[
        
        {
        id:'u1',
        name:'ilyes',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnU-EgY3mZoRkvt-HOkfUwAsj_VLkQPLRZbOzWhSI8FdB9k2HP0DMV1UUm-S1NSMc4rIg&usqp=CAU',
        placeCount:3
    },
    {
      id:'u2',
      name:'ahmed',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnU-EgY3mZoRkvt-HOkfUwAsj_VLkQPLRZbOzWhSI8FdB9k2HP0DMV1UUm-S1NSMc4rIg&usqp=CAU',
      placeCount:3
  }
]
  return (
    <div><UsersList items={USERS}/></div>
  )
}
 
export default Users