import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import NavFavorites from '../components/NavFavorites'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../slices/navSlice'


const HomeScreen = () => {
    const apiKey = GOOGLE_MAPS_API_KEY
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}> 
                <Image 
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}

                    style={{
                        width: 100, height: 100, resizeMode: "contain"
                    }}
                />

                <View>
                    <GooglePlacesAutocomplete 
                        placeholder='Where From?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data.description);
                            console.log(details.geometry.location);
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            dispatch(setDestination(null))
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        enablePoweredByContainer={false} //removes powered by Google
                        query={{
                            key: apiKey,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                flex: 0, // this is necessary
                            },
                            textInput: {
                                fontSize: 18
                            }
                        }}
                    />
                </View>
                
                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})