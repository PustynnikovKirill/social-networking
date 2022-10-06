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

}

type MapStateToProps = {
    isAuth:boolean,
    login:string
}
type MapDispatchToProps = {
    setAuthUserData:(data:DataType)=>void
}
type HeaderPropsType = MapStateToProps & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true,headers: {"API-KEY":'a05e4936-3d20-4899-8b3f-14b5bf4433fb'}})
           .then(response => {
                if (response.data.resultCode === 0) {

                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose<React.FC>(connect(mapStateToProps, {setAuthUserData}))(HeaderContainer)