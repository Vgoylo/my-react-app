import React from "react";
import axios from 'axios';
import style from '../Profile/MyPost/Post/Post.module.css';
import userPhoto from '../../assets/images/userDefaultPhoto.png';
import style_buttons from '../Dialogs/Dialogs.module.css'

function Users(props) {

  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
           .then( response => { props.setUsers(response.data.items) })
    };
  };

  return <div>
    <div>
      <button className={style_buttons.button} onClick={getUsers}>Get Users</button>
    </div>
    {props.users.map(user => <div key={user.id}>
      <div className={style.itemProfile}>
        <img src={ user.photos.small != null ? user.photos.small :  userPhoto } />
      </div>
      <div>
        {user.followed
          ? <button onClick={() => { props.unfollow(user.id) }}>Unffolow</button>
          : <button onClick={() => { props.follow(user.id) }}>ffolow</button>
        }
      </div>

      <div><br></br>
        {user.name}<br></br>
        {user.status}
      </div>

      <div><br></br>
        {'user.location.city'}<br></br>
        {'user.location.country'}
      </div>
    </div>)}
  </div>
}

export default Users;
