import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import utilAjax from "../../services/api";
import Button from "../atoms/Button";

const Root = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  /* border: 1px solid #888; */
  width: 80%;
`;

const Content = styled.div`
  font-size: 16px;
  padding-top: 15px;
  border-bottom: 1px solid #ee6b26;
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }

  input {
    width: 100%;
  }

  Button {
    margin-top: 200px;
  }
`;

const Close = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Section = styled.div`
  margin-top: 20px;
`;

const Modal = ({ ...props }) => {
  const [nome, setNome] = useState(props.produto?.nome);
  const [descricao, setDescricao] = useState(props.produto?.descricao);
  const [valor, setValor] = useState(props.produto?.valor);

  function limpaCampo() {
    setNome("");
    setDescricao("");
    setValor("");
  }

  function salvar(event) {
    event.preventDefault();
    const url = process.env.REACT_APP_URL_POST_PRODUCT;
    utilAjax.reqPostJSON(url, { nome, descricao, valor });
    limpaCampo();
    props.handler();
  }

  function atualizar(event) {
    event.preventDefault();
    const url = process.env.REACT_APP_URL_PUT_PRODUCT;
    utilAjax.reqPutJSON(url, { ...props.produto, nome, descricao, valor });
    limpaCampo();
    props.handler();
  }

  function fechar() {
    limpaCampo();
    props.handler();
  }

  return (
    <>
      <Root>
        <ModalContent>
          <Close onClick={fechar}>&times;</Close>
          <h2>{props.title}</h2>
          <form>
            <Content>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
            </Content>
            <Content>
              <label htmlFor="descricao">Descrição:</label>
              <input
                type="text"
                id="descricao"
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
              />
            </Content>
            <Content>
              <label htmlFor="valor">Valor:</label>
              <input
                type="number"
                id="valor"
                onChange={(e) => setValor(e.target.value)}
                value={valor}
                min="0.00"
                step="0.01"
              />
            </Content>
            <Section>
              {props.produto ? (
                <Button color="default" onClick={atualizar}>
                  Atualizar
                </Button>
              ) : (
                <Button color="primary" onClick={salvar}>
                  Salvar
                </Button>
              )}
            </Section>
          </form>
        </ModalContent>
      </Root>
    </>
  );
};

Modal.defaultProps = {
  title: "",
  produto: undefined,
};

Modal.propTypes = {
  title: PropTypes.string,
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
      descricao: PropTypes.string,
      valor: PropTypes.number,
    })
  ),
};

export default Modal;
