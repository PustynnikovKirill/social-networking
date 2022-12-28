import {addPostActionCreator, deletePost, profileReducer} from "./profile.reducer";
import {ProfileType} from "../components/Profile/ProfileContainer";

const state = {
    posts: [
        {id: 1, messages: 'Hi, how are you?', likesCount: 11},
        {id: 2, messages: "it's my first !", likesCount: 12},
    ],
    profile: null as null | ProfileType,
    newPostText: 'it-kamasutra.com',
    status:''
}
//
// it ('length of posts should be incremented', ()=>{
//     let action = addPostActionCreator('it-kamasutra')
//
//
//     let newState = profileReducer(state, action)
//
//     expect (newState.posts.length).toBe(3) ;
// })
//
// it ('message of new post should be correct', ()=>{
//     let action = addPostActionCreator('it-kamasutra')
//
//
//     let newState = profileReducer(state, action)
//
//     expect (newState.posts[2].messages).toBe('it-kamasutra') ;
// })
//
// it ('after deleting length of messages should be decrement', ()=>{
//     let action = deletePost(1)
//
//
//     let newState = profileReducer(state, action)
//
//     expect(newState.posts.length).toBe(1) ;
// })
