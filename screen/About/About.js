

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function About({ }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>About</Text>

        <Text style={styles.description}>
          Saylani Welfare Trust is a prominent non-profit organization based in
          Pakistan, committed to humanitarian service and social welfare.
          Founded in 1999 by Maulana Bashir Ahmed Farooqui, it aims to alleviate
          poverty and improve the lives of the underprivileged. The trust
          operates a wide range of initiatives, including free healthcare
          services, educational programs, and food distribution. With a focus on
          community development and empowerment, Saylani Welfare Trust has
          played a crucial role in providing essential services to those in
          need, contributing to the well-being and upliftment of society.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"green"
  },
  box: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  description: {
    color: 'black',
    textAlign: 'left',
    paddingTop: 20,
    fontSize: 18,
  },
});

export default About;
