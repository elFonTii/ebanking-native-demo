import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { useEffect } from "react";
import { PageHeader } from "../_shared";
import Chip from "../_shared/Chip";
import {
  faFingerprint,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../styles";

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
  icon: {
    color: colors.secondary,
    marginRight: 10,
  },
});

export const Home = ({ navigation, route }) => {
  return (
    <View style={HomeStyles.main}>
      <PageHeader />
      {/* Notifications */}
      <View style={{ display: "flex", flexDirection: "column" }}>
        <Notification
          title="Setup biometric authentication"
          desc="You have not registered your biometric authentication yet. Please register for a better authentication experience."
          chip="1 min"
          icon={faFingerprint}
        />
        <Notification
          title="Where i am?"
          desc="Have you ever wondered where you are? Well, now you can find out where you are with our new geolocation feature."
          chip="30 secs"
          icon={faLocationDot}
        />
      </View>
      <View style={HomeStyles.Button}>
        <Button
          title="Volver a iniciar sesión"
          onPress={() => {
            navigation.navigate("Signin");
          }}
        />
      </View>
    </View>
  );
};

const Notification = ({ title, desc, icon, chip }) => {
  return (
    <TouchableHighlight style={{ width: "100%" }} underlayColor="white">
      <View
        style={{
          shadowColor: "#666",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          backgroundColor: "#fff",
          padding: 30,
          marginVertical: 5,
          maxWidth: "90%",
          borderRadius: "8",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <FontAwesomeIcon icon={icon} style={HomeStyles.icon} size={25} />
        <View style={{ marginRight: 10 }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: colors.darkGrey,
              fontSize: 12,
            }}
          >
            {desc}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
