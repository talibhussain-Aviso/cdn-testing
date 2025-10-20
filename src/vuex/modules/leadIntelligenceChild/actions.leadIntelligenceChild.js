import * as types from '../../mutation-types';

export const setTest = ({ dispatch }, value) => {
    dispatch(types.SET_TEST, value);
};
