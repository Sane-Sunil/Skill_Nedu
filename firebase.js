<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDPiMdcL73OuFpaWSQRuIXzfJ71DBG7AVc",
    authDomain: "skillnedu.firebaseapp.com",
    projectId: "skillnedu",
    storageBucket: "skillnedu.appspot.com",
    messagingSenderId: "727341102887",
    appId: "1:727341102887:web:583cef04d76c5c19665b02",
    measurementId: "G-4Z5VVVPJC3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>


<script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js"></script>
