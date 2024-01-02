import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ref, onValue} from 'firebase/database';
import {db} from '../../config/firebase';
import Heart from 'react-native-vector-icons/AntDesign';
import Bookmark from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
const {width} = Dimensions.get('window')

const images = [
    "https://res.cloudinary.com/saylani-welfare/image/upload/v1666591041/website-images/static/104.jpg",
    "https://admissions.com.pk/wp-content/uploads/2023/10/Saylani-mass-it-training-program.jpg",
    "https://res.cloudinary.com/saylani-welfare/image/upload/v1646497311/website-images/static/24.jpg"
]




const Home = ({navigation}) => {
  const [tableData, setTableData] = useState([]);

 
  useEffect(() => {
    const tasksRef = ref(db, 'Posting');

    const fetchData = () => {
      onValue(tasksRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key],
          }));
          setTableData(dataArray);
        }
      });
    };

    fetchData();
  }, []);

  const [showFullText, setShowFullText] = useState(false);
  const charLimit = 100;

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

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

  return (
    <>
     

      <ScrollView>

      <View style={styles.container}>
                
                <Swiper
                  dot={
                    <View
                        style={{
                            backgroundColor: 'grey',
                            width: 12,
                            height: 12,
                            borderRadius: 8,
                            margin: 3

                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: 'red',
                            width: 12,
                            height: 12,
                            borderRadius: 8,
                            margin: 3
                        }}
                    />
                }
                    height={600}
                    autoplay={true}
                    autoplayTimeout={5}
                >
                    {
                        images.map((v, i) => {
                            return <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={{ uri: v }}
                            />
                        })
                    }


                </Swiper>
            </View>



        {tableData.map((item, index) => (
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
              <Image source={{uri:`${item.img}`}} style={styles.imgBg} />
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
    </>
  );
};

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
    flex: 2,
   
  },
  image: {
    width: 100+"%",
    height: 200,
    objectFit:"fill",
    flex: 3,
  },
 
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image:{
      width:"100%",
      flex:1,
    }
   
}
);

export default Home;
