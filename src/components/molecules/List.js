import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
`;
const List = ({ children }) => (
  <>
    <Grid>{children}</Grid>
  </>
);

List.defaultProps = {
  children: undefined,
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
