import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import HeaderUc from '../../../components/Header/HeaderUc';
import CardEncontro from '../../../components/Cards/CardEncontro';
import { CardAtividade } from '../../../components/Cards/CardAtividade';
import { CardSituacaoAprendizagem } from '../../../components/Cards/CardSituacaoAprendizagem';
import { api } from '../../../services/api';

export default function SituacoesAprendizagens(props) {

    const [situacaoAprendizagens, setSituacaoAprendizagens] = useState({});
    useEffect(() => {
        async function getSituacaoAprendizagen() {
            try {
                const response = await api.get(`/api/SituacaoAprendizagem/FiltrarSituacoesAprendizagemPorEncontroId/${props.route.params.id}`);
    
                setSituacaoAprendizagens(
                    response.data
                );
    
            } catch (err) {
                console.log(err);
            }
        }
    
         getSituacaoAprendizagen();
    }, []);
    
    return (
        <>
            <HeaderUc data={props.route.params.name} />
            <View style={styles.container}>
                {/* <Text>{props.route.params.id}</Text> */}
    
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={situacaoAprendizagens}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CardSituacaoAprendizagem data={item} />}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: 10,
    // }
})