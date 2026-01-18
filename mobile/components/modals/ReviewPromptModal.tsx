import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import posthog from '@/posthog/posthog';
import { requestStoreReview } from '@/utils/storeReview';

type Language = 'amharic' | 'english';

export interface ReviewPromptModalProps {
  visible: boolean;
  onClose: () => void;
  onReviewRequested: () => void;
  isDark: boolean;
  language: Language;
}

export default function ReviewPromptModal(props: ReviewPromptModalProps) {
  const { visible, onClose, onReviewRequested, isDark, language } = props;
  const styles = createStyles(isDark);

  const label = (en: string, am: string) => (language === 'amharic' ? am : en);

  const handleNotReally = async () => {
    await Haptics.selectionAsync();

    posthog.capture('review_prompt_response', {
      response: 'not_really',
      action: 'open_feedback',
    });

    // Open feedback email
    const email = 'support@mesgana.com';
    const subject = 'Mesgana App Feedback';
    const body = `Hi,\n\nI'd like to share some feedback about the Mesgana app:\n\n[Please write your feedback here]\n\nThank you!`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      await Linking.openURL(mailtoUrl);
    } catch (error) {
      // Silently fail if no email app
    }

    onClose();
  };

  const handleYes = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    posthog.capture('review_prompt_response', {
      response: 'yes',
      action: 'request_review',
    });

    onClose();
    onReviewRequested();

    // Request the native store review
    await requestStoreReview();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <Text style={styles.title}>
            {label('Enjoying Mesgana?', 'መዝጋናን እየወደዱት ነው?')}
          </Text>

          <Text style={styles.subtitle}>
            {label(
              'Your feedback helps us improve the app for everyone.',
              'አስተያየትዎ መተግበሪያውን ለሁሉም እንድናሻሽል ይረዳናል።'
            )}
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={handleNotReally}
            >
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                {label('Not Really', 'ብዙም አይደለም')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={handleYes}
            >
              <Text style={[styles.buttonText, styles.primaryButtonText]}>
                {label('Yes, I am!', 'አዎ እወደዋለው!')}
              </Text>
            </TouchableOpacity>
          </View>
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
      width: '90%',
      maxWidth: 340,
      borderRadius: 16,
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      padding: 24,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#FFFFFF' : '#333333',
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: isDark ? '#CCCCCC' : '#8B7355',
      textAlign: 'center',
      marginBottom: 24,
      lineHeight: 20,
    },
    buttonRow: {
      flexDirection: 'row',
      gap: 12,
      width: '100%',
    },
    button: {
      flex: 1,
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButton: {
      backgroundColor: '#D2691E',
    },
    secondaryButton: {
      backgroundColor: isDark ? '#404040' : '#E8E0D0',
    },
    buttonText: {
      fontSize: 14,
      fontWeight: '600',
    },
    primaryButtonText: {
      color: '#FFFFFF',
    },
    secondaryButtonText: {
      color: isDark ? '#FFFFFF' : '#333333',
    },
  });
