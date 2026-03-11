import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../screen/Home/HomeScreen';
import SearchScreen from '../screen/Search/SearchScreen';
import Cartscreen from '../screen/Cart/Cartscreen';
import ProfileScreen from '../screen/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();
function HomeTabs() {
return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        const icons = {
            Home: focused ? 'home' : 'home-outline',
            Search: focused ? 'search' : 'search-outline',
            Cart: focused ? 'cart' : 'cart-outline',
            Profile: focused ? 'person' : 'person-outline',
            };
        return <Ionicons name={icons[route.name]} size={size} color={color} />;
    },
        tabBarActiveTintColor: '#1565C0',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 8 },
        })}
    >
        <Tab.Screen name='Home' component={HomeScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false}} />
        <Tab.Screen name='Search' component={SearchScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false}}/>
        <Tab.Screen name='Cart' component={Cartscreen} options={{headerTitleAlign: 'center', headerShadowVisible: false}}/>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{headerTitleAlign: 'center', headerShadowVisible: false}}  />
    </Tab.Navigator>
    );
    }
export default HomeTabs;