import React, {useState} from 'react';
import {Alert, View, TouchableOpacity} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Fontisto';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-paper';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(true);

  const SignInEmailPassword = async () => {
    // const navigation = useNavigation();
    try {
      if (email === '') {
        Snackbar.show({
          text: 'Please Enter Email Address',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'grey',
          textColor: 'White',
        });
      } else if (password === '') {
        Snackbar.show({
          text: 'Please Enter Password',
          duration: Snackbar.LENGTH_SHORT,
          margin: 20,
          backgroundColor: 'grey',
          textColor: 'white',
        });
      } else {
        console.log(email, password);
        await auth().signInWithEmailAndPassword(email, password);
        Alert.alert('User signed in successfully!');
        ({
          text: 'Login Successfully',

          backgroundColor: 'grey',
          textColor: 'white',
        });
        console.log('kam ho gya');
        console.log(navigation);

        // await navigation.navigate("Home")
        // await navigation.navigate("MyDrawer")
        await navigation.navigate('drawer');
        // Navigate to the next screen after successful login
        // await navigation.navigate("NextScreen");
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        console.log('No user with this email exists.');
      } else if (error.code === 'auth/wrong-password') {
        console.log('Incorrect password.');
      } else if (error.code === 'auth/invalid-email') {
        console.log('Invalid email address.');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'lightgreen'}}>
      <View style={{flex: 3}}>
        <Text
          style={{
            flex: 5,
            textAlign: 'center',
            color: 'white',
            fontSize: 40,
            marginTop: 100,
          }}>
          Login Account
        </Text>
        <Text
          style={{
            flex:0,
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            marginBottom: 95,
          }}>
          Login an existin account
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          backgroundColor: 'white',
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}>
        <View style={{flex: 0}}></View>

        <TextInput
          onChangeText={e => setEmail(e)}
          value={email}
          mode="outlined"
          style={{
            backgroundColor: 'white',
            color: 'blue',
            marginHorizontal: 20,
            marginVertical: 10,
          }}
          label="Email"
          left={<TextInput.Icon icon="email" color={'gray'} />}
        />
        <TextInput
          value={password}
          onChangeText={e => setPassword(e)}
          mode="outlined"
          style={{
            backgroundColor: 'white',
            color: 'blue',
            marginHorizontal: 20,
          }}
          label="Password"
          secureTextEntry={showpassword}
          left={<TextInput.Icon icon="lock" color={'gray'} />}
          right={
            showpassword ? (
              <TextInput.Icon
                icon="eye"
                color={'gray'}
                onPress={() => setshowpassword(false)}
              />
            ) : (
              <TextInput.Icon
                icon="eye-off"
                color={'gray'}
                onPress={() => setshowpassword(true)}
              />
            )
          }
        />

        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Button
            icon="login"
            mode="contained"
            onPress={() => SignInEmailPassword()}
            style={{width: 200}}>
            Log In
          </Button>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View>
            <Text style={{marginTop: 30, textAlign: 'center', fontSize: 20}}>
              Create An Account ? Sign Up{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
