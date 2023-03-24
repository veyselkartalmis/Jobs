import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.scrollWrapper}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: COLORS.lightWhite },
    scrollWrapper: { flex: 1, padding: SIZES.medium },
});
