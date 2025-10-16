import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Share,
  Alert,
  Image,
  Linking,
  ScrollView,
  Dimensions,
} from 'react-native';
import { ChevronLeft, Share as ShareIcon, MessageCircle } from 'lucide-react-native';
import { router } from 'expo-router';
import AppButton from '@/components/common/AppButton';
import { useAppStore } from '@/store/appStore';
import * as Haptics from 'expo-haptics';

// Import version directly
const appConfig = require('@/app.json');
const appVersion = appConfig.expo.version;

export default function SettingsScreen() {
  const systemColorScheme = useColorScheme();
  const { language, theme, setLanguage, setTheme, fontSize, setFontSize } = useAppStore();
  
  // Use app theme if set, otherwise fall back to system theme
  const effectiveTheme = theme || systemColorScheme || 'light';
  const styles = createStyles(effectiveTheme === 'dark');
  const fontSizeOptions = [12, 16, 18, 22] as const;
  const selectFontSize = async (size: number) => {
    setFontSize(size);
  };


  const handleShare = async () => {
    try {
      const targetUrl = 'https://play.google.com/store/apps/details?id=com.mesgana.app';
      await Share.share({
        message: `Download Mesgana - Amharic SDA Hymnal App!\n\n${targetUrl}`,
        title: 'Mesgana App',
        url: targetUrl,
      });
    } catch (error) {
      Alert.alert('Error', 'Unable to share app');
    }
  };

  const handleResetPreferences = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setLanguage('amharic');
    setTheme(null);
    Alert.alert(
      language === 'amharic' ? 'ተቀናብሯል' : 'Reset complete',
      language === 'amharic'
        ? 'ቋንቋ (አማርኛ) እና ገጽታ (ስርዓት) ወደ ነባር ተመለሱ'
        : 'Language (Amharic) and theme (System) restored to defaults'
    );
  };

  const handleFeedback = async () => {
    const email = 'support@mesgana.com';
    const subject = 'Mesgana App Feedback';
    const body = `Hi,\n\nI'd like to share some feedback about the Mesgana app:\n\n[Please write your feedback here]\n\nApp Version: ${appVersion}\n\nThank you!`;
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      const canOpen = await Linking.canOpenURL(mailtoUrl);
      if (canOpen) {
        await Linking.openURL(mailtoUrl);
      } else {
        Alert.alert(
          language === 'amharic' ? 'ስህተት' : 'Error',
          language === 'amharic' 
            ? 'የኢሜይል መተግበሪያ አልተገኘም። እባክዎ support@mesgana.com ላይ ኢሜይል ይላኩ።'
            : 'No email app found. Please send feedback to support@mesgana.com'
        );
      }
    } catch (error) {
      Alert.alert(
        language === 'amharic' ? 'ስህተት' : 'Error',
        language === 'amharic' 
          ? 'ኢሜይል መላክ አልተቻለም'
          : 'Unable to send email'
      );
    }
  };

  const { width, height } = Dimensions.get('window');
  const isSmallScreen = height < 700;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={async () => {
            await Haptics.selectionAsync();
            router.back();
          }}
        >
          <ChevronLeft size={24} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {language === 'amharic' ? 'ቅንብሮች' : 'Settings'}
        </Text>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainer,
          isSmallScreen && styles.contentContainerSmall
        ]}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'amharic' ? 'ቋንቋ' : 'Language'}
          </Text>
          <View style={styles.optionRow}>
            <AppButton
              label="English"
              variant={language === 'english' ? 'primary' : 'secondary'}
              style={{ flex: 1 }}
              onPress={async () => {
                await Haptics.selectionAsync();
                setLanguage('english');
              }}
            />
            <AppButton
              label="አማርኛ"
              variant={language === 'amharic' ? 'primary' : 'secondary'}
              style={{ flex: 1 }}
              onPress={async () => {
                await Haptics.selectionAsync();
                setLanguage('amharic');
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'amharic' ? 'ገጽታ' : 'Theme'}
          </Text>
          <View style={styles.optionRow}>
            <AppButton
              label={language === 'amharic' ? 'ብርሃን' : 'Light'}
              variant={effectiveTheme === 'light' ? 'primary' : 'secondary'}
              style={{ flex: 1 }}
              onPress={async () => {
                await Haptics.selectionAsync();
                setTheme('light');
              }}
            />
            <AppButton
              label={language === 'amharic' ? 'ጨለማ' : 'Dark'}
              variant={effectiveTheme === 'dark' ? 'primary' : 'secondary'}
              style={{ flex: 1 }}
              onPress={async () => {
                await Haptics.selectionAsync();
                setTheme('dark');
              }}
            />
            <AppButton
              label={language === 'amharic' ? 'ስርዓት' : 'System'}
              variant={!theme ? 'primary' : 'secondary'}
              style={{ flex: 1 }}
              onPress={async () => {
                await Haptics.selectionAsync();
                setTheme(null);
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'amharic' ? 'ጽሑፍ መጠን' : 'Text Size'}
          </Text>
          <View style={styles.fontPresetRow}>
            {fontSizeOptions.map((size) => (
              <AppButton
                key={size}
                label="Aa"
                variant={fontSize === size ? 'primary' : 'secondary'}
                style={{ flex: 1 }}
                onPress={() => selectFontSize(size)}
                textStyle={{ fontSize: size }}
              />
            ))}
          </View>
        </View>

        <AppButton
          label={language === 'amharic' ? 'ምርጫዎችን አቋርጥ' : 'Reset Preferences'}
          variant="secondary"
          onPress={handleResetPreferences}
          fullWidth
          style={{ marginHorizontal: 20, marginVertical: 8, borderColor: '#E8E0D0' }}
        />

        <AppButton
          label={language === 'amharic' ? 'መተግበሪያውን አጋራ' : 'Share App'}
          variant="secondary"
          onPress={handleShare}
          leftIcon={<ShareIcon size={20} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />}
          fullWidth
          style={{ marginHorizontal: 20, marginVertical: 8, borderColor: '#E8E0D0' }}
        />

        <AppButton
          label={language === 'amharic' ? 'አስተያየት ይስጡ' : 'Send Feedback'}
          variant="secondary"
          onPress={handleFeedback}
          leftIcon={<MessageCircle size={20} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />}
          fullWidth
          style={{ marginHorizontal: 20, marginVertical: 8, borderColor: '#E8E0D0' }}
        />

        <View style={[
          styles.appInfo,
          isSmallScreen && styles.appInfoSmall
        ]}>
          <View style={[
            styles.appIcon,
            isSmallScreen && styles.appIconSmall
          ]}>
            <Image 
              source={
                effectiveTheme === 'dark' 
                  ? require('@/assets/images/ios-dark.png')
                  : require('@/assets/images/ios-light.png')
              } 
              style={[
                styles.appIconImage,
                isSmallScreen && styles.appIconImageSmall
              ]}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.appName}>Mesgana</Text>
          <Text style={styles.appVersion}>Version {appVersion}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#1C1C1C' : '#F5F2E8',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 20,
    },
    backButton: {
      marginRight: 16,
      padding: 4,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#FFFFFF' : '#333333',
    },
    content: {
      flex: 1,
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    contentContainerSmall: {
      paddingHorizontal: 20,
      paddingBottom: 10,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#333333',
      marginBottom: 16,
    },
    optionRow: {
      flexDirection: 'row',
      gap: 8,
    },
    optionButton: {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 12,
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      borderWidth: 1,
      borderColor: isDark ? '#404040' : '#E8E0D0',
      alignItems: 'center',
    },
    selectedOption: {
      backgroundColor: '#D2691E',
      borderColor: '#D2691E',
    },
    optionText: {
      fontSize: 16,
      fontWeight: '500',
      color: isDark ? '#FFFFFF' : '#333333',
    },
    selectedOptionText: {
      color: '#FFFFFF',
      fontWeight: '600',
    },
      fontPresetRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      fontPresetButton: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
        borderWidth: 1,
        borderColor: isDark ? '#404040' : '#E8E0D0',
        alignItems: 'center',
      },
      fontPresetText: {
        fontSize: 16,
        fontWeight: '600',
        color: isDark ? '#FFFFFF' : '#333333',
      },
      // previewText removed per request
    feedbackButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#8B7355',
      backgroundColor: 'transparent',
      marginBottom: 16,
      gap: 8,
    },
    feedbackButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#8B7355',
    },
    shareButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#D2691E',
      backgroundColor: 'transparent',
      marginBottom: 40,
      gap: 8,
    },
    shareButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#D2691E',
    },
    resetButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      borderRadius: 12,
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      borderWidth: 1,
      borderColor: isDark ? '#404040' : '#E8E0D0',
      marginHorizontal: 20,
      marginBottom: 20,
    },
    resetButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#333333',
    },
    appInfo: {
      alignItems: 'center',
      paddingTop: 60,
      paddingBottom: 40,
    },
    appInfoSmall: {
      paddingTop: 30,
      paddingBottom: 20,
    },
    appIcon: {
      width: 120,
      height: 120,
      borderRadius: 16,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    appIconSmall: {
      width: 80,
      height: 80,
      marginBottom: 12,
    },
    appIconImage: {
      width: 120,
      height: 120,
      borderRadius: 12,
    },
    appIconImageSmall: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    appName: {
      fontSize: 24,
      fontWeight: '700',
      color: isDark ? '#FFFFFF' : '#333333',
      marginBottom: 4,
    },
    appVersion: {
      fontSize: 14,
      color: '#8B7355',
      textAlign: 'center',
      width: '100%',
    },
  });