import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 40,
  },
  Button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    margin: "auto",
    marginBottom: 16,
    borderRadius: 8,
    padding: 10,
  },
});

export const Home = ({ navigation }) => {
  return (
    <View style={HomeStyles.main}>
      <Text style={HomeStyles.title}>Home</Text>
      <View style={HomeStyles.Button}>
        <Button
          title="<"
          onPress={() => {
            navigation.navigate("Signin");
          }}
        />
      </View>
    </View>
  );
};
