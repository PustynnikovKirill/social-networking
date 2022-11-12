import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "redux";




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


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose<React.FC>(connect(mapStateToProps, {logout}))(HeaderContainer)