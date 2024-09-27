import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  gap: 8px;
  margin-top: 4rem;

  p{
    width: 400px;
    padding: 14px;
    border-radius: 10px;
    border: solid 1px ${props => props.theme["gray-300"]};
    background-color: transparent;
  }
`

export const ButtonsAnchor = styled.a`
    background-color: transparent;
    border: 1px solid ${props => props.theme["gray-400"]};
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    font-weight: 500;
    color: black;
    margin-top: 3rem;
    width: 200px;


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
