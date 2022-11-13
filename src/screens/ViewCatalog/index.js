import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Platform } from 'react-native';
import styles from './styles';
import { Header, ItemCard } from "@components";
import * as Services from "@services";

const ViewCatalog = ({ navigation }) => {

    const [data, setData] = useState({ results: [] })
    const [pageOffsetLimit, setPageOffsetLimit] = useState({ offset: 0, limit: 10 })
    const [loadMore, setLoadMore] = useState(false)

    const getList = async (params) => {
        setLoadMore(true)
        Services.getPokemonList({ "offset": params.offset, "limit": params.limit }).then(res => {
            setData({ ...res, results: data.results.concat(res.results) })
            setLoadMore(false)
        });
    };

    useEffect(() => {
        getList(pageOffsetLimit)
    }, [])

    const renderItem = (item) => {
        return (
            <ItemCard
                pokemonName={item.item.name}
                showButton
                onPress={() => { navigation.navigate('PokemonDetail', { item }); }} />
        )
    }

    const onLoadMore = () => {

        setPageOffsetLimit({ ...pageOffsetLimit, offset: pageOffsetLimit.offset + 10 })

        let newOffSet = pageOffsetLimit.offset + 10

        if (newOffSet > data.count) return;

        getList({ ...pageOffsetLimit, "offset": newOffSet })

    };

    return (
        <SafeAreaView style={styles.container}>
            <Header onPress={() => {
                navigation.goBack()
            }} />
            {data != null && <FlatList
                scrollEventThrottle={1}
                data={data.results}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
                onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.5}
                onEndReached={() => {
                    if (!loadMore && pageOffsetLimit.offset < data.count)
                        onLoadMore();
                }}
            />}
        </SafeAreaView>
    );
}

export default ViewCatalog;