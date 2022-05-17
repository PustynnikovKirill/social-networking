export type ProfilePageType = {
    posts:Array<PostType>
}
export type PostType = {
    id: string
    messages: string
    likesCount: number
}
export type  DialogsPageType= {
    dialogs:Array<DialogType>
    messages:Array<MessageType>
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
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SidebareType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: '1', messages: 'Hi, how are you?', likesCount: 11},
            {id: '2', messages: "it's my first !", likesCount: 12},
        ]
    },
    dialogsPage: {
        dialogs:[
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Sveta'},
            {id: '4', name: 'Sasha'},
            {id: '5', name: 'Viktor'},
            {id: '6', name: 'Valera'},
        ],
        messages:[
            {id: '1', messages: 'Hi'},
            {id: '2', messages: 'How is your it-kamasutra!'},
            {id: '3', messages: 'Yo'},
            {id: '4', messages: 'Yo'},
            {id: '5', messages: 'Yo'},
        ]
    },
    sidebar:{}
}
