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
        colors={['#08C289', '#05A474', '#05A474']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.logo}
          />
          <View style={styles.topBarRight}>
            <View style={styles.iconButton}>
              <Text style={styles.iconText}>🔔</Text>
            </View>
            <View style={styles.iconButton}>
              <Text style={styles.iconText}>❓</Text>
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
              <View style={styles.infoIcon}>
                <Text style={styles.infoIconText}>ℹ️</Text>
              </View>
            </View>
            <Text style={styles.statusValue}>Very Good</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonGroup}>
            <View style={styles.actionButton}>
              <View style={styles.buttonIconContainer}>
                <Text style={styles.buttonIcon}>➕</Text>
              </View>
              <Text style={styles.buttonLabel}>Add new BioTrace Unit</Text>
            </View>
            <View style={styles.actionButton}>
              <View style={styles.buttonIconContainer}>
                <Text style={styles.buttonIcon}>📥</Text>
              </View>
              <Text style={styles.buttonLabel}>Get Monthly Report</Text>
            </View>
            <View style={styles.actionButton}>
              <View style={styles.buttonIconContainer}>
                <Text style={styles.buttonIcon}>📝</Text>
              </View>
              <Text style={styles.buttonLabel}>Manual data entry</Text>
            </View>
          </View>

          {/* Recent Activities */}
          <View style={styles.recentSection}>
            <Text style={styles.sectionHeading}>Recent Activities</Text>
            
            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Greater Flamingo Population Increase</Text>
                <Text style={styles.activityDate}>Jun 24, 2025 - 22:34</Text>
              </View>
              <View style={styles.activityBadge}>
                <Text style={styles.badgeText}>📈 13.74%</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Greater Flamingo Population Increase</Text>
                <Text style={styles.activityDate}>Jun 24, 2025 - 22:34</Text>
              </View>
              <View style={styles.activityBadge}>
                <Text style={styles.badgeText}>📈 13.74%</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Greater Flamingo Population Decrease</Text>
                <Text style={styles.activityDate}>Jun 24, 2025 - 22:34</Text>
              </View>
              <View style={[styles.activityBadge, styles.activityBadgeNegative]}>
                <Text style={styles.badgeText}>📉 27.54%</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityTextContainer}>
                <Text style={styles.activityTitle}>Greater Flamingo Population Increase</Text>
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
    width: 120,
    height: 40,
    resizeMode: 'contain',
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 41,
    borderTopRightRadius: 41,
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
    fontSize: 13,
    fontFamily: 'Gabarito-Medium',
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
    color: '#000',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
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
    fontSize: 9,
    fontFamily: 'Gabarito-Medium',
    color: '#333',
    lineHeight: 11,
  },
  recentSection: {
    marginBottom: 40,
  },
  sectionHeading: {
    fontSize: 13,
    fontFamily: 'Gabarito-Medium',
    color: '#333',
    marginBottom: 16,
  },
  activityItem: {
    width: '100%',
    height: 51,
    backgroundColor: '#FCFCFC',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 6,
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
    backgroundColor: '#C8F7DC',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 12,
  },
  activityBadgeNegative: {
    backgroundColor: '#FFCACA',
  },
  badgeText: {
    ...Typography.medium,
    fontSize: 9,
    fontFamily: 'Gabarito-Medium',
    color: '#000',
  },
});