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
                    您的账号已注册成功，请返回上一页登陆。
                </Alert>
            )
        } 

        return(
            <React.Fragment>
                <Header title="注册"></Header>
                <h1 style = {{marginTop: "20%", marginBottom: '0.5em', textAlign: 'center'}}>注册</h1>
                <p style = {{ textAlign: 'center', color: 'gray', fontSize: '20px'}}>欢迎使用书法临摹系统</p>
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
                            <Form.Label>用户名</Form.Label>
                            <Form.Control type="text"  onChange = {(event) => this.newpwdChangeHandler(event)} />
                    </Form.Group>

                        
                    </Form.Row>

                   

                    <Form.Row>
                        <Form.Group as={Col} controlId="formPwd">
                            <Form.Label>姓名</Form.Label>
                            <Form.Control type="text" onChange = {(event) => this.newpwdChangeHandler(event)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formConPwd">
                            <Form.Label>年龄</Form.Label>
                            <Form.Control type="number" onChange = {(event) => this.cnewpwdChangeHandler(event)} />
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formPwd">
                            <Form.Label>密码</Form.Label>
                            <Form.Control type="password" onChange = {(event) => this.newpwdChangeHandler(event)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formConPwd">
                            <Form.Label>确认密码</Form.Label>
                            <Form.Control type="password"  onChange = {(event) => this.cnewpwdChangeHandler(event)} />
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

