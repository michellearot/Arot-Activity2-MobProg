import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import SignUpForm from "../forms/SignUpForm";

const SignUpPage = (props) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/62/bc/80/62bc80ae557ba83fddb7819b03874a16.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <SignUpForm {...props} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 120,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default SignUpPage;
