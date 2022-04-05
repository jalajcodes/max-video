import styled from "styled-components";

const Button = styled.button`
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

export default Button;
