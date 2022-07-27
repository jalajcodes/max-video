import { ButtonGhost } from "../styles/Button";
import { SignInIcon } from "./Icons";
import { useModal } from "../context/modalContext";

function GoogleAuth() {
  const { toggleModal } = useModal();

  return (
    <ButtonGhost onClick={() => toggleModal(null, "auth")}>
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
