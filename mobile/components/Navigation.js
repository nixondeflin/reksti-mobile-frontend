import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons as an example

const Navigation = () => {
  const navigation = useNavigation();
  const routeName = useNavigationState(state => state.routes[state.index].name);
  
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Icon
          name="home-outline" // Icon name for Home
          size={30}
          style={[
            styles.icon,
            routeName === 'Home' ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Emergency')}>
        <Icon
          name="notifications-outline" // Icon name for Notifications
          size={30}
          style={[
            styles.icon,
            routeName === 'Emergency' ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Icon
          name="settings-outline" // Icon name for Settings
          size={30}
          style={[
            styles.icon,
            routeName === 'Settings' ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Profile', { name: 'Jane' })}>
        <Icon
          name="person-outline" // Icon name for Profile
          size={30}
          style={[
            styles.icon,
            routeName === 'Profile' ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.2)', // Black color with 20% opacity
  },
  icon: {
    width: 30,
    height: 30,
  },
  activeIcon: {
    color: '#004aad', // Active icon color (example color)
  },
  inactiveIcon: {
    color: 'gray', // Inactive icon color
  },
});

export default Navigation;
