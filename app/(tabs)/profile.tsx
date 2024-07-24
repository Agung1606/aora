import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useGlobalContext } from "@/context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import InfoBox from "@/components/InfoBox";
import EmptyState from "@/components/EmptyState";
import useAppwrite from "@/lib/useAppwrite";
import { getUserPosts } from "@/lib/appwrite";
import VideoCard from "@/components/VideoCard";

const Profile = () => {
  const { user } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard item={item} />}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4 pb-4 border-b border-white/10">
            <TouchableOpacity className="flex w-full items-end mb-10">
              <View className="justify-center items-center">
                <Image
                  source={icons.logout}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
                <Text className="text-red-400 text-xs font-psemibold">
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary rounded-lg flex items-center justify-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <View className="flex-row mt-4">
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title={"11.2k"}
                subtitle="Followers"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
/*
{
  "$collectionId": "667fb1720030c84642d9", 
  "$createdAt": "2024-07-05T07:44:32.550+00:00", 
  "$databaseId": "667fb143002a71c2e5d8", 
  "$id": "6687a460001d5c15f630", 
  "$permissions": ["read(\"user:6687a45d0003f47bfb72\")", "update(\"user:6687a45d0003f47bfb72\")", "delete(\"user:6687a45d0003f47bfb72\")"], 
  "$tenant": "159728", "
  $updatedAt": "2024-07-05T07:44:32.550+00:00", 
  "accountId": "6687a45d0003f47bfb72", 
  "avatar": "https://cloud.appwrite.io/v1/avatars/initials?name=AJ&project=667faf37000c449c85f9", 
  "email": "joyboy16@gmail.com", 
  "username": "AJ"
}
*/
