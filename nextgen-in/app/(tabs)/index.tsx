import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Typography } from '@/styles/typography';
import { useState } from 'react';

import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


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

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showParameterPicker, setShowParameterPicker] = useState(false);
  
  const [dataEntryForm, setDataEntryForm] = useState({
    parameter: '',
    value: '',
    date: '',
    time: ''
  });

  const parameters = [
    'pH Level',
    'Temperature',
    'Dissolved Oxygen',
    'Turbidity',
    'Salinity',
    'Conductivity',
    'Ammonia Level',
    'Nitrate Level'
  ];

  const handleAddUnit = (sector: string) => {
    setShowSectorModal(false);
    setTimeout(() => setShowSuccessModal(true), 300);
    setTimeout(() => setShowSuccessModal(false), 2000);
  };

  const handleDownloadPdf = () => {
    setTimeout(() => {
      setShowPdfModal(false);
      setTimeout(() => {
        // Show download success message
        alert('PDF Downloaded');
      }, 300);
    }, 1000);
  };

  // Update the handleDataEntry function
  const handleDataEntry = () => {
    setShowDataEntryModal(false);
    setShowDatePicker(false);  // Close date picker
    setShowTimePicker(false);  // Close time picker
    setShowParameterPicker(false);  // Close parameter picker
    // Reset form
    setDataEntryForm({
      parameter: '',
      value: '',
      date: '',
      time: ''
    });
    setTimeout(() => setShowDoneModal(true), 300);
    setTimeout(() => setShowDoneModal(false), 2000);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2D74F8', '#074DCF', '#074DCF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Image
            source={require('@/assets/images/splash-logo.png')}
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
                source={require('@/assets/icons/notif-bell.svg')}
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
                source={require('@/assets/icons/question.svg')}
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

        {/* White Content Box */}
        <ScrollView style={styles.whiteBox} showsVerticalScrollIndicator={false}>
          {/* Ecosystem Status Widget */}
          <View style={styles.statusWidget}>
            <View style={styles.statusHeader}>
              <Text style={styles.statusHeading}>Ecosystem Real-time Status</Text>
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Image
                    source={require('@/assets/icons/info.svg')}
                    style={{
                      width: 15,
                      height: 15,
                      marginLeft: 6,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
            </View>
            <Text style={styles.statusValue}>Very Good</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => setShowSectorModal(true)}
              activeOpacity={0.7}
            >
              <View style={styles.buttonIconContainer}>
                <Image
                  source={require('@/assets/icons/add.svg')}
                  style={{
                    width: 23,
                    height: 23,
                    marginTop: 5,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={styles.buttonLabel}>Add new BioTrace Unit</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => setShowPdfModal(true)}
              activeOpacity={0.7}
            >
              <View style={styles.buttonIconContainer}>
                <Image
                  source={require('@/assets/icons/import-download.svg')}
                  style={{
                    width: 23,
                    height: 23,
                    marginTop: 5,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={styles.buttonLabel}>Get Monthly Report</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => setShowDataEntryModal(true)}
              activeOpacity={0.7}
            >
              <View style={styles.buttonIconContainer}>
                <Image
                  source={require('@/assets/icons/folder-add.svg')}
                  style={{
                    width: 23,
                    height: 23,
                    marginTop: 5,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={styles.buttonLabel}>Manual data entry</Text>
            </TouchableOpacity>
          </View>

          {/* Sector Selection Modal */}
          <Modal
            visible={showSectorModal}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setShowSectorModal(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.sectorModal}>
                <Text style={styles.sectorModalTitle}>Select Sector</Text>
                <TouchableOpacity 
                  style={styles.sectorButton}
                  onPress={() => handleAddUnit('Sector A')}
                >
                  <Text style={styles.sectorButtonText}>Sector A</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.sectorButton}
                  onPress={() => handleAddUnit('Sector B')}
                >
                  <Text style={styles.sectorButtonText}>Sector B</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.sectorButton}
                  onPress={() => handleAddUnit('Sector C')}
                >
                  <Text style={styles.sectorButtonText}>Sector C</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={() => setShowSectorModal(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Success Modal */}
          <Modal
            visible={showSuccessModal}
            transparent={true}
            animationType="fade"
          >
            <View style={styles.modalOverlay}>
              <View style={styles.successModal}>
                <View style={styles.successIconContainer}>
                  <Text style={styles.successIcon}>✓</Text>
                </View>
                <Text style={styles.successText}>New BioTrace Unit added</Text>
              </View>
            </View>
          </Modal>

          {/* PDF Modal */}
          <Modal
            visible={showPdfModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setShowPdfModal(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.pdfModal}>
                <View style={styles.pdfHeader}>
                  <Text style={styles.pdfTitle}>Monthly Report</Text>
                  <TouchableOpacity onPress={() => setShowPdfModal(false)}>
                    <Text style={styles.closeButton}>✕</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={require('@/assets/report/monthly-report.png')}
                  style={styles.pdfImage}
                  contentFit="contain"
                />
                <TouchableOpacity 
                  style={styles.downloadButton}
                  onPress={handleDownloadPdf}
                >
                  <Text style={styles.downloadButtonText}>Download PDF</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Data Entry Modal */}
          <Modal
            visible={showDataEntryModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setShowDataEntryModal(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.dataEntryModal}>
                <View style={styles.dataEntryHeader}>
                  <Text style={styles.dataEntryTitle}>Manual Data Entry</Text>
                  <TouchableOpacity onPress={() => setShowDataEntryModal(false)}>
                    <Text style={styles.closeButton}>✕</Text>
                  </TouchableOpacity>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                  {/* Parameter Dropdown */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Parameter</Text>
                    <TouchableOpacity 
                      style={styles.input}
                      onPress={() => setShowParameterPicker(!showParameterPicker)}
                    >
                      <Text style={[
                        styles.inputText,
                        !dataEntryForm.parameter && styles.placeholderText
                      ]}>
                        {dataEntryForm.parameter || 'Select parameter'}
                      </Text>
                      <Text style={styles.dropdownIcon}>▼</Text>
                    </TouchableOpacity>
                    
                    {showParameterPicker && (
                      <View style={styles.pickerContainer}>
                        <ScrollView style={styles.pickerScroll}>
                          {parameters.map((param, index) => (
                            <TouchableOpacity
                              key={index}
                              style={styles.pickerItem}
                              onPress={() => {
                                setDataEntryForm({...dataEntryForm, parameter: param});
                                setShowParameterPicker(false);
                              }}
                            >
                              <Text style={styles.pickerItemText}>{param}</Text>
                            </TouchableOpacity>
                          ))}
                        </ScrollView>
                      </View>
                    )}
                  </View>

                  {/* Value Input */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Value</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter value"
                      placeholderTextColor="#999"
                      value={dataEntryForm.value}
                      onChangeText={(text) => setDataEntryForm({...dataEntryForm, value: text})}
                      keyboardType="decimal-pad"
                    />
                  </View>

                  {/* Date Picker */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Date</Text>
                    <TouchableOpacity 
                      style={styles.input}
                      onPress={() => setShowDatePicker(true)}
                    >
                      <Text style={[
                        styles.inputText,
                        !dataEntryForm.date && styles.placeholderText
                      ]}>
                        {dataEntryForm.date || 'Select date'}
                      </Text>
                      <Text style={styles.calendarIcon}>📅</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Time Picker */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Time</Text>
                    <TouchableOpacity 
                      style={styles.input}
                      onPress={() => setShowTimePicker(true)}
                    >
                      <Text style={[
                        styles.inputText,
                        !dataEntryForm.time && styles.placeholderText
                      ]}>
                        {dataEntryForm.time || 'Select time'}
                      </Text>
                      <Text style={styles.clockIcon}>🕐</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={handleDataEntry}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </Modal>

          {/* Date Picker - OUTSIDE the modal */}
          {showDatePicker && (
            <Modal
              transparent={true}
              animationType="fade"
              visible={showDatePicker}
              onRequestClose={() => setShowDatePicker(false)}
            >
              <View style={styles.dateTimePickerOverlay}>
                <View style={styles.dateTimePickerContainer}>
                  <View style={styles.dateTimePickerHeader}>
                    <Text style={styles.dateTimePickerTitle}>Select Date</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(false)}>
                      <Text style={styles.dateTimePickerDone}>Done</Text>
                    </TouchableOpacity>
                  </View>
                  <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="spinner"
                    onChange={(event, date) => {
                      if (date) {
                        setSelectedDate(date);
                        setDataEntryForm({...dataEntryForm, date: formatDate(date)});
                      }
                    }}
                    textColor="#000"
                  />
                </View>
              </View>
            </Modal>
          )}

          {/* Time Picker - OUTSIDE the modal */}
          {showTimePicker && (
            <Modal
              transparent={true}
              animationType="fade"
              visible={showTimePicker}
              onRequestClose={() => setShowTimePicker(false)}
            >
              <View style={styles.dateTimePickerOverlay}>
                <View style={styles.dateTimePickerContainer}>
                  <View style={styles.dateTimePickerHeader}>
                    <Text style={styles.dateTimePickerTitle}>Select Time</Text>
                    <TouchableOpacity onPress={() => setShowTimePicker(false)}>
                      <Text style={styles.dateTimePickerDone}>Done</Text>
                    </TouchableOpacity>
                  </View>
                  <DateTimePicker
                    value={selectedTime}
                    mode="time"
                    display="spinner"
                    onChange={(event, time) => {
                      if (time) {
                        setSelectedTime(time);
                        setDataEntryForm({...dataEntryForm, time: formatTime(time)});
                      }
                    }}
                    textColor="#000"
                  />
                </View>
              </View>
            </Modal>
          )}

          {/* Done Modal */}
          <Modal
            visible={showDoneModal}
            transparent={true}
            animationType="fade"
          >
            <View style={styles.modalOverlay}>
              <View style={styles.successModal}>
                <View style={styles.successIconContainer}>
                  <Text style={styles.successIcon}>✓</Text>
                </View>
                <Text style={styles.successText}>Data Entry Complete</Text>
              </View>
            </View>
          </Modal>


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
                { day: 'Fri', percentage: 0, date: 14 },
                { day: 'Sat', percentage: 0, date: 15 },
                { day: 'Sun', percentage: 0, date: 16 },
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

          {/* Recent Activities */}
          <View style={styles.recentSection}>
            <Text style={styles.sectionHeading}>Recent Activities</Text>
            
            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Dissolved Oxygen Increase by 14%</Text>
                <Text style={styles.activityDate}>Jun 24, 2025 - 22:34</Text>
              </View>
              <View style={styles.activityBadge}>
                <Text style={styles.badgeText}>📈 13.74%</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Water Turbidity levels Increase</Text>
                <Text style={styles.activityDate}>Jun 24, 2025 - 22:34</Text>
              </View>
              <View style={styles.activityBadge}>
                <Text style={styles.badgeText}>📈 13.74%</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Water pH Levels Decrease below stable</Text>
                <Text style={styles.activityDate}>Jun 24, 2025 - 22:34</Text>
              </View>
              <View style={[styles.activityBadge, styles.activityBadgeNegative]}>
                <Text style={styles.badgeText}>📉 27.54%</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Water Salinity Increase</Text>
                <Text style={styles.activityDate}>Jun 24, 2025 - 22:34</Text>
              </View>
              <View style={styles.activityBadge}>
                <Text style={styles.badgeText}>📈 13.74%</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignSelf: 'center', // centers it without extra spacing
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
    fontSize: 15,
    fontFamily: 'Gabarito-Medium',
    letterSpacing: -0.5,
    color: '#333',
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
    ...Typography.medium,
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
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    gap: 8,
  },
  dayItem: {
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
    flexDirection: 'row',  // Add this
    alignItems: 'center',  // Add this
    justifyContent: 'space-between',  // Add this
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
  inputText: {
    fontSize: 15,
    fontFamily: 'Gabarito-Regular',
    color: '#000',
    flex: 1,
  },
  placeholderText: {
    color: '#999',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#666',
  },
  calendarIcon: {
    fontSize: 18,
  },
  clockIcon: {
    fontSize: 18,
  },
  pickerContainer: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 8,
    maxHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pickerScroll: {
    maxHeight: 200,
  },
  pickerItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  pickerItemText: {
    fontSize: 15,
    fontFamily: 'Gabarito-Regular',
    color: '#000',
  },
  dateTimePickerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  dateTimePickerContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 20,
  },
  dateTimePickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
  },
  dateTimePickerTitle: {
    fontSize: 18,
    fontFamily: 'Gabarito-SemiBold',
    color: '#000',
  },
  dateTimePickerDone: {
    fontSize: 16,
    fontFamily: 'Gabarito-SemiBold',
    color: '#4A90E2',
  },
});