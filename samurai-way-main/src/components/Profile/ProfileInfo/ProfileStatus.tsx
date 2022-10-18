import React from 'react';


type ProfilePropsType = {
    status:string
}

export class ProfileStatus extends React.Component<ProfilePropsType, any>  {
    state = {
        editMode:false
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode:false
        })
    }
    render () {
        return (
            <div>
                {!this.state.editMode && <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div> }
                {this.state.editMode && <div><input value={this.props.status} onBlur={this.deActivateEditMode} autoFocus={true}/></div> }
            </div>
        )
    }

}