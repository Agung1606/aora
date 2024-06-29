import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  children: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  children,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-100 min-h-[62px] justify-center items-center rounded-xl ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyle}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
