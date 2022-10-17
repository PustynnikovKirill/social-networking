import React, {ComponentType, FC} from 'react'
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect, useSelector} from "react-redux";

// export type MapStateToPropsForRedirectType = {
//     isAuth:boolean
// }
// let mapStateToPropsForRedirect = (state:AppRootStateType): MapStateToPropsForRedirectType => {
//     return {
//         isAuth:state.auth.isAuth
//     }
// }
//
// export function withAuthRedirect<T>(Component:ComponentType<T>) {
//     const RedirectComponent = (props:MapStateToPropsForRedirectType)=> {
//             let {isAuth, ...restProps} = props
//
//             if (!isAuth) {
//                 return <Redirect to={'/login'}/>
//             }
//             return <Component {...restProps as T}/>
//     }
//
//     let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
//     return ConnectedRedirectComponent
// }

export const WithAuthRedirect: FC = ({children}) => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) return <Redirect to={'/login'}/>

    return <>{children}</>
}