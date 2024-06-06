import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './Contexts/AuthenticationContext';
import { UserProvider } from './Contexts/UserContext';
import { ProfileProvider } from './Contexts/ProfileContext';
import RootNavigator from './RootNavigator'; // Ensure this path is correct

export default function App() {
  const [ready, setReady] = useState(false);

  const loadBackgroundAssets = async () => {
    // Write all the code to load heavy images, fonts in the background
    console.log('Loading heavy assets in the background');
  };

  const readyApp = async () => {
    try {
      // Load background assets here
      await loadBackgroundAssets();
      // Explicit delay to mock some loading time
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (e) {
      console.warn(e);
    } finally {
      console.log('Render the application screen');
      // Set ready to true to render the application
      setReady(true);
    }
  };

  useEffect(() => {
    const initApp = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        console.log('Trigger the Splash Screen visible till this try block resolves the promise');
        await SplashScreen.preventAutoHideAsync();
        await readyApp();
      } catch (e) {
        console.warn(e);
      } finally {
        console.log('Hide the splash screen immediately');
        // Hide the splash screen when the app is ready
        await SplashScreen.hideAsync();
      }
    };

    initApp();
  }, []);

  if (!ready) {
    return null; // Or a loading indicator
  }

  return (
    <AuthProvider>
      <UserProvider>
        <ProfileProvider>
          <RootNavigator />
        </ProfileProvider>
      </UserProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
