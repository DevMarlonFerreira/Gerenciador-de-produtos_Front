import styled from "styled-components";
// import PropTypes from "prop-types";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Necktie = () => (
  <Grid>
    <h2>Nome</h2>
    <h2>Descrição</h2>
    <h2>Valor</h2>
    <h2></h2>
    <h2></h2>
  </Grid>
);

// Necktie.defaultProps = {};

// Necktie.propTypes = {};

export default Necktie;
