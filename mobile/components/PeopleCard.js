import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import CustomText from './CustomText'
import Role from './Role'
import Button1 from './Button1'
import { useNavigation } from '@react-navigation/native'
import { useSocial } from '../Contexts/SocialContext'
import {  useAuth } from '../Contexts/AuthenticationContext'
import { useProfile } from '../Contexts/ProfileContext'

const PeopleCard = ({UserID}) => {
  const navigation = useNavigation();
  const {postContact,deleteContact, getIsFollowing, fetchAllContacts,getUserContactID, getCard} = useSocial();
  const { userID } = useAuth();


  const handleFollow = async ()=>{
    const userContact = {
      "userID": userID,
      "userIDFriend": UserID
    }
    result = await postContact(userContact)
  };
  const handleUnfollow = async ()=>{
    const contactID = getUserContactID(userID, UserID)
    result = await deleteContact(contactID)
  };

  const {getProfile}=useProfile();
  const profile = getProfile(UserID);
  const isFollowing = getIsFollowing(userID,UserID)

  const cards = getCard(UserID)

  return (
    profile&&<View style={styles.cardContainer}>
        <View style={[styles.flexrow,{gap:10, alignItems:'center', paddingVertical:15}]}>
            <Image source={require('../assets/rei.jpeg')} style={styles.profileImage} />
            <View >
                <CustomText fontWeight="700" fontSize={16}>{profile.Name}</CustomText>
                <CustomText fontWeight="400" fontSize={12} color="#737373">{profile.Job}</CustomText>
                <View style={[styles.flexrow, {gap:6}]}>
                    {/* <CustomText fontWeight="400" fontSize={12} color="#737373">{profile.SocialMedia}</CustomText>
                    <CustomText fontWeight="400" fontSize={12} color="#737373"> - </CustomText> */}
                    <CustomText fontWeight="400" fontSize={12} color="#737373">{profile.Location}</CustomText>
                </View>
            </View>

        </View>
        {/* <View style={[styles.flexrow,{gap:10, marginVertical:10}]}>
           <Role>System Specialist</Role>
           <Role>System Specialist</Role>
        </View> */}

        <View style={[styles.flexrow, {width:'100%',justifyContent:'center', gap:20} ]}>
          <Button1 text="View Cards" backgroundColor="#ffffff" color='#008edb' onPress={() =>  navigation.navigate('AllCard', {cards,isUserCard:false})}/>
          <Button1 text="See Profile" backgroundColor="#008edb" onPress={() => navigation.navigate('SeeProfile',{UserID})}/>
          {isFollowing?
          (<Button1 text="Unfollow" backgroundColor="#ffffff" color='#008edb' onPress={handleUnfollow}/>):
          (<Button1 text="Follow" backgroundColor="#ffffff" color='#008edb' onPress={handleFollow}/>)

          }

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
      marginBottom:20,
      backgroundColor:'#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      borderRadius:20,
      padding:20,
      elevation: 10, 

    },
    profileImage:{
      width:60,
      height:60,
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

export default PeopleCard