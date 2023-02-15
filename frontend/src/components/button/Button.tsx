import RenderIf from "../render-if";
import * as types from "./types";
import { StyledButton } from "./styles";

const Button = ({ label, onClick, icon, classNames }: types.Props) => {
  // we will passdown the classNames from parents down to styled button for styling the components.

  // We also have a simple rend if component that will render the icon if certain condition is true.
  // In our case, if an icon is passed as a prop, we will render it.
  return (
    <StyledButton className={classNames} onClick={() => onClick()}>
      {label}
      <RenderIf isTrue={!!icon}>
        <>{icon}</>
      </RenderIf>
    </StyledButton>
  );
};
export default Button;
