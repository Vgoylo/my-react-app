import Users from "./Users";
import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import {
  followAC, setCurrentpageAC,
  setIsFetchingAC,
  setUsersAC, setUsersTotalCountAC,
  unfollowAC
} from "../../redux/reducers/users-reducer";
import Preloader from "../common/preloader/preloader";
class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetchingLoader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetchingLoader(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetchingLoader(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setIsFetchingLoader(false)
      })

  };

  render() {
    return <>
      {this.props.isFetching ?
        <Preloader
          isFetching={this.props.isFetching}
        /> : null}

      <Users pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        users={this.props.users}

      />
    </>
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    setIsFetchingLoader: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
