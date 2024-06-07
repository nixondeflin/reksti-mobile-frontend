import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../components/Navigation';
import { useAuth } from '../Contexts/AuthenticationContext';
import axiosInstance from '../utility/axiosInstance';

const HomeScreen = () => {
  const { userID } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, informasiResponse] = await Promise.all([
          axiosInstance.get(`/users/${userID}`),
          axiosInstance.get('/informasi'),
        ]);

        setProfile(userResponse.data);
        const postsWithDates = informasiResponse.data.map(post => ({
          ...post,
          randomDate: getRandomDate()
        }));
        setPosts(shuffleArray(postsWithDates));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userID]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getRandomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date;
  };

  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long', // long weekday name
      year: 'numeric',
      month: 'long', // long month name
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, // 12-hour format
    });
  };

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
        {profile && (
          <Text style={styles.welcomeText}>
            Welcome home, {profile.Nama}!
          </Text>
        )}
        {posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Icon name="home-outline" size={40} color="#000" style={styles.profileIcon} />
              <View style={styles.postInfo}>
                <Text style={styles.postTitle}>Landmark Residence</Text>
                <Text style={styles.postTime}>{formatDate(post.randomDate)}</Text>
              </View>
            </View>
            <Text style={styles.postContent}>{post.Body}</Text>
            <View style={styles.separator} />
          </View>
        ))}
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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004aad',
    marginBottom: 20,
    marginTop: 40,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    marginRight: 10,
  },
  postInfo: {
    flexDirection: 'column',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: 'gray',
  },
  postContent: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 10,
  },
});

export default HomeScreen;
