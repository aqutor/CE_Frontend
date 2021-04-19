import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { ListGroup,  Col, Row, Image } from 'react-bootstrap';
import logo from '../../../../assets/img/logo.svg';
import Header from '../../../../Component/Header/Header'

class Me extends Component {
    render(){


        const picStyle = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20%'
        }

        const titleStyle = {
            fontSize: '1.6rem',
            fontWeight: '500',
            marginTop: '2.8rem',
            textAlign: 'center',
            marginBottom: '0.1rem'
        }

        const versionStyle = {
            fontSize: '1.2rem',
            textAlign: 'center',
            marginTop: '0.1rem',
            marginBottom: '12em'
        }

        const linkStyle = {
            fontSize: '0.8rem',
            textAlign: 'center',
            marginTop: '0.1rem',
            marginBottom: '0.1rem'
        }

        const copyrightStyle = {
            fontSize: '0.8rem',
            textAlign: 'center',
            marginTop: '0.1rem',
            marginBottom: '0.1rem'
        }
        
        const extentionStyle = {
            marginBottom: '26%'
        }




        return(
            <React.Fragment>
                <Header title="关于"></Header>

                <Image src={logo} style={picStyle} height='100px' />

                <p style={titleStyle}>书法临摹作品评分系统</p>
                <p style={versionStyle}>Version 1.0.1</p>
                <p style={linkStyle}><a href="https://policies.airscr.com/terms.html" target="_blank">TERMS OF USE</a></p>
                <p style={linkStyle}><a href="https://policies.airscr.com/privacy.html" target="_blank">PRIVACY NOTICE</a></p>
                <p />
                <p style={copyrightStyle}>AT 版权所有</p>
                <p style={copyrightStyle}>Copyright © 2018-2021 withz.at. All Rights Reserved.</p>
                <p style = {extentionStyle}/>



            </React.Fragment>
        )
    }
}

export default withRouter(Me);