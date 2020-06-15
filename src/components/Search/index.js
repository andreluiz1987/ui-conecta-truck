import React, { Component } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
    state = {
        searchFocused: false
    }
    render() {
        const { onLocationSelected } = this.props;
        const { searchFocused } = this.state;
        return (
            <GooglePlacesAutocomplete
                placeholder="Para onde quer ir?"
                placeholderTextColor="#fafafa"
                onPress={onLocationSelected}
                query={{
                    key: "AIzaSyCNf8LfmEdf8eDNrmLIZn1XFBhlE9PRgbk",
                    language: "pt"
                }}
                textInputProps={{
                    autoCapitalize: "none",
                    autoCorrect: false,
                    onFocus: () => { this.setState({ searchFocused: true }) },
                    onBlur: () => { this.setState({ searchFocused: false }) }
                }}
                listViewDisplayed={searchFocused}
                fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 30, android: 20 }),
                        width: '100%'
                    },
                    textInputContainer: {
                        felx: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWifth: 0,
                        Opacity: 0.8,
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        borderRadius: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 20,
                        paddingRight: 20,
                        padding: 0,
                        marginTop: 0,
                        marginLeft: 0,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowOffset: { x: 0, y: 1 },
                        shadowRadius: 25,
                        borderWidth: 1,
                        borderRadius:15,
                        borderColor: '#DDD',
                        fontSize: 18,
                        backgroundColor: '#2f2f2f',
                        color: '#fafafa',
                    },
                    listView: {
                        borderWidth: 1,
                        borderColor: '#ddd',
                        backgroundColor: '#2f2f2f',
                        marginHorizontal: 20,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowOffset: { x: 0, y: 1 },
                        shadowRadius: 15,
                        marginTop: 10,
                        Opacity: 0.8,
                    },
                    description: {
                        fontSize: 16,
                        color: '#fafafa',
                    },
                    row: {
                        padding: 20,
                        height: 58
                    },
                }}
            />
        );
    }
}