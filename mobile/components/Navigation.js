import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import React from 'react';

const Navigation = () => {
  const navigation = useNavigation();
  const routeName = useNavigationState(state => state.routes[state.index].name);

  return (
    <View style={styles.containerImage}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../assets/icon/home.png')}
          style={[
            styles.icon,
            routeName === 'Home' && styles.activeIcon,
          ]}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Search')}>
        <Image
          source={require('../assets/icon/search.png')}
          style={[
            styles.icon,
            routeName === 'Search' && styles.activeIcon,
          ]}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Create')}>
        <View style={[
          styles.plusIconContainer,
          routeName === 'Create' && styles.activePlusIconContainer,
        ]}>
          <Image
            source={require('../assets/icon/plus.png')}
            style={styles.plusIcon}
          />
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Image
          source={require('../assets/icon/settings.png')}
          style={[
            styles.icon,
            routeName === 'Settings' && styles.activeIcon,
          ]}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Profile', { name: 'Jane' })}>
        <Image
          source={require('../assets/icon/profile.png')}
          style={[
            styles.icon,
            routeName === 'Profile' && styles.activeIcon,
          ]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
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
  plusIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 25,
    backgroundColor: '#008EDB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 32,
    height: 32,
    marginBottom : 5,
    alignItems: 'center',
  },
  activeIcon: {
    tintColor: '#008EDB',
  },
  activePlusIconContainer: {
    backgroundColor: '#008EDB',
  },
});

export default Navigation;
