import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./route";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
    apiKey: "AIzaSyB1eGZGRFPpUdcJbLTubWF3Mpcs0Pr-q-E",
    authDomain: "my-vue-project-1-b8156.firebaseapp.com",
    projectId: "my-vue-project-1-b8156",
    storageBucket: "my-vue-project-1-b8156.appspot.com",
    messagingSenderId: "211052402886",
    appId: "1:211052402886:web:196f0b23d4f47d39731fc7",
    measurementId: "G-3CTS6BX77L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App)
    .use(analytics)
    .use(router)
    .mount("#app");


import "bootstrap/dist/js/bootstrap.js"

