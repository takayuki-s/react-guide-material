const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('更新前', action, store.getState())
      next(action);
      console.log('更新後', action, store.getState())
      // storeはaction後の状態
    };
  }
}

export default logger