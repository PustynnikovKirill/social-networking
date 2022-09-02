import React from 'react'
import {InitialStateType, UserType} from "../../redux/users.reducer";
import style from './users.module.css'
import {mapDispatchToPropsType, MapStateToPropsType, UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import {StoreType} from "../../redux/store";


export class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        return <div>
            {
                this.props.usersPages.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={style.photo} src={el.photos.small != null ? el.photos.small: userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {this.props.unfollow(el.id)}}> Unfollow</button>
                            : <button onClick={() => {this.props.follow(el.id)}}>Follow</button>
                        }

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}


// export const Users: React.FC<UsersPropsType> = (props) => {
//     let getUsers = () => {
//         if (props.usersPages.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items)
//             })
//
//         }
//     }
//
//     return <div>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.usersPages.users.map(el => <div key={el.id}>
//                 <span>
//                     <div>
//                         <img className={style.photo} src={el.photos.small != null ? el.photos.small: userPhoto}/>
//                     </div>
//                     <div>
//                         {el.followed
//                             ? <button onClick={() => {props.unfollow(el.id)}}> Unfollow</button>
//                             : <button onClick={() => {props.follow(el.id)}}>Follow</button>
//                         }
//
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{el.name}</div>
//                         <div>{el.status}</div>
//                     </span>
//                     <span>
//                         <div>{'el.location.country'}</div>
//                         <div>{'el.location.city'}</div>
//                     </span>
//                 </span>
//             </div>)
//         }
//     </div>
// }