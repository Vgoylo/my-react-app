import Users from "./Users";
import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import {
  followAC, setCurrentpageAC,
  setUsersAC, setUsersTotalCountAC,
  unfollowAC
} from "../../redux/reducers/users-reducer";
class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
      .then(response => { this.props.setUsers(response.data.items) })
  };

  render() {
    return <Users pageSize={this.props.pageSize}
      onPageChanged={this.onPageChanged}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      totalUsersCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      users={this.props.users}

    />
  }

};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentpageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
