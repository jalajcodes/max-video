import styled, { css } from "styled-components";

const ButtonGhost = styled.button`
  text-transform: uppercase;
  position: relative;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.primaryColor};
  padding: 6px 15px;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  min-width: 6rem;
  box-sizing: border-box;
  transition: all 0.25s;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.primaryColor};
    transform: translateY(0.2rem);
  }

  .outer {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .inner {
    display: inherit;
    margin-left: -4px;
    margin-right: 8px;
    font-size: 24px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  padding: 10px 16px;
  font-family: ${(props) => props.font};
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.red};
  border-radius: 1px;
  font-weight: 400;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
  letter-spacing: 0.02857em;

  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 5px 8px;
  }

  ${(props) =>
    props.grey &&
    css`
      background: ${(props) => props.theme.darkGrey};
      border: 1px solid ${(props) => props.theme.darkGrey};
      color: ${(props) => props.theme.secondaryColor};
    `}
`;

export { ButtonGhost, Button };
