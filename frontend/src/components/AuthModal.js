import React from "react";
import GoogleLogin from "react-google-login";
import { useModal } from "../context/modalContext";
import { ButtonGhost } from "../styles/Button";
import Wrapper from "../styles/PlaylistModal";
import { authenticate, authenticateGuest } from "../utils/api-client";
import { CloseIcon, SignInIcon } from "./Icons";

function PlaylistModal() {
  const { modalData, toggleModal } = useModal();

  return (
    <Wrapper showModal={modalData.showAuthModal}>
      <div className="auth-wrapper">
        <div className="modal-header">
          <h3>
            <span>Sign In</span>
            <CloseIcon onClick={() => toggleModal(null, "auth")} />
          </h3>
        </div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          cookiePolicy="single_host_origin"
          onSuccess={authenticate}
          onFailure={authenticate}
          render={(renderProps) => (
            <ButtonGhost
              tabIndex={0}
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <span className="outer">
                <span className="inner">
                  <SignInIcon />
                </span>
                sign in with google
              </span>
            </ButtonGhost>
          )}
        />
        <ButtonGhost onClick={authenticateGuest}>
          <span className="outer">
            <span className="inner">
              <SignInIcon />
            </span>
            sign in as guest
          </span>
        </ButtonGhost>
      </div>
    </Wrapper>
  );
}

export default PlaylistModal;
