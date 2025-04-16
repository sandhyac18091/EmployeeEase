import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';


export default function Index() {
  const router=useRouter()
  return (
    <ScrollView>
      <LinearGradient colors={['#BE93C5', '#E9E4F8']} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
            <AntDesign name="barschart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Employee Management System</Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
        </View>

        <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
      }}
    >
      
      <Pressable onPress={() => router.push('/employee')}
        style={{
          backgroundColor: '#D3CCE3',
          padding: 12,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            width: 58,
            height: 58,
            borderRadius: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="people-sharp" size={24} color="black" />
        </View>
        <Text style={{ marginTop: 7, fontWeight: "600" }}>Employee List</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/app/markattendance')}
        style={{
          backgroundColor: '#D3CCE3',
          padding: 12,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            width: 58,
            height: 58,
            borderRadius: 25,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="people-sharp" size={24} color="black" />
        </View>
        <Text style={{ marginTop: 7, fontWeight: "600" }}>Mark Attendance</Text>
      </Pressable>
    </View>

        <View style={{ marginTop: 20, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 7 }}>
          <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center' }} onPress={() => router.push('/viewemployee')}>
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Ionicons name="newspaper-outline" size={24} color="black" />
            </View>
            <Text style={{ margin: 10, fontSize: 16, fontWeight: '600', flex: 1 }}>View Employee</Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>

          <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Octicons name="repo-pull" size={24} color="black" />
            </View>
            <Text style={{ margin: 10, fontSize: 16, fontWeight: '600', flex: 1 }}>Summery Report</Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>

          <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Octicons name="report" size={24} color="black" />
            </View>
            <Text style={{ margin: 10, fontSize: 16, fontWeight: '600', flex: 1 }}>All Generate Report</Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>

          <Pressable style={{ backgroundColor: '#BE93C5', borderRadius: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <View
              style={{
                padding: 7,
                width: 45,
                height: 45,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Ionicons name="people" size={24} color="black" />
            </View>
            <Text style={{ margin: 10, fontSize: 16, fontWeight: '600', flex: 1 }}>Overtime Employee</Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 7,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </Pressable>

        </View>

        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ backgroundColor: '#f79D00', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center', flex: 1, height: 120 }}>
            <View style={{ width: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
          </View>

          <View style={{ backgroundColor: '#ABCABA', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center', flex: 1, height: 120 }}>
            <View style={{ width: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name="barchart" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7 }}>Increase Workflow</Text>
          </View>
        </View>

        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ backgroundColor: '#D3CCE3', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center', flex: 1, height: 120 }}>
            <View style={{ width: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7 }}>Cost Savings</Text>
          </View>

          <View style={{ backgroundColor: '#bdc3c7', borderRadius: 6, padding: 12, alignItems: 'center', justifyContent: 'center', flex: 1, height: 120 }}>
            <View style={{ width: 35, borderRadius: 7, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name="barchart" size={24} color="black" />
            </View>
            <Text style={{ marginTop: 7 }}>Employee Performance</Text>
          </View>
        </View>


      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
