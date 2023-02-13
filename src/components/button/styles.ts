import styled from "styled-components";
export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding: 6px 12px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: greenyellow;
  svg {
    width: 24px;
    height: 24px;
    margin-left: auto;
  }
  &.facebook {
    color: #fff;
    background-color: #091e42;
    &:hover {
      background-color: #0d2a5c;
    }
  }
  &.twitch {
    background-color: #8e24aa;
    color: #fff;
    &:hover {
      background-color: #aa2bcc;
    }
  }
  &.logout {
    background-color: #229954;
    &:hover {
      background-color: #27ae60;
    }
  }
`;
