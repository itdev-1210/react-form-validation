import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validUrlReges = RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            name: null,
            phone: null,
            url: null,
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }

    verifyFunc = () => {
        console.log(this.state.email)
        let isEmailValid = validEmailRegex.test(this.state.email) ? true : false;
        let isUrlValid = validUrlReges.test(this.state.url) ? true: false;

        console.log(isEmailValid)
        console.log(isUrlValid)
        let verify = isEmailValid && this.state.isNameValid &&
            this.state.isPhoneValid && isUrlValid

        this.props.verifyMessage(verify)
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <h3>Email:
                </h3>
                <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                <h3>Phone:
                </h3>
                <input type="text" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}/>
                <h3>Blog URL:
                </h3>
                <input type="text" value={this.state.url} onChange={(e) => this.setState({url: e.target.value})}/>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={this.verifyFunc}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
