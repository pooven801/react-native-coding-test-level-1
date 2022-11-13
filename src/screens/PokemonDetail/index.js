
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import styles from './styles';
import { Header, ItemCard, ItemSubCard } from "@components";

const PokemonDetail = ({ route, navigation }) => {

    const [data, setData] = useState({ name: "" })
    const [loading, setLoading] = useState(false)

    const getList = async (params) => {
        setLoading(true)
        const response = await fetch(route.params.item.item.url, {
            method: 'GET',
        })
        setLoading(false)
        return response.json();
    };

    useEffect(() => {
        getList().then((res) => {
            setData(res)
        })
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <Header onPress={() => {
                navigation.goBack()
            }} />
            <ScrollView>

                {loading && <ActivityIndicator size="large" color="#667474" />}

                <ItemCard pokemonName={data.name} />

                {data?.base_happiness && <ItemSubCard title={"Base Happiness"} subTitle={[data.base_happiness]} />}
                {data?.capture_rate && <ItemSubCard title={"Capture Rate"} subTitle={[data.base_happiness]} />}
                {data?.color && <ItemSubCard title={"Color"} subTitle={[data.color.name]} />}
                {data?.egg_groups && <ItemSubCard title={"Egg Groups"} subTitle={data?.egg_groups.map(item => item.name)} />}
                {data?.evolution_chain && <ItemSubCard title={"Egg Groups"} subTitle={["https://pokeapi.co/api/v2/evolution-chain/1/"]} />}
                {data?.flavor_text_entries && <ItemSubCard title={"Flavor Text Entries"} subTitle={data.flavor_text_entries.map(item => item.flavor_text)} />}
                <ItemSubCard title={"Forms Switchable"} subTitle={[data.forms_switchable]} />
                {data?.gender_rate && <ItemSubCard title={"Gender Rate"} subTitle={[data.gender_rate]} />}
                {data?.genera && <ItemSubCard title={"Genera"} subTitle={data.genera.map(item => item.genus)} />}
                {data?.generation && <ItemSubCard title={"Generation"} subTitle={[data.generation.name]} />}
                {data?.growth_rate && <ItemSubCard title={"Growth Rate"} subTitle={[data.growth_rate.name]} />}
                {data?.habitat && <ItemSubCard title={"Habitat"} subTitle={[data.habitat.name]} />}
                <ItemSubCard title={"Has Gender Gifferences"} subTitle={[data.has_gender_differences]} />
                {data?.hatch_counter && <ItemSubCard title={"Hatch Counter"} subTitle={[data.hatch_counter]} />}
                <ItemSubCard title={"Is Baby"} subTitle={[data.is_baby]} />
                <ItemSubCard title={"Is Legendary"} subTitle={[data.is_legendary]} />
                <ItemSubCard title={"Is Mythical"} subTitle={[data.is_mythical]} />
                {data?.names && <ItemSubCard title={"Names"} subTitle={data.names.map(item => item.name)} />}
                {data?.order && <ItemSubCard title={"Order"} subTitle={[data.order]} />}
                {data?.pal_park_encounters && <ItemSubCard title={"Pal Park Encounters"} subTitle={[data.pal_park_encounters.map(item => item.base_score)]} />}
                {data?.pokedex_numbers && <ItemSubCard title={"Pokedex Numbers"} subTitle={data.pokedex_numbers.map(item => item.entry_number)} />}
                {data?.shape && <ItemSubCard title={"Shape"} subTitle={[data.shape.name]} />}
                {data?.varieties && <ItemSubCard title={"Varieties"} subTitle={[data.varieties.map(item => item.pokemon.name)]} />}

            </ScrollView>
        </SafeAreaView>
    );
}

export default PokemonDetail;