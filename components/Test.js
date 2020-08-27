import React from "react";
import { WebView } from "react-native-webview";

export default function Test({navigation}) {
  return (
    <WebView
      source={{
        html:
          `<iframe style='height:100%;width:100%;' src='https://drive.google.com/file/d/1lQMyiCPS3JNuYuuajaxTUNfQBUrFQA9a/preview'></iframe>`
      }}
    />
  );
}
