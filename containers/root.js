import 'react-native-gesture-handler'
import React, {useEffect, useState} from 'react'
import {
  BackHandler,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useSelector} from 'react-redux'
import {Provider} from 'react-native-paper'
import _ from 'lodash'
import {
  Login,
  Forgot,
  Bundle,
  Product,
  Quiz,
  Flashcard,
  Intro,
  Module,
  Bookmark,
  Result,
  Detail,
  Progress,
  Settings,
} from '~/containers'
import {Colors} from '~/theme'

const AuthStack = createStackNavigator()
function AuthStackScreen() {
  return (
    <HomeStack.Navigator onStateChange={e => handleRoutes(e)}>
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Forgot"
        component={Forgot}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  )
}

const GoBack = props => (
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      marginLeft: 30,
      width: 40,
      height: 32,
      marginTop: Platform.OS === 'ios' ? -20 : -26,
    }}
    onPress={() => props.onPress()}
  >
    <Image
      source={require('~/assets/path.png')}
      style={{width: 20, height: 16}}
    />
  </TouchableOpacity>
)

const HomeStack = createStackNavigator()
function HomeStackScreen() {
  const token = useSelector(state => state.app.access_token)
  window.token = token

  const navigation = useNavigation()

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => backHandler.remove()
  }, [])

  return (
    <HomeStack.Navigator
      initialRouteName="Bundle"
      headerMode="screen"
      screenOptions={{headerBackTitleVisible: false}}
    >
      <HomeStack.Screen name="Bundle" component={Bundle} />
      <HomeStack.Screen
        name="Product"
        component={Product}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Flashcard"
        component={Flashcard}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Intro"
        component={Intro}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Module"
        component={Module}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Result"
        component={Result}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerLeft: props => <GoBack {...props} />,
        }}
      />
    </HomeStack.Navigator>
  )
}

const ProgressStack = createStackNavigator()
function ProgressStackScreen() {
  return (
    <ProgressStack.Navigator
      initialRouteName="Progress"
      headerMode="screen"
      screenOptions={{headerBackTitleVisible: false}}
    >
      <ProgressStack.Screen name="Progress" component={Progress} />
      <ProgressStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerLeft: props => <GoBack {...props} />,
          headerTitle: 'Detail',
        }}
      />
    </ProgressStack.Navigator>
  )
}

const SettingsStack = createStackNavigator()
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SETTINGS"
        component={Settings}
        options={{headerBackTitleVisible: false}}
      />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const RootContainer = () => {
  const token = useSelector(state => state.app.access_token)
  window.token = token
  const [visible, setVisible] = useState(true)

  const handleNavigation = e => {
    if (!_.isNil(e) && !_.isEmpty(e) && (e === 'exam' || e === 'study')) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  return (
    <Provider>
      <NavigationContainer
        onStateChange={e =>
          handleNavigation(_.last(e.routes[0]?.state?.routes)?.params?.mode)
        }
      >
        {token ? (
          <Tab.Navigator
            backBehavior="order"
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: Colors.primary,
              inactiveTintColor: Colors.grey,
              labelStyle: {
                fontFamily: 'TradeGothic',
                fontSize: 13,
                marginTop: 10,
              },
              style: {
                borderTopColor: Colors.secondary,
                borderTopWidth: 1,
                height: Platform.OS === 'ios' ? 90 : 75,
                paddingBottom: Platform.OS === 'ios' ? 25 : 13,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopColor:
                        color === Colors.primary ? color : 'transparent',
                      borderTopWidth: 2,
                      width: 70,
                    }}
                  >
                    <Image
                      source={require('~/assets/home.png')}
                      style={{
                        marginTop: 15,
                        tintColor: color,
                        width: 27,
                        height: 24,
                      }}
                    />
                  </View>
                ),
                tabBarVisible: visible,
              }}
            />
            <Tab.Screen
              name="Progress"
              component={ProgressStackScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopColor:
                        color === Colors.primary ? color : 'transparent',
                      borderTopWidth: 2,
                      width: 70,
                    }}
                  >
                    <Image
                      source={require('~/assets/progress.png')}
                      style={{
                        marginTop: 15,
                        tintColor: color,
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsStackScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTopColor:
                        color === Colors.primary ? color : 'transparent',
                      borderTopWidth: 2,
                      width: 70,
                    }}
                  >
                    <Image
                      source={require('~/assets/settings.png')}
                      style={{
                        marginTop: 15,
                        tintColor: color,
                        width: 25,
                        height: 24,
                      }}
                    />
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          AuthStackScreen()
        )}
      </NavigationContainer>
    </Provider>
  )
}

export default RootContainer
