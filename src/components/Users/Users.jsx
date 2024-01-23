import React from "react";
import style from '../Profile/MyPost/Post/Post.module.css';
import userPhoto from '../../assets/images/userDefaultPhoto.png';
import style2 from './Users.module.css';

const Users = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  };

    return <div>
      <div>
        {
        pages.slice(0, 20).map(p => {
          return <span className={props.currentPage === p && style2.selectedPage}
            onClick={(e) => { props.onPageChanged(p); }}>{`${p}. `}</span>

        })}
    </div>
    {props.users.map(user => <div key={user.id}>
      <div className={style.itemProfile}>
        <input type="image" img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
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
};

export default Users;
