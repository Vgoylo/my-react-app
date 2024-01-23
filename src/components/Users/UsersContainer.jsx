import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setCurrentpageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from "../../redux/reducers/users-reducer";


const mapStateToProps = (state) =>{
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
