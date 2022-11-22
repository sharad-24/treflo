const pizza = (state = [], action) => {
    switch (action.type) {
      case 'PIZZA_LIST':
        return {...state,
            id: action.id,  
          } 
      default: 
        return state
    }
  }
  export default pizza