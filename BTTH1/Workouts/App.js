// 22521172 - Võ Nhất Phương
import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    SectionList,
    Pressable,
    StyleSheet,
    Image,
    ImageBackground,
    SafeAreaView,
} from "react-native";

import { workouts } from "./data.js";
import { fruits_vegetables } from "./data.js";

const image = {
    uri: "https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg?auto=compress&cs=tinysrgb&w=640",
};
const image1 = {
    uri: "https://images.healthshots.com/healthshots/en/uploads/2022/04/17151621/fruit-salad-1600x900.jpg",
};

const App = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleWorkout = (workout) => {
        setSelectedItems((prev) => {
            if (prev.includes(workout)) {
                return prev.filter((item) => item !== workout);
            } else {
                return [...prev, workout];
            }
        });
    };
    // 22521172 - Võ Nhất Phương
    const toggleFruit = (fruit) => {
        setSelectedItems((prev) => {
            if (prev.includes(fruit)) {
                return prev.filter((item) => item !== fruit);
            } else {
                return [...prev, fruit];
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>FlatList - Workouts</Text>
                <View style={styles.listContainer}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                        <FlatList
                            data={workouts}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={styles.listContent}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={styles.button}
                                    onPress={() => toggleWorkout(item.type)}
                                >
                                    <Text style={styles.buttonText}>{item.type}</Text>
                                    <Pressable
                                        style={[
                                            styles.selectedBox,
                                            selectedItems.includes(item.type) && styles.selectedBoxActive
                                        ]}
                                        onPress={() => toggleWorkout(item.type)}
                                    >
                                        {/* 22521172 - Võ Nhất Phương */}
                                        <Text style={styles.selectText}>
                                            {selectedItems.includes(item.type) ? "DESELECT" : "SELECT"}
                                        </Text>
                                    </Pressable>
                                </Pressable>
                            )}
                        />
                    </ImageBackground>
                </View>

                <Text style={styles.title}>SectionList - Fruits & Vegetables</Text>
                <View style={styles.listContainer}>
                    <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
                        <SectionList
                            sections={fruits_vegetables}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.listContent}
                            renderItem={({ item }) => (
                                <Pressable style={styles.button} onPress={() => toggleFruit(item)}>
                                    <Text style={styles.buttonText}>{item}</Text>
                                    <Pressable
                                        style={[
                                            styles.selectedBox,
                                            selectedItems.includes(item) && styles.selectedBoxActive
                                        ]}
                                        onPress={() => toggleFruit(item)}
                                    >
                                        <Text style={styles.selectText}>
                                            {selectedItems.includes(item) ? "DESELECT" : "SELECT"}
                                        </Text>
                                    </Pressable>
                                </Pressable>
                            )}
                            // 22521172 - Võ Nhất Phương
                            renderSectionHeader={({ section: { title, url } }) => (
                                <View style={styles.sectionHeaderContainer}>
                                    <Text style={styles.sectionHeader}>{title}</Text>
                                    <Image source={{ uri: url }} style={styles.icon} />
                                </View>
                            )}
                        />
                    </ImageBackground>
                </View>

                <View style={styles.selectedContainer}>
                    <Text style={styles.selectedHeader}>SELECTED EXERCISES:</Text>
                    <Text style={styles.selectedText}>{selectedItems.join(", ")}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#007AFF",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 14,
    },
    // 22521172 - Võ Nhất Phương
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginVertical: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        color: "#000",
        flex: 1,
    },
    selectedBox: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        minWidth: 70,
    },
    selectedBoxActive: {
        backgroundColor: "#34C759",
    },
    // 22521172 - Võ Nhất Phương
    selectText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center",
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        paddingVertical: 10,
    },
    sectionHeaderContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 8,
    },
    selectedContainer: {
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    selectedHeader: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#FF3B30",
        textAlign: "center",
    },
    // 22521172 - Võ Nhất Phương
    selectedText: {
        fontSize: 14,
        color: "#000",
        textAlign: "left",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#F2F2F7",
        borderRadius: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8,
    },
    image: {
        height: 280,
        justifyContent: "center",
    },
    listContainer: {
        marginHorizontal: 15,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    // 22521172 - Võ Nhất Phương
    listContent: {
        paddingVertical: 10,
        backgroundColor: 'transparent',
    },
});

export default App;
