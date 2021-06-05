import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.default:
      return theme.colors.primary.primary;
    case ButtonColors.danger:
      return theme.colors.primary.danger;
    default:
      return theme.colors.primary.default;
  }
};

const getSecondaryColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.secondary.primary;
    case ButtonColors.danger:
      return theme.colors.secondary.danger;
    default:
      return theme.colors.secondary.default;
  }
};

const getColorText = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.text;
    case ButtonColors.danger:
      return theme.colors.primary.text;
    default:
      return "#212121";
  }
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  color: ${getColorText};

  display: inline-block;
  text-decoration: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${getSecondaryColor};
  }
`;

Button.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
};

export default Button;
