import React, { Component } from 'react';
import {Form, FormControl, Carousel, Row, Col, Card, Button, Badge, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header/Header';
import { withRouter, NavLink } from 'react-router-dom';

import pic_12 from '../../assets/library/12.jpg'
import pic_15 from '../../assets/library/15.jpg'
import pic_20 from '../../assets/library/20.jpg'

import pic_1 from '../../assets/resource/1.png'
import pic_2 from '../../assets/resource/2.JPG'

class Portal extends Component{
    render(){

        const marginTop = {
            marginTop: "2em"
        }

        const marginTop2 = {
            marginTop: "1em"
        }

        const budgeTextStyle = {
            fontSize: "16px"
        }

        const picCenterStyle = {
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"

        }

        return(
            <React.Fragment>

            <Header title="主页"></Header>
            <Form inline>
                <FormControl type="text" placeholder="🔍 请输入关键字" className="mr-sm-2" />
            </Form>

            <Carousel style={marginTop}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic_12}
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic_15}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic_20}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <Card className="text-center" style={marginTop2}>
                <Card.Header>提醒</Card.Header>
                <Card.Body>
                    {/* <Card.Title>今天还没有打卡哦</Card.Title> */}
                    <Card.Text>
                        今天已经有5个用户打卡啦！现在打卡还来得及哦！
                    </Card.Text>
                    <NavLink to={{
                                pathname: '/Resource'
                            }}><Button variant="primary" on>现在就去</Button></NavLink>
                </Card.Body>
            </Card>
            <h3 style={marginTop2}>
                教程 <Badge variant="danger" style = {budgeTextStyle}>热</Badge>
            </h3>
            <Row style={marginTop2}>
                <Col>
                    <Image style={picCenterStyle} src={pic_1} height="150px" rounded />
                    <p className="text-center">书法基础教程</p>     
                </Col>

                <Col>
                    <Image style={picCenterStyle} src={pic_2} height="150px" rounded />
                    <p className="text-center">用户作品展览</p>       
                </Col>
            </Row>
                
            </React.Fragment>
            
        )
    }
}

export default withRouter(Portal);