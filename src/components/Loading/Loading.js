import React from "react";
import LottieView from "lottie-react-native";
import { ActivityIndicator } from "react-native";

function Loading() {
  return (

    <LottieView source={require("../../assets/loading2.json")} autoPlay /> )


}

export default Loading;
