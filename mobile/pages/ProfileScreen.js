import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, Pressable, ScrollView } from 'react-native';
import Navigation from '../components/Navigation';
import { useNavigation } from '@react-navigation/native';
import Button1 from '../components/Button1';
import TextValue from '../components/TextValue';
import { useProfile } from '../Contexts/ProfileContext';
import { useSocial } from '../Contexts/SocialContext';
import { useAuth } from '../Contexts/AuthenticationContext';

const ProfileScreen = () => {
    const navigation = useNavigation();

    // const { allCards, calculateTotalCards, calculateFollowings, calculateFollowers, getCard } = useSocial();
    // const { profiles, getProfilesByUserID } = useProfile();
    // const{userID:UserID} = useAuth()
    // const [profile, setProfile] = useState(null);
    // const [cards, setCards] = useState([]);
    // useEffect(() => {
    //     setProfile(profiles.find(profile => profile.UserID === UserID) || null);
    //     setCards(getCard(UserID));
    // }, [profiles, allCards]);
    return (
        <View style={styles.containerScreen}>
            <Text>a</Text>
            {/* <View style={styles.container}>
                <View style={styles.imageView}>
                    <ImageBackground source={require('../assets/backgroung.png')} style={styles.background}>
                        <Image source={require('../assets/rei.jpeg')} style={styles.profileImage} />
                    </ImageBackground>
                </View>
                <View style={styles.descView}>
                    {profile && (
                        <View>
                            <Text style={[styles.textCenter, styles.bold]}>{profile.Name}</Text>
                            <Text style={styles.textCenter}>💼 {profile.Job}</Text>
                            <Text style={styles.textCenter}>📍 {profile.Location}</Text>
                            <Text style={styles.textCenter}>🌐 {profile.SocialMedia}</Text>
                        </View>
                    )}
                    <View style={styles.profileNumber}>
                        <View>
                            <Text style={[styles.textCenter, styles.bold]}>aa</Text>
                            <Text style={styles.textCenter}>Followers</Text>
                        </View>
                        <View>
                            <Text style={[styles.textCenter, styles.bold]}>aa</Text>
                            <Text style={styles.textCenter}>Card</Text>
                        </View>
                        <View>
                            <Text style={[styles.textCenter, styles.bold]}>aa</Text>
                            <Text style={styles.textCenter}>Following</Text>
                        </View>
                    </View>
                    <View style={[styles.flexrow, { gap: 15 }]}>
                        <Button1 text="Edit Profile" backgroundColor="#ffffff" color='#008edb' onPress={() => navigation.navigate('EditProfile')} />
                        <Button1 text="User Card" onPress={() => navigation.navigate('AllCard', { cards, isUserCard: true })} />
                    </View>
                </View>
                 <ScrollView>
                 <View style={styles.cardView}>
                    <View style={styles.padding}>
                        {profile && (
                            <View style={styles.overviewContainer}>
                                <Text style={styles.overviewHeader}>Overview</Text>
                                <Text style={styles.overviewText}>{profile.Overview}</Text>
                            </View>
                        )}
                    </View>
                </View>

                </ScrollView>

            </View> */}
            <Navigation />
        </View>
    );
}

const styles = StyleSheet.create({
    containerScreen: {
        height: '100%',
        backgroundColor: 'white',
    },
    padding: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    flexrow: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        // flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        // width: '100%',
        height: '100%',
    },
    profileImage: {
        width: 155,
        height: 155,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "white",
        alignItems: 'center',
        marginTop: 70,
    },
    background: {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center',
        marginBottom: -50,
    },
    imageView: {
        height: '30%',
        width: '100%',
        // flexDirection: 'row',
        justifyContent: 'center',
    },
    descView: {
        flexDirection: 'column',
        justifyContent: 'center',
        // height: '30%',
        // display:'flex',
        marginTop: 80,
    },
    cardView: {
        // height: '30%',
        // flex: 1,
        justifyContent: 'center',
        marginTop:20,
        marginBottom: 100,
    },
    profileNumber: {
        flexDirection: 'row',
        gap: 15,
        padding: 20,
        justifyContent: 'space-around',
    },
    bold: {
        fontWeight: 'bold',
    },
    textCenter: {
        textAlign: 'center',
    },
    overviewContainer: {
        paddingHorizontal: 10,
        marginTop: 20, // Add margin top to create space between buttons and overview
    },
    overviewHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    overviewText: {
        textAlign: 'justify',
        // fontSize: 30,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default ProfileScreen;
