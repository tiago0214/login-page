import { useForm } from "react-hook-form"
import { ContactForm, CreateContainer, LinksContainer } from "./style"
import { ArrowCircleLeft, UserCircle } from "@phosphor-icons/react"


interface UserDataInput{
  email: string,
  password: string
}

export function Login(){
  const {register, handleSubmit} = useForm<UserDataInput>()

  function handleUserData(data:UserDataInput){
    console.log(data)
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
        <span>User Login</span>
        <input type="text" placeholder="email" required {...register("email")}/>
        <input type="password" placeholder="password" required {...register("password")}/>

        <button type="submit">Login</button>
      </ContactForm>
    </CreateContainer>
  )
}