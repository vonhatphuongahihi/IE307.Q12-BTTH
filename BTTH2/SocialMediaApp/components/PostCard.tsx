// 22521172 - Võ Nhất Phương
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import UserInfo from './UserInfo';
import Stats from './Stats';
import ActionButtons from './ActionButtons';

interface Post {
    id: number;
    username: string;
    avatar: any;
    content: string;
    image: any;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
}

interface PostCardProps {
    post: Post;
    onUpdatePost: (postId: number, updates: any) => void;
}

const PostCard = ({ post, onUpdatePost }: PostCardProps) => {
    const [isLiked, setIsLiked] = useState(post.isLiked);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [commentCount, setCommentCount] = useState(post.comments);
    const [shareCount, setShareCount] = useState(post.shares);

    // 22521172 - Võ Nhất Phương
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
    };

    const handleShare = () => {
        setShareCount(shareCount + 1);
        onUpdatePost(post.id, { shares: shareCount + 1 });
    };

    return (
        <View style={styles.postContainer}>
            <UserInfo avatar={post.avatar} username={post.username} />

            <Text style={styles.content}>{post.content}</Text>

            <Image source={post.image} style={styles.postImage} resizeMode="cover" />

            {/* 22521172 - Võ Nhất Phương */}
            <Stats likes={likeCount} comments={commentCount} shares={shareCount} />

            <View style={styles.separator} />

            <ActionButtons
                isLiked={isLiked}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
            />
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
    /* 22521172 - Võ Nhất Phương */
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
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 8,
    },
});

export default PostCard;

