import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/564x/62/bc/80/62bc80ae557ba83fddb7819b03874a16.jpg',
      }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Login Page</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#ffffff"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('HomePage')}
              color="#040D12" 
              style={styles.button}
            />
            <View style={styles.verticalMargin} />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('SignUpPage')}
              color="#040D12" 
              style={styles.button}
            />
            <View style={styles.verticalMargin} />
            <Button
              title="Forgot Password"
              onPress={() => navigation.navigate('ForgotPasswordPage')}
              color="#040D12" 
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#fff',
  },
  buttonContainer: {
    width: '65%',
  },
  button: {
    marginBottom: 10,
  },
  verticalMargin: {
    marginVertical: 5,
  },
});

export default LoginPage;