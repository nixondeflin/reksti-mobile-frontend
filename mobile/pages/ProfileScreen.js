import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../components/Navigation';
import { useAuth } from '../Contexts/AuthenticationContext';
import axiosInstance from '../utility/axiosInstance'; // Make sure this path is correct

const ProfileScreen = () => {
    const { userID } = useAuth();
    const [profile, setProfile] = useState(null);
    const [cardID, setCardID] = useState(null);
    const [emergencyID, setEmergencyID] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const [userResponse, cardResponse, emergencyResponse] = await Promise.all([
                    axiosInstance.get(`/users/${userID}`),
                    axiosInstance.get('/cards'),
                    axiosInstance.get('/emergencies'),
                ]);

                setProfile(userResponse.data);

                const userCard = cardResponse.data.find(card => card.UserID === userID);
                const userEmergency = emergencyResponse.data.find(emergency => emergency.UserID === userID);

                if (userCard) {
                    setCardID(userCard.CardID);
                }

                if (userEmergency) {
                    setEmergencyID(userEmergency.EmergencyID);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userID]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.containerScreen}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text style={styles.title}>Data Penghuni</Text>
                {profile && (
                    <>
                        <View style={styles.imageContainer}>
                            <Icon name="person-circle-outline" size={155} color="#000" style={styles.profileIcon} />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Nama :</Text>
                            <Text style={styles.value}>{profile.Nama}</Text>
                            <Text style={styles.label}>Contact :</Text>
                            <Text style={styles.value}>{profile.NomorTelepon}</Text>
                            <Text style={styles.label}>Address :</Text>
                            <Text style={styles.value}>{profile.Alamat}</Text>
                            <Text style={styles.label}>Card ID :</Text>
                            <Text style={styles.value}>{cardID || 'N/A'}</Text>
                            <Text style={styles.label}>Emergency ID :</Text>
                            <Text style={styles.value}>{emergencyID || 'N/A'}</Text>
                        </View>
                    </>
                )}
            </ScrollView>
            <Navigation />
        </View>
    );
};

const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContainer: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    imageContainer: {
        marginBottom: 20,
    },
    profileIcon: {
        width: 155,
        height: 155,
        borderRadius: 150,
    },
    infoContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        color: '#004aad',
        marginBottom: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileScreen;
