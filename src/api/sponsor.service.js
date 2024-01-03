import API_URL from "./config.js";

export const sponsorService = {
  async getSponsors(token) {
    const response = await fetch(`${API_URL}/sponsors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async addSponsor(token, payload) {
    const response = await fetch(`${API_URL}/sponsors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async editSponsor(token, payload) {
    const response = await fetch(`${API_URL}/sponsors/${payload._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async removeSponsor(token, id) {
    const response = await fetch(`${API_URL}/sponsors/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  }
};

function handleResponses(code) {
  let message = "";
  switch (code) {
    case 401:
      message = "Não está autorizado a executar esta ação!";
      break;
    case 406:
      message =
        "Ação não aceitável. Verifique se preencheu bem todos os campos!";
      break;
    case 409:
      message = "Já existe um utilizador com este username!";
      break;
    default:
      message = "Mensagem desconhecida:" + code;
      break;
  }
  return message;
}

export default sponsorService;
