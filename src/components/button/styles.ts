import styled from "styled-components";
export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding: 6px 6px 6px 12px;
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
  &.instagram {
    color: #fff;
    background: #f09433;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    &:hover {
      background: linear-gradient(
        45deg,
        #f09433 5%,
        #e6683c 30%,
        #dc2743 55%,
        #cc2366 80%,
        #bc1888 100%
      );
    }
  }
`;
