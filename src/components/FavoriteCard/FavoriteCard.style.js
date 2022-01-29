import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: "#bdbdbd",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },

  inner_container: {},

  title: {
    fontSize: 17,
    fontWeight: "bold",
  },

  company: {
    fontSize: 15,
    marginVertical: 2,
  },

  location_container: {
    alignItems: "flex-start",
  },
  location: {
    flex: 1,
    fontSize: 15,
    backgroundColor: "#d32f2f",
    color: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 2,
    paddingVertical: 4,
    justifyContent: "center",
    //fontWeight: 'bold',
    // overflow:'hidden'
    flexWrap: "wrap",
  },

  level: {
    fontSize: 15,
    textAlign: "right",
    paddingHorizontal: 10,
    marginVertical: 2,
    color: "#d32f2f",
    fontWeight: "bold",
  },

  button_container: {
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 15,
    backgroundColor: "#e0e0e0",
    justifyContent:"center",
    alignSelf: 'center',
    
  },

  button:{
    alignItems: "center",
    justifyContent:"center",
    alignSelf: 'center',
  }
});