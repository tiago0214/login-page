import { useEffect } from "react";
import { Login } from "../login";
import { ButtonContainer, ButtonsAnchor, ContactInfo } from "./style";
import { House, UserCircle } from "@phosphor-icons/react";

export function Profile() {
  const authorization = true;

  useEffect(()=>{
    
  },[authorization])

  if(!authorization){
    return <Login />
  }

  return (
    <ContactInfo >
      <span><UserCircle size={42} color="#7C7C8A"/></span>
      <label htmlFor="email">email</label>
      <p id="email">tiago@tiago.com</p>

      <label htmlFor="name">name</label>
      <p id="name">Tiago Souza</p>

      <ButtonContainer> 
        <ButtonsAnchor href="">Edit User</ButtonsAnchor>
        <ButtonsAnchor href="/password">Change Password</ButtonsAnchor>
      </ButtonContainer>

      <a href="/"><House size={32} color="#7C7C8A"/></a>

  </ContactInfo>
  )
}