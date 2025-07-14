import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  Share,
  Alert,
} from 'react-native';
import { 
  ChevronLeft, 
  Heart, 
  Share as ShareIcon, 
  Type,
  Languages,
  Plus,
  Minus
} from 'lucide-react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { allHymns as hymnsData } from '@/data/hymns';
import { useAppStore } from '@/store/appStore';

type DisplayMode = 'english' | 'amharic' | 'both';

export default function HymnDetailScreen() {
  const systemColorScheme = useColorScheme();
  const { id } = useLocalSearchParams();
  const [fontSize, setFontSize] = useState(16);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('both');
  const [showFontSizeOptions, setShowFontSizeOptions] = useState(false);
  
  const { language, theme, favorites, toggleFavorite } = useAppStore();
  
  // Use app theme if set, otherwise fall back to system theme
  const effectiveTheme = theme || systemColorScheme || 'light';
  const styles = createStyles(effectiveTheme === 'dark', fontSize);

  const hymn = hymnsData.find(h => h.id === id);
  
  if (!hymn) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Hymn not found</Text>
      </View>
    );
  }

  const isFavorited = favorites.includes(hymn.id);

  const handleShare = async () => {
    try {
      const appStoreUrl = 'https://apps.apple.com/app/mesgana/id123456789';
      const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.yourcompany.mesgana';
      
      await Share.share({
        message: `Download Mesgana - Ethiopian Hymnal App!\n\niOS: ${appStoreUrl}\nAndroid: ${playStoreUrl}`,
        title: 'Mesgana App',
        url: appStoreUrl,
      });
    } catch (error) {
      Alert.alert('Error', 'Unable to share hymn');
    }
  };

  const adjustFontSize = (increment: number) => {
    setFontSize(prev => Math.max(12, Math.min(24, prev + increment)));
  };

  const cycleDisplayMode = () => {
    setDisplayMode(prev => {
      switch (prev) {
        case 'english': return 'amharic';
        case 'amharic': return 'both';
        case 'both': return 'english';
        default: return 'english';
      }
    });
  };

  const getDisplayModeIcon = () => {
    switch (displayMode) {
      case 'english': return 'EN';
      case 'amharic': return 'አማ';
      case 'both': return 'EN/አማ';
      default: return 'EN';
    }
  };

  const toggleFontSizeOptions = () => {
    setShowFontSizeOptions(!showFontSizeOptions);
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
        <View style={styles.headerCenter}>
          <Text style={styles.hymnTitle}>{hymn.title[language]}</Text>
          <Text style={styles.hymnAuthor}>{hymn.author[language]}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {hymn.verses.map((verse, index) => (
          <View key={index} style={styles.verseContainer}>
            <Text style={styles.verseLabel}>
              {verse.type === 'verse' 
                ? (language === 'amharic' ? `ቁ. ${index + 1}` : `verse ${index + 1}`)
                : (language === 'amharic' ? 'ተከታታይ' : 'chorus')
              }
            </Text>
            
            {displayMode === 'english' && (
              <Text style={styles.verseText}>
                {verse.english}
              </Text>
            )}
            
            {displayMode === 'amharic' && (
              <Text style={styles.verseText}>
                {verse.amharic}
              </Text>
            )}
            
            {displayMode === 'both' && (
              <>
                <Text style={styles.verseText}>
                  {verse.english}
                </Text>
                <Text style={styles.translationText}>
                  {verse.amharic}
                </Text>
              </>
            )}
          </View>
        ))}

        <View style={styles.tagsContainer}>
          {hymn.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Fixed bottom controls */}
      <View style={styles.bottomControls}>
        <View style={styles.controlsContainer}>
          {/* Left side - Text size control */}
          <View style={styles.leftControls}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={toggleFontSizeOptions}
            >
              <Text style={styles.fontSizeMainText}>Aa</Text>
            </TouchableOpacity>
            
            {showFontSizeOptions && (
              <View style={styles.fontSizeExpanded}>
                <TouchableOpacity
                  style={styles.fontSizeOption}
                  onPress={() => adjustFontSize(-2)}
                >
                  <Minus size={20} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fontSizeOption}
                  onPress={() => adjustFontSize(2)}
                >
                  <Plus size={20} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Right side - Other controls */}
          <View style={styles.rightControls}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={cycleDisplayMode}
            >
              <View style={styles.languageButton}>
                <Text style={styles.languageButtonText}>{getDisplayModeIcon()}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => toggleFavorite(hymn.id)}
            >
              <Heart
                size={24}
                color={isFavorited ? '#D2691E' : (effectiveTheme === 'dark' ? '#FFFFFF' : '#333333')}
                fill={isFavorited ? '#D2691E' : 'transparent'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={handleShare}
            >
              <ShareIcon size={22} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (isDark: boolean, fontSize: number) =>
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
    headerCenter: {
      flex: 1,
    },
    hymnTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#FFFFFF' : '#333333',
      marginBottom: 4,
    },
    hymnAuthor: {
      fontSize: 14,
      color: '#8B7355',
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
    },
    verseContainer: {
      marginBottom: 24,
    },
    verseLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: '#8B7355',
      marginBottom: 8,
      textTransform: 'lowercase',
    },
    verseText: {
      fontSize: fontSize,
      lineHeight: fontSize * 1.5,
      color: isDark ? '#FFFFFF' : '#333333',
      fontWeight: '400',
    },
    translationText: {
      fontSize: fontSize - 2,
      lineHeight: (fontSize - 2) * 1.4,
      color: '#8B7355',
      marginTop: 12,
      fontStyle: 'italic',
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 20,
      marginBottom: 30,
    },
    tag: {
      backgroundColor: isDark ? '#404040' : '#F0EDE5',
      borderRadius: 16,
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
    tagText: {
      fontSize: 12,
      color: isDark ? '#CCCCCC' : '#8B7355',
      fontWeight: '500',
    },
    bottomSpacing: {
      height: 100, // Extra space to ensure content doesn't get hidden behind controls
    },
    bottomControls: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: isDark ? '#1C1C1C' : '#F5F2E8',
      paddingHorizontal: 20,
      paddingVertical: 20,
      paddingBottom: 40,
    },
    fontSizeExpanded: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },
    fontSizeOption: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginRight: 8,
    },
    fontSizeText: {
      fontSize: 18,
      color: isDark ? '#FFFFFF' : '#333333',
      fontWeight: '500',
    },
    controlsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    leftControls: {
      position: 'absolute',
      left: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightControls: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 30,
    },
    controlButton: {
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fontSizeMainText: {
      fontSize: 20,
      color: isDark ? '#FFFFFF' : '#333333',
      fontWeight: '500',
    },
    languageButton: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
    },
    languageButtonText: {
      fontSize: 14,
      color: isDark ? '#FFFFFF' : '#333333',
      fontWeight: '600',
    },
    errorText: {
      fontSize: 18,
      color: isDark ? '#FFFFFF' : '#333333',
      textAlign: 'center',
      marginTop: 50,
    },
  });