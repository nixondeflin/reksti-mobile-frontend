import React from 'react'
import { Image, StyleSheet, View,TouchableOpacity } from 'react-native'
import CustomText from './CustomText';
import TemplateImage from './TemplateImage';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../Contexts/ProfileContext';


const NewCard = ({card}) => {
  const {getProfile}=useProfile();
  const profile = getProfile(card.UserID);
  // console.log("a",profile)
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('UserCard', { card, isUserCard:false });
  };

  const handlePress2 = () => {
    navigation.navigate('SeeProfile',{UserID:card.UserID})
  };
  return (
  profile&& ( <View style={styles.cardContainer}>
      <View style={[styles.flexrow,{gap:10, alignItems:'center'}]}>
      <TouchableOpacity onPress={handlePress2}>
        <Image source={require('../assets/rei.jpeg')} style={styles.profileImage} />
        </TouchableOpacity>

        <View >
          <CustomText fontWeight="700" fontSize={10}>{profile.Name}</CustomText>
          <CustomText fontWeight="400" fontSize={8}>{card.CardName}</CustomText>
        </View>
      </View>
      <CustomText size={10} padding={10}>I just made a new card. Look at my “{card.CardName}” card!</CustomText>
      {/* <Image source={require('../assets/cardtaher.png')} style={styles.cardImage} /> */}
      <TouchableOpacity onPress={handlePress}>
          <TemplateImage templateName={card.Template} style={styles.cardImage} />
        </TouchableOpacity>

    </View>)
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    marginBottom:20,
  },
  profileImage:{
    width:40,
    height:40,
    borderRadius:15,
  },
  cardImage:{
    height:200,
  },
  flexrow:{
    display:'flex',
    flexDirection:'row'
  },
  flexcol:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'red',
    gap:100
  },
  buttonContainer:{
    margin:30,
  }
});


export default NewCard