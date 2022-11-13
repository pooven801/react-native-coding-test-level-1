import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Platform } from "react-native";
import styles from "./styles";
import { Header, ItemCard } from "@components";
import * as Services from "@services";
import { useSelector, useDispatch } from "react-redux";
import * as PokemonDataAction from "@redux/actions/PokemonDataAction";

const ViewCatalog = ({ navigation }) => {
  const [pageOffsetLimit, setPageOffsetLimit] = useState({
    offset: 0,
    limit: 10,
  });
  const [loadMore, setLoadMore] = useState(false);
  const dataAsync = useSelector((state) => state.pokemonList.data);
  const dispatch = useDispatch();

  const getList = async (params) => {
    setLoadMore(true);
    Services.getPokemonList({
      offset: params.offset,
      limit: params.limit,
    }).then((res) => {
      dispatch(
        PokemonDataAction.getDataSync({
          ...res,
          results: dataAsync.results.concat(res.results),
        })
      );
      setLoadMore(false);
    });
  };

  useEffect(() => {
    getList(pageOffsetLimit);
  }, []);

  const renderItem = (item) => {
    return (
      <ItemCard
        pokemonName={item.item.name}
        showButton
        onPress={() => {
          navigation.navigate("PokemonDetail", { item });
        }}
      />
    );
  };

  const onLoadMore = () => {
    setPageOffsetLimit({
      ...pageOffsetLimit,
      offset: pageOffsetLimit.offset + 10,
    });

    let newOffSet = pageOffsetLimit.offset + 10;

    if (newOffSet > dataAsync.count) return;

    getList({ ...pageOffsetLimit, offset: newOffSet });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      {dataAsync != null && (
        <FlatList
          scrollEventThrottle={1}
          data={dataAsync.results}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          onEndReachedThreshold={Platform.OS === "ios" ? 0 : 0.5}
          onEndReached={() => {
            if (!loadMore && pageOffsetLimit.offset < dataAsync.count)
              onLoadMore();
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ViewCatalog;
