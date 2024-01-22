import React from "react";
import axios from 'axios';
import style from '../Profile/MyPost/Post/Post.module.css';
import userPhoto from '../../assets/images/userDefaultPhoto.png';
class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => { this.props.setUsers(response.data.items) })
  };

  render()
  {
    return <div>
      {this.props.users.map(user => <div key={user.id}>
        <div className={style.itemProfile}>
          <input type="image" img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
        </div>
        <div>
          {user.followed
            ? <button onClick={() => { this.props.unfollow(user.id) }}>Unffolow</button>
            : <button onClick={() => { this.props.follow(user.id) }}>ffolow</button>
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

};

export default Users;
