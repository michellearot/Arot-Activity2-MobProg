import { View, ToastAndroid } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "../services/fetchServices";

export default function LoginForm({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);

      if (name === "" || email === "" || password === "" || repassword === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if (password !== repassword) {
        showToast("Please match the password");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.55.107/api/v1/signup";
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };

      console.debug(data);

      const result = await fetchServices.postData(url, data);
      console.debug(result);

      if (result?.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Landing");
      }
    } catch (e) {
      showToast(e.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 20 }}>
      <Text variant="displayMedium" style={{ color: "#fff", fontWeight: "bold", marginTop: 20, paddingRight: 130 }}>
        Register
      </Text>
      <TextInput
        mode="outlined"
        placeholder="Name"
        label="Name"
        style={{ width: "100%", marginTop: 10 }}
        value={name}
        onChangeText={setName}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ width: "100%", marginTop: 10 }}
        value={email}
        onChangeText={setEmail}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ width: "100%", marginTop: 10 }}
        value={password}
        onChangeText={setPassword}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={!showRePass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ width: "100%", marginTop: 10 }}
        value={repassword}
        onChangeText={setRepassword}
        error={isError}
      />
      <Button
        disabled={loading}
        loading={loading}
        mode="contained"
        style={{ width: "90%", marginTop: 30, borderRadius: 0 }}  
        onPress={handleSignUp}
      >
        SIGNUP
      </Button>
      <Button
        disabled={loading}
        onPress={() => navigation.navigate("Login")} 
        mode="contained"
        style={{ width: "90%", marginTop: 10, borderRadius: 0 }}  
      >
        GO BACK
      </Button>
    </View>
  );
}