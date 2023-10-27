import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthInput } from "./AuthTextInput";
import { useNavigation } from "@react-navigation/native";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const navigation = useNavigation();

  const data = {
    email,
    password,
  };

  const handleShowPass = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const changeEmail = (text) => {
    setEmail(text);
  };

  const changePass = (text) => {
    setPassword(text);
  };

  const handleAuthentication = () => {
    console.log(data);
    navigation.navigate("BottomNavigator");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Увійти</Text>

        <View style={styles.form}>
          <AuthInput
            value={email}
            placeholder={"Адреса електронної пошти"}
            onChangeText={changeEmail}
          />
          <AuthInput
            value={password}
            placeholder={"Пароль"}
            secureTextEntry={isPasswordHidden ? true : false}
            onChangeText={changePass}
          />
          <TouchableOpacity style={styles.showText} onPress={handleShowPass}>
            <Text style={styles.showPassword}>
              {isPasswordHidden ? "Показати" : "Приховати"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={handleAuthentication}>
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.linkText}>
            Немає акаунту?
            <Text style={styles.registerText}> Зареєструватись</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#ffffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#212121",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 33,
  },
  form: {
    width: "100%",
  },

  showText: {
    position: "absolute",
    top: 98,
    right: 16,
  },
  showPassword: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
  },
  btn: {
    width: "100%",
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "400",
    lineHeight: 18,
  },
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
  },
  registerText: {
    textDecorationLine: "underline",
  },
});
