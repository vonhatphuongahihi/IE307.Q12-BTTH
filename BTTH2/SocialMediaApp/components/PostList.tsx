// 22521172 - Võ Nhất Phương
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import PostCard from './PostCard';
import Header from './Header';
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
            <Header title="Social Media Feed" />

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {posts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onUpdatePost={handleUpdatePost}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};
// 22521172 - Võ Nhất Phương
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
});

export default PostList;
