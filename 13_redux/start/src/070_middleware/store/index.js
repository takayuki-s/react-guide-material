import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import reducer from "./modules/counter";

export default configureStore({
  reducer: {
    counter: reducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   const middlewares = getDefaultMiddleware()
  //   console.log('middlewares ', middlewares)
  //   const newMiddlewares = middlewares.concat(logger)
  //   return newMiddlewares
  // }

  // 上記省略形
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});