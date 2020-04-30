import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVerify: true
        };

    }

    verifyFunc = (verify) => {
        this.setState({isVerify: verify})
    }
    render() {
        return (<div>
            <Form verifyMessage={this.verifyFunc}></Form>
            <Message verify={this.state.verify}></Message>
        </div>);
    }
}

export default App;
