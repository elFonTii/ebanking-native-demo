import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "../../styles";

export const MainLayout = ({ children, bgcolor = "#fff" }) => {
  return (
    <View style={{ backgroundColor: bgcolor }}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
};
