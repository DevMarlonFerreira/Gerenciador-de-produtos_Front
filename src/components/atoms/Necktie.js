import styled from "styled-components";
// import PropTypes from "prop-types";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Necktie = () => (
  <Grid>
    <div>Nome</div>
    <div>Descrição</div>
    <div>Valor</div>
    <div>Editar</div>
    <div>Excluir</div>
  </Grid>
);

// Necktie.defaultProps = {};

// Necktie.propTypes = {};

export default Necktie;
