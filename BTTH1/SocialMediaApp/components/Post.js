import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Post = ({ post, onUpdatePost }) => {
    const [isLiked, setIsLiked] = useState(post.isLiked);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [commentCount, setCommentCount] = useState(post.comments);
    const [shareCount, setShareCount] = useState(post.shares);

    const handleLike = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikeCount(likeCount - 1);
            onUpdatePost(post.id, { isLiked: false, likes: likeCount - 1 });
        } else {
            setIsLiked(true);
            setLikeCount(likeCount + 1);
            onUpdatePost(post.id, { isLiked: true, likes: likeCount + 1 });
        }
    };

    const handleComment = () => {
        setCommentCount(commentCount + 1);
        onUpdatePost(post.id, { comments: commentCount + 1 });
        Alert.alert("Comment", "You have added a new comment!");
    };

    const handleShare = () => {
        setShareCount(shareCount + 1);
        onUpdatePost(post.id, { shares: shareCount + 1 });
        Alert.alert("Share", "The post has been shared!");
    };

    return (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                <Image source={post.avatar} style={styles.avatar} />
                <Text style={styles.username}>{post.username}</Text>
            </View>

            <Text style={styles.content}>{post.content}</Text>

            <Image source={post.image} style={styles.postImage} />

            <View style={styles.statsContainer}>
                <Text style={styles.statsText}>{likeCount} Likes</Text>
                <Text style={styles.statsText}>{commentCount} Comments</Text>
                <Text style={styles.statsText}>{shareCount} Shares</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.actionsContainer}>
                <Pressable
                    style={[styles.actionButton, isLiked && styles.likedButton]}
                    onPress={handleLike}
                >
                    <FontAwesome
                        name={isLiked ? "thumbs-up" : "thumbs-o-up"}
                        size={18}
                        style={[styles.icon, isLiked ? styles.iconLiked : styles.iconDefault]}
                    />
                    <Text style={[styles.actionButtonText, isLiked && styles.likedText]}>
                        Likes
                    </Text>
                </Pressable>

                <Pressable style={styles.actionButton} onPress={handleComment}>
                    <FontAwesome
                        name="comment-o"
                        size={18}
                        style={[styles.icon, styles.iconDefault]}
                    />
                    <Text style={styles.actionButtonText}>Comments</Text>
                </Pressable>

                <Pressable style={styles.actionButton} onPress={handleShare}>
                    <FontAwesome
                        name="share"
                        size={18}
                        style={[styles.icon, styles.iconDefault]}
                    />
                    <Text style={styles.actionButtonText}>Shares</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
        lineHeight: 22,
    },
    postImage: {
        width: '100%',
        height: 250,
        borderRadius: 8,
        marginBottom: 12,
        resizeMode: 'cover',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8,
        marginBottom: 8,
    },
    statsText: {
        flex: 1,
        fontSize: 13,
        color: '#A0A1A0',
        fontWeight: '500',
        textAlign: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 8,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 4,
    },

    icon: {
        marginRight: 6,
    },
    iconLiked: {
        color: '#1976d2',
    },
    iconDefault: {
        color: '#666',
    },
    actionButtonText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#666',
    },
    likedText: {
        color: '#1976d2',
    },
});

export default Post;
