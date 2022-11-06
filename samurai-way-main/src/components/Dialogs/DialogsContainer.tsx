import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs.reducer";
import {Dialogs, FormMessageDataType} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody:FormMessageDataType) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);


