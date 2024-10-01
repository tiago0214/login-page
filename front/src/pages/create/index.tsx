import { useForm } from "react-hook-form"
import { ContactForm, CreateContainer, LinksContainer } from "./style"
import { ArrowCircleLeft, UserCircle } from "@phosphor-icons/react"
import { api } from "../../lib/axios"

import { message } from "antd"
import axios from "axios"

interface UserDataInput{
  name: string,
  email: string,
  password: string
}

export function Create(){
  const {register, handleSubmit, reset} = useForm<UserDataInput>()
    async function handleUserData(data:UserDataInput){
      try{
        await api.post("/register",data).then((response) =>{
          if(response.status === 201){
            message.success("User Create With Success... redirecting")
            localStorage.clear()

            setInterval(()=>{
              window.location.href = "/login"
            },1500)
            
          }
        })
      }catch(err){
        if(axios.isAxiosError(err)){
          if(!err.response?.data.message){
            return message.error("Server if offline")
          }

          return message.error(err.response?.data.message)
        }
      }finally{
        reset()
      }
    }

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
        <span>User Registration</span>
        <input type="text" placeholder="name" {...register("name")}/>
        <input type="text" placeholder="email" {...register("email")}/>
        <input type="password" placeholder="password" {...register("password")}/>

        <button type="submit">Create</button>
      </ContactForm>
    </CreateContainer>
  )
}