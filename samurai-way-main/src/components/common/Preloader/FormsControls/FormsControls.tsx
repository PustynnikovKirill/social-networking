import React from "react";
import styles from "./FormControls.module.css"

export const FormControl = ({input,meta,child,element, ...props}:any) => {
    const hasError = meta.touched && meta.error

    return(
        <div className={styles.formControl + " " + (hasError ? styles.error: '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props:any) => {
    const {input,meta,child,element, ...restProps} = props
    return (
      <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
    )
}
export const Input = (props:any) => {
    const {input,meta,child,element, ...restProps} = props
    return(
        <FormControl {...props}><input {...input} {...restProps}/> </FormControl>
    )
}