// 22521172 - Võ Nhất Phương
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import SingleActionButton from './SingleActionButton';

interface ActionButtonsProps {
    isLiked: boolean;
    onLike: () => void;
    onComment: () => void;
    onShare: () => void;
}

const ActionButtons = ({ isLiked, onLike, onComment, onShare }: ActionButtonsProps) => {
    const handleLike = () => {
        onLike();
    };

    const handleComment = () => {
        onComment();
        Alert.alert("Comment", "You have added a new comment!");
    };

    const handleShare = () => {
        onShare();
        Alert.alert("Share", "The post has been shared!");
    };
    // 22521172 - Võ Nhất Phương
    return (
        <View style={styles.container}>
            <SingleActionButton
                icon={isLiked ? "thumbs-up" : "thumbs-o-up"}
                label="Likes"
                onPress={handleLike}
                isActive={isLiked}
            />
            <SingleActionButton
                icon="comment-o"
                label="Comments"
                onPress={handleComment}
                isActive={false}
            />
            <SingleActionButton
                icon="share"
                label="Shares"
                onPress={handleShare}
                isActive={false}
            />
        </View>
    );
};
// 22521172 - Võ Nhất Phương
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default ActionButtons;

