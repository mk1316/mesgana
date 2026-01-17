import React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { usePostHog } from 'posthog-react-native';
import type { Hymn } from '@/data/hymns';

type Language = 'amharic' | 'english';
type ContentLanguage = 'amharic' | 'english';

export interface HymnPickerModalProps {
  visible: boolean;
  onClose: () => void;
  hymns: Hymn[];
  currentId: string;
  language: Language; // for UI strings
  contentLanguage: ContentLanguage; // for title rendering
  isDark: boolean;
  onSelect: (id: string) => void;
}

export default function HymnPickerModal(props: HymnPickerModalProps) {
  const {
    visible,
    onClose,
    hymns,
    currentId,
    language,
    contentLanguage,
    isDark,
    onSelect,
  } = props;

  const posthog = usePostHog();
  const styles = createStyles(isDark);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, styles.modalTitleCentered]}>
              {language === 'amharic' ? 'መዝሙር ምረጥ' : 'Select Hymn'}
            </Text>
          </View>

          <ScrollView style={styles.modalList} contentContainerStyle={{ paddingBottom: 0 }} showsVerticalScrollIndicator={false}>
            {hymns.map((hymn) => {
              const displayTitle =
                hymn.title[contentLanguage] ||
                (contentLanguage === 'amharic' ? hymn.title.english : hymn.title.amharic);
              const isActive = hymn.id === currentId;
              return (
                <TouchableOpacity
                  key={hymn.id}
                  style={[styles.modalItem, isActive && styles.modalItemActive]}
                  onPress={async () => {
                    await Haptics.selectionAsync();
                    onClose();
                    if (!isActive) {
                      posthog.capture('hymn_picker_selected', {
                        selected_hymn_id: hymn.id,
                        previous_hymn_id: currentId,
                        hymn_title: displayTitle,
                        total_hymns_in_picker: hymns.length,
                      });
                      onSelect(hymn.id);
                    }
                  }}
                >
                  <Text style={styles.modalItemText}>
                    {hymn.id}. {displayTitle}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity style={styles.modalClose} onPress={onClose}>
            <Text style={styles.modalCloseText}>{language === 'amharic' ? 'ዝጋ' : 'Close'}</Text>
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
      width: '100%',
      maxHeight: '85%',
      borderRadius: 16,
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      padding: 16,
      paddingBottom: 8,
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
    modalList: {
      flexGrow: 1,
      minHeight: 0,
    },
    modalItem: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginBottom: 6,
      backgroundColor: isDark ? '#1F1F1F' : '#F7F4EC',
    },
    modalItemActive: {
      backgroundColor: '#D2691E',
    },
    modalItemText: {
      fontSize: 16,
      color: isDark ? '#FFFFFF' : '#333333',
    },
    modalClose: {
      marginTop: 10,
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


