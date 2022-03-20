import { Component } from "react";
import {FaUsers} from 'react-icons/fa';


class Navigation extends Component {
    render() {
        const {user} = this.props;
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                <div className="container-fluid">
                    <div className="navbar-nav ml-auto">
                        <a className="navbar-brand" href="/">
                            <FaUsers className="mr-1"/> Meeting Log
                        </a>  
                        {user && (
                            <a className="nav-item nav-link" href="/meetings">
                                Meetings
                            </a>  
                        )}
                        {user && (
                            <a className="nav-item nav-link" href="/login">
                                Log out
                            </a> 
                        )}
                        {!user && (
                            <a className="nav-item nav-link" href="/login">
                                Log in
                            </a>  
                        )}
                        {!user && (
                            <a className="nav-item nav-link" href="/register">
                                register
                            </a> 
                        )}   
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;