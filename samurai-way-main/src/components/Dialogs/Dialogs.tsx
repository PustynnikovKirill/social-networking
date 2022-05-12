import React from 'react';
import style from './Dialogs.module.css';

export const Dialogs = () => {
  return(
      <div className = {style.dialogs}>
          <div className={style.dialogsItems}>
              <div className={style.dialog + ' ' + style.active }>
                 Dimych
              </div>
              <div className={style.dialog}>
                  Sveta
              </div>
              <div className={style.dialog}>
                  Andrey
              </div>
              <div className={style.dialog}>
                  Sacha
              </div>
              <div className={style.dialog}>
                  Valera
              </div>
          </div>
          <div className = {style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your it-kamasutra!</div>
                <div className={style.message}>Yo</div>
          </div>
      </div>
  )
}