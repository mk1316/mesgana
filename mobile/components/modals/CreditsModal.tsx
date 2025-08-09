import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import type { Hymn } from '@/data/hymns';

type Language = 'amharic' | 'english';

export interface CreditsModalProps {
  visible: boolean;
  onClose: () => void;
  hymn: Hymn;
  isDark: boolean;
  language: Language; // for labels
}

export default function CreditsModal(props: CreditsModalProps) {
  const { visible, onClose, hymn, isDark, language } = props;
  const styles = createStyles(isDark);

  const label = (en: string, am: string) => (language === 'amharic' ? am : en);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, styles.modalTitleCentered]}>
              {label('Credits', 'መረጃ')}
            </Text>
          </View>

          <View style={styles.contentArea}>
            <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 0 }} showsVerticalScrollIndicator={false}>
              <View style={styles.row}>
                <Text style={styles.label}>{label('Hymn', 'መዝሙር')}</Text>
                <Text style={styles.value}>#{hymn.id}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>{label('Title (English)', 'ርዕስ (እንግሊዝኛ)')}</Text>
                <Text style={styles.value}>{hymn.title.english}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>{label('Title (Amharic)', 'ርዕስ (አማርኛ)')}</Text>
                <Text style={styles.value}>{hymn.title.amharic}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>{label('Author', 'ደራሲ')}</Text>
                <Text style={styles.value}>{hymn.author[language]}</Text>
              </View>

              {hymn.tags?.length > 0 && (
                <View style={styles.tagsSection}>
                  <Text style={styles.label}>{label('Tags', 'ምልክቶች')}</Text>
                  <View style={styles.tagsRow}>
                    {hymn.tags.map((t) => (
                      <View key={t} style={styles.tagChip}>
                        <Text style={styles.tagText}>{t}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </ScrollView>
          </View>

          <TouchableOpacity
            style={styles.modalClose}
            onPress={async () => {
              await Haptics.selectionAsync();
              onClose();
            }}
          >
            <Text style={styles.modalCloseText}>{label('Close', 'ዝጋ')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    modalCard: {
      width: '94%',
      maxWidth: 380,
      aspectRatio: 1,
      borderRadius: 16,
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      padding: 16,
    },
    modalHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#FFFFFF' : '#333333',
    },
    modalTitleCentered: {
      textAlign: 'center',
      width: '100%',
    },
    contentArea: {
      flex: 1,
      minHeight: 0,
    },
    scrollArea: {
      flex: 1,
      minHeight: 0,
    },
    row: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: 4,
      marginBottom: 12,
    },
    label: {
      color: isDark ? '#CCCCCC' : '#8B7355',
      fontSize: 12,
      fontWeight: '700',
      marginBottom: 2,
    },
    value: {
      color: isDark ? '#FFFFFF' : '#333333',
      fontSize: 14,
      fontWeight: '500',
      textAlign: 'left',
      width: '100%',
    },
    tagsSection: {
      marginTop: 6,
      marginBottom: 8,
    },
    tagsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 8,
    },
    tagChip: {
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 6,
      backgroundColor: isDark ? '#1F1F1F' : '#F7F4EC',
    },
    tagText: {
      color: isDark ? '#FFFFFF' : '#333333',
      fontSize: 12,
      fontWeight: '500',
    },
    modalClose: {
      marginTop: 12,
      alignSelf: 'center',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
      backgroundColor: isDark ? '#404040' : '#E8E0D0',
    },
    modalCloseText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#333333',
    },
  });


