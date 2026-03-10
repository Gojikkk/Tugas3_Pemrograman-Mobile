import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, 
    ScrollView, Platform, StatusBar } from 'react-native';
import { kategori, produk } from '../../data/data';
import ProductCard from '../../components/ProductCard';

const HomeScreen = () => {
const [search, setSearch] = useState('');
const [activeCategory, setActiveCategory] = useState('Semua');

const filtered = useMemo (() => {
    return produk.filter((p) => {
        const kategoriMatch = activeCategory === 'Semua' || p.kategori === activeCategory;
        const searchMatch = p.nama.toLowerCase().includes(search.toLowerCase());
        return kategoriMatch && searchMatch;
    })
}, [search, activeCategory]
)

const renderItem = ({item, index}) => {
    return (
    <View style={[styles.cardWrapper, index % 2 === 0 && styles.cardLeft]}>
        <ProductCard produk={item} onPress={ (p) => console.log('Lihat Produk: ', p.nama)}></ProductCard>
    </View>
    );
}
    return (
        <View style={styles.screen}>
                <TextInput
                placeholder="Search Product"
                value={search}
                onChangeText={(text) => setSearch(text)}
                style={styles.searchInput}
                clearButtonMode='while-editing'
                />

            <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll} contentContainerStyle={styles.categoryContent}>


            {kategori.map((cat) => (
                <TouchableOpacity
                key={cat}
                style={[styles.chip, activeCategory === cat && styles.chipActive]}
                onPress={() => setActiveCategory(cat)}>
                    <Text style={[styles.chipText, activeCategory === cat && styles.chipTextActive]}>{cat}</Text>
                </TouchableOpacity>
            ))}
            </ScrollView>

            <FlatList
            data={filtered}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={renderItem}
            contentContainerStyle={styles.productList}
            ListHeaderComponent={
        <View style={styles.keterangan}>
        <Text style={styles.keteranganText}>Products</Text>
        </View>
        }
            ListEmptyComponent={(
                <View style={styles.empty}>
                    <Text style={styles.emptyText}>Produk Tidak Ditemukan</Text>
                </View>
            )}

            />
        </View>
    )
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    searchInput: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 14,
        justifyContent: 'center',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        marginTop: 20
    },
    keterangan: {
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 5
    },
    keteranganText: {
        color: '#1F2937',
        fontSize: 24,
        fontWeight: 'bold',
    },
    categoryScroll: {
        maxHeight: 55,
        backgroundColor: 'white',
        marginTop: 20
    },
    categoryContent: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        paddingVertical: 8,
        gap: 8,
        height: 55,
        alignItems: 'center',
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#F0F0F0',
        marginRight: 8,
    },
    chipActive: {
        backgroundColor: '#4885ff'
    },
    chipText: {
        fontSize: 14,
        color: '#a1a1a1',
        fontWeight: 'bold',
    },
    chipTextActive: {
        color: 'white',
    },
    productList: {
        padding: 16,
        gap: 16,
    },
    cardWrapper: {
        flex: 1,
        gap: 16,
    },
    cardLeft: {
        marginRight: 16,
    },
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
}
})

export default HomeScreen