import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from "./Detail.style";
import { API_URL } from "@env";
import RenderHtml from "react-native-render-html";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useDispatch,useSelector } from "react-redux";

function Detail({ route }) {
  const newId = route.params.id;

  const { data, loading, error } = useFetch(`${API_URL}/${newId}`);

  const favorites = useSelector((favorite) => favorite.favoriteList)
  
  const dispatch = useDispatch()
  const handleFavoriteJob = (job) => {
      dispatch({type:"ADD_TO_FAV", payload:{job}})
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.locations_container}>
          <Text style={styles.header_location}>Locations : </Text>
          <Text style={styles.location_title}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : "Unknown Location"}
          </Text>
        </View>
        <View style={styles.levels_container}>
          <Text style={styles.levels}>Job Level : </Text>
          <Text style={styles.levels_title}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : "Unknown Levels"}
          </Text>
        </View>
        <Text style={styles.header}>Job Detail</Text>
      </View>
      <View style={styles.info_container}>
        <ScrollView>
          <RenderHtml
            baseStyle={styles.info_container_text}
            source={{ html: `${data.contents}` }}
            contentWidth={Dimensions.get("window").width}
          />
        </ScrollView>
      </View>
      <View style={styles.buttons}>
        <Button title="Submit" iconName="enter-outline" onPress={null} />
        <Button
          title="Favorite Job"
          iconName="heart"
          onPress={() => handleFavoriteJob(data)}
        />
      </View>
    </View>
  );
}

export default Detail;
