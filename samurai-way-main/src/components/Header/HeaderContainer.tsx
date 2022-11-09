import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";



export type DataType = {
    id: number,
    email: string,
    login: string,
    isAuth:boolean

}

type MapStateToProps = {
    isAuth:boolean,
    login:string
}
type MapDispatchToProps = {
    getAuthUserData:()=>void,
    logout:()=>void
}
type HeaderPropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose<React.FC>(connect(mapStateToProps, {getAuthUserData, logout}))(HeaderContainer)