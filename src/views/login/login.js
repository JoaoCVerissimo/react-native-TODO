import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
} from 'react-native';
import styles from "./login.style";

function LogInPage({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate() {
    // console.log(email, password, password.length);
    // (validateEmail(email) && password.length > 8) ?
    //   navigation.navigate('Home')
    //   setEmail("");
    //   setPassword("");
    //   :
    //   navigation.navigate('Auth');
    navigation.navigate('Home');
  }

  const validateEmail = (email) => email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, styles.centerText]}>
        <View style={[styles.centerText, styles.email]}>
          <Text style={styles.text}>Email:</Text>
          <TextInput
            style={{ height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, minWidth: 130 }}
            placeholder="Email Address"
            onChangeText={setEmail}
            value={email}
            maxLength={40}
          />
        </View>
        <View style={[styles.centerText, styles.password]}>
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={{ height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, minWidth: 130 }}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            maxLength={20}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.backgroundColor}>
          <Button
            title="Log In"
            onPress={validate}
          />
        </View>
      </View>
    </View>
  );
}

export default LogInPage;
