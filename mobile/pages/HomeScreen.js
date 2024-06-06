import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View,Text,Image } from 'react-native';
import CustomText from '../components/CustomText';
import NewCard from '../components/NewCard';
import Navigation from '../components/Navigation';
import { useSocial } from '../Contexts/SocialContext';
import { useAuth } from '../Contexts/AuthenticationContext';
import { useProfile } from '../Contexts/ProfileContext';

const HomeScreen = () => {
  // const { allContacts, getCard, getFollowings } = useSocial();
  // const [followings, setFollowings] = useState([]);
  // const {userID} = useAuth()
  // const { profiles, getProfilesByUserID } = useProfile();
  // const [profile, setProfile] = useState();

//   useEffect(() => {
//     setFollowings(getFollowings(userID));
//   }, [allContacts, userID]);

//   useEffect(() => {
//     setProfile(profiles.find(profile => profile.UserID === userID) || null);
// }, [profiles]);
//   console.log('a')
  return (
    <View style={styles.containerScreen}>
        <Image source={require('../assets/sate.jpg')} style={styles.image} />

    {/* {profile&&<CustomText style={styles.welcomeText} fontWeight="700" fontSize={20} color="#0083db">
      Welcome Home, {profile.Name}!
    </CustomText>}
      {followings.length!==0?
        <ScrollView style={styles.scrollView}>
        <View style={styles.containerNewCard}>
          {followings.map((following, followingIndex) => {
            const cards = getCard(following.UserIDFriend);
            return cards.map((card, cardIndex) => (
              <View key={`${followingIndex}-${cardIndex}`}>
                <NewCard card={card} />
                <View style={styles.separator} />
              </View>
            ));
          })}
        </View>
      </ScrollView>:
      <CustomText textAlign='center' fontSize={24} padding={40}>No Following</CustomText>} */}
      <Text>aa</Text>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    height: '100%',
    padding: 20,
    fontSize : 20,
    backgroundColor:'white',
  },
  welcomeText: {
    marginTop: 36,
  },
  containerNewCard: {
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
});

export default HomeScreen;
