# Firebase Installation & Credentials

Go to [Firebase Console](http://console.firebase.google.com/) and create a Project.

## Enabling Firebase Authentication

In the Project in Firebase click on Authentication in the Sidebar. Enable
Authentication.

### Email/Password

Click on `Email/Password` in the Authentication tab and Enable It.

## Enabling Firestore Database

In the Project in Firebase click on Firestore Database in the Sidebar. Click on Enable
Firestore. Start in Test Mode and leave the Timezone as it is.

## Enabling Firebase Storage

In the Project in Firebase click on Storage in the Sidebar. Click on Enable.
(Sometimes Storage is automatically Enabled)

## Providing required Credentials

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
