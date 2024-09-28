import { useContext, useState } from "react";
import { Login } from "../login";
import { ButtonContainer, ButtonsAnchor, ContactInfo } from "./style";
import { House, UserCircle } from "@phosphor-icons/react";
import { TokenProvider } from "../../context";
import { message } from "antd";

interface User{
  name:string,
  email:string
}

export function Profile() {
  const { token } = useContext(TokenProvider)
  const[ user, setUser]= useState<User>()

  if(!token){
    message.error("Need to login first")
    return <Login />
  }

  function handleLogout(){
    localStorage.clear()

    window.location.href= "/"
  }

  return (
    <ContactInfo >
      <span><UserCircle size={42} color="#7C7C8A"/></span>
      <label htmlFor="email">email</label>
      <p id="email">tiago@tiago.com</p>

      <label htmlFor="name">name</label>
      <p id="name">Tiago Souza</p>

      <ButtonContainer> 
        <ButtonsAnchor onClick={handleLogout}>Logout</ButtonsAnchor>
        <ButtonsAnchor href="/password">Change Password</ButtonsAnchor>
      </ButtonContainer>

      <a href="/"><House size={32} color="#7C7C8A"/></a>

  </ContactInfo>
  )
}