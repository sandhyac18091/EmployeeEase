import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const MarkAttendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formDate = (date) => {
    return date.toDateString();
  };

  const goToPrevDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setCurrentDate(prevDay);
  };

  const goToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
          <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
          <Text>{formDate(currentDate)}</Text>
          <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
        </View>

        <View style={{ marginHorizontal: 12, marginTop: 30 }}>
          <Pressable style={{flexDirection:'row',alignItems:'center',gap:10}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <View style={{ width: 50, height: 50, borderRadius: 8, backgroundColor: '#4b6cb7', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15 }}>A</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Alex Johnson</Text>
                <Text style={{ marginTop: 5, color: 'gray' }}>Developer - EMP123</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default MarkAttendance;

const styles = StyleSheet.create({});
