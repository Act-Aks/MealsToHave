import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/Text";
import { SafeArea } from "../../../components/utils/SafeAreaComponent";
import { FavouritesContext } from "../../../services/favourites/favouritesContext";
import { RestaurantList } from "../../restaurants/components/RestaurantListStyle";
import { RestaurantInfoCard } from "../../restaurants/components/RestaurantInfoCard";
import { Spacer } from "../../../components/spacer/Spacer";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No Favourites Yet</Text>
    </NoFavouritesArea>
  );
};
