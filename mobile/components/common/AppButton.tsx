import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
  useColorScheme,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { useAppStore } from '@/store/appStore';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface AppButtonProps {
  label: string;
  onPress: (event?: GestureResponderEvent) => void | Promise<void>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  haptic?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}

export default function AppButton(props: AppButtonProps) {
  const {
    label,
    onPress,
    variant = 'secondary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    haptic = true,
    leftIcon,
    rightIcon,
    style,
    textStyle,
    accessibilityLabel,
  } = props;

  const systemColorScheme = useColorScheme();
  const { theme } = useAppStore();
  const isDark = (theme || systemColorScheme || 'light') === 'dark';

  const styles = React.useMemo(() => createStyles(isDark), [isDark]);

  const containerStyles = [
    styles.base,
    fullWidth && styles.fullWidth,
    size === 'sm' && styles.sizeSm,
    size === 'md' && styles.sizeMd,
    size === 'lg' && styles.sizeLg,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'outline' && styles.outline,
    (disabled || loading) && styles.disabled,
    style,
  ];

  const labelStyles = [
    styles.label,
    variant === 'primary' && styles.labelOnPrimary,
    variant === 'secondary' && styles.labelOnSecondary,
    variant === 'outline' && styles.labelOnOutline,
    size === 'sm' && styles.labelSm,
    size === 'lg' && styles.labelLg,
    textStyle,
  ];

  const handlePress = async (e: GestureResponderEvent) => {
    if (disabled || loading) return;
    if (haptic) await Haptics.selectionAsync();
    await onPress?.(e);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      style={containerStyles}
    >
      <View style={styles.contentRow}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <Text style={labelStyles} numberOfLines={1} ellipsizeMode="tail" allowFontScaling>
          {label}
        </Text>
        {loading ? (
          <ActivityIndicator size="small" color={isDark || variant === 'primary' ? '#FFFFFF' : '#333333'} />
        ) : (
          rightIcon && <View style={styles.icon}>{rightIcon}</View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    base: {
      borderRadius: 12,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    fullWidth: {
      alignSelf: 'stretch',
    },
    sizeSm: {
      minHeight: 36,
      paddingVertical: 8,
    },
    sizeMd: {
      minHeight: 44,
      paddingVertical: 10,
    },
    sizeLg: {
      minHeight: 52,
      paddingVertical: 12,
    },
    primary: {
      backgroundColor: '#D2691E',
      borderColor: '#D2691E',
    },
    secondary: {
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      borderColor: isDark ? '#404040' : '#E8E0D0',
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: '#D2691E',
    },
    disabled: {
      opacity: 0.5,
    },
    contentRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#333333',
      flexShrink: 1,
    },
    labelSm: {
      fontSize: 14,
    },
    labelLg: {
      fontSize: 18,
    },
    labelOnPrimary: {
      color: '#FFFFFF',
    },
    labelOnSecondary: {
      color: isDark ? '#FFFFFF' : '#333333',
    },
    labelOnOutline: {
      color: '#D2691E',
    },
  });


