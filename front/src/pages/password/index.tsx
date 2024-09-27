import { useEffect } from "react";
import { Login } from "../login";
import { ButtonContainer, ContactInfo } from "./style";
import { UserCircle } from "@phosphor-icons/react";

export function Password() {
  const authorization = true;

  useEffect(()=>{
    
  },[authorization])

  if(!authorization){
    return <Login />
  }

  return (
    <ContactInfo >
      <span><UserCircle size={42} color="#7C7C8A"/></span>
      <label htmlFor="oldPassword">Old Password</label>
      <input type="oldPassword" />

      <label htmlFor="newPassword">New Password</label>
      <input type="newPassword" />


      <ButtonContainer> 
        <a href="/profile">Cancel</a>
        <button type="submit">Save</button>
      </ButtonContainer>

  </ContactInfo>
  )
}