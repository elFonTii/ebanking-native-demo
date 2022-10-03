import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "../../styles";

export const Signup = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text>Signup</Text>
      <StatusBar style="auto" />
    </View>
  );
};
