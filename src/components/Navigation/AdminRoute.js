import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
  //check if user is loggin
  const user = useSelector(state => state?.users);
  const { userAuth } = user;
  return (
    <Route
      {...rest}
      render={() =>
        userAuth?.isAdmin ? (
          <Component {...rest} />
        ) : (
          <Navigate to="/not-admin" />
        )
      }
    />
  );
};

export default AdminRoute;
