import styled from "styled-components";

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  padding: 8px;
`

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  gap: 8px;
  margin-top: 4rem;

  input{
    width: 400px;
    padding: 14px;
    border-radius: 10px;
    border: solid 1px ${props => props.theme["gray-300"]};
  }

  button{
    background-color: transparent;
    border: 1px solid ${props => props.theme["gray-400"]};
    padding: 10px 20px 10px 20px;
    border-radius: 4px;
    font-weight: 500;
    color: black;
    margin-top: 4rem;
    width: 400px;


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
  }
`