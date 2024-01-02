// DrawerContent.js
import React from 'react';
import { View, StyleSheet, ImageBackground,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import {  Avatar, Drawer } from 'react-native-paper';

var DrawerContentMain = [
  {
    name: 'home',
    title: 'Home',
    color: 'gray',
    path: 'Home',
  },
  {
    name: 'info-circle',
    title: 'About',
    color: 'gray',
    path: 'About',
  },
 
  {
    name: 'video',
    title: 'Media',
    color: 'gray',
    path: 'Media',
  },
  {
    name: 'user-plus',
    title: 'Request',
    color: 'gray',
    path: 'Request',
  },
  {
    name: 'donate',
    title: 'Donation',
    color: 'gray',
    path: 'Donate',
  },

  {
    name: 'bahai',
    title: 'Setting',
    color: 'gray',
    path: 'Setting',
  },
];

function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
         
          <View>
            <ImageBackground
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSis4KQs2Iwnz25pTYfD57xTgI9g0_eqohGFX7z5PDYsA&s',
              }}
              style={{ width: '100%', height: 180, marginTop: '-2%' }}>
              <Avatar.Image
                size={130}
                color="white"
                source={require("../Assets/images/mypic.png")}
                style={{ resizeMode: 'contain', marginTop: '8%', marginLeft: '25%' }}
              />

              <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'column', marginTop: 5 }}>
                    
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            {DrawerContentMain.map((v, i) => (
              <DrawerItem
                key={i}
                icon={({ size }) => (
                  <Icon2 name={v.name} color={v.color} size={size} />
                )}
                label={v.title}
                onPress={() => {
                  props.navigation.navigate(v.path);
                }}
              />
            ))}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon2 name="sign-out-alt" color="gray" size={size} />
          )}
          label="Logout"
          onPress={() => {
           
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    marginLeft:10,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  Text: {
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '-15%',
    marginLeft: '10%',
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '10%',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 20,
    marginLeft: 5, 
    textAlign: 'center',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    boxShadow:"0px 3px 5px rgba(0,128,0) inset",
    color: "white"
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

});

export default DrawerContent;
