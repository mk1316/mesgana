import React, { useRef } from 'react';
import { TouchableOpacity, Animated, ViewStyle, StyleProp } from 'react-native';
import { Heart } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export interface LikeButtonProps {
  isActive: boolean;
  onToggle: () => void | Promise<void>;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  style?: StyleProp<ViewStyle>;
  haptic?: boolean;
}

export default function LikeButton({
  isActive,
  onToggle,
  size = 24,
  activeColor = '#D2691E',
  inactiveColor = '#8B7355',
  style,
  haptic = true,
}: LikeButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = async () => {
    if (haptic) await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.2,
        useNativeDriver: true,
        stiffness: 200,
        damping: 12,
        mass: 0.5,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        stiffness: 220,
        damping: 15,
        mass: 0.7,
      }),
    ]).start();
    await onToggle();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style} activeOpacity={0.8}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Heart
          size={size}
          color={isActive ? activeColor : inactiveColor}
          fill={isActive ? activeColor : 'transparent'}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}


