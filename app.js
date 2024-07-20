
const playerImages = {
    "Dwayne Bacon": "Images/DB-BBALL.jpeg",
    "Aaron Gordon": "Images/AG-BBALL.avif",
    "Nikola Vucevic": "Images/Nikola-Vucevic-BBALL.png",
    "Evan Fournier": "Images/Evan-Fournier-BBALL.webp",
    "Markelle Fultz": "Images/Markelle-Fultz-BBALL.avif",
    "Al-Farouq Aminu": "Images/Al-Farouq-Aminu-BBALL.avif",
    "Cole Anthony": "Images/Cole-Anthony-BBALL.avif",
    "Mo Bamba":  "Images/Mo-Bamba-BBALL.jpeg",
    "Khem Birch": "Images/Khem-Birch-BBALL.avif",
    "Jordan Bone": "Images/Jordan-Bone-BBALL.jpeg",
    "Devin Cannady": "Images/Devin-Cannady-BBALL.jpeg",
    "Michael Carter-Williams": "Images/Michael-Carter-Williams-BBALL.png",
    "Gary Clark": "Images/Gary-Clark-BBALL.avif",
    "James Ennis III": "Images/James-Ennis-III-BBALL.jpeg",
    "Robert Franks": "Images/Robert-Franks-BBALL.png",
    "Jonathan Isaac": "Images/Jonathan-Isaac-BBALL.avif",
    "Karim Mane": "Images/Karim-Mane-BBALL.jpeg",
    "Chuma Okeke": "Images/Chuma-Okeke-BBALL.avif",
    "Terrence Ross": "Images/Terrence-Ross-BBALL.avif",
    "Jon Teske": "Images/Jon-Teske-BBALL.jpeg",
    "De'Andre Hunter": "Images/De'Andre-Hunter-BBALL.webp",
    "John Collins": "Images/John-Collins-BBALL.png",
    "Clint Capela": "Images/Clint-Capela-BBALL.webp",
    "Trae Young": "Images/Trae-Young-BBALL.jpeg",
    "Kris Dunn": "Images/Kris-Dunn-BBALL.avif",
    "Bogdan Bogdanovic": "Images/Bogdan-Bogdanovic-BBALL.webp",
    "Bruno Fernando": "Images/Bruno-Fernando-BBALL.webp",
    "brandon goodwin": "Images/Mo-Bamba-BBALL.jpeg",
    "Solomon Hill": "Images/Mo-Bamba-BBALL.jpeg",
    "Kevin Huerter": "Images/Mo-Bamba-BBALL.jpeg",
    "Nathan Knight": "Images/Mo-Bamba-BBALL.jpeg",
    "Skylar Mays": "Images/Mo-Bamba-BBALL.jpeg",
    "Onyeka Okongwu": "Images/Mo-Bamba-BBALL.jpeg",
    "Cam Reddish": "Images/Cam-Reddish-BBALL.webp",
    "Rajon Rondo": "Images/Rajon-Rondo-BBALL.webp",
    "Tony Snell": "Images/Tony-Snell-BBALL.avif",
    "Danilo Gallinari": "Images/Danilo-Gallinari-BBALL.jpeg",
    "Brandon Goodwin": "Images/brandon-goodwin-BBALL.webp",
    "Brandon Goodwin": "Images/brandon-goodwin-BBALL.webp",

    // Add more player image mappings here
  };

  const playerVideos ={
    "Dwayne Bacon": "/Videos/Dwayne-BACON-Highlights-Season-2022-2023-Panathinaikos-BC.mp4",
    "Aaron Gordon": "/Videos/",
    "Nikola Vucevic": "Images/Nikola-Vucevic-BBALL.png",
    "Evan Fournier": "Images/Evan-Fournier-BBALL.webp",
    "Markelle Fultz": "Images/Markelle-Fultz-BBALL.avif",
    "Al-Farouq Aminu": "Images/Al-Farouq-Aminu-BBALL.avif",
    "Cole Anthony": "Images/Cole-Anthony-BBALL.avif",
    "Mo Bamba":  "Images/Mo-Bamba-BBALL.jpeg",
    "Khem Birch": "Images/Khem-Birch-BBALL.avif",
    "Jordan Bone": "Images/Jordan-Bone-BBALL.jpeg",
    "Devin Cannady": "Images/Devin-Cannady-BBALL.jpeg",
    "Michael Carter-Williams": "Images/Michael-Carter-Williams-BBALL.png",
    "Gary Clark": "Images/Gary-Clark-BBALL.avif",
    "James Ennis III": "Images/James-Ennis-III-BBALL.jpeg",
    "Robert Franks": "Images/Robert-Franks-BBALL.png",
    "Jonathan Isaac": "Images/Jonathan-Isaac-BBALL.avif",
    "Karim Mane": "Images/Karim-Mane-BBALL.jpeg",
    "Chuma Okeke": "Images/Chuma-Okeke-BBALL.avif",
    "Terrence Ross": "Images/Terrence-Ross-BBALL.avif",
    "Jon Teske": "Images/Jon-Teske-BBALL.jpeg",
  }

