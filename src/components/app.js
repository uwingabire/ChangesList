import React, { Component } from "react";
import UserList from "../containers/user_list";
import UserDetail from "../containers/user_detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="col ng _8">
          <UserList />
        </div>
        <div className="col ">
          <UserDetail />
        </div>
      </div>
    );
  }
}
