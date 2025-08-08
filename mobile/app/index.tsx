import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  Pressable,
} from 'react-native';
import { Heart, Search, Settings as SettingsIcon } from 'lucide-react-native';
import { router } from 'expo-router';
import { allHymns as hymnsData, categories } from '@/data/hymns';
import { useAppStore } from '@/store/appStore';
import * as Haptics from 'expo-haptics';




export default function HymnsScreen() {
  const systemColorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const { language, theme, favorites, toggleFavorite } = useAppStore();
  
  // Use app theme if set, otherwise fall back to system theme
  const effectiveTheme = theme || systemColorScheme || 'light';
  const styles = createStyles(effectiveTheme === 'dark');

  const filteredHymns = useMemo(() => {
    let filtered = hymnsData;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(hymn => {
        const title = language === 'amharic' ? hymn.title.amharic : hymn.title.english;
        const author = language === 'amharic' ? hymn.author.amharic : hymn.author.english;
        
        // Search in lyrics
        const lyrics = hymn.verses.map(verse => 
          language === 'amharic' ? verse.amharic : verse.english
        ).join(' ');
        
        return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               author.toLowerCase().includes(searchQuery.toLowerCase()) ||
               lyrics.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    // Filter by selected categories
    if (selectedCategory) {
      if (selectedCategory === 'Favorites') {
        // If Favorites is selected, show only favorited hymns
        filtered = filtered.filter(hymn => favorites.includes(hymn.id));
      } else {
        // Filter by the selected category
        filtered = filtered.filter(hymn => 
          hymn.tags.includes(selectedCategory)
        );
      }
    }

    return filtered;
  }, [searchQuery, selectedCategory, language, favorites]);

  const toggleCategory = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  const renderHymnCard = (hymn: any) => {
    const title = language === 'amharic' ? hymn.title.amharic : hymn.title.english;
    const author = hymn.author.english;
    const isFavorited = favorites.includes(hymn.id);

    return (
      <TouchableOpacity
        key={hymn.id}
        style={styles.hymnCard}
        onPress={async () => {
          await Haptics.selectionAsync();
          router.push(`/hymn/${hymn.id}`);
        }}
      >
        <View style={styles.hymnHeader}>
          <View style={styles.hymnInfo}>
            <Text style={styles.hymnTitle}>{hymn.id}. {title}</Text>
            <Text style={styles.hymnAuthor}>{author}</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleFavorite(hymn.id)}
            style={styles.favoriteButton}
          >
            <Heart
              size={24}
              color={isFavorited ? '#CD7F32' : '#8B7355'}
              fill={isFavorited ? '#CD7F32' : 'transparent'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tagsContainer}>
          {hymn.tags.slice(0, 2).map((tag: string) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#8B7355" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={language === 'amharic' ? 'ፈልግ...' : 'Search...'}
            placeholderTextColor="#8B7355"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={async () => {
            await Haptics.selectionAsync();
            router.push('/settings');
          }}
        >
          <SettingsIcon size={24} color="#8B7355" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContent}
        >
          {/* "All" quick filter */}
          <Pressable
            key="All"
            style={[
              styles.categoryButton,
              selectedCategory === null && styles.selectedCategoryButton,
            ]}
            onPress={async () => {
              await Haptics.selectionAsync();
              setSelectedCategory(null);
            }}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === null && styles.selectedCategoryText,
              ]}
            >
              All
            </Text>
          </Pressable>
          {categories.map((category) => (
            <Pressable
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton,
              ]}
              onPress={async () => {
                await Haptics.selectionAsync();
                toggleCategory(category);
              }}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Results meta */}
      <View style={styles.resultsMeta}>
        <Text style={styles.resultsText}>
          {filteredHymns.length} {filteredHymns.length === 1 ? 'hymn' : 'hymns'}
        </Text>
      </View>

      <ScrollView style={styles.hymnsContainer} showsVerticalScrollIndicator={false}>
        {filteredHymns.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>
              {language === 'amharic' ? 'ምንም መዝሙር አልተገኘም' : 'No hymns found'}
            </Text>
            <Text style={styles.emptySubtitle}>
              {language === 'amharic'
                ? 'የፍለጋ ቃል ወይም ምድብ ይቀይሩ እና ደግመው ይሞክሩ'
                : 'Try adjusting your search or category filter'}
            </Text>
          </View>
        ) : (
          filteredHymns.map(renderHymnCard)
        )}
        <View style={styles.bottomSpacing} />
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
      paddingBottom: 12,
      gap: 12,
    },
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      fontSize: 14,
      color: isDark ? '#FFFFFF' : '#333333',
    },
    settingsButton: {
      padding: 8,
    },
    resultsMeta: {
      paddingHorizontal: 20,
      marginBottom: 8,
    },
    resultsText: {
      fontSize: 12,
      color: isDark ? '#CCCCCC' : '#8B7355',
    },
    categoriesWrapper: {
      paddingHorizontal: 20,
      marginBottom: 20,
      height: 50,
    },
    categoriesContent: {
      paddingRight: 20,
      alignItems: 'center',
    },
    categoryButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginRight: 12,
      borderRadius: 25,
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      borderWidth: 1,
      borderColor: isDark ? '#404040' : '#E8E0D0',
      height: 40,
      justifyContent: 'center',
    },
    selectedCategoryButton: {
      backgroundColor: '#D2691E',
      borderColor: '#D2691E',
    },
    categoryText: {
      fontSize: 14,
      color: isDark ? '#FFFFFF' : '#8B7355',
      fontWeight: '500',
    },
    selectedCategoryText: {
      color: '#FFFFFF',
      fontWeight: '600',
    },
    hymnsContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    hymnCard: {
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    hymnHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    hymnInfo: {
      flex: 1,
      marginRight: 12,
    },
    hymnTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#333333',
      marginBottom: 4,
    },
    hymnAuthor: {
      fontSize: 14,
      color: '#8B7355',
    },
    favoriteButton: {
      padding: 4,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
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
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
      paddingHorizontal: 24,
    },
    emptyTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#333333',
      marginBottom: 6,
      textAlign: 'center',
    },
    emptySubtitle: {
      fontSize: 13,
      color: '#8B7355',
      textAlign: 'center',
    },
    bottomSpacing: {
      height: 20,
    },
  });