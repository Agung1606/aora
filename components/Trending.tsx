import { View, Text, FlatList } from "react-native";
import React from "react";

type Posts = {
  $id: string;
};

type Props = {
  posts: Posts[];
};

const Trending = ({ posts }: Props) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text>{item.$id}</Text>}
      horizontal
    />
  );
};

export default Trending;
