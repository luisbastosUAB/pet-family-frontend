import dogsService from "@/api/dogs.service";
import {
  // Actions
  FETCH_DOGS,
  ADD_DOG,
  EDIT_DOG,
  REMOVE_DOG
  /* // Mutations
  SET_DOGS,
  SET_MESSAGE,
  UPDATE_LIKES*/
} from "./dogs.constants";

const state = {
  DOGS: []
};

const getters = {
  getDogs: state => state.DOGs,
  getDogsById: state => id => state.Dogs.find(DOG => DOG._id === id),
  getMessage: state => state.message
};

const actions = {
  [FETCH_DOGS]: ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      dogsService.getDogs(rootState.auth.token).then(
        res => {
          commit(SET_DOGS, res.body);
          resolve(res);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  },
  [ADD_DOG]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      dogsService.addDog(rootState.auth.token, payload).then(
        res => {
          commit(
            SET_MESSAGE,
            `O cão ${res.body.name} foi adicionado com sucesso!`
          );
          resolve(res);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  },
  [EDIT_DOG]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      dogsService.editDog(rootState.auth.token, payload).then(
        res => {
          commit(
            SET_MESSAGE,
            `O cão ${res.body.name} foi atualizado com sucesso!`
          );
          resolve(res);
        },
        err => {
          commit(SET_MESSAGE, err);
          reject(err);
        }
      );
    });
  },
  [REMOVE_DOG]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      dogsService.removeDog(rootState.auth.token, id).then(
        res => {
          commit(SET_MESSAGE, `O cão foi removido com sucesso!`);
          resolve(res);
        },
        err => {
          commit(SET_MESSAGE, err.message);
          reject(err);
        }
      );
    });
  }
};
/*
export const mutations = {
  [SET_DOGS]: (state, DOGs) => {
    state.DOGs = DOGs;
  },
  [SET_MESSAGE]: (state, message) => {
    state.message = message;
  },
  [UPDATE_LIKES]: (state, payload) => {
    state.DOGs.forEach(DOG => {
      if (DOG._id === payload.DOGId) {
        DOG.evaluation.push(payload.userId);
      }
    });
  }
};
*/
export default {
  namespaced: true,
  state,
  getters,
  actions
  //  mutations
};
