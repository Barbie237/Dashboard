const  DarkModeReducer = (state, action) => {
    switch(action.type){
        case "LIGHT": {
           return {
               DarkMode: false,
           }
        }
        case "DARK": {
           return {
               darkMode: true,
           }
        }
        case "TOGGLE": {
           return {
               darkMode: !state.darkMode,
           }
        }
        default : {
            return state;
        }        
    }
};

export default DarkModeReducer;
