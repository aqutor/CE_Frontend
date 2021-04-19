import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { ListGroup,  Col, Row, Image } from 'react-bootstrap';
import user from '../../../assets/img/user-photo.svg';
import { NavLink } from 'react-router-dom';

class Me extends Component {
    render(){
    
        const itemStyle = {
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0'
        }

        const borderStyle = {
            marginTop: "5em",
            marginBottom: "5em"
        }

        const divideStyle = {
            marginTop: "2em"
        }

        const nicknameStyle = {
            fontSize: '2em',
            fontWeight: '700',
            marginBottom: '0.1rem',
            marginTop: '1rem'
        }

        const usernameStyle = {
            fontSize: '1em',
            fontWeight: '300',
            marginTop: '0.1rem'
        }

        const photoStyle = {
            marginLeft: "2.5em"
        }

        const linkStyle = {
            color: 'black'
        }

        return(
            <React.Fragment>

                <Row  style = {borderStyle}>

                    <Col xs={6} md={4} >
                    <Image style = {photoStyle} src={user} roundedCircle width='100px' height='100px' />
                    </Col>
                    <Col xs={6} md={4}>
                    <p style={nicknameStyle}>润泽</p>
                    <p style={usernameStyle}>用户名：test</p>
                    </Col>
                </Row >

                <ListGroup >
                    <ListGroup.Item><NavLink style={linkStyle} to={{
                                pathname: '/Me/Profile',
                            }}>
                         个人资料
                    </NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item><NavLink style={linkStyle} to={{
                                pathname: '/Me/History',
                            }}>
                         历史记录
                    </NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item><NavLink style={linkStyle} to={{
                                pathname: '/Me/About',
                            }}>
                         关于
                    </NavLink>
                    </ListGroup.Item>
                </ListGroup>
                

                <ListGroup >
                    <ListGroup.Item style={divideStyle}>
                        <NavLink style={linkStyle} to={{
                                    pathname: '/',
                                }}>
                            注销
                        </NavLink>
                    </ListGroup.Item>
                </ListGroup>
            </React.Fragment>
        )
    }
}

export default withRouter(Me);