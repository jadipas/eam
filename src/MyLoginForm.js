import React from 'react';
import {Link, Redirect } from "react-router-dom";

class MyLoginForm extends React.Component {
        
    constructor() {
        super()

        var is_logged = false;
       /* const name = 'jwt_header_payload';
        var cookieArr = document.cookie.split(";");

        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");

            if(name === cookiePair[0].trim()) {
                // Decode the cookie value and return
                //const tokens = cookiePair[1].split(".");
                //console.log(atob(tokens[0]));
                //console.log(atob(tokens[1]));
                is_logged = true;
            }
        }
*/
        this.state = {
            logged_in: is_logged,
            logged_out: false,
            username: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this)
        //this.handleLogin = this.handleLogin.bind(this)
        //this.handleLogout = this.handleLogout.bind(this)
    }
    
    onChange = (e) => {
          this.setState({
            [e.target.name]: e.target.value,
          });
    }
/*
    handleLogin(event) {
        event.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        //console.log(user)
        axios.defaults.withCredentials = true;
        axios.post(`https://localhost:4000/login`, user)
            .then(res => {
                //console.log(res);
                //console.log(res.data);     
                this.setState({ logged_in: true });

                
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data.error.message);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    this.props.errHandler(err.response.data.error.message)
                }
                else if (err.request) {
                    // client never received a response, or request never left
                    console.log('?????????????????????????')
                    console.log(err)
                } 
                else {
                    //anything else
                    console.log("---------------------")
                    console.log(err)
                }
            })
    }

    handleLogout() {
        const name = 'jwt_header_payload';
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";

        this.setState({ logged_in: false, logged_out: true })
    }
*/
    render() {
        /*if(this.state.logged_in){
            let data = {};

            const name = 'jwt_header_payload';
            var cookieArr = document.cookie.split(";");

            for(var i = 0; i < cookieArr.length; i++) {
                var cookiePair = cookieArr[i].split("=");

                if(name === cookiePair[0].trim()) {
                    // Decode the cookie value and return
                    const tokens = cookiePair[1].split(".");
                    //console.log(atob(tokens[0]));
                    data = JSON.parse(atob(tokens[1]));
                }
            }

            if(data.role === "admin"){
                return(
                    <div className="logOutNav">
                        <Redirect to='/admin' />
                        <button value="logout" onClick={this.handleLogout}>Logout</button>
                        <Link to="/admin" className="logOutNavLink">Admin</Link>
                    </div>
                )
            }else if(data.role === "host"){
                return(
                    <div className="logOutNav">
                        <Redirect to='/profile' />
                        <div className="logOutNav">
                            <button value="logout" onClick={this.handleLogout}>Logout</button>
                            <Link to="/profeditor" className="logOutNavLink">Edit Profile</Link>
                            <Link to="/profile" className="logOutNavLink">Accommodations</Link> 
                            <Link to="/mymessages" className="logOutNavLink">My Messages</Link> 
                        </div>
                    </div>
                )
            }else if(data.role === "host_renter"){
                return(
                    <div className="logOutNav">
                        <Redirect to='/profile' />
                        <div className="logOutNav">
                            <button value="logout" onClick={this.handleLogout}>Logout</button>
                            <Link to="/profeditor" className="logOutNavLink">Edit Profile</Link>
                            <Link to="/profile" className="logOutNavLink">Accommodations</Link> 
                            <Link to="/mymessages" className="logOutNavLink">My Messages</Link> 
                            <Link to="/mybookings" className="logOutNavLink">My Bookings</Link> 
                        </div>
                    </div>
                )
            }else{
                return(
                    <div className="logOutNav">
                        <Link to="/profeditor" className="logOutNavLink">Edit Profile</Link>
                        <button value="logout" onClick={this.handleLogout}>Logout</button>
                        <Link to="/mymessages" className="logOutNavLink">My Messages</Link> 
                        <Link to="/mybookings" className="logOutNavLink">My Bookings</Link> 
                    </div>
                )
            }
        } else {*/
            if(this.state.logged_out){
                this.setState({
                    logged_out: false
                })

                return (
                    <div>
                        <form className="loginForm" onSubmit={this.handleLogin}>
                            <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
                            <input type="Password" name="password" placeholder="Password" onChange={this.onChange}/>
                            <button type="submit" value="login">Login</button>
                        </form>
                        <span className="registerLink"> <Link to="/register">Register</Link> </span>
                    </div>
                )
            }else{
                return (
                    <div className="hoc clear">
                            <nav id="mainav" className="fl_right">
                                <ul className="clear">
                                    <li><input type="text" className="" name="username" placeholder="Username" onChange={this.onChange}/></li>
                                    <li><input type="password" className="" name="password" placeholder="Password" onChange={this.onChange}/></li>
                                    <li><button type="submit" className="butn">Login</button></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            </nav>
                    </div>
                )
            }
        //}
    }
}

export default MyLoginForm