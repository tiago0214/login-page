import { ButtonContainer, Buttons, HomeContainer, HomeHeader } from "./style";

export function Home(){
  return (
    <HomeContainer>
      <HomeHeader>
        <span>Welcome</span>
        <p>It's a page for creating and managing users from the backend service.</p>
      </HomeHeader>
      <ButtonContainer>
        <Buttons href="/create">Create</Buttons>
        <Buttons href="/login">Login</Buttons>
      </ButtonContainer>
      
    </HomeContainer>
  )
}