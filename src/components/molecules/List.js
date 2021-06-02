import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  /* background-color: red; */
`;
const List = ({ children }) => (
  <>
    <Grid>{children}</Grid>
  </>
);

List.propTypes = {
  produto: PropTypes.node,
};

List.defaultProps = {};

export default List;
