import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  Share,
  Alert,
  Dimensions,
  Animated,
} from 'react-native';
// import { Modal } from 'react-native';
import HymnPickerModal from '@/components/modals/HymnPickerModal';
import CreditsModal from '@/components/modals/CreditsModal';
import { 
  ChevronLeft, 
  Share as ShareIcon, 
  ChevronRight
} from 'lucide-react-native';
import LikeButton from '@/components/common/LikeButton';
import { router, useLocalSearchParams } from 'expo-router';
import { allHymns as hymnsData } from '@/data/hymns';
import { useAppStore } from '@/store/appStore';
import * as Haptics from 'expo-haptics';

export default function HymnDetailScreen() {
  const systemColorScheme = useColorScheme();
  const { id } = useLocalSearchParams();
  const currentId = Array.isArray(id) ? id[0] : (id ?? '').toString();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const likeScale = useRef(new Animated.Value(1)).current;
  
  const { language, theme, favorites, toggleFavorite, fontSize } = useAppStore();
  
  // Use app theme if set, otherwise fall back to system theme
  const effectiveTheme = theme || systemColorScheme || 'light';
  
  // Get screen dimensions for responsive design
  const { width, height } = Dimensions.get('window');
  const isSmallScreen = width < 400;
  
  const styles = createStyles(effectiveTheme === 'dark', fontSize, isSmallScreen);

  const hymn = hymnsData.find(h => h.id === currentId);

  // Compute neighbors by numeric id
  const sortedHymns = useMemo(() => {
    return [...hymnsData].sort((a, b) => Number(a.id) - Number(b.id));
  }, []);

  const currentIndex = useMemo(() => {
    return sortedHymns.findIndex((h) => h.id === currentId);
  }, [sortedHymns, currentId]);

  const prevId = currentIndex > 0 ? sortedHymns[currentIndex - 1]?.id ?? null : null;
  const nextId = currentIndex >= 0 && currentIndex < sortedHymns.length - 1
    ? sortedHymns[currentIndex + 1]?.id ?? null
    : null;

  // Determine language availability and pick content language from settings
  const hasEnglish = Boolean(
    hymn && (hymn.title.english?.trim() || hymn.verses.some(v => v.english?.trim()))
  );
  const hasAmharic = Boolean(
    hymn && (hymn.title.amharic?.trim() || hymn.verses.some(v => v.amharic?.trim()))
  );
  const contentLanguage: 'english' | 'amharic' =
    language === 'amharic' ? (hasAmharic ? 'amharic' : 'english') : (hasEnglish ? 'english' : 'amharic');
  // Place chorus (if present) immediately after the first verse, otherwise leave as is
  const orderedVerses = useMemo(() => {
    if (!hymn) return [] as any[];
    const verses = hymn.verses;
    const chorus = verses.find(v => v.type === 'chorus');
    const verseOnly = verses.filter(v => v.type === 'verse');
    if (!chorus || verseOnly.length === 0) return verses;
    return [verseOnly[0], chorus, ...verseOnly.slice(1)];
  }, [hymn?.id]);

  const filteredHymns = sortedHymns;

  // Scroll to top on hymn change
  const scrollRef = useRef<ScrollView | null>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [currentId]);
  
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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={async () => {
              await Haptics.selectionAsync();
              setIsCreditsOpen(true);
            }}
          >
            <Text style={styles.hymnTitle}>
              {(hymn.title as any)[contentLanguage] || (contentLanguage === 'amharic' ? hymn.title.english : hymn.title.amharic)}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerRightGroup}>
          <LikeButton
            isActive={isFavorited}
            onToggle={() => toggleFavorite(hymn.id)}
            size={20}
            activeColor="#D2691E"
            inactiveColor={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'}
            style={styles.headerRightButton}
          />
          <TouchableOpacity
            style={styles.headerRightButton}
            onPress={handleShare}
          >
            <ShareIcon size={20} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView ref={scrollRef} style={styles.content} showsVerticalScrollIndicator={false}>
        {(() => {
          let verseCounter = 0;
          return orderedVerses.map((verse: { type: 'verse' | 'chorus'; amharic: string; english: string; }, index: number) => (
            <View key={index} style={styles.verseContainer}>
              <Text style={styles.verseLabel}>
                {verse.type === 'verse'
                  ? (contentLanguage === 'amharic' ? `ቁ. ${++verseCounter}` : `verse ${++verseCounter}`)
                  : (contentLanguage === 'amharic' ? 'ተከታታይ' : 'chorus')}
              </Text>

              <Text style={styles.verseText}>
                {contentLanguage === 'amharic' ? (verse.amharic || verse.english) : (verse.english || verse.amharic)}
              </Text>
            </View>
          ));
        })()}

        <View style={styles.tagsContainer}>
          {hymn.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <View style={styles.bottomControls}>
        <View style={styles.controlsRow}>
          <View style={styles.controlsLeft}>
            <TouchableOpacity
              disabled={!prevId}
              style={[styles.controlButton, !prevId && styles.controlButtonDisabled]}
              onPress={async () => {
                if (!prevId) return;
                await Haptics.selectionAsync();
                router.replace(`/hymn/${prevId}`);
              }}
            >
              <ChevronLeft size={22} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
            </TouchableOpacity>
          </View>

          <View style={styles.controlsCenter}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={async () => {
                await Haptics.selectionAsync();
                setIsPickerOpen(true);
              }}
            >
              <Text style={styles.selectorButtonText}>
                {language === 'amharic' ? 'መዝሙር ' : 'Hymn '} {hymn.id}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.controlsRight}>
            <TouchableOpacity
              disabled={!nextId}
              style={[styles.controlButton, !nextId && styles.controlButtonDisabled]}
              onPress={async () => {
                if (!nextId) return;
                await Haptics.selectionAsync();
                router.replace(`/hymn/${nextId}`);
              }}
            >
              <ChevronRight size={22} color={effectiveTheme === 'dark' ? '#FFFFFF' : '#333333'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <HymnPickerModal
        visible={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        hymns={filteredHymns}
        currentId={currentId}
        language={language}
        contentLanguage={contentLanguage}
        isDark={effectiveTheme === 'dark'}
        onSelect={(hid) => router.replace(`/hymn/${hid}`)}
      />

      <CreditsModal
        visible={isCreditsOpen}
        onClose={() => setIsCreditsOpen(false)}
        hymn={hymn}
        isDark={effectiveTheme === 'dark'}
        language={language}
      />
    </View>
  );
}

const createStyles = (isDark: boolean, fontSize: number, isSmallScreen: boolean) =>
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
    headerRightGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    headerRightButton: {
      padding: 6,
    },
    hymnTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#FFFFFF' : '#333333',
      textAlign: 'center',
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
    // translationText removed since we no longer show both languages at once
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
      paddingHorizontal: 12,
      paddingVertical: 14,
      paddingBottom: 28,
    },
    fontSizeExpanded: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },
    fontSizeExpandedSmall: {
      marginLeft: 8,
    },
    fontSizeOption: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginRight: 8,
    },
    fontSizeValue: {
      fontSize: 14,
      color: isDark ? '#FFFFFF' : '#333333',
      marginLeft: 4,
      minWidth: 24,
      textAlign: 'center',
    },
    fontSizeText: {
      fontSize: 18,
      color: isDark ? '#FFFFFF' : '#333333',
      fontWeight: '500',
    },
    controlsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 12,
    },
    controlsLeft: {
      width: 80,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    controlsCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    controlsRight: {
      width: 80,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    controlButton: {
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectorButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#333333',
    },
    controlButtonDisabled: {
      opacity: 0.4,
    },
    // Modal styles
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    modalCard: {
      width: '100%',
      maxHeight: '85%',
      borderRadius: 16,
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      padding: 16,
      paddingBottom: 8,
    },
    errorText: {
      fontSize: 18,
      color: isDark ? '#FFFFFF' : '#333333',
      textAlign: 'center',
      marginTop: 50,
    },
  });