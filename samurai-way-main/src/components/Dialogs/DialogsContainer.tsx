import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs.reducer";
import {Dialogs} from "./Dialogs";
import {AppRootStateType, RootStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";


let mapStateToProps = (state:AppRootStateType) =>{
    return{
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody:(body:string)=>{dispatch(updateNewMessageBodyCreator(body))},
        sendMessage:()=>{dispatch(sendMessageCreator())}

    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


