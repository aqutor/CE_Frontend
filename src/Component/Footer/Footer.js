import React from 'react';
import { Row, Col } from 'react-bootstrap';
import home from '../../assets/img/home.svg';
import picture from '../../assets/img/picture.svg';
import user from '../../assets/img/user.svg';
import { NavLink } from 'react-router-dom';

const footerStyle = {
    backgroundColor: "white",
    // fontSize: "20px",
    color: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  };
  
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };

  const textStyle = {
    fontSize: "10px"
  }
  
 const footer = () => {
    return (
        <div>
          <div style={phantomStyle} />
          <div style={footerStyle}>
                <Row>
                    <Col>
                    <NavLink to={{
                                pathname: '/Portal/',
                            }}><div><img src={home} alt="Home Page" width="30" height="30" /></div></NavLink><p style = {textStyle}>主页</p>
                    </Col>
                    <Col>
                    <NavLink to={{
                                pathname: '/Resource/',
                            }}><div><img src={picture} alt="Resources" width="30" height="30" /></div></NavLink><p style = {textStyle}>书法学习</p>
                    </Col>
                    <Col>
                    <NavLink to={{
                                pathname: '/Portal/Me/',
                            }}><img src={user} alt="Profile" width="30" height="30" /></NavLink>
                    <div><p style = {textStyle}>我</p></div>
                    </Col>
                </Row>
          </div>
        </div>
      )
 }
 export default footer;