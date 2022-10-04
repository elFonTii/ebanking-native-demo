import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../../styles";

const Links = [
  {
    title: "About",
    view: "About",
  },
  {
    title: "Open an account",
    view: "Signup",
  },
  {
    title: "Privacy",
    view: "Privacy",
  },
];

const BottomLinksStyles = StyleSheet.create({
  parent: {
    width: "100%",
    marginTop: 10,
    minHeight: "40%",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  disclaimer: {
    color: colors.darkGrey,
    fontSize: 12,
    paddingHorizontal: 50,
    textAlign: "center",
    marginTop: 10,
  },
});

export const BottomLinks = () => {
  return (
    <View style={BottomLinksStyles.parent}>
      <View style={BottomLinksStyles.links}>
        {Links.map((link, index) => (
          <Text key={index} style={BottomLinksStyles.text}>
            {link.title}
          </Text>
        ))}
      </View>
      <Text style={BottomLinksStyles.disclaimer}>
        Lorem Ipsum Dolor Eexcepturi dolorum facere doloremque saepe quia quae
        et voluptatem. Ratione dolorum! 2022 Magenta Innova
      </Text>
    </View>
  );
};
