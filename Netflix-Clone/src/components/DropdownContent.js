import React from 'react';

const dropdownContent = () => (
  <div className="dropdownContainer">
    <div className="navigation__container--userLogo">
      <div className="dropdownContent">
        <div>
          <div className="dropdownContent--user"></div>
          <p className="dropdownContent--user-text">Subscripcion</p>
        </div>
        <div>
          <div className="dropdownContent--user dropdownContent--user-2"></div>
          <p className="dropdownContent--user-text">Orders</p>
        </div>
      </div>
      <div className="dropdownContent dropdownContent--2">
        <p className="dropdownContent-textOutside">Account</p>
        <p className="dropdownContent-textOutside">Contact</p>
        <p className="dropdownContent-textOutside">Sign in</p>
      </div>
    </div>
  </div>
);

export default dropdownContent;
