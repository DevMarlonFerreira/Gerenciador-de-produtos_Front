import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../atoms/Button";
import Modal from "../organisms/Modal";
import utilAjax from "../../services/api";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Container = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

function deletar(event) {
  const url = process.env.REACT_APP_URL_DELETE_PRODUCT + event.target.id;
  utilAjax.reqDeleteJSON(url);
}

const Row = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false);

  function handler(event) {
    setShowModal(!showModal);
  }

  return (
    <Container>
      <Grid>
        <div>{props.produto.nome}</div>
        <div>{props.produto.descricao}</div>
        <div>
          {props.produto.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <Button onClick={handler} color="default">
          Editar
        </Button>
        <Button id={props.produto.id} onClick={deletar} color="danger">
          Excluir
        </Button>
      </Grid>
      {showModal && (
        <Modal
          produto={props.produto}
          title="Editar produto"
          handler={handler}
        />
      )}
    </Container>
  );
};

Row.defaultProps = {
  produto: {},
};

Row.propTypes = {
  produto: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nome: PropTypes.string,
      descricao: PropTypes.string,
      valor: PropTypes.number,
    })
  ),
};

export default Row;
