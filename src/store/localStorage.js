export const loadState = stateName => {
  try {
    const serializedState = localStorage.getItem(stateName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, stateName) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    alert('Error saving state')
  }
};
