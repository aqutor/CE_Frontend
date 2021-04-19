import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './Login.css';
import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import pic_12 from '../../assets/library/12.jpg'
import pic_15 from '../../assets/library/15.jpg'
import pic_20 from '../../assets/library/20.jpg'
import Row from 'react-bootstrap/Row'

class Login extends Component {

    state = {
        username: null,
        password: null,
        pwdVal: null,
        ifClicked: false,
        valAlert: {
            type: null,
            msg: null,
        },
        SubmitText: '提交',  
    }
    
    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    passwordChangeHandler = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    postCredHandler = () => {
        this.setState({
            ifClicked: true,
        });

        const postData = {
            sid: this.state.username,
            pwd: this.state.password,
        }

        this.setState({
            valAlert: {
                type: 'success',
                msg: 'hey, u r good to go. Note: This notice will not be included in the final version.'
            }
        })
    }
   
    componentDidUpdate(){
        if(this.state.ifClicked && this.state.SubmitText === '提交'){
            this.setState({
                SubmitText: '请稍等...',
            })
        }

        if(!this.state.ifClicked && this.state.SubmitText === '请稍等...'){
            this.setState({
                SubmitText: '提交',
            })
        }

        if(this.state.valAlert.type === null && this.state.valAlert.type !== 'success' && this.state.valAlert.type !== 'danger' && this.state.pwdVal === true){
            
            this.setState({
                valAlert: {
                    type: 'success',
                    msg: 'hey, u r good to go. Note: This notice will not be included in the final version.'
                }
            })            
        }

        if(this.state.valAlert.type === null && this.state.valAlert.type !== 'success' && this.state.valAlert.type !== 'danger' && this.state.pwdVal === false){
            this.setState({
                valAlert: {
                    type: 'danger',
                    msg: '用户名或密码输入错误，请重试。'
                }
            })            
        }

        if(this.state.valAlert.type === 'success' && this.state.pwdVal === false){
            this.setState({
                valAlert: {
                    type: 'danger',
                    msg: '用户名或密码输入错误，请重试。'
                }
            }) 
        }

        if(this.state.valAlert.type === 'danger' && this.state.pwdVal === true){
            
            this.setState({
                valAlert: {
                    type: 'success',
                    msg: 'hey, u r good to go. Note: This notice will not be included in the final version.'
                }
            })
        }
    }

    render() {
        let redirect = null;
        if(this.state.valAlert.type === 'success'){
            redirect = <Redirect to={{
                pathname: '/Portal',
            }} />;
        }

        const rightStyle = {
            display: "inline-block",
            float: "right",
            fontSize: "14px",
            color: "#6c757d"
        }

        const leftStyle = {
            display: "inline-block",
            textAlign: "left",
            fontSize: "14px",
            color: "#6c757d"
        }

        return (
            
            <div >
                {redirect}
                
                
                <Alert variant = {this.state.valAlert.type} className = 'InFormAlert' id='pwdAlertInfo' > {this.state.valAlert.msg}</Alert>
               
                <div className = 'LoginContainer'>
                            <Carousel>
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
                    
                            <Form className='LoginForm' maxWidth="80%">
                                <Form.Group controlId="formBasicEmail">
                                    <h1>登录</h1>
                                    <h1> </h1>
                                    <Form.Control type="text" placeholder="用户名" onChange = {(event) => this.usernameChangeHandler(event)} />
                                </Form.Group>    
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="密码" onChange = {(event) => this.passwordChangeHandler(event)} />
                                </Form.Group>
                                    <Button block variant="primary" onClick = {this.postCredHandler}>
                                        {this.state.SubmitText}
                                    </Button>
                                    <p></p>
                                    <p><NavLink to="/Register"><Form.Text style = {leftStyle}>
                                        <div>注册</div>
                                    </Form.Text></NavLink>
                                    <NavLink to="/Forget"><Form.Text style = {rightStyle}>
                                        <div>忘记密码?</div>
                                    </Form.Text></NavLink></p>
                                </Form> 
                
                </div>
            </div>
        )
    }
}

export default withRouter(Login);