// 22521172 - Vo Nhat Phuong
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default function FeedbackList({ darkMode, data }) {
    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            height: 250,
        },
        textTitle: {
            marginTop: 15,
            marginBottom: 10,
            color: darkMode === false ? "#000000" : "#fff",
            fontSize: 20,
            fontWeight: 'bold'
        },
        textScroll: {
            color: darkMode === false ? "#000000" : "#fff",
            fontSize: 14,
            paddingVertical: 8,
            paddingHorizontal: 5,
            lineHeight: 20,
        }
    });

    return (
        <View>
            <Text style={styles.textTitle}>Frequently Asked Questions</Text>

            <ScrollView style={styles.container}>
                {data.map((feedback, index) => {
                    return (
                        <Text key={index} style={styles.textScroll}>Q: {feedback}</Text>
                    );
                })}
            </ScrollView>
        </View>
    );
}

