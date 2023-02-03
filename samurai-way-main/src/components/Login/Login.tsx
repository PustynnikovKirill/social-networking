import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/Preloader/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import style from "./../common/Preloader/FormsControls/FormControls.module.css"

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captchaUrl: string| null
}

type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean,captchaUrl: string| null) => void,
}
type MapStateToProps = {
    isAuth: boolean,
    captchaUrl: string | null
}
type PropsLoginType = MapDispatchToProps & MapStateToProps

export const LoginForm: React.FC<InjectedFormProps<FormDataType, {captchaUrl: string | null}> & {captchaUrl: string | null}> = ({handleSubmit,error,captchaUrl}) => {

    return <form onSubmit={handleSubmit}>
        {createField("Email","email",[required],Input,null)}
        {createField("Password","password",[required],Input,{type:"password"})}
        {createField(null,"rememberMe",[required],Input,{type:"checkbox"})}
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl &&  createField("Symbols from image","captcha",[required],Input,{})}
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType, {captchaUrl: string | null} >({
    form: 'login'
})(LoginForm)

const Login = (props: PropsLoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: AppRootStateType) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)

