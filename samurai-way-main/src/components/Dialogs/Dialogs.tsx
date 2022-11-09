import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs.reducer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/Preloader/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type DialogsType = {
    sendMessage:(newMessageBody:FormMessageDataType)=>void
    dialogsPage:InitialStateType
    isAuth:boolean
}
export type FormMessageDataType = {
    newMessageBody:string
}
export const Dialogs:React.FC<DialogsType> = (props) => {
    let state = props.dialogsPage
    //let state = props.store.getState().dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElement =   props.dialogsPage.messages.map(el=><Message key={el.id} id={el.id} messages={el.messages}/>)
    // let newMessageBody =   props.dialogsPage.newMessageBody;


    let addNewMessage = (newMessageBody:FormMessageDataType) => {
        props.sendMessage(newMessageBody)
    }
    if (!props.isAuth) {
            return <Redirect to={'/login'}/>
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(40)

const AddMessageForm:React.FC<InjectedFormProps<FormMessageDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate = {[required,maxLength50]}
                       name = "newMessageBody"
                       placeholder= "Enter your message"/>
             </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormMessageDataType>({form:"dialogAddMessageForm"})(AddMessageForm)
