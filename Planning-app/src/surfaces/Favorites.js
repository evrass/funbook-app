import { useHeaderHeight } from "@react-navigation/elements";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Favorites = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text>this will be the favorites screen</Text>
      </View>
    </SafeAreaView>
  );
};