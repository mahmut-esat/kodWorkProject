import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./JobsCard.style";

function JobCard({ job, onSelect }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inner_container} onPress={onSelect}>
        <Text style={styles.title}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name} </Text>
        <View style={styles.location_container}>
          <Text style={styles.location}>
            {job.locations && job.locations.length > 0
              ? job.locations[0].name
              : "No location information"}
          </Text>
        </View>
        <View>
          <Text style={styles.level}>
            {job.levels && job.levels.length > 0
              ? job.levels[0].name
              : "No level information"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default JobCard;
