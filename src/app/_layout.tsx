import {Stack, Tabs}  from 'expo-router';
import{FontAwesome} from '@expo/vector-icons';
export default function RootLayout() {
    return (
      <Tabs>
        <Tabs.Screen name="index" options={{
          headerShown:false,
          tabBarIcon: ({focused, color, size}) => {
          if(focused){
            return <FontAwesome name="home" color={color} size={size}/>
          }
          return <FontAwesome  name="home" color={color} size={size}/>
       }     
      }}/>
        <Tabs.Screen name="(tabs)" options={{ headerShown: false, title:"Navegação",
      tabBarIcon: ({focused, color, size}) => {
        if(focused){
          return <FontAwesome name="heart" color={color} size={size} options={{
            headerShown: false
          }}/>
        }
        return <FontAwesome  name="heart" color={color} size={size} options={{
          headerShown: false
        }}/>
     } }}/>
        <Tabs.Screen name="(user)" options={{ headerShown: false,title:'Perfil',
         tabBarIcon: ({focused, color, size}) => {
          if(focused){
            return <FontAwesome name="user" color={color} size={size}/>
          }
          return <FontAwesome  name="user" color={color} size={size}/>
       }
        }}/>
      </Tabs>
    );
  }