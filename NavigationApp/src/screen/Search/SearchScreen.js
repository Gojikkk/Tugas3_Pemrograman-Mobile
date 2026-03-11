import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import { kategori, produk } from "../../data/data";
import TrendingCard from "../../components/TrendingCard";
import Entypo from "@expo/vector-icons/Entypo";

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState("");
  const [recentSearch, setRecentSearch] = useState([]);

  const handleSearch = () => {
    if (search.trim() === "") return;

    setRecentSearch((prev) => [search, ...prev]);
  };

  const filteredProduk = produk.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()),
  );
  const trending = produk.filter((item) => item.jumlah_jual > 15);
  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Search Product"
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={handleSearch}
        style={styles.searchInput}
        clearButtonMode="while-editing"
      />

      {recentSearch.length > 0 && (
        <View style={styles.recentSearch}>
          <Text style={styles.keterangan}>Recent Search</Text>
          <FlatList
            data={recentSearch}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      )}

      {!search && <Text style={styles.ket}>Trending Product</Text>}

      <View style={styles.trendingProduct}>
        <FlatList
          data={search ? filteredProduk : trending}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TrendingCard
              produk={item}
              onPress={(p) => navigation.navigate ("Detail", { p: item }) || console.log("Lihat Produk: ", p.nama)}
            ></TrendingCard>
          )}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>Produk Tidak Ditemukan</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchInput: {
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    justifyContent: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    marginTop: -10,
  },
  recentSearch: {
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  keterangan: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  ket: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginLeft: 30,
    marginTop: 25,
    marginBottom: -15,
  },
  item: {
    backgroundColor: "#f6f4f4",
    borderColor: "#dddcdc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 14,
    marginRight: 8,
  },
  trendingProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
  },
});

export default SearchScreen;
