import React from 'react';

type tmemoryState = {
  [key: string]: boolean;
}

const memoryState: tmemoryState = {};

export function useMemoryState(key: any, initialState: any) {
  const [state, setState] = React.useState(() => {
    const hasMemoryValue = Object.prototype.hasOwnProperty.call(memoryState, key);
    if (hasMemoryValue) {
      return memoryState[key]
    } else {
      return typeof initialState === 'function' ? initialState() : initialState;
    }
  });

  function onChange(nextState: any) {
    memoryState[key] = nextState;
    setState(nextState);
  }

  return [state, onChange];
}