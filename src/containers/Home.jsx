import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                {this.props.user ? 
                    <div>
                        <h1 className="display-2 mt-4 mb-4" id="user-h1">User</h1>
                        <img src={this.props.user.photoURL} alt="avatar" id="avatar" className="mb-4"></img>
                        <h1 id="user-h1">{this.props.user.displayName}</h1>
                        <h2 id="user-h1">{this.props.user.email}</h2>
                    </div> : 
                    <div>
                        <h1 className="display-2 mt-4 mb-4" id="user-h1">Home</h1>
                        <h1 className="lead">You're not logged in.</h1>
                        <h1 className="lead"> Please login first to be able to see card details.</h1>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
        user: state.login.user
    }
};

export default connect(mapStateToProps, null)(Home);
