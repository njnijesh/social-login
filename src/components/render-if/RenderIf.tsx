import * as types from "./types";

const RenderIf = ({ isTrue, children }: types.Props) => {
  return <>{isTrue ? children : null}</>;
};
export default RenderIf;
