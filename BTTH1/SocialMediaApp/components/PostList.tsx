// 22521172 - Võ Nhất Phương
import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    SafeAreaView
} from 'react-native';
import Post from './Post';
import { postsData } from '../data/posts';

const PostList = () => {
    const [posts, setPosts] = useState(postsData);

    const handleUpdatePost = (postId: number, updates: any) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId ? { ...post, ...updates } : post
            )
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Social Media Feed</Text>
            </View>

            <ScrollView
                // 22521172 - Võ Nhất Phương
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                        onUpdatePost={handleUpdatePost}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#3598DB',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    // 22521172 - Võ Nhất Phương
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
});

export default PostList;
