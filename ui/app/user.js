import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

const User = () => {


  const [currentDate, setCurrentDate] = useState(new Date());
  const [attendanceStatus, setAttendanceStatus] = useState("Present")

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
    <View style={{ flex: 1, backgroundColor: 'white', }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
        <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
        <Text>{formDate(currentDate)}</Text>
        <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
      </View>

      <Pressable style={{ marginVertical: 10, marginHorizontal: 12, flexDirection: "row", gap: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          {/* <View style={{ width: 50, height: 50, borderRadius: 8, backgroundColor: '#4b6cb7', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15 }}>A</Text>
              </View> */}
          {/* <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Alex Johnson</Text>
                <Text style={{ marginTop: 5, color: 'gray' }}>Developer - EMP123</Text>
              </View> */}
        </View>
      </Pressable>
      <Text style={{ fontSize: 16, fontWeight: '600', marginHorizontal: 12 }}>Basic Pay:50000</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16, marginVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '500',  letterSpacing: 3, marginTop: 7 }}>
          ATTENDANCE
        </Text>

        <Pressable style={{ backgroundColor: "#CAE0E5", padding: 10, borderRadius: 8, flexDirection: "row", alignItems: "center", gap: 10 , flex:1}}>
          {attendanceStatus === "present" ? (
            <FontAwesome5 name="dot-circle" size={24} color="black" />
          ) : (
            <Entypo name="circle" size={24} color="black" />
          )}
          <Text>Present</Text>
        </Pressable>

        <Pressable style={{ backgroundColor: "#CAE0E5", padding: 10, borderRadius: 8, flexDirection: "row", alignItems: "center", gap: 10, flex:1 }}>
          {attendanceStatus === "absent" ? (
            <FontAwesome5 name="dot-circle" size={24} color="black" />
          ) : (
            <Entypo name="circle" size={24} color="black" />
          )}
          <Text>Absent</Text>
        </Pressable>

        
      </View>

      

    </View>
  )
}

export default User

const styles = StyleSheet.create({})