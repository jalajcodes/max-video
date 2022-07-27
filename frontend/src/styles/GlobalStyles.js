import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		font-size: 1rem;
		font-family: ${(props) => props.theme.font};
		color: ${(props) => props.theme.fontColor};
		background-color: ${(props) => props.theme.bg};
		line-height: 1.8;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input, textarea {
		font-family: ${(props) => props.theme.font}, sans-serif;
		font-size: 1rem;
	}

	input:focus, textarea:focus, button:focus, video:focus {
	  outline: none;
	}

	button {
		font-family: ${(props) => props.theme.font};
		font-size: 1rem;
		cursor: pointer;
	}

	textarea {
		resize: none;
	}

	svg, .pointer {
		cursor: pointer;
	}

	.secondary {
		color: ${(props) => props.theme.secondaryColor};
	}

	.avatar {
		height: 22px;
		width: 22px;
		border-radius: 10px;
		object-fit: cover;
	}

	.md {
		height: 50px;
		width: 50px;
		border-radius: 25px;
	}

	.small {
		font-size: 0.9rem;
	}

	.lg {
		height: 60px;
		width: 60px;
		border-radius: 30px;
	}

	.flex-row {
		display: flex;
		align-items: center;
	}

	.loaderImg {
		margin: 0 0 0 30rem;
		@media (max-width: 768px) {
			display: none;
		}
	}

	.flex-row img, .flex-row svg {
		margin-right: 0.8rem;
	}

	.divider {
		height: 1px;
		background: ${(props) => props.theme.darkGrey};
		margin: 1rem 0;
	}

	@media screen and (max-width: 530px) {
		body {
			font-size: 0.95rem;
		}

		button {
			font-size: 0.9rem;
	  }
	}

	[data-reach-popover] {
		z-index: 500;
		background: ${(props) => props.theme.grey};
		border: 1px solid ${(props) => props.theme.darkGrey};
		border-radius: 1rem;
		overflow: hidden;
	}

	[data-reach-menu-list] {
		width: 200px;
		background: ${(props) => props.theme.grey};
		cursor: pointer;
		border-radius: 0 2px 2px 0;
		padding-top: 5px;
		padding-bottom: 5px;
		font-size: 1rem;
	}

	[data-reach-menu-list]:focus {
		outline: none;
	}

	[data-reach-menu-item] {
		padding: 10px 20px;
		display: flex;
		align-items: center;

		svg {
			height: 30px;
			width: 30px;
			margin-right: 16px;
		}
	}

	[data-reach-menu-item]:hover, [data-reach-menu-item]:active, [data-reach-menu-item]:focus {
		background-color: ${(props) => props.theme.darkGrey};
	}

	[data-reach-menu-item]:not(:hover) {
		background: ${(props) => props.theme.grey};
	}

	[data-reach-menu-button] {
		background: none;
    border: none;
	}

	div[class^='Snackbar'], div[class*='Snackbar'] {
    z-index: 1000;
  }
`;

export default GlobalStyle;
