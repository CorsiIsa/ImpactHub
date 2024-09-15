import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import Perfil from '../screens/Perfil'

const TabNavigator = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name='HomeInitial' component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
      }} />
      <TabNavigator.Screen name='Perfil' component={Perfil} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Feather name='plus-circle' size={size} color={color} />
      }} />
    </TabNavigator.Navigator>
  )
}