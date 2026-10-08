import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const profile = {
  name: 'Sudeesha Ravisara',
  email: 'sudeesharavisara2@gmail.com',
  image: require('./assets/profile.jpeg'),
};

export default function App() {
  // Points start at zero.
  const [points, setPoints] = useState(0);

  // Add one point whenever the + button is pressed.
  const addPoint = () => {
    setPoints((previousPoints) => previousPoints + 1);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        {/* Header */}
        <View style={styles.header}>
          <Text accessibilityRole="header" style={styles.title}>
            My Profile
          </Text>
        </View>

        <View style={styles.body}>
          <ScrollView contentContainerStyle={styles.content}>
            {/* Profile photo */}
            <View style={styles.photoSection}>
              <View style={styles.photoFrame}>
                <Image
                  source={profile.image}
                  style={styles.photo}
                  resizeMode="cover"
                  accessibilityLabel="Profile photo"
                />

                <View style={styles.badge} accessible={false}>
                  <Ionicons
                    name="checkmark"
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Name */}
            <View style={styles.field}>
              <Text style={styles.label}>Name</Text>
              <Text selectable style={styles.value}>
                {profile.name}
              </Text>
            </View>

            {/* Email */}
            <View style={styles.field}>
              <Text style={styles.label}>Email</Text>

              <View style={styles.row}>
                <Ionicons
                  name="mail"
                  size={20}
                  color="#111111"
                />
                <Text selectable style={styles.rowValue}>
                  {profile.email}
                </Text>
              </View>
            </View>

            {/* Points */}
            <View style={styles.field}>
              <Text style={styles.label}>Points</Text>

              <View style={styles.row}>
                <Ionicons
                  name="star"
                  size={20}
                  color="#111111"
                />
                <Text
                  testID="points-value"
                  accessibilityLiveRegion="polite"
                  style={styles.rowValue}
                >
                  {points}
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Floating + button */}
          <Pressable
            testID="add-point-button"
            accessibilityRole="button"
            accessibilityLabel="Add one point"
            onPress={addPoint}
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons name="add" size={28} color="#FFFFFF" />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  header: {
    minHeight: 56,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  body: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  photoSection: {
    alignItems: 'center',
    paddingTop: 22,
    paddingBottom: 20,
  },

  photoFrame: {
    width: 128,
    height: 128,
    borderRadius: 64,
    padding: 7,
    backgroundColor: '#FFFFFF',
  },

  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 57,
  },

  badge: {
    position: 'absolute',
    right: 3,
    bottom: 9,
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#222222',
    marginBottom: 18,
  },

  field: {
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 7,
  },

  value: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowValue: {
    flex: 1,
    marginLeft: 9,
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },

  addButton: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000000',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
});