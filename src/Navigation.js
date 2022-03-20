import { Component } from "react";
import {FaUsers} from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends Component {
    render() {
        const {user} = this.props;
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                <div className="container-fluid">
                    <div className="navbar-nav ml-auto">
                        <Link className="navbar-brand" to="/">
                            <FaUsers className="mr-1"/> Meeting Log
                        </Link>  
                        {user && (
                            <Link className="nav-item nav-link" to="/meetings">
                                Meetings
                            </Link>  
                        )}
                        {user && (
                            <Link className="nav-item nav-link" to="/login">
                                Log out
                            </Link> 
                        )}
                        {!user && (
                            <Link className="nav-item nav-link" to="/login">
                                Log in
                            </Link>  
                        )}
                        {!user && (
                            <Link className="nav-item nav-link" to="/register">
                                register
                            </Link> 
                        )}   
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;