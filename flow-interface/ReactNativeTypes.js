/* eslint-disable */
// For React Native image resource
declare type ImageSource = number;

// For key/id in ListView
declare type ReactIDKey = string | number;

// For React View's style
declare type ViewStyle = {[string]: mixed};

// From typescript
declare interface NavState {

    url?: string,
    title?: string,
    loading?: boolean,
    canGoBack?: boolean,
    canGoForward?: boolean,

    [key: string]: any
}

declare module "react-native" {
  declare module.exports: any;
}
declare module "native-base" {
  declare module.exports: any;
}
declare module "dva-core" {
  declare module.exports: any;
}
declare module "react-native-netease-im" {
  declare module.exports: any;
}

declare module "react-native-splash-screen" {
  declare module.exports: any;
}

declare module "react-native-image-crop-picker" {
  declare module.exports: any;
}

declare module "react-navigation" {
  declare module.exports: any;
}

declare module "react-redux" {
  declare module.exports: any;
}

declare module 'moment' {
  declare module.exports: any;
}
declare module "dva-loading" {
	declare module.exports: any;
}

