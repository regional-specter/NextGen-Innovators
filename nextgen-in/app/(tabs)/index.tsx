import { Image } from 'expo-image';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Typography } from '@/styles/typography';


export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Gabarito-Regular': require('@/assets/fonts/Gabarito-Regular.ttf'),
    'Gabarito-Medium': require('@/assets/fonts/Gabarito-Medium.ttf'),
    'Gabarito-SemiBold': require('@/assets/fonts/Gabarito-SemiBold.ttf'),
    'Gabarito-Bold': require('@/assets/fonts/Gabarito-Bold.ttf'),
  });

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

            <View style={styles.actionButton}>
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
            </View>

            <View style={styles.actionButton}>
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
            </View>

            <View style={styles.actionButton}>
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
            </View>

          </View>


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
});