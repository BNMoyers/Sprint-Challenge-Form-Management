import React from 'react';

function MemberList(props) {

    return(
       <div>
           <h2>Member List</h2>
           <ul>
               {props.users.map(user => (
                   <li>{user.username}</li>
               ))}
           </ul>
        </div> 
    )
}

export default MemberList