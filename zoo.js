
/* =========================================================
   ANIMAL DATABASE
========================================================= */

const animals = [

{
name:"Lion",
category:"Animal",
scientific:"Panthera leo",
habitat:"Grasslands and savannas",
food:"Meat",
image:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
description:"The lion is a large wild cat and is known as the king of the jungle."
},

{
name:"Tiger",
category:"Animal",
scientific:"Panthera tigris",
habitat:"Forests and grasslands",
food:"Meat",
image:"https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
description:"The tiger is India's national animal and is one of the world's largest cats."
},

{
name:"Elephant",
category:"Animal",
scientific:"Elephas maximus",
habitat:"Forests and grasslands",
food:"Grass, leaves, fruits",
image:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
description:"Elephants are the largest land animals and have excellent memory."
},

{
name:"Giraffe",
category:"Animal",
scientific:"Giraffa camelopardalis",
habitat:"African savannas",
food:"Leaves",
image:"https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=800&q=80",
description:"Giraffes are the tallest land animals in the world."
},

{
name:"Zebra",
category:"Animal",
scientific:"Equus quagga",
habitat:"Grasslands",
food:"Grass",
image:"https://cdn.britannica.com/60/92760-050-ADB76B14/Plains-zebras.jpg",
description:"Zebras are famous for their unique black and white stripes."
},

{
name:"Leopard",
category:"Animal",
scientific:"Panthera pardus",
habitat:"Forests and grasslands",
food:"Meat",
image:"https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80",
description:"Leopards are powerful climbers and excellent hunters."
},

{
name:"Bear",
category:"Animal",
scientific:"Ursidae",
habitat:"Forests and mountains",
food:"Fruits, insects, plants",
image:"https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=800&q=80",
description:"Bears are large mammals with strong bodies and excellent sense of smell."
},

{
name:"Deer",
category:"Animal",
scientific:"Cervidae",
habitat:"Forests and grasslands",
food:"Grass and leaves",
image:"https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
description:"Deer are herbivorous mammals found in many forests."
},

{
name:"Monkey",
category:"Animal",
scientific:"Primates",
habitat:"Forests",
food:"Fruits, leaves, insects",
image:"https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
description:"Monkeys are intelligent animals that live mainly in forests."
},

{
name:"Hippopotamus",
category:"Animal",
scientific:"Hippopotamus amphibius",
habitat:"Rivers and lakes",
food:"Grass",
image:"https://www.dublinzoo.ie/wp-content/smush-webp/2022/01/REPRO_FREE_DZ_Hippo_01.jpg.webp",
description:"Hippos spend much of their time in water and are powerful mammals."
},

{
name:"Rhinoceros",
category:"Animal",
scientific:"Rhinocerotidae",
habitat:"Grasslands",
food:"Grass and plants",
image:"https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=800&q=80",
description:"Rhinoceroses are large herbivores known for their horns."
},

{
name:"Fox",
category:"Animal",
scientific:"Vulpes",
habitat:"Forests and grasslands",
food:"Small animals and fruits",
image:"https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=800&q=80",
description:"Foxes are intelligent and adaptable wild animals."
},

/* BIRDS */

{
name:"Peacock",
category:"Bird",
scientific:"Pavo cristatus",
habitat:"Forests and open areas",
food:"Seeds, insects, plants",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04-IMfadIG2fR9-99SeyP5dS79fzO7ZgZb-GbogfKqQ&s=10",
description:"The Indian peacock is India's national bird."
},

{
name:"Parrot",
category:"Bird",
scientific:"Psittaciformes",
habitat:"Forests",
food:"Seeds, fruits and nuts",
image:"https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
description:"Parrots are colorful and intelligent birds."
},

{
name:"Eagle",
category:"Bird",
scientific:"Accipitridae",
habitat:"Mountains and forests",
food:"Small animals",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPi5k0dTRUUV-Z78tggKuPE7CNZB85glwDLvQVR6EggR6M9PMvGKDEAJY&s=10",
description:"Eagles are powerful birds of prey with excellent eyesight."
},

{
name:"Owl",
category:"Bird",
scientific:"Strigiformes",
habitat:"Forests",
food:"Small mammals and insects",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz77Y79MesoVdUf2gt9w37YxO6WgNb8UdNadhQO2Y9vw&s=10",
description:"Owls are nocturnal birds known for their excellent night vision."
},

{
name:"Flamingo",
category:"Bird",
scientific:"Phoenicopteridae",
habitat:"Wetlands",
food:"Algae and small organisms",
image:"https://images.unsplash.com/photo-1497206365907-f5e630693df0?auto=format&fit=crop&w=800&q=80",
description:"Flamingos are famous for their pink feathers and long legs."
},

{
name:"Kingfisher",
category:"Bird",
scientific:"Alcedinidae",
habitat:"Rivers and wetlands",
food:"Fish and insects",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6ZVTbw2kYA4tfIoPqPNvSpr8S3PHfEnfsjN8LuFnPQ&s=10",
description:"Kingfishers are colorful birds commonly found near water."
},

/* REPTILES */

{
name:"Cobra",
category:"Reptile",
scientific:"Naja",
habitat:"Forests and grasslands",
food:"Rodents and frogs",
image:"https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80",
description:"Cobras are venomous snakes found in many parts of Asia."
},

{
name:"Python",
category:"Reptile",
scientific:"Pythonidae",
habitat:"Forests and wetlands",
food:"Birds and mammals",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8XMvGRsv9LY69aZJcCdYsMzKgNvqYW2Y94dKwukTmw&s=10",
description:"Pythons are large non-venomous snakes that kill prey by constriction."
},

{
name:"Crocodile",
category:"Reptile",
scientific:"Crocodylidae",
habitat:"Rivers and wetlands",
food:"Fish and animals",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJgZ0-4o_hxzr2e6c1RukSDURxmuaWvCr-mUYvZxKgg&s=10",
description:"Crocodiles are powerful aquatic reptiles."
},

{
name:"Turtle",
category:"Reptile",
scientific:"Testudines",
habitat:"Water and land",
food:"Plants and small animals",
image:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
description:"Turtles have a protective shell covering their body."
},

{
name:"Monitor Lizard",
category:"Reptile",
scientific:"Varanidae",
habitat:"Forests and dry regions",
food:"Insects and small animals",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiAfMUWRfa2B2JLlewqYLC-Vo2phw1dggktLRJGUxFw&s=10",
description:"Monitor lizards are large reptiles with strong claws and tails."
}

];


