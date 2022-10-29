import React from 'react';
import { Registration } from '../Registration/Registration';
import { Login } from '../Login/Login';

const Method = { none: 0, registration: 1, login: 2 };

export class BaseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        method: Method.registration
        };
    }

    onViewRegistration = () => {
        this.setState({ method: Method.registration });
    };

    onViewLogin = () => {
        this.setState({ method: Method.login });
    };

    render() {
        return (
        <>
            {this.state.method == Method.registration && (
            <Registration onclick={this.onViewLogin} />
            )}
            {this.state.method == Method.login && (
            <Login onclick={this.onViewRegistration} />
            )}
        </>
        );
    }
}