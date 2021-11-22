import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";


export function HomeScreen({ route, navigation }) {
    //deklaracija state varjable
    const [comment, setComment] = useState([]);


    function handleHomePress() {
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>
            <View style={styles.Jumbotron}>
                <View style={styles.pageWrapper}>
                    <Image
                        style={styles.tinyLogo} source={require("../assets/tamara.png")}
                    />
                     <Text style={styles.pageText}> Tamara</Text>
                    <Text style={styles.pageText}> Škorić</Text>
                    <Text style={styles.pageText}> tskoric@ffos.hr</Text>
                </View>
                <View style={styles.gameResultWrapper}>
                    <Text style={styles.gameResult}></Text>
                </View>

                <View style={styles.pageWrapper}>
                    <Text style={styles.pageText}> Filozofski fakultet OSijek</Text>

                </View>
                <View style={styles.pageWrapper}>
                <Text style={styles.pageText}> Gimnazija Antuna Gustava Matoša Đakovo</Text>
                </View>

                <View style={styles.pageWrapper}>
                    <Text style={styles.pageText}> Osnovna škola Josipa Antuna Ćolnića </Text>
            </View>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Jubotron: {
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        borderBottomColor: "gray",
        borderBottomWidth: 2,
        paddingBottom: 20,
    },

    tinyLogo: {
        width: 100,
        height: 100
    },

    pageWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    gameResult: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 2,
    },

    pageText: {
        alignItems: "center",
    }

});