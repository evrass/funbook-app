import {
    Poppins_400Regular,
    Poppins_700Bold,
    useFonts,
} from "@expo-google-fonts/poppins";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserListContext } from "./src/context";
import { ConversationsNavigation } from "./src/surfaces/ConversationsNavigation";
import { Home } from "./src/surfaces/Home";
import { Login } from "./src/surfaces/Login";
import { requestBase } from "./src/utils/constants";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255, 255)",
  },
};

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  async function fetchUserData() {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!userList) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <UserListContext.Provider value={{ userList: userList }}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
            {!userLoggedIn ? (
              <Stack.Screen name='Login' component={Login} />
            ) : (
              <>
                <Stack.Screen
                  name='Home'
                  component={Home}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='ConversationsNav'
                  component={ConversationsNavigation}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserListContext.Provider>
    </SafeAreaProvider>
  );
}