import React, { Component } from "react";
import { Button, View, Text,Image,AsyncStorage } from 'react-native';
import { createSwitchNavigator,createAppContainer  } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from '../screens/welcomeScreen'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Entypo";
import Styles from "../styles/styles";

import FirstScreen from "../components/splashScreens/FirstScreen";
import VideoScreen from "../screens/VideoList";
import VideoDetailScreen from "../screens/videoShow";
import More from "../screens/More";
import Achivments from "../screens/Achivments";
import WebView from "../screens/WebView";
import Location from "../screens/Location";
import PhoneAuthScreen from "../screens/PhoneAuth";
import QuizIndex from "../screens/QuizIndex";
import Quiz from "../screens/Quiz";

import Reg from "../screens/reg";
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    console.log('**************');
    this.loadData();
    this.state = {
      isVisible: true,
    };
  }

  hideSplashScreen = () => {
    this.setState({
      isVisible: false,
    });
  };
  componentDidMount() {
    var that = this;

    setTimeout(() => {
      that.hideSplashScreen();
    }, 2000);
  }

  render() {
    let splashScreen = (
      <View style={Styles.splashScreen}>
        <FirstScreen />
      </View>
    );
    // console.warn(this.state.isVisible);
    return (
      <View style={{ backgroundColor: "#5B2087", flex: 1 }}>
        {this.state.isVisible ? splashScreen : this.props.navigation.navigate("routeTwo")}
      </View>
    );
  }
  
  loadData = async () => {
   // const token = await AsyncStorage.getItem("loginToken");
  // const token = await AsyncStorage.getItem("loginToken");
  // this.props.navigation.navigate(token ? "App" : "Auth");
    // this.props.navigation.navigate("routeTwo");
    const isFirstTime = await AsyncStorage.getItem("isFirstTime");
    console.log("is First Time----->>",isFirstTime);
 if(isFirstTime==null)
 {
  this.props.navigation.navigate("Auth");
 }
 else{
  this.props.navigation.navigate("routeTwo");
 }
  };
}
const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});
const FirstActivity=createStackNavigator({
  Dashboard:{
        screen:WelcomeScreen
        ,
        // headerLeft: (
        //   <Image source={require("../app-assets/splash2.png")}
        //   resizeMode={'center'}
        //   style={{ backgroundColor: ViewColor,width:100,height:100 }}/>
        // ),
        // navigationOptions: {
        //   headerTitle: "Goal Achiver Academy",
        // }
        navigationOptions: ({ navigation }) => ({
          title: "Goal Achiever Academy",
          headerStyle: {
            backgroundColor: "#5B2087",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: (
            <Image source={require("../app-assets/splash2.png")}
              resizeMode={'center'}
              style={{width:50,height:50,padding:10 }}/>
            
          ),
        }),
    },
   
    VideoScreen:
    {
        screen: VideoScreen
    },
    MainDetails:
    {
        screen: WelcomeScreen
    },

    Map:
    {
        screen: WelcomeScreen
    },
});
const MoreActivity=createStackNavigator({
  More:{
        screen:More,
        navigationOptions: {
          header:false, // or drawerLabel: () => null  

    }
    },
  
    Achivments:
    {
        screen: Achivments,

    },
   WebView:{
     screen:WebView,
     navigationOptions: {
      headerTitle: "registertion",
    }
   },
   Location:{
    screen:Location,
    navigationOptions: {
     headerTitle: "Location",
   }
  },
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
  
});

const VideoScreenActivity=createStackNavigator({
  VideoScreen:{
        screen:VideoScreen,
        navigationOptions: {
          header:false, // or drawerLabel: () => null  

    }
    },
   
    VideoDetailScreen:
    {
        screen: VideoDetailScreen,
        navigationOptions: {
          headerTitle: "Show Videos",
        }
    },
    MainDetails:
    {
        screen: WelcomeScreen
    },

    Map:
    {
        screen: WelcomeScreen
    },
});
const AuthStack=createStackNavigator(
  {SignUp:{
    screen:Reg,
    navigationOptions: {
      header:false, // or drawerLabel: () => null  

}
},}
)
const bottomNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: FirstActivity,
      path: "",
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === "Home") {
            return <Icon name="md-home" color={tintColor} size={25} />;
          }
        },
      }),
    },
    Videos: {
      screen: VideoScreenActivity,
      path: "search",
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === "Videos") {
            return <Icon2 name="folder-video" color={tintColor} size={25} />;
          }
        },
      }),
    },

    Details: {
      screen: MoreActivity,
      path: "Details",
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === "Details") {
            return <Icon name="md-person" color={tintColor} size={25} />;
          }
        },
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "dodgerblue",
    },
  },
  {
    initialRouteName: "Home",
  }
);
const AppDrawer = createStackNavigator(
  { screen: bottomNavigation },
  { headerMode: "none" }
);


// Notice the head and back link on top of the screen

export default createAppContainer(
    createSwitchNavigator(
        {
        routeOne: AuthLoadingScreen,
        routeTwo: AppDrawer,
        Auth:AuthStack
        },
        {
          initialRouteName: 'routeOne',
        }
      )
  );