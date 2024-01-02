

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Alert } from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import showAlert from '../../Common/Sweetalert';

const Donate = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [money, setMoney] = useState('');
  const [details, setDetails] = useState('');

  const handleRequestSubmit = async () => {
    // Add your submit logic here
    const obj =  {
      username,
      email,
      contact,
      money,
      details,
    };

    if (!username || !email  || !contact ) {
      Alert.alert('Validation Error', 'Please fill in all the required fields.');
      return;
    }

    console.log('Form submitted successfully');

    let key = firestore().collection('user').doc().id;
    await database()
      .ref(`/users/donate/${key}`)
      .set(obj)
      .then(() => {
        console.log('Data saved successfully.');
        showAlert('Donate', 'Data Successfully Done',"success");
       
        setUsername('');
        setEmail('');
        setContact('');
        setMoney('');
        setDetails('');
     ;});
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'green' }}>
      <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>Username:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
        onChangeText={(text) => setUsername(text)}
        value={username} placeholder='Enter Your Name'
      />

      <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>Email:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
        onChangeText={(text) => setEmail(text)}
        value={email} placeholder='Enter Your Email'
        keyboardType="email-address" // Use email keyboard type
      />

      <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>Contact:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
        onChangeText={(text) => setContact(text)}
        value={contact} placeholder='Enter Your Contact Number'
        keyboardType="phone-pad" // Use phone number keyboard type
      />

      <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>Money:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
        onChangeText={(text) => setMoney(text)}
        value={money} placeholder='Enter Your Donation Amount'
        keyboardType="numeric" 
      />

      <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>Description:</Text>
      <TextInput
        style={{
          height: 100,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
        onChangeText={(text) => setDetails(text)}
        value={details}
        placeholder="Enter additional details"
        multiline
      />

      <TouchableOpacity
        style={{
          backgroundColor: 'lightgreen',
          padding: 15,
          borderRadius: 8,
          marginTop: 20,
          fontSize: "bold",
          alignItems: 'center',
        }}
        onPress={handleRequestSubmit}
      >
        <Text style={{ color: 'white', fontSize: 18 }}
        >Donate now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Donate;
