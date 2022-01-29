import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Button.style";
import { Ionicons } from "@expo/vector-icons";

const Button = ({ title, onPress, iconName }) => {
  return (
    <TouchableOpacity 
        style={styles.container} 
        onPress={onPress}>
      <View style={styles.button_container}>
        <Ionicons name={iconName} size={15} color="white" />
        <Text style={styles.text}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;