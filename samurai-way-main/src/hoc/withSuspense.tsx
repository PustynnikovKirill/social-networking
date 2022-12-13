import React from 'react'
import {WithAuthRedirect} from "./withAuthRedirect";

export const WithSuspense = (Component: any) => {

    return (props: any) => {
        return            <React.Suspense fallback={<div>Loading...</div>}>
                <Component {...props}/>
            </React.Suspense>
           }
}