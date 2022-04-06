import { ButtonGhost } from "../styles/Button";
import { SignInIcon } from "./Icons";

function GoogleAuth() {
  return (
    <ButtonGhost tabIndex={0} type="button">
      <span className="outer">
        <span className="inner">
          <SignInIcon />
        </span>
        sign in
      </span>
    </ButtonGhost>
  );
}

export default GoogleAuth;
