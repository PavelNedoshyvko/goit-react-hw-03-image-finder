import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

export const Header = styled.div`
position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 55px;
	background-color: #00aeff;
	z-index: 1;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.01em;
`;

export const FieldInput = styled(Field)`
width: 300px;
 margin-right: 30px;
	min-height: 35px;
	padding-left: 15px;
	border: 1px solid rgba(46, 47, 66, 0.4);
	border-radius: 4px;
	outline: transparent;
	transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		border-color: #4d5ae5;
		}
`;

export const SearchBtn = styled.button`
padding: 4px 24px;
	font-family: inherit;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: 0.04em;
	color: #ffffff;
	background-color: #3700ff;
	border: 1px solid#3700ff;
	border-radius: 4px;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover{
			color: #000000;
				background-color: #9adfff;
				border: 1px solid transparent;
				box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
					0px 2px 2px rgba(0, 0, 0, 0.12);
				cursor: pointer;
		}
`;

export const ErrMessage = styled(ErrorMessage)`
margin-bottom: 20px;
`;