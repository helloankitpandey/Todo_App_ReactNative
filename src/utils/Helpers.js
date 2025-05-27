// creating function i.e reset and navigate
// which achieved from expo/router

import { Href, router } from "expo-router"

// navigation works on stack

// if we go from this opening screen to new home screen
// then it will be completly vanished from here/history
// means if i back from home screen then i don't come here 
// i completly closed this app


export const resetAndNavigate = (newPath) => {
    if(router.canGoBack()){
        // router.dismissAll()
    }
    router.replace(newPath)
}
