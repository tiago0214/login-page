import { createContext, ReactNode, useEffect, useState} from "react";

interface ActiveContextProvider{
  children: ReactNode
}

interface TokenContextType{
  token: string | undefined ,
  changeToken(token:string):void
}

export const TokenProvider = createContext({} as TokenContextType)

export function TokenContextProvider({children}:ActiveContextProvider){
  const [token, setToken] = useState<string | undefined>(undefined)

  function changeToken(token:string | undefined){
    setToken(token)

    localStorage.setItem("token", JSON.stringify(token))
  }

  useEffect(()=>{
    const localToken = localStorage.getItem("token")
    let convertToken;

    if(localToken){
      convertToken = JSON.parse(localToken)

      setToken(convertToken.accessToken)

    }
  })

  return(
    <TokenProvider.Provider value={{
      token,
      changeToken
    }}>
      {children}
    </TokenProvider.Provider>
  )

}