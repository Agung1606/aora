import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  item: any;
};

const VideoCard = ({ item }: Props) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row items-center gap-3">
        <View className="flex-1 flex-row justify-center items-center">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary-100 justify-center items-center p-0.5">
            <Image
              source={{ uri: item.creator.avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold text-sm" numberOfLines={1}>{item.title}</Text>
          </View>

        </View>
      </View>
    </View>
  );
};

export default VideoCard;
