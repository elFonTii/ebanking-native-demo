import { View, Text } from "react-native";
import { colors } from "../../styles";

const Chip = ({ label, color = "#fff", textColor }) => {
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
          color: textColor || colors.primary,
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default Chip;
