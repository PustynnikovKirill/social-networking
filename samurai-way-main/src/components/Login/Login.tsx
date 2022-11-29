import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/Preloader/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import style from "./../common/Preloader/FormsControls/FormControls.module.css"

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean) => void,
}
type MapStateToProps = {
    isAuth: boolean
}
type PropsLoginType = MapDispatchToProps & MapStateToProps

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {

    return <form onSubmit={handleSubmit}>
        {createField("Email","email",[required],Input,null)}
        {createField("Password","password",[required],Input,{type:"password"})}
        {createField(null,"rememberMe",[required],Input,{type:"checkbox"})}
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: PropsLoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)
