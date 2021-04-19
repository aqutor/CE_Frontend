import React, { Component } from 'react';
import { withRouter, Redirect, NavLink } from 'react-router-dom';
import { Badge,  Carousel, Image, Button, Modal } from 'react-bootstrap';

import Header from '../../../Component/Header/Header'

import kai01 from '../../../assets/resource/kai/01.jpg'
import kai02 from '../../../assets/resource/kai/02.jpg'
import kai03 from '../../../assets/resource/kai/03.jpg'

import kai04 from '../../../assets/resource/kai/04.jpg'
import kai05 from '../../../assets/resource/kai/05.jpg'
import kai06 from '../../../assets/resource/kai/06.jpg'

import kai07 from '../../../assets/resource/kai/07.jpg'
import kai08 from '../../../assets/resource/kai/08.jpg'
import kai09 from '../../../assets/resource/kai/09.jpg'

import li01 from '../../../assets/resource/li/1.jpg'
import li02 from '../../../assets/resource/li/2.jpg'
import li03 from '../../../assets/resource/li/3.jpg'

import li04 from '../../../assets/resource/li/4.jpg'
import li05 from '../../../assets/resource/li/5.jpg'
import li06 from '../../../assets/resource/li/6.jpg'

import li07 from '../../../assets/resource/li/7.jpg'
import li08 from '../../../assets/resource/li/8.jpg'
import li09 from '../../../assets/resource/li/9.jpg'




class Profile extends Component {
    

    
    render(){

        const marginHeadStyle = {
            marginTop: "1em",
            marginButtom: "1em"
        }

        const captionStyle = {
            color: "blue"
        }

        const specialStyle = {
            position: "sticky",
            top: '0'
        }
        
        return(

            <React.Fragment>
                <Header title="书法学习"></Header>
                <h3 style = {marginHeadStyle}>
                    楷体书法 <Badge variant="success">热门</Badge>
                </h3>
{/* 1 */}
                <Carousel style={marginHeadStyle}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai01}
                        alt="First slide"
                        />
                        <Carousel.Caption style = {captionStyle}>
                            <h3>楷书1</h3>
                            <p>已有27人练习</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai02}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai03}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
{/* 2 */}
                <Carousel style={marginHeadStyle}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai04}
                        alt="First slide"
                        />
                        <Carousel.Caption style = {captionStyle}>
                            <h3>楷书2</h3>
                            <p>已有23人练习</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai05}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai06}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

{/* 3 */}

                <NavLink to={{
                                pathname: '/Practice'
                            }}><Carousel style={marginHeadStyle}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai07}
                        alt="First slide"
                        />
                        <Carousel.Caption style = {captionStyle}>
                            <h3>楷书3</h3>
                            <p>已有15人练习</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai08}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={kai09}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </NavLink>

                <h3 style = {marginHeadStyle}>
                    隶书书法 <Badge variant="primary">新上线</Badge>
                </h3>

                {/* 1 */}
                <Carousel style={marginHeadStyle}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li01}
                        alt="First slide"
                        />
                        <Carousel.Caption style = {captionStyle}>
                            <h3>隶书1</h3>
                            <p>已有7人练习</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li02}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li03}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
{/* 2 */}
                <Carousel style={marginHeadStyle}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li04}
                        alt="First slide"
                        />
                        <Carousel.Caption style = {captionStyle}>
                            <h3>隶书2</h3>
                            <p>已有3人练习</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li05}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li06}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

{/* 3 */}

                <Carousel style={marginHeadStyle}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li07}
                        alt="First slide"
                        />
                        <Carousel.Caption style = {captionStyle}>
                            <h3>隶书3</h3>
                            <p>已有5人练习</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li08}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={li09}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>


            </React.Fragment>
        )
    }
}

export default withRouter(Profile);