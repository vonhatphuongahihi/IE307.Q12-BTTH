// 22521172 - Vo Nhat Phuong
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import MySwitch from './components/MySwitch';
import Header from './components/Header';
import Feedback from './components/Feedback';
import FeedbackList from './components/FeedbackList';

export default function App() {
    const [darkMode, setMode] = useState(false);
    const [Notif, setNotif] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const addFeedback = (value) => {
        setFeedback(preFb => [value, ...preFb]);
    };

    const changeMode = () => setMode(previousState => !previousState);
    const enableNotif = () => setNotif(previousState => !previousState);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkMode === false ? "#fff" : "#000000",
            padding: 30,
        },
    });
    // 22521172 - Vo Nhat Phuong
    return (
        <View style={styles.container}>
            <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
            <Header darkMode={darkMode} source={require("./assets/logo.png")} />
            <MySwitch darkMode={darkMode} title='Dark Mode' funct={changeMode} value={darkMode} />
            <MySwitch darkMode={darkMode} title='Notifications' funct={enableNotif} value={Notif} />
            <Feedback darkMode={darkMode} notif={Notif} funct={addFeedback} />
            <FeedbackList darkMode={darkMode} data={feedback} />
        </View>
    );
}

