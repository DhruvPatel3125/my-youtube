export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const firebaseConfig = {
    apiKey: "AIzaSyCjzWpufCY7Ue2hrZ926E9slRtc1w7wa80",
    authDomain: "fir-fe4a8.firebaseapp.com",
    projectId: "fir-fe4a8",
    storageBucket: "fir-fe4a8.firebasestorage.app",
    messagingSenderId: "548094243562",
    appId: "1:548094243562:web:c9de2fec0043a42e301d93",
    measurementId: "G-SET6W4NKR1"
  };