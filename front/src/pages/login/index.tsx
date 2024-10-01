import { useForm } from "react-hook-form"
import { ContactForm, CreateContainer, LinksContainer } from "./style"
import { ArrowCircleLeft, UserCircle } from "@phosphor-icons/react"
import { api } from "../../lib/axios"
import { useContext, useEffect } from "react"
import { TokenProvider } from "../../context"
import { message } from "antd"
import axios from "axios"
import { Profile } from "../profile"


interface UserDataInput{
  email: string,
  password: string
}

export function Login(){
  const { register, handleSubmit } = useForm<UserDataInput>()
  const { accessToken, changeToken } = useContext(TokenProvider)

  async function checkToken(){
    if(accessToken){
      try{
        await api.get("/").then(()=>{
          window.location.href = "/profile"
          return <Profile />
        })
      }catch{
        message.error("Server if offline")
      }
    }
  }
  
  async function handleUserData(data:UserDataInput){
    try{
      const response = await api.post("/login",data)
      const user = await response.data

      changeToken(user)

      window.location.href= "/profile" 
    }catch(err){
      if(axios.isAxiosError(err)){
        return message.error(err.response?.data.message)
      }
    }
  }

  useEffect(()=>{
    checkToken()
  })

  return (
    <CreateContainer>
      <LinksContainer>
        <a href="/">
          <ArrowCircleLeft size={42} color="#7C7C8A"/>
        </a>
        <a href="/profile">
          <UserCircle size={42} color="#7C7C8A"/>
        </a>
      </LinksContainer>
      
      <ContactForm onSubmit={handleSubmit(handleUserData)}>
        <span>User Login</span>
        <input type="text" placeholder="email" {...register("email")}/>
        <input type="password" placeholder="password" {...register("password")}/>

        <button type="submit">Login</button>
      </ContactForm>
    </CreateContainer>
  )
}