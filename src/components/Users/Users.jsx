import React from "react";
import axios from 'axios';
import style from '../Profile/MyPost/Post/Post.module.css';
import userPhoto from '../../assets/images/userDefaultPhoto.png';
import style2 from './Users.module.css';
class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
      .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  };

  render() {

    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    };

    return <div>
      <div>
        {
        pages.slice(0,20).map(p => {
          return <span className={ this.props.currentPage === p && style2.selectedPage}
            onClick={(e) => { this.onPageChanged(p); }}>{`${p}. `}</span>

        })}
      </div>
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
