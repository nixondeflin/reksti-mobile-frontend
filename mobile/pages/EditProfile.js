import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import InputForm from '../components/InputForm';
import Button1 from '../components/Button1';
import CustomText from '../components/CustomText';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../Contexts/ProfileContext';
import { useAuth } from '../Contexts/AuthenticationContext';

const EditProfile = () => {
  const navigation = useNavigation();
  const {userID:UserID} = useAuth()
  const [profile, setProfile] = useState({
    userID: UserID,
    name: '',
    job: '',
    location: '',
    socialMedia: '',
    overview: ''
  });
  console.log('b')
  const [errors, setErrors] = useState({});
  const [isProfile,setIsProfile] = useState(false)
  const [photo,setPhoto] = useState()
  const { addProfile,putProfile,getProfileID, profiles, loading, getProfilesByUserID, isProfileExist } = useProfile();

  const handleInputChange = (field, value) => {
    setProfile(prevProfile => ({ ...prevProfile, [field]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
  };

  useEffect(() => {
    setIsProfile(isProfileExist(UserID));
    const profile = getProfilesByUserID(UserID)
    if(profile){
      setProfile(prevProfile => ({ ...prevProfile, ["name"]: profile.Name }));
      setProfile(prevProfile => ({ ...prevProfile, ["job"]: profile.Job }));
      setProfile(prevProfile => ({ ...prevProfile, ["location"]: profile.Location }));
      setProfile(prevProfile => ({ ...prevProfile, ["socialMedia"]: profile.SocialMedia }));
      setProfile(prevProfile => ({ ...prevProfile, ["overview"]: profile.Overview }));
    }

  }, [UserID, profiles]);

  const handleSaveProfile = async () => {
    let valid = true;
    const newErrors = {};

    Object.keys(profile).forEach(field => {
      if (!profile[field]) {
        valid = false;
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);

    if (valid) {
      try {
        if(isProfile){
          await putProfile(profile,getProfileID(UserID));

        }
        else{
          await addProfile(profile);
        }
        Alert.alert("Success", "Profile saved successfully");
        navigation.navigate('Profile');
      } catch (err) {
        Alert.alert("Error", "Failed to save profile");
        console.error('Error saving profile:', err);
      }
    } else {
      Alert.alert("Error", "Please fill in all fields");
    }
  };


  // const handleChoosePhoto = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.canceled) {
  //     console.log(result)
  //     setPhoto(result);
  //   }
  // };

  return (
    <View style={styles.containerScreen}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/icon/back.png')} style={styles.icon} />
      </Pressable>
      <CustomText fontWeight="bold" fontSize={24} textAlign="center">Edit Profile</CustomText>
      {/* <Button1 text="Choose Photo" onPress={handleChoosePhoto} /> */}
      <InputForm
        text="Name"
        value={profile.name}
        onChangeText={(text) => handleInputChange('name', text)}
        error={errors.name}
      />
      <InputForm
        text="Job"
        value={profile.job}
        onChangeText={(text) => handleInputChange('job', text)}
        error={errors.job}
      />
      <InputForm
        text="Location"
        value={profile.location}
        onChangeText={(text) => handleInputChange('location', text)}
        error={errors.location}
      />
      <InputForm
        text="Social Media"
        value={profile.socialMedia}
        onChangeText={(text) => handleInputChange('socialMedia', text)}
        numLines={3}
        error={errors.socialMedia}
      />
      <InputForm
        text="Overview"
        value={profile.overview}
        onChangeText={(text) => handleInputChange('overview', text)}
        numLines={4}
        error={errors.overview}
      />
      <View style={styles.buttonContainer}>
        <Button1 text="Save" style={styles.button1} onPress={handleSaveProfile} disabled={loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    padding: 20,
  },
  buttonContainer: {
    margin: 30,
  },
  icon: {
    // Add icon styles here
  }
});

export default EditProfile;