/* =========================================================
   DISPLAY ANIMALS
========================================================= */

function displayAnimals(list){

    const grid = document.getElementById("animalGrid");

    grid.innerHTML = "";

    if(list.length === 0){

        grid.innerHTML =
        "<h3 style='text-align:center'>Animal not found ❌</h3>";

        return;
    }

    list.forEach((animal,index)=>{

        grid.innerHTML += `

        <div class="animal-card"
             onclick="showAnimal(${index}, '${animal.name}')">

            <img src="${animal.image}">

            <div class="animal-info">

                <h3>${animal.name}</h3>

                <span class="category">
                    ${animal.category}
                </span>

                <p style="margin-top:10px">
                    ${animal.description}
                </p>

            </div>

        </div>

        `;

    });

}


/* =========================================================
   SHOW ANIMAL DETAILS
========================================================= */

function showAnimal(index,name){

    const animal =
    animals.find(a => a.name === name);

    if(!animal) return;

    document.getElementById("modalImage").src =
    animal.image;

    document.getElementById("modalName").innerText =
    "🦁 " + animal.name;

    document.getElementById("modalCategory").innerHTML =
    "<b>Category:</b> " + animal.category;

    document.getElementById("modalScientific").innerHTML =
    "<b>Scientific Name:</b> " + animal.scientific;

    document.getElementById("modalHabitat").innerHTML =
    "<b>Habitat:</b> " + animal.habitat;

    document.getElementById("modalFood").innerHTML =
    "<b>Food:</b> " + animal.food;

    document.getElementById("modalDescription").innerHTML =
    "<b>About:</b> " + animal.description;

    document.getElementById("animalModal").style.display =
    "flex";
}


function closeAnimal(){

    document.getElementById("animalModal").style.display =
    "none";

}


/* =========================================================
   SEARCH
========================================================= */

