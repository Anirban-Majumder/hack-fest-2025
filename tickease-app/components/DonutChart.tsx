import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

export default function DonutChart({ data }) {
  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        innerRadius={70}
        padAngle={2}
        labelRadius={({ innerRadius }) => (innerRadius + 35)}
        style={{
          labels: {
            fill: '#333',
            fontSize: 12,
            fontWeight: 'bold'
          },
          parent: {
            backgroundColor: '#f5f6fa'
          }
        }}
      />
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    padding: 10,
  },
  legendContainer: {
    marginTop: 20,
    backgroundColor: '#f5f6fa',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#333',
  },
});