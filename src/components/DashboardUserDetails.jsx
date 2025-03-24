import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/DashboardUserDetailsStyle.css";

const DashboardUserDetails = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="dashboard-user">
      <div className="dashboard-user__profile">
        <img
          src={currentUser.profilePicture}
          alt={`${currentUser.fullName}'s profile`}
          className="dashboard-user__profile-img"
        />
      </div>
      <div className="dashboard-user__info">
        <p className="dashboard-user__detail">
          <strong>Nombre:</strong> {currentUser.fullName}
        </p>
        <p className="dashboard-user__detail">
          <strong>Sobre mí:</strong> {currentUser.about}
        </p>
        <p className="dashboard-user__detail">
          <strong>Correo electrónico:</strong> {currentUser.email}
        </p>
        <p className="dashboard-user__detail">
          <strong>Edad:</strong> {currentUser.age}
        </p>
        <p className="dashboard-user__detail">
          <strong>País:</strong> {currentUser.country}
        </p>
      </div>
    </div>
  );
};

export default DashboardUserDetails;
