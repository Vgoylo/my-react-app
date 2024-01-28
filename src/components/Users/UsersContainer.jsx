import Users from "./Users";
import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import {
  follow, setCurrentPage,
  setIsFetching,
  setUsers, setTotalUsersCount,
  unfollow
} from "../../redux/reducers/users-reducer";
import Preloader from "../common/preloader/preloader";
class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setIsFetching(false)
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

export default connect(mapStateToProps, { follow, unfollow, setUsers,
                                          setCurrentPage, setTotalUsersCount, setIsFetching
                                        })(UsersContainer)
