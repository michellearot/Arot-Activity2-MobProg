import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import LoginForm from "../forms/LoginForm";

export default function LoginPage(props) {
  return (
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/564x/62/bc/80/62bc80ae557ba83fddb7819b03874a16.jpg" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <LoginForm {...props} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 190,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
