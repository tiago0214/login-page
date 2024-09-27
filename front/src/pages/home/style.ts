import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  /* align-items: baseline; */

  flex-direction: column;
  align-items: center;
  gap: 70px;
  justify-content: center;

  
`

export const HomeHeader = styled.div`
text-align: center;

  span{
    font-size: 60px;
    font-weight: 500;
  }

  p{
    font-size: 12px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Buttons = styled.a`
  background-color: transparent;
  border: 1px solid ${props => props.theme["gray-400"]};
  padding: 10px 70px 10px 70px;
  border-radius: 4px;
  font-weight: 500;
  color: black;

  text-align: center;
  justify-content: center;
  transition: 0.5s;

  font-size: 13px;

  text-decoration: none;

  &:hover{
    background-color: ${props => props.theme["gray-400"]};
    transition: 0.5s;
    color: white;
    cursor: pointer;
  }
`