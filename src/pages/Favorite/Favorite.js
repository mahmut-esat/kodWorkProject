import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import FavoriteCard from "../../components/FavoriteCard";

const Favorite = ({ navigation }) => {
  const favorites = useSelector((state) => state.favoriteList);

  const handlePageDetail = (id) => {
    navigation.navigate("Detail", { id });
  };

  const renderFav = ({ item }) => {
    return (
      <FavoriteCard 
      job={item} 
      onSelect={() => handlePageDetail(item.id)} 
      />
    );
  };

  return (
      <FlatList data={favorites} renderItem={renderFav} />
  );
};

export default Favorite;
