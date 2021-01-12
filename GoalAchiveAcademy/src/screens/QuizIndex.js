import React from "react";
import { ScrollView, StatusBar,Text } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
  
    <RowItem
      name="Reasoning Quize"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Reasoning Test",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Mathamtical Quize"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Mathamtical Test",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="English Quize"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "English Test",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);
