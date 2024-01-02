// Import necessary dependencies
import { View,StyleSheet,ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import database from '@react-native-firebase/database';
import Heart from 'react-native-vector-icons/AntDesign';
import Bookmark from 'react-native-vector-icons/FontAwesome';
// Create the Media component
const Media = () => {
  // State to store the fetched data from Firebase
  const [showFullText, setShowFullText] = useState(false);
  const charLimit = 100;

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };
  const [requestData, setRequestData] = useState([]);
  const [likes, setLikes] = useState([]);

  const toggleLike = index => {
    setLikes(prevLikes => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  const [isBookmarked, setBookmarked] = useState([]);

  const handleBookmarkClick = index => {
    setBookmarked(prevLikes => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  useEffect(() => {
    const databaseRef = database().ref('VideoPosting');

    const onDataChange = snapshot => {
      if (snapshot.exists()) {
        const dataArray = Object.values(snapshot.val());
        console.log(Object.values(snapshot.val()));
        setRequestData(dataArray);
      } else {
        setRequestData([]);
      }
    };

    // Attach the listener
    databaseRef.on('value', onDataChange);

    // Detach the listener when the component unmounts
    return () => databaseRef.off('value', onDataChange);
  }, []); // Empty dependency array ensures that the effect runs only once



 

  // Return the JSX structure of the component
  return (
    
<ScrollView>
   
  {requestData.map((item, index) => (
    <View style={styles.card} key={index}>
      <View style={styles.top}>
        <View style={styles.userDetails}>
          <View style={styles.profileImgContainer}>
            <Image
              source={require('../../Assets/logo/unnamed.png')}
              style={styles.cover}
            />
          </View>
          <View>
            <Text style={styles.userName}>SMIT</Text>
            <Text style={styles.userRole}>{item.tittle}</Text>
          </View>
        </View>
      </View>

      <View style={styles.imgBgContainer}>
      <YoutubePlayer height={300} play={true} videoId={item.img} />
      </View>

      <View style={styles.btns}>
        <View style={styles.leftBtns}>
          <TouchableOpacity key={index} onPress={() => toggleLike(index)}>
            <Heart
              name={likes[index] ? 'heart' : 'hearto'}
              size={25}
              color={likes[index] ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleBookmarkClick(index)}>
            <Bookmark
              name={isBookmarked[index] ? 'bookmark' : 'bookmark-o'}
              size={25}
              color={isBookmarked[index] ? 'orange' : 'black'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.message}>
        <Text style={styles.boldText}>SMIT: </Text>

        <Text style={styles.message}>
          {showFullText
            ? item.description
            : item.description.slice(0, charLimit)}
        </Text>

        {item.description.length > charLimit && (
          <TouchableOpacity onPress={toggleTextVisibility}>
            <Text style={{color: 'green'}}>
              {showFullText ? ' Show Less' : ' Show More'}
            </Text>
          </TouchableOpacity>
        )}
      </Text>
    </View>
  ))}
  <View style={styles.bottomSpace} />
</ScrollView>
  )
        }

const styles = StyleSheet.create({
card: {
position: 'relative',
width: 350,
minHeight: 300,
flex: 2,
backgroundColor: '#fff',
borderRadius: 10,
padding: 20,
shadowColor: '#000',
shadowOffset: {width: 15, height: 15},
shadowOpacity: 0.6,
shadowRadius: 60,
},
top: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
userDetails: {
flexDirection: 'row',
alignItems: 'center',
},
profileImgContainer: {
position: 'relative',
width: 40,
height: 40,
borderRadius: 50,
marginRight: 8,
overflow: 'hidden',
borderWidth: 1,
borderColor: 'green',
},
cover: {
position: 'absolute',
top: 0,
right: 0,
width: '100%',
height: '100%',
resizeMode: 'cover',
},
userName: {
fontSize: 18,
color: '#4d4d4f',
fontWeight: '700',
lineHeight: 18,
},
userRole: {
fontSize: 0.75 * 18,
color: 'grey',
},
dotContainer: {
transform: [{scale: 0.6}],
},
dot: {
width: 20,
height: 20,
},
imgBgContainer: {
position: 'relative',
width: '100%',
height: 320,
marginVertical: 10,
},
imgBg: {
width: '100%',
height: '100%',
borderRadius: 10,
},
btns: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
leftBtns: {
flexDirection: 'row',
alignItems: 'center',
},
icon: {
maxWidth: 24,
marginRight: 8,
},
likes: {
marginTop: 5,
fontSize: 16,
color: '#4d4d4f',
},
message: {
fontWeight: '400',
marginTop: 5,
color: '#777',
lineHeight: 1.5 * 16,
},
boldText: {
color: '#262626',
},
hashTag: {
color: '#1d92ff',
},
comments: {
marginTop: 10,
alignItems: 'center',
color: '#999',
},
addComments: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 10,
},
userImgContainer: {
position: 'relative',
minWidth: 30,
height: 30,
borderRadius: 15,
overflow: 'hidden',
marginRight: 8,
},
userImg: {
width: '100%',
height: '100%',
borderRadius: 15,
resizeMode: 'cover',
},
textInput: {
flex: 1,
height: 40,
borderColor: 'gray',
borderWidth: 1,
borderRadius: 10,
padding: 5,
fontWeight: '400',
fontSize: 18,
color: '#262626',
},
postTime: {
marginTop: 10,
fontWeight: '500',
color: '#777',
},

bottomSpace: {
height: 100, 
},

container: {
flex: 3,
height:250,
},
image: {
width: 100+"%",
height: 300,
objectFit:"fill"
},

text: {
  color: '#fff',
  fontSize: 30,
  fontWeight: 'bold'
},

image: {
  width:100+"%",
  flex: 1
}
}
);



export default Media;
