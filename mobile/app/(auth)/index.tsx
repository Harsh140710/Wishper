import {
  View,
  Text,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import useAuthSocial from "@/hooks/useSocialAuth";

const { width, height } = Dimensions.get("window");

const AuthScreen = () => {
  const { handleSocialAuth, loadingStrategy } = useAuthSocial();

  return (
    <View className="flex-1 bg-surface-dark">
      {/* todo: animated orbs */}

      <View className="absolute inset-0 overflow-hidden"></View>

      <SafeAreaView className="flex-1 ">
        {/* TOP SECTION - Branding */}
        <View className="items-center pt-10">
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 100, height: 100, marginVertical: -20 }}
            contentFit="contain"
          />
          <Text className="text-4xl font-bold text-primary font-serif tracking-wider uppercase">
            Whisper
          </Text>
        </View>

        {/* CENTER SECTION - HERO*/}
        <View className="flex-1 justify-center items-center px-6">
          <Image
            source={require("../../assets/images/auth.png")}
            style={{
              width: width - 48,
              height: height * 0.3,
              marginVertical: -20,
            }}
            contentFit="contain"
          />
          {/* HEADLINE */}
          <View className="mt-9 items-center">
            <Text className="text-4xl font-bold text-foreground text-center font-serif">
              Connext & Chat
            </Text>
            <Text className="mt-2 text-3xl font-bold text-primary font-mono">
              Seamlessly
            </Text>
          </View>

          {/* AUTH BUTTONS */}
          <View className="flex-row gap-4 mt-10">
            {/* GOOGLE BUTTON */}
            <Pressable
              className="flex-1 flex-row items-center justify-center gap-2 bg-white/95 rounded-2xl active:scale-[0.97] py-4"
              disabled={loadingStrategy === "oauth_google"}
              onPress={() => handleSocialAuth("oauth_google")}
            >
              {loadingStrategy === "oauth_google" ? (
                <ActivityIndicator size="small" color="#1a1a1a" />
              ) : (
                <>
                  <Image
                    source={require("../../assets/images/google.png")}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    contentFit="contain"
                  />
                  <Text className="text-gray-900 font-semibold text-sm">
                    Google
                  </Text>
                </>
              )}
            </Pressable>

            {/* APPLE BUTTON */}
            <Pressable
              className="flex-1 flex-row items-center justify-center gap-2 bg-white/10 rounded-2xl active:scale-[0.97] py-4 border border-white/20"
              disabled={loadingStrategy === "oauth_apple"}
              onPress={() => handleSocialAuth("oauth_apple")}
            >
              {loadingStrategy === "oauth_apple" ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="logo-apple" size={20} color="#FFFFFF" />
                  <Text className="text-foreground font-semibold text-sm">
                    Apple
                  </Text>
                </>
              )}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AuthScreen;
