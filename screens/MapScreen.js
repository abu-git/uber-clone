import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'


const MapScreen = () => {
    const Stack = createNativeStackNavigator()
    const navigation = useNavigation()

    return (
        <View style={tw`h-full m-0`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={tw`bg-gray-100 absolute w-12 top-14 left-8 z-50 p-3 rounded-full shadow-lg`}>
                    <Icon name='menu' />
                </TouchableOpacity>
    

            <View style={tw`h-2/5`}>
                <Map />
            </View>

            <View style={tw`h-3/5`}>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen 
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})