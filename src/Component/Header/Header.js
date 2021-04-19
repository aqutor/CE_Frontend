import React from 'react';
import { Row, Col } from 'react-bootstrap';
import home from '../../assets/img/home.svg';
import picture from '../../assets/img/picture.svg';
import user from '../../assets/img/user.svg';
import { NavLink } from 'react-router-dom';

const headerStyle = {
    backgroundColor: "white",
    // fontSize: "20px",
    color: "black",
    borderBottom: "1px solid #E7E7E7",

    textAlign: "center",
    padding: "0.2rem",
    left: "0",
    height: "40px",
    width: "100%",
    position: "sticky",
    top: '0'
  };


  const textStyle = {
    fontSize: "1.4em"
  }
  
 const header = ({title}) => {
    return (
        <div>
          <div style={headerStyle}>
                <p style={textStyle}>{title}</p>
          </div>
        </div>
      )
 }
 export default header;