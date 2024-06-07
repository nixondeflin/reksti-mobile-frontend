import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../components/Navigation';
import { useAuth } from '../Contexts/AuthenticationContext';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  const navigateToUnderDev = () => {
    navigation.navigate('UnderDev');
  };

  return (
    <View style={styles.containerScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="person-outline" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="security" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="notifications-none" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="lock-outline" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Privacy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support & About</Text>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="subscriptions" size={24} style={styles.icon} />
            <Text style={styles.itemText}>My Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="help-outline" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="info-outline" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Terms & Policies</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="delete-outline" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Free Up Space</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="data-usage" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Data Saver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="report" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Report Problems</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={navigateToUnderDev}>
            <Icon name="person-add" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Add Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleLogout}>
            <Icon name="logout" size={24} style={styles.icon} />
            <Text style={styles.itemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 80, // Added padding to avoid overlapping with the bottom navigation
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#233881',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
    color: '#555',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SettingsScreen;
