import { Redirect } from 'expo-router';
import * as React from 'react';

export default function Index() {
  return <Redirect href="/test-suite" />;
}
import React from 'react';

import {

  View,

  Text,

  StyleSheet,

  TouchableOpacity,

  ScrollView,

} from 'react-native';

export default function Index() {

  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>I FABBRICANTI D’ORO</Text>

        <Text style={styles.subtitle}>Gioielleria • Laboratorio</Text>

      </View>

      <View style={styles.hero}>

        <Text style={styles.title}>