import styled from "styled-components";

export const ContainerUser = styled.div`
  .info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  h1 {
    font-size:22px;
  }
`;
  
export const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  border-radius:8px;
  border:none;
  background:${props => props.theme['white']};
  color: ${props => props.theme['black-100']};
  font-weight: bold;
`;