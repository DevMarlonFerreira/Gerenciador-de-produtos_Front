import React, { useState, useEffect } from "react";

import utilAjax from "../../services/api";
import Row from "../molecules/Row";
import Necktie from "../atoms/Necktie";
import List from "../molecules/List";
import Button from "../atoms/Button";
import Modal from "../organisms/Modal";

const Home = () => {
  const url = process.env.REACT_APP_URL_GET_ALL_PRODUCTS;
  const [produtos, setProdutos] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handler() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function getProdutos() {
      await utilAjax.reqGetJSON(url).then((response) => {
        setProdutos(response);
      });
    }
    getProdutos();
  }, [showModal, produtos, url]);

  return (
    <>
      <h1>LISTA DE PRODUTOS</h1>
      <Necktie />
      {produtos ? (
        produtos.map((produto) => (
          <List key={produto.id}>
            <Row key={produto.id} produto={produto}></Row>
          </List>
        ))
      ) : (
        <h1>Sem dados</h1>
      )}
      <Button color="primary" onClick={handler}>
        Novo produto
      </Button>

      {showModal && <Modal title="Novo produto" handler={handler} />}
    </>
  );
};

export default Home;
