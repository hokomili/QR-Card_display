const cards = JSON.parse(localStorage.getItem('cards')) || []
const userid= localStorage.getItem('userid')||localStorage.setItem('userid',Math.floor(Math.random()*100000).toString())
const firebaseConfig = {
    apiKey: "AIzaSyDPxDHFnuB42LP4ZIpX5Zny0Gh4Lmg3BmA",
    authDomain: "creeper-house.firebaseapp.com",
    projectId: "creeper-house",
    storageBucket: "creeper-house.appspot.com",
    messagingSenderId: "1008163332703",
    appId: "1:1008163332703:web:159d572987eb7c5d9171ea"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence()
.catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});
const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");
const allOrdersCollectionRef = firebase.firestore().collection("allOrders");
const allUsersCollectionRef = firebase.firestore().collection("allUsers");
const getProductById = async (productId,category) => {
    // REFERENCE PRODUCTS COLLECTION
    const doc = await productsDocRef.collection(category).doc(productId).get();
    return doc.data()
}
firebase.firestore().collection("cards").doc(userid).set({name:"wow1"})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
cardsget=false;
cards.forEach(element => {
    if(element=="4sRt0EZ5GUqSuVU9Jjjt"){
        cardsget=true;
    }
});
if(!cardsget){
    cards.push("4sRt0EZ5GUqSuVU9Jjjt");
}
localStorage.setItem('cards', JSON.stringify(cards))
async function checkdata(){
    return await firebase.firestore().collection("cards").doc(userid).get();
}
console.log(checkdata().then(()=>{window.location.href ="./index.html"}));