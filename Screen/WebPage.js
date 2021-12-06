import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default function WebPage(props) {
    const uri = `https://www.google.com/search?q=${props.route.params.name}`;
    return (
       
            <WebView source={{ uri: uri }} />
    )
}

const styles = StyleSheet.create({})
