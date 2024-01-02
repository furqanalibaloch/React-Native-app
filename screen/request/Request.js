import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

const Request = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [selectedOption, setSelectedOption] = useState('food');
  const [cnic, setCNIC] = useState('');
  const [details, setDetails] = useState('');

  const options = ['food', 'money', 'medical'];

  const handleRequestSubmit = async () => {
    // Add your submit logic here
    const obj = {
      username,
      email,
      contact,
      selectedOption,
      cnic,
      details,
    };



    let key = firestore().collection('user').doc().id;
    await database()
      .ref(`/users/request/${key}`)
      .set(obj)
      .then(() => {
        console.log('Data saved successfully.');
        showAlert('Request Data', 'Data Successfully Done',"success");

        // Clear form fields and error message after successful submission
        setUsername('');
        setEmail('');
        setContact('');
        setSelectedOption('');
        setCNIC('');
        setDetails('');
        navigation.push('Home');});




  };

  return (
    <ScrollView>
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
          value={username}
          placeholder='Enter Your Name'
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
          value={email}
          placeholder='Enter Your Email'
          keyboardType="email-address"
        />
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>CNIC:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingHorizontal: 10,
            backgroundColor: 'white',
          }}
          onChangeText={(text) => setCNIC(text)}
          value={cnic}
          placeholder='Enter Your NIC Number'
          keyboardType="phone-pad"
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
          value={contact}
          placeholder='Enter Your Contact Number'
          keyboardType="phone-pad"
        />

        <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>Options:</Text>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => setSelectedOption(option)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              color: 'green',
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderColor: 'white',
                borderWidth: 1,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: selectedOption === option ? 'green' : 'white',
              }}
            >
              {selectedOption === option && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                  }}
                />
              )}
            </View>
            <Text style={{ color: 'white' }}>{option}</Text>
          </TouchableOpacity>
        ))}

        <Text style={{ color: 'white', fontSize: 18, marginBottom: 10, marginTop: 10 }}>Additional Details:</Text>
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
            backgroundColor: 'blue',
            padding: 15,
            borderRadius: 8,
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: 'lightgreen',
          }}
          onPress={handleRequestSubmit}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Donate now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Request;