document.getElementById("animalSearch")
.addEventListener("input",function(){

    const value =
    this.value.toLowerCase().trim();

    const filtered =
    animals.filter(animal =>
        animal.name.toLowerCase().includes(value)
    );

    displayAnimals(filtered);

});


/* =========================================================
   FILTER
========================================================= */

function filterAnimals(category){

    if(category === "all"){

        displayAnimals(animals);

    }else{

        const filtered =
        animals.filter(animal =>
            animal.category === category
        );

        displayAnimals(filtered);

    }

}


/* =========================================================
   VOICE SEARCH
========================================================= */

function voiceSearch(){

    if(!("webkitSpeechRecognition" in window) &&
       !("SpeechRecognition" in window)){

        alert(
        "Voice search is not supported in this browser."
        );

        return;
    }

    const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

    const recognition =
    new SpeechRecognition();

    recognition.lang =
    document.getElementById("language").value === "te"
    ? "te-IN"
    : "en-IN";

    recognition.start();

    showToast("🎤 Listening...");

    recognition.onresult = function(event){

        const spoken =
        event.results[0][0].transcript;

        document.getElementById("animalSearch").value =
        spoken;

        const search =
        spoken.toLowerCase().trim();

        const result =
        animals.find(animal =>
            animal.name.toLowerCase() === search
        );

        if(result){

            showAnimal(0,result.name);

        }else{

            const filtered =
            animals.filter(animal =>
                animal.name.toLowerCase().includes(search)
            );

            displayAnimals(filtered);

            showToast(
                "Animal searched: " + spoken
            );

        }

    };

}


/* =========================================================
   LOGIN
========================================================= */

function login(){

    const username =
    document.getElementById("username").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value.trim();

    if(username === "" ||
       email === "" ||
       password === ""){

        alert(
        "Please enter name, email and password."
        );

        return;
    }

    localStorage.setItem(
        "zooUser",
        username
    );

    document.getElementById("loginOverlay")
    .style.display = "none";

    showToast(
        "Welcome " + username + " 🦁"
    );

}


/* =========================================================
   LANGUAGE
========================================================= */

function changeLanguage(){

    const language =
    document.getElementById("language").value;

    if(language === "te"){

        document.getElementById("heroTitle")
        .innerText =
        "భారతదేశ వన్యప్రాణులను అన్వేషించండి";

        document.getElementById("heroText")
        .innerText =
        "భారతదేశంలోని జంతువులు, పక్షులు మరియు సరీసృపాలను తెలుసుకోండి";

        document.getElementById("animalTitle")
        .innerText =
        "🐾 జంతువులు, పక్షులు మరియు సరీసృపాలు";

        document.getElementById("animalSearch")
        .placeholder =
        "జంతువు పేరును వెతకండి...";

    }else{

        document.getElementById("heroTitle")
        .innerText =
        "Discover India's Wildlife";

        document.getElementById("heroText")
        .innerText =
        "Explore animals, birds and reptiles from India's beautiful zoo parks.";

        document.getElementById("animalTitle")
        .innerText =
        "🐾 Animals, Birds & Reptiles";

        document.getElementById("animalSearch")
        .placeholder =
        "Search animal...";

    }

}


/* =========================================================
   BOOKING
========================================================= */

function bookTicket(){

    const name =
    document.getElementById("bookName").value;

    const email =
    document.getElementById("bookEmail").value;

    const date =
    document.getElementById("visitDate").value;

    const visitors =
    document.getElementById("visitors").value;

    const zoo =
    document.getElementById("zooSelect").value;

    if(name === "" ||
       email === "" ||
       date === ""){

        alert(
        "Please fill all required details."
        );

        return;
    }

    alert(
    "🎟️ Booking Successful!\n\n" +
    "Name: " + name +
    "\nZoo: " + zoo +
    "\nDate: " + date +
    "\nVisitors: " + visitors
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message){

    const toast =
    document.getElementById("toast");

    toast.innerText =
    message;

    toast.style.display =
    "block";

    setTimeout(()=>{

        toast.style.display =
        "none";

    },3000);

}


/* =========================================================
   PAGE LOAD
========================================================= */

window.onload = function(){

    displayAnimals(animals);

    const savedUser =
    localStorage.getItem("zooUser");

    if(savedUser){

        document.getElementById("loginOverlay")
        .style.display = "none";

    }

};
