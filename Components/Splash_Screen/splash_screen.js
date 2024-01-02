import {View, Image ,StyleSheet} from 'react-native';
import React from 'react';
import splashimg from '../../Assets/images/welcome.jpg'

function Splash_Screen({navigation}) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Signup');
    }, 2000);
  }, []);

  return (
    <View  style={styles.container}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"Green",color:"green"}}>
      
      <Image source={splashimg} style={{width: 400, height: 310,}} />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 8,
      backgroundColor: 'green',
      color: 'green',
    

    },
});
export default Splash_Screen;


