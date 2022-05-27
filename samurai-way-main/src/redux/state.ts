export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: string
    messages: string
    likesCount: number
}
export type  DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    messages: string
}
export type SidebareType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebareType
}


export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    _rerenderEntireTree:()=>void
    subscribe:(observer: () => void)=>void
    getState:()=>RootStateType
    dispatch:(action:ActionsTypes)=>void
}

export type AddPostActionType = {
    type:'ADD-POST'
}

export type ChanchNewTextActionType = {
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
}
export type ActionsTypes = AddPostActionType|ChanchNewTextActionType

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', messages: 'Hi, how are you?', likesCount: 11},
                {id: '2', messages: "it's my first !", likesCount: 12},
            ],
            newPostText: 'it-kasutra.com'

        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Viktor'},
                {id: '6', name: 'Valera'},
            ],
            messages: [
                {id: '1', messages: 'Hi'},
                {id: '2', messages: 'How is your it-kamasutra!'},
                {id: '3', messages: 'Yo'},
                {id: '4', messages: 'Yo'},
                {id: '5', messages: 'Yo'},
            ]
        },
        sidebar: {}
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree();
    },
    addPost() {
        const newPost: PostType = {
            id: '3',
            messages: this._state.profilePage.newPostText,
            likesCount: 17
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree();
    },
    _rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: '3',
                messages: this._state.profilePage.newPostText,
                likesCount: 17
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree();
        }

    }


}