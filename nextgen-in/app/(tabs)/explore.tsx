import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Typography } from '@/styles/typography';
import { useState } from 'react';
import { Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Gabarito-Regular': require('@/assets/fonts/Gabarito-Regular.ttf'),
    'Gabarito-Medium': require('@/assets/fonts/Gabarito-Medium.ttf'),
    'Gabarito-SemiBold': require('@/assets/fonts/Gabarito-SemiBold.ttf'),
    'Gabarito-Bold': require('@/assets/fonts/Gabarito-Bold.ttf'),
  });

  const [showSectorModal, setShowSectorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [showDataEntryModal, setShowDataEntryModal] = useState(false);
  const [showDoneModal, setShowDoneModal] = useState(false);
  
  const [dataEntryForm, setDataEntryForm] = useState({
    parameter: '',
    value: '',
    date: '',
    time: ''
  });

  const handleAddUnit = (sector: string) => {
    setShowSectorModal(false);
    setTimeout(() => setShowSuccessModal(true), 300);
    setTimeout(() => setShowSuccessModal(false), 2000);
  };

  const handleDownloadPdf = () => {
    setTimeout(() => {
      setShowPdfModal(false);
      setTimeout(() => {
        alert('PDF Downloaded');
      }, 300);
    }, 1000);
  };

  const handleDataEntry = () => {
    setShowDataEntryModal(false);
    setTimeout(() => setShowDoneModal(true), 300);
    setTimeout(() => setShowDoneModal(false), 2000);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Image
            source={require('@/assets/images/Black-Logo.png')}
            style={styles.logo}
          />
          <View style={styles.topBarRight}>
          <View style={{
            flexDirection: 'row',
            gap: 17,
            padding: 8,
          }}>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('@/assets/icons/notif-bell-blk.svg')}
                style={{
                  width: 27,
                  height: 27,
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('@/assets/icons/question-blk.svg')}
                style={{
                  width: 27,
                  height: 27,
                  resizeMode: 'contain',
                }}
              />
            </View>

          </View>

            <Image
              source={{ uri: 'https://via.placeholder.com/40' }}
              style={styles.profileImage}
            />
          </View>
        </View>
        
        <View style={styles.contentContainer}>
            <Text style={styles.statusHeading}>Good Morning, Mohammed 👋🏼</Text>

          {/* Water Health Score Calendar */}
          <View style={styles.healthScoreCard}>
            <View style={styles.healthScoreHeader}>
              <View style={styles.blueCircle}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Image
                      source={require('@/assets/icons/water-droplet.svg')}
                      style={{
                        width: 29,
                        height: 29,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
              </View>
              <View style={styles.healthScoreTextContainer}>
                <Text style={styles.healthScoreTitle}>Water Health Score</Text>
                <Text style={styles.healthScoreSubtitle}>Goal : 95% Health Score | 3 times a day</Text>
              </View>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>133 <Text style={styles.statUnit}>Days</Text></Text>
                <Text style={styles.statLabel}>Best Score</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>78% <Text style={styles.statUnit}>WHI</Text></Text>
                <Text style={styles.statLabel}>Average Score</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>+18% <Text style={styles.statUnit}>WHI</Text></Text>
                <Text style={styles.statLabel}>Aggregate Trend</Text>
              </View>
            </View>

            <View style={styles.weekCalendar}>
              {[
                { day: 'Mon', percentage: 91 },
                { day: 'Tue', percentage: 49 },
                { day: 'Wed', percentage: 97 },
                { day: 'Thu', percentage: 96 },
                { day: 'Fri', percentage: 89, date: 14 },
                { day: 'Sat', percentage: 91, date: 15 },
                { day: 'Sun', percentage: 90, date: 16 },
                { day: 'Mon', percentage: 95, date: 17 },
                { day: 'Tue', percentage: 88, date: 18 },
                { day: 'Wed', percentage: 88, date: 19 },
                { day: 'Thu', percentage: 0, date: 20 },
                { day: 'Fri', percentage: 0, date: 21 },
                { day: 'Sat', percentage: 0, date: 22 },
                { day: 'Sun', percentage: 0, date: 23 },
                { day: 'Mon', percentage: 0, date: 24 },
                { day: 'Tue', percentage: 0, date: 25 },
                { day: 'Wed', percentage: 0, date: 26 },
                { day: 'Thu', percentage: 0, date: 27 },
              ].map((item, index) => (
                <View key={index} style={styles.dayItem}>
                  <Text style={styles.dayLabel}>{item.day}</Text>
                  <View style={[
                    styles.dayCircle,
                    item.percentage === 0 && styles.dayCircleGrey,
                    item.percentage > 0 && item.percentage < 50 && styles.dayCircleYellow,
                    item.percentage >= 50 && styles.dayCircleGreen,
                  ]}>
                    {item.percentage === 0 ? (
                      <Text style={styles.dateNumber}>{item.date}</Text>
                    ) : (
                      <Text style={styles.checkIcon}>✓</Text>
                    )}
                  </View>
                  <Text style={styles.percentageLabel}>
                    {item.percentage === 0 ? '—' : `${item.percentage}%`}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    paddingHorizontal: 22,
    paddingTop: 10,
  
    // prevents stretched UI
    alignSelf: 'center',
    maxWidth: 650,
    marginTop: -30
  },
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    paddingTop: 60,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  statusWidget: {
    marginBottom: 24,
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusHeading: {
    fontSize: 22,
    fontFamily: 'Gabarito-Medium',
    letterSpacing: -0.5,
    color: '#333',
    marginBottom: 12,
  },
  infoIcon: {
    marginLeft: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIconText: {
    fontSize: 10,
  },
  statusValue: {
    fontSize: 32,
    fontFamily: 'Gabarito-Medium',
    letterSpacing: -0.7,
    color: '#000',
    marginBottom: -13
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginLeft: -6,
    gap: 6,
  },
  actionButton: {
    width: 119,
    height: 66,
    backgroundColor: '#FCFCFC',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 6,
    paddingTop: 10,
    paddingLeft: 10,
  },
  buttonIconContainer: {
    marginBottom: 4,
  },
  buttonIcon: {
    fontSize: 20,
  },
  buttonLabel: {
    fontSize: 10,
    letterSpacing: -0.3,
    fontFamily: 'Gabarito-Medium',
    color: '#333',
    marginTop: 5,
    lineHeight: 11,
  },
  recentSection: {
    marginBottom: 40,
  },
  sectionHeading: {
    fontSize: 18,
    fontFamily: 'Gabarito-Medium',
    color: '#333',
    marginBottom: 16,
    letterSpacing: -0.45
  },
  activityItem: {
    width: '100%',
    height: 51,
    backgroundColor: '#FCFCFC',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  activityTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  activityTitle: {
    fontSize: 11,
    fontFamily: 'Gabarito-Medium',
    color: '#000',
    marginBottom: 2,
  },
  activityDate: {
    fontSize: 9,
    fontFamily: 'Gabarito-Medium',
    color: '#999',
  },
  activityBadge: {
    backgroundColor: '#7CFF98',
    opacity: 0.75,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9,
    marginLeft: 12,
  },
  activityBadgeNegative: {
    backgroundColor: '#FC6363',
    opacity: 0.75
  },
  badgeText: {
    fontSize: 9,
    fontFamily: 'Gabarito-Medium',
    color: '#000',
  },
  healthScoreCard: {
    width: '100%',
    backgroundColor: '#FCFCFC',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 13,
    padding: 16,
    marginBottom: 24,
  },
  healthScoreHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  blueCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dropletIcon: {
    fontSize: 24,
  },
  healthScoreTextContainer: {
    flex: 1,
  },
  healthScoreTitle: {
    fontSize: 23,
    letterSpacing: -0.5,
    fontFamily: 'Gabarito-Medium',
    color: '#000',
    marginBottom: 2,
  },
  healthScoreSubtitle: {
    fontSize: 14,
    letterSpacing: -0.5,
    fontFamily: 'Gabarito-Medium',
    color: '#999',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  statItem: {
    alignItems: 'flex-start',
  },
  statValue: {
    fontSize: 26,
    letterSpacing: -0.5,
    fontFamily: 'Gabarito-Medium',
    color: '#000',
    marginBottom: 2,
  },
  statUnit: {
    fontSize: 17,
    letterSpacing: -0.2,
    fontFamily: 'Gabarito-Medium',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Gabarito-Medium',
    color: '#999',
  },
  weekCalendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    gap: 8,
  },
  dayItem: {
    width: `${100 / 7}%`,
    alignItems: 'center',
  },
  dayLabel: {
    fontSize: 11,
    fontFamily: 'Gabarito-Medium',
    color: '#999',
    marginBottom: 8,
  },
  dayCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  dayCircleGrey: {
    backgroundColor: '#E0E0E0',
  },
  dayCircleYellow: {
    backgroundColor: '#E5B23E',
  },
  dayCircleGreen: {
    backgroundColor: '#00D06F',
  },
  checkIcon: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  dateNumber: {
    fontSize: 18,
    fontFamily: 'Gabarito-Medium',
    color: '#000',
  },
  percentageLabel: {
    fontSize: 10,
    fontFamily: 'Gabarito-Medium',
    color: '#666',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Sector Selection Modal
  sectorModal: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  sectorModalTitle: {
    fontSize: 20,
    fontFamily: 'Gabarito-SemiBold',
    color: '#000',
    marginBottom: 20,
  },
  sectorButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectorButtonText: {
    fontSize: 16,
    fontFamily: 'Gabarito-Medium',
    color: '#fff',
  },
  cancelButton: {
    marginTop: 8,
    paddingVertical: 8,
  },
  cancelButtonText: {
    fontSize: 14,
    fontFamily: 'Gabarito-Medium',
    color: '#666',
  },

  // Success Modal
  successModal: {
    width: 260,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00D06F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  successIcon: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  successText: {
    fontSize: 18,
    fontFamily: 'Gabarito-SemiBold',
    color: '#000',
    textAlign: 'center',
  },

  // PDF Modal
  pdfModal: {
    width: '90%',
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  pdfHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  pdfTitle: {
    fontSize: 20,
    fontFamily: 'Gabarito-SemiBold',
    color: '#000',
  },
  closeButton: {
    fontSize: 28,
    color: '#666',
    fontWeight: '300',
  },
  pdfImage: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 16,
  },
  downloadButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadButtonText: {
    fontSize: 16,
    fontFamily: 'Gabarito-SemiBold',
    color: '#fff',
  },

  // Data Entry Modal
  dataEntryModal: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
  },
  dataEntryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  dataEntryTitle: {
    fontSize: 20,
    fontFamily: 'Gabarito-SemiBold',
    color: '#000',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Gabarito-Medium',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#FCFCFC',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 15,
    fontFamily: 'Gabarito-Regular',
    color: '#000',
  },
  submitButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Gabarito-SemiBold',
    color: '#fff',
  },
});