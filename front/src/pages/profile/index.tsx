import { useContext, useEffect, useState } from "react";
import { ButtonContainer, ButtonsAnchor, ContactInfo } from "./style";
import { House, UserCircle } from "@phosphor-icons/react";
import { TokenProvider } from "../../context";
import { message } from "antd";
import { api } from "../../lib/axios";
// import { api } from "../../lib/axios";

interface User{
  name: string,
  email: string
}

export function Profile() {
  const { accessToken } = useContext(TokenProvider)
  const [ user, setUser ] = useState<User>()

  function handleLogout(){
    localStorage.clear()

    window.location.href= "/"
  }

  useEffect(() => {
    async function apiResponse() {
      const user = await api.get("/profile",{
        headers:{ Authorization: `Bearer ${accessToken}`}
      })
  
      if(user){
        setUser(user.data)
      }
  
      if(!accessToken){
        message.error("Invalid credentials")
      }
    }

    apiResponse()
  })

  return (
    <ContactInfo >
      <span><UserCircle size={42} color="#7C7C8A"/></span>
      <label htmlFor="email">email</label>
      <p id="email">{user?.email}</p>

      <label htmlFor="name">name</label>
      <p id="name">{user?.name}</p>

      <ButtonContainer> 
        <ButtonsAnchor onClick={handleLogout}>Logout</ButtonsAnchor>
        <ButtonsAnchor href="/password">Change Password</ButtonsAnchor>
      </ButtonContainer>

      <a href="/"><House size={32} color="#7C7C8A"/></a>

  </ContactInfo>
  )
}