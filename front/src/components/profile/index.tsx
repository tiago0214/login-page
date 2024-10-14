import { useContext, useEffect, useState } from "react";
import { ButtonContainer, ButtonsAnchor, ContactInfo } from "./style";
import { House, UserCircle } from "@phosphor-icons/react";
import { TokenProvider } from "../../context";
import { message } from "antd";
import { api } from "../../lib/axios";
import { Login } from "../login";
import axios from "axios";

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
  
  async function apiResponse() {
    try {
      const user = await api.get("/profile",{
        headers:{ Authorization: `Bearer ${accessToken}`}
      })

      if(user){
        setUser(user.data)
      }
    } catch (err) {
      if(axios.isAxiosError(err)){
        if(!err.response?.data.message){
          setTimeout(()=> window.location.href="/",1000)
          return message.error("Server if offline")
        }

        message.error(err.response?.data.message)

        setTimeout(()=> window.location.href="/login",1000)
      }
    }
    
  }

  useEffect(() => {
    apiResponse()
  })

  if(typeof accessToken === "undefined" || !accessToken){
    return <Login />
  }

  return (
    <ContactInfo >
      <span><UserCircle size={42} color="#7C7C8A"/></span>
      <label htmlFor="email">email</label>
      <p id="email">{user ? user?.email : "..."}</p>

      <label htmlFor="name">name</label>
      <p id="name">{user ? user?.name : "..."}</p>

      <ButtonContainer> 
        <ButtonsAnchor onClick={handleLogout}>Logout</ButtonsAnchor>
        <ButtonsAnchor href="/password">Change Password</ButtonsAnchor>
      </ButtonContainer>

      <a href="/"><House size={22} color="#7C7C8A"/></a>

  </ContactInfo>
  )
}