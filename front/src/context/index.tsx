import { createContext, ReactNode, useReducer} from "react";

interface ActiveContextProvider{
  children: ReactNode
}

interface TokenContextType{
  accessToken: string | null ,
  changeToken: (token:string | null) => void
}

interface LocalTokenType{
  accessToken:string | null
}



export const TokenProvider = createContext({} as TokenContextType)

export function TokenContextProvider({children}:ActiveContextProvider){
  const [ token, dispach ] = useReducer(reducer,{} as LocalTokenType,(initialState)=>{
    const localToken = localStorage.getItem("token")
    let tokenParse;

    if(localToken){
      tokenParse = JSON.parse(localToken)

      return {accessToken:tokenParse.accessToken}
    }

    return {accessToken:initialState.accessToken}
  })

  function reducer (_:LocalTokenType,action:LocalTokenType){
    // if(state){
    //   return {accessToken: state.accessToken}
    // }

    return {accessToken: action.accessToken}
  }

  async function changeToken(token:string | null){
    dispach({accessToken:token})

    localStorage.setItem("token", JSON.stringify(token))
  }

  return(
    <TokenProvider.Provider value={{
        accessToken:token.accessToken,
        changeToken
      }}>
      {children}
    </TokenProvider.Provider>
  )

}