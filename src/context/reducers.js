import { Alert } from "react-native";

export default function (state, action) {
  switch (action.type) {
    case "ADD_TO_FAV":
      const { job } = action.payload;

      const filtered = state.favoriteList.find((item) => item.id === job.id);
      let favList = [];

      if (filtered) {
        Alert.alert("Warning", "This job available in the favorite list.");
        return state;
      } else {
        favList = [...state.favoriteList, job];
        return { ...state, favoriteList: favList };
      }

      case "REMOVE":
        const {id} = action.payload;
        const newList=state.favoriteList.filter(item => item.id !== id)
        return {...state, favoriteList:newList}

    default:
      return state;
  }
}
