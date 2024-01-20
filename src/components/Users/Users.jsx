import React from "react";
import style from '../Profile/MyPost/Post/Post.module.css'

function Users(props) {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: true, fullName: 'Dimach', status: 'I am a big boss', location: { city: 'minsk', country: 'Belarus' } },
      { id: 2, followed: false, fullName: 'Sasha', status: 'I am a big boss too', location: { city: 'minsk', country: 'Belarus' } },
      { id: 3, followed: true, fullName: 'Matvey', status: 'I am a big boss too', location: { city: 'minsk', country: 'Belarus' } },
      { id: 4, followed: false, fullName: 'Dimach', status: 'I am a big boss too', location: { city: 'minsk', country: 'Belarus' } },

    ])
  }
  return <div>
    {props.users.map(user => <div key={user.id}>
      <div className={style.itemProfile}>
        <img src='https://img.championat.com/c/900x900/news/big/e/t/poyavilis-pervye-kadry-seriala-avatar-legenda-ob-aange-premera-v-2024-godu_1687041545980927004.jpg' />
      </div>
      <div>
        {user.followed
          ? <button onClick={() => { props.unfollow(user.id) }}>Unffolow</button>
          : <button onClick={() => { props.follow(user.id) }}>ffolow</button>
        }
      </div>

      <div><br></br>
        {user.fullName}<br></br>
        {user.status}
      </div>

      <div><br></br>
        {user.location.city}<br></br>
        {user.location.country}
      </div>
    </div>)}
  </div>
}

export default Users;
