import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import About from '../components/About';
import Records from '../components/Records';
import Material from '../components/Material';
import Test from '../components/Test';

const screens = {
    Home:{
        screen: Home
    },
    About:{
        screen:About
    },
    Records:{
        screen:Records
    },
    Material:{
        screen:Material
    },
    Record:{
        screen:Test
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);