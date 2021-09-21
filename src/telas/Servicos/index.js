import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Text } from 'react-native';
import Item from './Item';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nos damos!"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3, 
        nome: "Vascina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
    }
];

export default function Servicos() {
    return <>  
        <Text>Serviços!</Text>
        <FlatList 
            data={servicos}
            renderItem={({item: {nome}}) => <Text>{ nome }</Text>}
            keyExtractor={(id) => String(id)}
        />
    </> 
        
}