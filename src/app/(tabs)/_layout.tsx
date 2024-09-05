import {Drawer}  from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabLayout() {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="settings" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Principal',
            title: 'Configuração',
          }}
        />
        <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
    );
  }