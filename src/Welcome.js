import { Component } from "react";


class Welcome extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="text-center">
                <span className="text-secondary font-weight-bold pl-1">
                    <h2>Welcome, {user}!</h2>
                </span>,
                <a href="/" className="font-weight-bold text-primary pl-1">
                    logout
                </a>
            </div>
        )
    }
}

export default Welcome;