const url = "https://api-nba-v1.p.rapidapi.com/players/statistics?game=8133";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": config.bballApiKey,
    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
  },
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(data) {
  const statsContainer = document.getElementById("stats-container");
  // const carousel = document.getElementsByClassName("carousel");
  statsContainer.innerHTML = "";


  
  data.response.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "cards";

    const firstName = player.player.firstname ?? "N/A";
    const lastName = player.player.lastname ?? "N/A";
    const fullName = `${firstName} ${lastName}`;
    const teamName = player.team.name ?? "N/A";
    const teamLogo = player.team.logo ?? "";
    const points = player.points ?? "N/A";
    const assists = player.assists ?? "N/A";
    const rebounds = player.totReb ?? "N/A";
    const minutes = player.min ?? "N/A";

    const playerImage = playerImages[fullName] || "path/to/default-image.jpg"; // Default image if not found

    const videoUrl = playerVideos[fullName]|| ""; // Default image if not found



    card.innerHTML = `

      <div class="content">
      <div class="front" data-video-url="${videoUrl}">
                    <img src="${playerImage}" alt="${firstName} ${lastName}">
                    <video class="player-video" controls style="display: none;">
                        <source src="${videoUrl}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
        <div class="back">
          <h2>${firstName} ${lastName}</h2>
          <p>Team: ${teamName}</p>
          <p>Points: ${points}</p>
          <p>Assists: ${assists}</p>
          <p>Rebounds: ${rebounds}</p>
          <p>Minutes: ${minutes}</p>
        </div>
      </div>
    `;
    statsContainer.appendChild(card);
  });



card.innerHTML = `
<div class="back-pop">
          <h2>${firstName} ${lastName}</h2>
          <p>Team: ${teamName}</p>
          <p>Points: ${points}</p>
          <p>Assists: ${assists}</p>
          <p>Rebounds: ${rebounds}</p>
          <p>Minutes: ${minutes}</p>
        </div>
      </div>
    `;
    statsContainer.appendChild(card);





  
const playerImagesTwo = document.querySelectorAll('.front');
playerImagesTwo.forEach(img => {
    img.addEventListener('click', function() {
        const video = this.querySelector('.player-video');
        const imgElement = this.querySelector('img')

        if (video && imgElement ){
          if (video.style.display === 'none'){
          video.style.display= 'block'
          imgElement.style.display= 'none'
          video.play()
        }
        else {
          video.style.display = 'none'
          imgElement.style.display= 'block'
          video.pause()
        }
    }});
});
}



// Function to filter and display players based on search query
function searchPlayers(query) {
const searchQuery = query.toLowerCase();
const cards = document.querySelectorAll('.cards');
cards.forEach(card => {
    const playerName = card.querySelector('.back h2').textContent.toLowerCase();
    if (playerName.includes(searchQuery)) {
        card.style.display = "block"; // Show the card
    } else {
        card.style.display = "none"; // Hide the card
    }
});
}




     


function handleSearch(event){
  event.preventDefault()
  const textInput = document.getElementById('search-box').value
  searchPlayers(textInput)
 
}

function openNav(){



  document.getElementById("mobile-nav").style.width = "250px"

}
function closeNav(){



  document.getElementById("mobile-nav").style.width = "0px"

}


document.getElementById('search-form').addEventListener('submit', handleSearch)


document.querySelector('#search-form button').addEventListener('click', handleSearch)



document.addEventListener("DOMContentLoaded", function () {
  fetchData();
});









   
