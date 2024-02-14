import dogService from "@/api/dog.service";
import {
  SET_DOGS,
  SET_MESSAGE,
  FETCH_DOGS,
  ADD_DOG,
  EDIT_DOG,
  REMOVE_DOG
} from "./dog.constants";

const state = {
  dogs: [],
  message: ""
};

const getters = {
  getDogs: state => state.dogs,
  getDogsById: state => id => state.dogs.find(dog => dog._id === id),
  getNameById: state => id => {
    const dog = state.dogs.find(dog => dog._id === id);
    return dog.name;
  },
  getMessage: state => state.message
};

const actions = {
  [FETCH_DOGS]: async ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      dogService.getDogs(rootState.auth.token).then(
        res => {
          commit(SET_DOGS, res.body);
          resolve(res);
        },
        err => reject(err)
      );
    });
  },
  [ADD_DOG]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      dogService.addDog(rootState.auth.token, payload).then(
        res => {
          commit(
            SET_MESSAGE,
            `O cão ${res.body.name} foi adicionado com sucesso!`
          );
          resolve(res);
        },
        err => reject(err)
      );
    });
  },
  [EDIT_DOG]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      dogService.editDog(rootState.auth.token, payload).then(
        res => {
          commit(
            SET_MESSAGE,
            `O cão ${res.body.name} foi atualizado com sucesso!`
          );
          resolve(res);
        },
        err => reject(err)
      );
    });
  },
  [REMOVE_DOG]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      dogService.removeDog(rootState.auth.token, id).then(
        res => {
          commit(SET_MESSAGE, `O cão foi removido com sucesso!`);
          resolve(res);
        },
        err => reject(err)
      );
    });
  }
};

export const mutations = {
  [SET_DOGS]: (state, dogs) => {
    state.dogs = dogs;
  },
  [SET_MESSAGE]: (state, message) => {
    state.message = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
