import { useContext } from "react";
import { Login } from "../login";
import { ButtonContainer, ContactInfo } from "./style";
import { UserCircle } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { TokenProvider } from "../../context";
import axios from "axios";
import { message } from "antd";

interface ChangePasswordParams{
  oldPassword: string,
  newPassword: string
}

export function Password() {
  const {register, handleSubmit, reset} = useForm<ChangePasswordParams>()
  const {accessToken} = useContext(TokenProvider)

  async function fetchApi({oldPassword,newPassword}:ChangePasswordParams){
    try {
      await api.post("/password",{
        oldPassword,
        newPassword
    },{
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) =>{
      message.success(response.data.message)
    })
    } catch (err) {
      if(axios.isAxiosError(err)){
        return message.error(err.response?.data.message)
      }
    }finally{
      reset()
    }
      
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