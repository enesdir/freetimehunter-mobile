<div align="center">
  <a href="https://github.com/codenuru/freetimehunter-mobile" target="_blank">
    <h1>
      Free Time Hunter
    </h1>
  </a>
  <blockquote>
    A fun game like to-do application for built with swipe cards effect. Made with Expo & React Native & Firebase.
  </blockquote>
  <div>
    <img src="https://img.shields.io/github/repo-size/codenuru/freetimehunter-mobile?color=4000FF" alt="repo-size" />
    <img src="https://img.shields.io/github/issues-raw/codenuru/freetimehunter-mobile?color=4000FF" alt="issues" />
    <img src="https://img.shields.io/badge/license-MIT-4000FF" alt="license" />

  </div>
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [💻 Technologies](#-technologies)
- [🚀 Features](#-features)
- [🏢 Project structure](#-project-structure)
- [🔑 Getting started](#-getting-started)
  - [Requirements](#requirements)
  - [For Installing the dependencies you can run](#for-installing-the-dependencies-you-can-run)
  - [Getting Firebase Credentials](#getting-firebase-credentials)
    - [Providing required Credentials](#providing-required-credentials)
  - [For running it on your phone, make sure you've installed Expo Go](#for-running-it-on-your-phone-make-sure-youve-installed-expo-go)
- [📝 License](#-license)

## 💻 Technologies

Technologies that I used to develop this mobile application

- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Firebase](https://firebase.google.com/docs)
- [React Native Dotenv](https://github.com/goatandsheep/react-native-dotenv)

## 🚀 Features

- Support to detect internet connection, unmount the app, and display a connection failure screen.
- Support to detect the user's appearance mode (Dark or light mode).
- Support to detect the device language, if the app doesn't support translations for your language, English is the default. (Available languages: EN and TR).

## 🏢 Project structure

```
$PROJECT_ROOT
├── App.tsx        # Entry point
└── src
    ├── assets     # Media such as image & font files
    ├── components # UI components
    ├── hooks      # React hooks for interacting with services or UI functionality
    ├── navigation # React Navigation
    ├── providers  # React context
    ├── screens    # Screen components
    ├── services   # Useful services/methods
    ├── styles     # UI theme definitions
    ├── types      # TypeScript type definitions
    └── utils      # Reusable utility (pure) functions
```

## 🔑 Getting started

### Requirements

- [NodeJs](https://nodejs.org/en/)
- [Expo](https://docs.expo.dev/) installed
- [Expo Go](https://expo.dev/client) or [Android Studio](https://developer.android.com/studio) installed

**Clone the project and access the folder**

```bash
git clone git@github.com:codenuru/freetimehunter-mobile.git && cd freetimehunter-mobile
```

### For Installing the dependencies you can run

```bash
 yarn
```

### Getting Firebase Credentials

see the [FIREBASE Documentation](docs/FIREBASE) file for details.

#### Providing required Credentials

- create a **_.env_** file on the project root as same as the **_.env.example_** file
- fill the  **_.env_** with **your** project credentials

```bash
# FIREBASE

API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
MEANSUREMENT_ID=
```

### For running it on your phone, make sure you've installed Expo Go

```bash
yarn start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

![Made by CODENURU](https://img.shields.io/badge/FREE%20TIME%20HUNTER-Made%20by%20CODENURU-blue?style=for-the-badge)

</div>
