import React, {useState} from 'react';
import { View, TouchableOpacity,Image} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import showAlert from '../../Common/Sweetalert';



const MyComponent = ({navigation}) => {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');


  const [showpassword, setshowpassword] = useState(true);
  

  const createEmailPassword = async () => {
    if (email === '') {
      Snackbar.show({
        text: 'Please Enter Email Address',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else if (password === '') {
      Snackbar.show({
        text: 'Please Enter Password',
        duration: Snackbar.LENGTH_SHORT,
        margin: 20,
        backgroundColor: 'grey',
        textColor: 'white',
      });
    } else if (username === '') {
      Snackbar.show({
        text: 'Username is required',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
    ) {
      Snackbar.show({
        text: 'Please Enter Valid Email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else if  (
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) ===
      false
    ) {
      Snackbar.show({
        text: 'Please Enter a valid password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'grey',
        textColor: 'red',
      });
    } else {
      setusername('');
      console.log(email);
      try {
        await auth().createUserWithEmailAndPassword(email, password);
      
        showAlert('Accout', 'Successfully created');
        await navigation.navigate('Login');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          
          showAlert('Email', 'Already',"Registrated");
        }
      }
    }
  };

 

  

  const signInWithGoogle = async () => {
    try {
      const userData = await googleSigninFunc();
      console.log('user data =>', userData);

      navigation.navigate('drawer');
    } catch (error) {
      console.log(error);
      
    }
  };

  const googleSigninFunc = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.configure({
        webClientId:
          '755278018066-apvb04qi3no66a4sp1q66a2jsc10ju29.apps.googleusercontent.com',
        offlineAccess: true,
        hostedDomain: '',
        forceCodeForRefreshToken: true,
        accountName: '',
      });
      
      const {idToken} = await GoogleSignin.signIn();

      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredentials);
      showAlert('Google Accout', 'Successfully signed',"success");
      
    } catch (e) {
      console.log(e);
    }
  };

  
  return (
    <View style={{flex: 1, backgroundColor: 'lightgreen'}}>
      <View style={{flex: 4}}>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            color: 'white',
            fontSize: 40,
            marginTop: 80,
          }}>
          Create New Account
        </Text>
       
      </View>
      <View
        style={{
          flex: 6,
          backgroundColor: 'white',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <View style={{flex: 0}}></View>
      
        <TextInput
          onChangeText={e => setusername(e)}
          value={username}
          mode="outlined"
          style={{
            backgroundColor: 'white',
            color: 'blue',
            marginTop: 20,
            marginHorizontal: 20,
          }}
          label="Username"
          left={<TextInput.Icon icon="mail" color={'gray'} />}
        />
       

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
            backgroundColor="green"
            onPress={() => createEmailPassword()}
            style={{width: 200}}>
            SignUp
          </Button>
          
          <TouchableOpacity  onPress={() => signInWithGoogle()}>

          <View style={{flexDirection: 'row', gap: 20, marginTop: 30}}>
         < Image
                size={130}
                color="white"
                source={require("../../Assets/logo/googleicon.png")}
              
                style={{ resizeMode: 'contain', }}
                
                />  
          </View>
                </TouchableOpacity>

         
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View>
              <Text style={{marginTop: 30,fontSize:20}}>Already Have Account ? Login </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyComponent;
