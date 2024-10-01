import { useContext, useEffect } from "react";
import { Login } from "../login";
import { ButtonContainer, ContactInfo } from "./style";
import { UserCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { TokenProvider } from "../../context";

interface ChangePasswordParams{
  oldPassword: string,
  newPassword: string
}

export function Password() {
  const {register, handleSubmit} = useForm<ChangePasswordParams>()
  const {accessToken} = useContext(TokenProvider)

  async function fetchApi({oldPassword,newPassword}:ChangePasswordParams){
      await api.post("/password",{
        data:{
          oldPassword,
          newPassword
        }
      },{
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      })
      //frontend its making a wrong request when i change to POST verb
      //When i change the GET to POST my params orders is differents
      
  }

  if(typeof accessToken === "undefined"){
    return <Login />
  }

  return (
    <ContactInfo onSubmit={handleSubmit(fetchApi)}>
      <span><UserCircle size={42} color="#7C7C8A"/></span>
      <label htmlFor="oldPassword">Old Password</label>
      <input type="password" id="oldPassword" {...register("oldPassword")}/>

      <label htmlFor="newPassword">New Password</label>
      <input type="password" id="newPassword" {...register("newPassword")}/>


      <ButtonContainer> 
        <a href="/profile">Cancel</a>
        <button type="submit">Save</button>
      </ButtonContainer>

  </ContactInfo>
  )
}