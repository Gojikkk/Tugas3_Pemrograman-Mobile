import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, 
    ScrollView, Platform, StatusBar } from 'react-native';
import { kategori, produk } from '../../data/data';

const HomeScreen = () => {
const [search, setSearch] = useState('');
const [activeCategory, setActiveCategory] = useState('Semua');

const filtered = useMemo (() => {
    return produk.filter((p) => {
        const kategoriMatch = activeCategory === 'Semua' || p.kategori === activeCategory;
        const searchMatch = p.nama.toLowerCase().includes(search.toLowerCase());
        return kategoriMatch && searchMatch;
    })
})
}