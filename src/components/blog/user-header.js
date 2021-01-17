import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from './../../actions/index'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUserData(this.props.userId);
    }
    render() {
        const user = this.props.user;
        if (user) {
            return <h4>{user.name}</h4>
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUserData })(UserHeader);