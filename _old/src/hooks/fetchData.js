import {useEffect, useReducer} from "react";
import * as axios from "axios";

function init() {
  return initialState;
}

const initialState = {data: {}, loading: false};

function reducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return {...initialState, loading: true};
    case 'fetched':
      return {...initialState, data: action.data};
    default:
      throw new Error('Unexpected action type!');
  }
}

export default function useFetchData(service) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    let didCancel = false;
    let source;

    async function fetchData() {
      dispatch({type: 'fetching'});

      source = axios.CancelToken.source();
      const data = await service(source);

      dispatch({type: 'fetched', data: data});
    }

    !didCancel && fetchData();

    return () => {didCancel && source.cancel()}
  }, [service]);

  return state;
}