import { useState, useEffect } from "react";
import { MainLayout } from "../layouts";
import { BottomLinks } from "../misc/BottomLinks";
import { Text, View, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import api from "../../libs/axios";

const SigninStyles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 40,
  },
  MainBox: {
    backgroundColor: "#002366",
    color: "#fff",
    width: "100%",
    minHeight: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  InputBox: {
    backgroundColor: "#fff",
    width: "90%",
    margin: "auto",
    borderRadius: 8,
    padding: 20,
  },
  Button: {
    backgroundColor: "#fff",
    width: "90%",
    margin: "auto",
    marginBottom: 16,
    borderRadius: 8,
    padding: 10,
  },
  helperText: {
    color: "#eee",
    textAlign: "left",
    fontSize: 10,
    width: "90%",
    margin: "auto",
    marginBottom: 16,
    marginTop: 4,
  },
  Error: {
    backgroundColor: "#FF3737",
    width: "100%",
    padding: 14,
    color: "#fff",
  },
});

export const Signin = ({ navigation }) => {
  /* States */
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({ email: null, password: null });
  const [error, setError] = useState(null);

  /* Reset states */
  useEffect(() => {
    setForm({ email: "", password: "" });
    setUser({ email: null, password: null });
    setError(null);
  }, []);

  /* Functions */
  const handleInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.nativeEvent.text,
    });
  };

  const handleSignin = () => {
    //regex
    //const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    //Regex that allows any character
    const emailRegex = /.+/;
    const passwordRegex = /.+/;

    //if email or password is empty
    if (!form.email || !form.password) {
      setError("Please fill all the fields");
    } else if (
      !emailRegex.test(form.email) ||
      !passwordRegex.test(form.password)
    ) {
      setError("Please enter a valid email and password");
    } else {
      signinUser();
    }
  };

  const signinUser = async () => {
    try {
      const res = await api.post("/api/signin", form);
      const { email, password } = res.data.user;
      setUser({ email, password });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  /* Navigate to homepage */
  useEffect(() => {
    if (user.email && user.password) {
      navigation.navigate("Home", { user });
    }
  }, [user]);

  return (
    <MainLayout>
      <View style={SigninStyles.MainBox}>
        <Text style={SigninStyles.title}>LOGO</Text>
        <TextInput
          placeholder="Email"
          style={SigninStyles.InputBox}
          onChange={e => handleInput(e, "email")}
        />
        <Text style={SigninStyles.helperText}>
          Example email: 'jhon@doe.com'
        </Text>
        <TextInput
          placeholder="Password"
          style={SigninStyles.InputBox}
          onChange={e => handleInput(e, "password")}
          secureTextEntry={true}
        />
        <Text style={SigninStyles.helperText}>
          {/*  The password must contain at least 8 characters, one uppercase letter,
          one lowercase letter and one number */}
          The password regex is currently allowing any character
        </Text>
        <View style={SigninStyles.Button}>
          <Button title="Sign in" onPress={handleSignin} />
        </View>
        {error && (
          <View style={SigninStyles.Error}>
            <Text
              style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
            >
              {error}
            </Text>
          </View>
        )}
      </View>
      <BottomLinks />
    </MainLayout>
  );
};
