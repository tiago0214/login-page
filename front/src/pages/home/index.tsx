import { ButtonContainer, Buttons, HomeContainer, HomeHeader } from "./style";

export function Home(){
  return (
    <HomeContainer>
      <HomeHeader>
        <span>Welcome</span>
        <p>It's a page to just create and manage an user account</p>
      </HomeHeader>
      <ButtonContainer>
        <Buttons href="/create">Create</Buttons>
        <Buttons href="/login">Login</Buttons>
      </ButtonContainer>
      
    </HomeContainer>
  )
}