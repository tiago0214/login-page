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
        await api.post("/registration",data).then((response) =>{
          if(response.status === 201){
            return message.success("User Create With Success")
          }
        })
      }catch(err){
        if(axios.isAxiosError(err)){
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
        <input type="text" placeholder="name" required {...register("name")}/>
        <input type="text" placeholder="email" required {...register("email")}/>
        <input type="password" placeholder="password" required {...register("password")}/>

        <button type="submit">Create</button>
      </ContactForm>
    </CreateContainer>
  )
}