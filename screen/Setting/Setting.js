import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {

    const Navigation = useNavigation()

const handleAbout = () =>{
    Navigation.navigate('About');
}


const handleTerms = () =>{
    Navigation.navigate('Terms');
}
const handleprivaypolicy = () =>{
  Navigation.navigate('Privacypolicy');
}

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleAbout}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <View style={{padding:10}}></View>
        <TouchableOpacity style={styles.button} onPress={handleTerms}>
          <Text style={styles.buttonText}>Terms & Condition</Text>
        </TouchableOpacity>
        <View style={{padding:10}}></View>
        <TouchableOpacity style={styles.button} onPress={handleprivaypolicy}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lighgreen',
  },
  text: {
    color: 'black',
    fontSize: 20,
   
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontWeight:'600',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
});

export default Setting;

