# Expo Installation & Credentials

## Creating Expo account

Go to [Expo](https://expo.dev/) and create a account.

## Creating new Expo project

Go to [Expo Dashboard](https://expo.dev/) and login with your credentials

## Adjusting app.config.js

Change your application information on [Expo App Config File](../app.config.js)

## Expo Eas

 The command-line tool for Expo Application Services

### Installation

```bash
npm install -g eas-cli
# or
yarn global add eas-cli
```

### Expo Eas Credentials & Build Your Application

```bash
eas login
```

#### Check your creadetials

```bash
eas whoami
```

#### Configuring the project

```bash
eas build:configure
```

Choose the options that are suitable for you and finish. Then you see the root of project folder *eas.json* file

#### Creating first build

For Android build

```bash
eas build --platform android
```

Select yes -> Generate a new Android Keystore

## Releasing new app update

Make some changes on your code and build again

```bash
eas build --platform android
```

## Releasing new OTA app update

*eas.json* file add submit

```json
{
"submit":{
  "production":{
    "android":{
      "serviceAccountKeyPath":"YOUR KEY FILE PATH"
    }
  }
}
}

```

```bash
eas submit -p android --latest
```
