import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


export type DataType = {
    id: number,
    email: string,
    login: string,

}

type MapStateToProps = {
    isAuth:boolean,
    login:string
}
type MapDispatchToProps = {
    getAuthUserData:()=>void
}
type HeaderPropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
        // authAPI.me()
        //    .then(response => {
        //         if (response.data.resultCode === 0) {
        //
        //             this.props.setAuthUserData(response.data.data)
        //         }
        //     })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose<React.FC>(connect(mapStateToProps, {getAuthUserData}))(HeaderContainer)