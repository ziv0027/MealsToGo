import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
