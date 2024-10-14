import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  box-shadow:inset 10px 10px 200px 40px ${props => props.theme["red-2"]};
`

export const LayoutContent = styled.div`
  width: 700px;
  height: 500px;
  border: solid 1px ${props => props.theme["gray-900"]};
  box-shadow: 2px 2px 30px 5px ${props => props.theme["red-3"]};
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  background-color: ${props => props.theme["gray-100"]};

  margin: auto;
`

