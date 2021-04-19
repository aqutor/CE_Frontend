import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Form,  Col, Button, Alert } from 'react-bootstrap';
import Header from '../../Component/Header/Header'


class Forget extends Component {

    state = {
        showAlert: false
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            showAlert: true
        })

        

      
    }


    render(){

        let alertInfo = null;
        if (this.state.showAlert){
            alertInfo = (
                <Alert variant = 'info' style = {{maxWidth: '700px', margin: 'auto'}}>
                    您的密码找回请求已成功提交，我们向您的邮箱发送了电子邮件，请确认。
                </Alert>
            )
        } 

        return(
            <React.Fragment>
                <Header title="找回密码"></Header>
                <h1 style = {{marginTop: "25%", marginBottom: '0.5em', textAlign: 'center'}}>找回密码</h1>
                <p style = {{ textAlign: 'center', color: 'gray', fontSize: '20px'}}>我们需要对您的一些资料进行核实</p>
                {alertInfo}
                <Form onSubmit={this.submitHandler}>
                    <Form.Row>

                        <Form.Group as={Col} controlId="formName">
                        <Form.Label>邮箱</Form.Label>
                        <Form.Control type = 'email' onChange = {(event) => this.emailChangeHandler(event)} />
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formPwd">
                            <Form.Label>新密码</Form.Label>
                            <Form.Control type="password" placeholder="新密码" onChange = {(event) => this.newpwdChangeHandler(event)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formConPwd">
                            <Form.Label>确认密码</Form.Label>
                            <Form.Control type="password" placeholder="确认密码" onChange = {(event) => this.cnewpwdChangeHandler(event)} />
                        </Form.Group>
                    </Form.Row>



                    <div className = 'col text-center'>
                        <Button  variant="primary" type="submit" style = {{marginTop: '0.5em', marginBottom: '0.5em'}}>
                         提交 
                        </Button>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}

export default withRouter(Forget);

