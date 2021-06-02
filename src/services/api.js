export default class utilAjax {
  static reqPostJSON(URL, dados) {
    return fetch(URL, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        console.log("Erro na operacao " + error.message);
        return 0;
      });
  }

  static reqPutJSON(URL, dados) {
    return fetch(URL, {
      mode: "cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        console.log("Erro na operacao " + error.message);
        return 0;
      });
  }

  static reqPatchJSON(URL) {
    return fetch(URL, {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        console.log("Erro na operacao " + error.message);
        return 0;
      });
  }

  static reqGetJSON(URL) {
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  static reqDeleteJSON(URL) {
    return fetch(URL, {
      mode: "cors",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}
