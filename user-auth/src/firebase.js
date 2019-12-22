import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
	apiKey: "AIzaSyAX6Td2Tgujpdec9nABIfyEl_AwOEaDzrM",
	authDomain: "vueuserauthdemo.firebaseapp.com",
	databaseURL: "https://vueuserauthdemo.firebaseio.com",
	projectId: "vueuserauthdemo",
	storageBucket: "vueuserauthdemo.appspot.com",
	messagingSenderId: "69436637614",
	appId: "1:69436637614:web:ff5333f3c1732755e9083f"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
