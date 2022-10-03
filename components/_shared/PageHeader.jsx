import { View, Image, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { colors } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faBell,
  faCheckCircle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PageHeaderStyles = StyleSheet.create({
  main: {
    backgroundColor: colors.primary,
    width: "100%",
    minHeight: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  icon: {
    color: "#fff",
  },
});

export const PageHeader = ({ user }) => {
  const [timeOfDay, setTimeOfDay] = useState("morning");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 12 && hour < 18) {
      setTimeOfDay("afternoon");
    } else if (hour >= 18) {
      setTimeOfDay("evening");
    }
  }, []);

  return (
    <View style={PageHeaderStyles.main}>
      {/* Top Icons */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <FontAwesomeIcon
          icon={faBars}
          style={PageHeaderStyles.icon}
          size={25}
        />
        <FontAwesomeIcon
          icon={faBell}
          style={PageHeaderStyles.icon}
          size={25}
        />
      </View>
      {/* Good morning text */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "thin",
          }}
        >
          Good {timeOfDay} | October 3, 2022
        </Text>
      </View>
      {/* Widgets */}
      <View
        style={{ display: "flex", flexDirection: "row", paddingHorizontal: 20 }}
      >
        <Chip label="See statements" />
        <Chip label="Payment history" />
        <Chip label="Add" />
      </View>
      {/* Notification */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <HeaderNotification
          label="Successfully sent $1.000,00 to Jhon Doe"
          icon={faCheckCircle}
        />
      </View>
    </View>
  );
};

const Chip = ({ label, color = "#fff" }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: "50%",
        marginRight: 10,
      }}
    >
      <Text
        style={{
          color: colors.primary,
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

const HeaderNotification = ({ label, icon }) => {
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        padding: 25,
        width: "90%",
        borderRadius: "8",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={icon} style={PageHeaderStyles.icon} size={25} />
      <View>
        <Text
          style={{
            color: colors.white,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {label}
        </Text>
        <Text style={{ color: colors.lightGrey, fontSize: 12 }}>
          See details
        </Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} style={PageHeaderStyles.icon} />
    </View>
  );
};
