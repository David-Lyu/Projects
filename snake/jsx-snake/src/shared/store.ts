import { createContext } from 'react';

interface State {
  snakeBody: number[][];
  shadowGameBoard: number[][];
}

interface Action {
  type: string;
  payload: any;
}

export const initialState: State = {
  snakeBody: [],
  shadowGameBoard: []
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'snakeBody':
      return { ...state, snakeBody: action.payload };
    case 'shadowGameBoard':
      return { ...state, shadowGameBoard: action.payload };
    default:
      throw new Error('Unknown action');
  }
}
export const StoreContext = createContext<
  [state: State, dispatch: React.Dispatch<any>]
>([initialState, () => null]);

// export const StoreContext = createContext();
