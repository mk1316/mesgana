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
} from 'react-native';
import { ChevronLeft, Share as ShareIcon, MessageCircle } from 'lucide-react-native';
import { router } from 'expo-router';
import { useAppStore } from '@/store/appStore';

// Import version directly
const appConfig = require('@/app.json');
const appVersion = appConfig.expo.version;

export default function SettingsScreen() {
  const systemColorScheme = useColorScheme();
  const { language, theme, setLanguage, setTheme } = useAppStore();
  
  // Use app theme if set, otherwise fall back to system theme
  const effectiveTheme = theme || systemColorScheme || 'light';
  const styles = createStyles(effectiveTheme === 'dark');

  const handleShare = async () => {
    try {
      const appStoreUrl = 'https://apps.apple.com/app/mesgana/id123456789';
      const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.yourcompany.mesgana';
      
      await Share.share({
        message: `Download Mesgana - Ethiopian Hymnal App!\n\niOS: ${appStoreUrl}\nAndroid: ${playStoreUrl}`,
        title: 'Mesgana App',
        url: appStoreUrl, // This will be used on iOS
      });
    } catch (error) {
      Alert.alert('Error', 'Unable to share app');
    }
  };

  const handleFeedback = async () => {
    const email = 'feedback.mesgana@gmail.com';
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
            ? 'የኢሜይል መተግበሪያ አልተገኘም። እባክዎ feedback.mesgana@gmail.com ላይ ኢሜይል ይላኩ።'
            : 'No email app found. Please send feedback to feedback.mesgana@gmail.com'
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ChevronLeft size={24} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {language === 'amharic' ? 'ቅንብሮች' : 'Settings'}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'amharic' ? 'ቋንቋ' : 'Language'}
          </Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                language === 'english' && styles.selectedOption,
              ]}
              onPress={() => setLanguage('english')}
            >
              <Text
                style={[
                  styles.optionText,
                  language === 'english' && styles.selectedOptionText,
                ]}
              >
                English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                language === 'amharic' && styles.selectedOption,
              ]}
              onPress={() => setLanguage('amharic')}
            >
              <Text
                style={[
                  styles.optionText,
                  language === 'amharic' && styles.selectedOptionText,
                ]}
              >
                አማርኛ
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {language === 'amharic' ? 'ገጽታ' : 'Theme'}
          </Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                effectiveTheme === 'light' && styles.selectedOption,
              ]}
              onPress={() => setTheme('light')}
            >
              <Text
                style={[
                  styles.optionText,
                  effectiveTheme === 'light' && styles.selectedOptionText,
                ]}
              >
                {language === 'amharic' ? 'ብርሃን' : 'Light'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                effectiveTheme === 'dark' && styles.selectedOption,
              ]}
              onPress={() => setTheme('dark')}
            >
              <Text
                style={[
                  styles.optionText,
                  effectiveTheme === 'dark' && styles.selectedOptionText,
                ]}
              >
                {language === 'amharic' ? 'ጨለማ' : 'Dark'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                !theme && styles.selectedOption,
              ]}
              onPress={() => setTheme(null)}
            >
              <Text
                style={[
                  styles.optionText,
                  !theme && styles.selectedOptionText,
                ]}
              >
                {language === 'amharic' ? 'ስርዓት' : 'System'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.feedbackButton} onPress={handleFeedback}>
          <MessageCircle size={20} color="#8B7355" />
          <Text style={styles.feedbackButtonText}>
            {language === 'amharic' ? 'አስተያየት ይስጡ' : 'Send Feedback'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <ShareIcon size={20} color="#D2691E" />
          <Text style={styles.shareButtonText}>
            {language === 'amharic' ? 'መተግበሪያውን አጋራ' : 'Share App'}
          </Text>
        </TouchableOpacity>

        <View style={styles.appInfo}>
          <View style={styles.appIcon}>
            <Image 
              source={
                effectiveTheme === 'dark' 
                  ? require('@/assets/images/ios-dark.png')
                  : require('@/assets/images/ios-light.png')
              } 
              style={styles.appIconImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.appName}>Mesgana</Text>
          <Text style={styles.appVersion}>Version {appVersion}</Text>
        </View>
      </View>
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
      paddingHorizontal: 20,
    },
    section: {
      marginBottom: 32,
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
    appInfo: {
      alignItems: 'center',
      paddingTop: 60,
      paddingBottom: 40,
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
    appIconImage: {
      width: 120,
      height: 120,
      borderRadius: 12,
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