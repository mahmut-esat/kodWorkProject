import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import { API_URL } from "@env";

import styles from "./Jobs.style"
import JobsCard from "../../components/JobsCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    page;
  }, []);

  const { data, error, loading } = useFetch(`${API_URL}?page=${page}`);

  const handleDetailPage = (id, name) => {
    navigation.navigate("Detail", {id ,name})
  }

  const renderJobs = ({ item }) => {
    return <JobsCard job={item} onSelect={() => handleDetailPage(item.id, item.name)} />;
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderJobs}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Jobs;
