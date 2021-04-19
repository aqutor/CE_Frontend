import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup,  FormControl, Image, Button } from 'react-bootstrap';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../../../Component/Header/Header'
import user from '../../../../assets/img/user-photo.svg';

class Profile extends Component {
    

    
    render(){

        const photoStyle = {
            marginTop: '4em',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '2em'
        }

        const buttonStyle = {
            marginTop: '1em'
        }



        return(
            <React.Fragment>
                <Header title="个人信息"></Header>
                <Image style = {photoStyle} src={user} roundedCircle width='100px' height='100px' />
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">&nbsp;&nbsp;用户名&nbsp;&nbsp;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="test"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">&nbsp;&nbsp;姓&nbsp;&nbsp;&nbsp;&nbsp;名&nbsp;&nbsp;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="AT"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">&nbsp;&nbsp;邮&nbsp;&nbsp;&nbsp;&nbsp;箱&nbsp;&nbsp;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;龄&nbsp;&nbsp;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="25"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">&nbsp;&nbsp;原密码&nbsp;&nbsp;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        type="password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">&nbsp;&nbsp;新密码&nbsp;&nbsp;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        type="password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">再次输入</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        type="password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <Button variant="info" style = {buttonStyle} size="lg" block>提交</Button>
                    </div>


            </React.Fragment>
        )
    }
}

export default withRouter(Profile);