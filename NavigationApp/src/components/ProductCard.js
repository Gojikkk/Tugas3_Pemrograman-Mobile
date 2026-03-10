import React from'react';
import { View, Text, Image, Touch, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { produk } from '../data/data'

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const formatprice = (harga) =>
    ' Rp ' + harga/toLocaleString('id-ID');

const ProductCard  = ({ produk, onPress }) => (
        <TouchableOpacity
        //card
        style={styles.card}
        onPress={() => onPress?.(product)}>

        //gambar product
        <View style={styles.imageContainer}>
            <Image
            source={{ uri: produk.image}}
            style={styles.image}
            resizeMode='cover'
            />
        </View>

        //product info
        <View style={styles.infoContainer}>
            <Text style={styles.name} numberOfLines={2}>{produk.nama}</Text>
            <Text style={styles.kategori}>{produk.kategori}</Text>
            <Text style={styles.harga}>{formatprice(produk.harga)}</Text>
        </View>
        </TouchableOpacity>
    );

    const styles = StyleSheet.create({
        card: {
            width: CARD_WIDTH,
            backgroundColor: 'white',
            borderRadius: 10,
            overflow: 'hidden',
            elevation: 3,
        },
        imageContainer: { position: 'relative'},
        imagee: {
            width: '100%',
            height: 140
        },
        infoContainer: {
            padding: 10
        },
        name: {
            fontSize: 13,
            fontWeight: '600',
            color: 'black',
            lineHeight: 18,
        },
        kategori: {
            fontSize: 13,
            fontWeight: '400',
            color: 'gray',
            lineHeight: 18,
            opacity: 0.5,
        },
        harga: {
            fontSize: 13,
            fontWeight: '600',
            color: 'blue',
            lineHeight: 18,
        },

    })

