// Middleware - logger
// const logger = state => next => action => {
//  // Side effect code goes here
// }

const logger = function (store) {
    return function (next) {
      return function (action) {
        console.log("[ACTION]", action);
        console.log("[STATE]", store.getState());
        // const cloneAction = {...action, value :100};
        // Side effect code
        setTimeout(() => {
          // next(cloneAction);
          next(action);
        }, 1000);
        
      };
    };
  };

  export default logger;