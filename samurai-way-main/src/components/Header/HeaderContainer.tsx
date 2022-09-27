import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";


export type DataType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

type MapStateToProps = {
    data:DataType
}
type MapDispatchToProps = {
    setAuthUserData:(data:DataType)=>void
}
type HeaderPropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {

                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props} data = {this.props.data} />
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    data: state.auth,
})

export default compose<React.FC>(connect(mapStateToProps, {setAuthUserData}))(HeaderContainer)