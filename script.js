let citycelect=document.querySelector("#city");
let searchbtn=document.querySelector("#search");
let cityimg=document.querySelector("#display");
let cityname=document.querySelector("#cityname");
let countryspan = document.querySelector("#country");
let populationspan = document.querySelector("#population");
let language = document.querySelector("#language");
let climate =document.querySelector("#climate");
let famous= document.querySelector("#famous-landmarks");
let description = document.querySelector("#description");

const citiesdata ={
    EGYPT:{
        name:"Cairo",
        country:"Egypt",
        population:"22.5 million",
        language:"Arabic",
        climate:"Hot Desert (Hot summers, mild winters, with very little rainfall throughout the year)",
        famous:"Khan el-Khalili: A historic, vibrant bazaar in the Islamic Cairo district. ",
        description:"The historic capital of Egypt and the largest city in the Arab world. Situated along the Nile River, Cairo is world-famous for its ancient landmarks like the Pyramids of Giza, its bustling traditional markets, and its deep cultural heritage.",
        image:"cairo.jpg"
    },
    USA:{
        name:"Washington",
        country:"USA",
        population:"5.4 million",
        language:"English",
        climate:"Humid Subtropical (Hot, humid summers and cool to cold winters with occasional snowfall)",
        famous:"The White House: Official residence and workplace of the US President.",
        description:"The political heart of the United States. It serves as the nation's capital and hosts iconic political hubs like the White House and the U.S. Capitol, along with famous monuments and free world-class Smithsonian museums.",
        image:"washington.jpg"
    },
    ENGLAND:{
        name:"London",
        country:"England",
        population:"9.0 million",
        language:"English",
        climate:"Temperate Maritime (Mild temperatures year-round, cool winters, warm summers, and frequent light rain/cloud cover)",
        famous:"Big Ben & The Houses of Parliament: The iconic clock tower and seat of the UK government.",
        description:"The historic capital of the United Kingdom and a global powerhouse for finance, arts, and fashion. London blends centuries of history—represented by landmarks like Big Ben and the Tower of London—with a highly diverse, modern culture.",
        image:"london.jpg"
    },
    JAPAN:{
        name:"Tokyo",
        country:"Japan",
        population:"14.0 million",
        language:"Japanese",
        climate:"Humid Subtropical (Warm, wet summers with occasional typhoons and chilly, sunny winters)",
        famous:"Shibuya Crossing: The famous, heavily trafficked pedestrian scramble.",
        description:"The bustling capital of Japan and the world's most populous metropolitan region. Tokyo offers a unique contrast between cutting-edge technology, futuristic skyscrapers, high-speed transit networks, and centuries-old Shinto shrines and Buddhist temples",
        image:"tokyo.jpg"
    },
    FRANCE:{
        name:"Paris",
        country:"France",
        population:"11.2 million",
        language:"French",
        climate:"Ocean/Temperate Maritime (Mild summers, cool winters, with moderate rainfall evenly distributed throughout the year)",
        famous:"Eiffel Tower: The world-famous iron lattice tower and symbol of France.",
        description:"The romantic capital of France and a global center for art, fashion, gastronomy, and culture. Situated along the Seine River, Paris is renowned for its elegant architecture, iconic landmarks like the Eiffel Tower and the Louvre Museum, and rich historical heritage.",
        image:"paris.jpg"
    },
    KSA:{
        name:"Riyadh",
        country:"Saudi Arabia",
        population:"7.6 million",
        language:"Arabic",
        climate:" Hot Desert (Extremely hot, dry summers and mild, brief winters with very minimal precipitation)",
        famous:"Kingdom Centre Tower: Modern landmark featuring a sky bridge overlooking the city.",
        description:"The fast-growing capital of Saudi Arabia and its main financial and cultural hub. Situated on the Najd plateau, Riyadh seamlessly combines traditional Arabian heritage with modern mega-projects, sleek skyscrapers, and vibrant commercial centers.",
        image:"ryad.jpg"
    },
    RUSSIA:{
        name:"Moscow",
        country:"Russia",
        population:"17 million",
        language:"Russian",
        climate:"Humid Continental (Warm, humid summers and long, cold, snowy winters)",
        famous:"Saint Basil's Cathedral: Famous cathedral known for its colorful, onion-shaped domes.",
        description:"The historic capital of Russia and the largest city entirely on the European continent. Located on the Moskva River, Moscow is famous for its striking architecture, featuring historic landmarks such as the Kremlin, Red Square, and the colorful Saint Basil's Cathedral.",
        image:"moscco.jpg"
    },
    GERMAN:{
        name:"Berlin",
        country:"German",
        population:"6.1 million",
        language:"German",
        climate:"Oceanic / Temperate Continental (Warm, pleasant summers and cool to cold winters with occasional snowfall)",
        famous:"Reichstag Building: Historic parliament building featuring a modern glass dome.",
        description:"The capital of Germany, celebrated for its rich history, vibrant arts scene, and dynamic nightlife. Berlin is famous for its iconic landmarks like the Brandenburg Gate, the historic Berlin Wall, and its world-class museums.",
        image:"berlin.jpg"
    },
    CHINA:{
        name:"Beijing",
        country:"China",
        population:"21.8 million",
        language:"Mandarin Chinese",
        climate:"Humid Continental / Monsoon-influenced (Hot, humid summers and cold, dry, windy winters)",
        famous:"The Forbidden City: Massive imperial palace complex from the Ming and Qing dynasties.",
        description:"The massive capital of China, serving as the country's political, cultural, and educational center. Beijing seamlessly fuses modern architecture and bustling infrastructure with ancient imperial history, hosting landmarks such as the Forbidden City, the Summer Palace, and access to the Great Wall.",
        image:"beijing.jpg"
    },
    ARGENTINA:{
        name:"Buenos Aires",
        country:"Argentina",
        population:"15.3 million",
        language:"Spanish",
        climate:"Humid Subtropical (Warm, humid summers and mild, cool winters with moderate rainfall throughout the year)",
        famous:"The Obelisco: Iconic national historic monument in the heart of the city.",
        description:"The bustling capital of Argentina, often referred to as the (Paris of South America) due to its European-style architecture and rich cultural heritage. It is world-renowned for tango music and dance, vibrant colorful neighborhoods like La Boca, and incredible food.",
        image:"buenos aires.jpg"
    },
    ITALY:{
        name:"Rome",
        country:"Italy",
        population:"4.3 million ",
        language:"Italian",
        climate:"Mediterranean (Hot, dry summers and mild, rainy winters)",
        famous:"The Pantheon: Former Roman temple turned church, featuring a massive unreinforced concrete dome.",
        description:"The historic capital of Italy, often called the Eternal City. Rich in nearly three millennia of globally influential art, architecture, and culture, Rome is world-famous for ancient monuments like the Colosseum and Roman Forum, as well as being home to Vatican City.",
        image:"rome.jpg"
    },
    SPAIN:{
        name:"Madrid",
        country:" Spain",
        population:"6.7 million ",
        language:"Spanish",
        climate:"Mediterranean / Semi-Arid (Hot, dry summers and cool, crisp winters)",
        famous:"Plaza Mayor: Central public space in Madrid known for its historic architecture.",
        description:"The energetic capital of Spain, located right in the center of the Iberian Peninsula. Known for its elegant boulevards, expansive parks like El Retiro, prestigious art institutions such as the Prado Museum, and lively culinary culture.",
        image:"madrid.jpg"
    },
    CANADA:{
        name:"Ottawa",
        country:"Canada",
        population:"1.4 million ",
        language:"English and French (Bilingual)",
        climate:"Humid Continental (Warm, humid summers and long, cold, snowy winters)",
        famous:"Rideau Canal: UNESCO World Heritage waterway that turns into a massive ice-skating rink in winter.",
        description:"The picturesque capital of Canada, located in the province of Ontario along the Ottawa River. Known for its high quality of life, green spaces, and grand Victorian architecture—highlighted by Parliament Hill and the famous Rideau Canal.",
        image:"ottawa.jpg"
    }
};

searchbtn.addEventListener("click", ()=>{
    const selectedcity = citycelect.value;
    if (selectedcity==="EGYPT"){
       cityname.textContent=citiesdata.EGYPT.name;
       countryspan.textContent=`Contry: ${citiesdata.EGYPT.country}`;
       populationspan.textContent=`Population: ${citiesdata.EGYPT.population}`;
       language.textContent=`Language: ${citiesdata.EGYPT.language}`;
       climate.textContent=`Climate: ${citiesdata.EGYPT.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.EGYPT.famous}`;
       description.textContent=`Description: ${citiesdata.EGYPT.description}`;
       cityimg.src=citiesdata.EGYPT.image;
        document.body.style.backgroundColor="#386a9c";
        document.body.style.color="#ffff";
    }else if(selectedcity==="ENGLAND"){
       cityname.textContent=citiesdata.ENGLAND.name;
       countryspan.textContent=`Contry: ${citiesdata.ENGLAND.country}`;
       populationspan.textContent=`population: ${citiesdata.ENGLAND.population}`;
       language.textContent=`Language: ${citiesdata.ENGLAND.language}`;
       climate.textContent=`Climate: ${citiesdata.ENGLAND.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.ENGLAND.famous}`;
       description.textContent=`Description: ${citiesdata.ENGLAND.description}`;
       cityimg.src=citiesdata.ENGLAND.image;
        document.body.style.backgroundColor="#3B0A12";
        document.body.style.color="#ebe3d2";
    }else if(selectedcity==="JAPAN"){
       cityname.textContent=citiesdata.JAPAN.name;
       countryspan.textContent=`Country: ${citiesdata.JAPAN.country}`;
       populationspan.textContent=`Population: ${citiesdata.JAPAN.population}`;
       language.textContent=`Language: ${citiesdata.JAPAN.language}`;
       climate.textContent=`Climate: ${citiesdata.JAPAN.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.JAPAN.famous}`;
       description.textContent=`Description: ${citiesdata.JAPAN.description}`;
       cityimg.src=citiesdata.JAPAN.image;
        document.body.style.backgroundColor="#808b96";
        document.body.style.color="black"
    }else if(selectedcity==="USA"){
        cityname.textContent=citiesdata.USA.name;
       countryspan.textContent=`Country: ${citiesdata.USA.country}`;
       populationspan.textContent=`Population: ${citiesdata.USA.population}`;
       language.textContent=`Language: ${citiesdata.USA.language}`;
       climate.textContent=`Climate: ${citiesdata.USA.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.USA.famous}`;
       description.textContent=`Description: ${citiesdata.USA.description}`;
       cityimg.src=citiesdata.USA.image;
        document.body.style.backgroundColor="#7E1902";
        document.body.style.color="#e6d7b9";
    }else if(selectedcity==="FRANCE"){
        cityname.textContent=citiesdata.FRANCE.name;
       countryspan.textContent=`Country: ${citiesdata.FRANCE.country}`;
       populationspan.textContent=`Population: ${citiesdata.FRANCE.population}`;
       language.textContent=`Language: ${citiesdata.FRANCE.language}`;
       climate.textContent=`Climate: ${citiesdata.FRANCE.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.FRANCE.famous}`;
       description.textContent=`Description: ${citiesdata.FRANCE.description}`;
       cityimg.src=citiesdata.FRANCE.image;
        document.body.style.backgroundColor="#86311e80";
        document.body.style.color="#2b416c";
    }else if(selectedcity==="KSA"){
        cityname.textContent=citiesdata.KSA.name;
       countryspan.textContent=`Country: ${citiesdata.KSA.country}`;
       populationspan.textContent=`Population: ${citiesdata.KSA.population}`;
       language.textContent=`Language: ${citiesdata.KSA.language}`;
       climate.textContent=`Climate: ${citiesdata.KSA.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.KSA.famous}`;
       description.textContent=`Description: ${citiesdata.KSA.description}`;
       cityimg.src=citiesdata.KSA.image;
        document.body.style.backgroundColor="#030821cb";
        document.body.style.color="#f1e8d4";
    }else if(selectedcity==="RUSSIA"){
        cityname.textContent=citiesdata.RUSSIA.name;
       countryspan.textContent=`Country: ${citiesdata.RUSSIA.country}`;
       populationspan.textContent=`Population: ${citiesdata.RUSSIA.population}`;
       language.textContent=`Language: ${citiesdata.RUSSIA.language}`;
       climate.textContent=`Climate: ${citiesdata.RUSSIA.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.RUSSIA.famous}`;
       description.textContent=`Description: ${citiesdata.RUSSIA.description}`;
       cityimg.src=citiesdata.RUSSIA.image;
        document.body.style.backgroundColor="#acc5cb";
        document.body.style.color="#362604";
    }else if(selectedcity==="GERMAN"){
        cityname.textContent=citiesdata.GERMAN.name;
       countryspan.textContent=`Country: ${citiesdata.GERMAN.country}`;
       populationspan.textContent=`Population: ${citiesdata.GERMAN.population}`;
       language.textContent=`Language: ${citiesdata.GERMAN.language}`;
       climate.textContent=`Climate: ${citiesdata.GERMAN.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.GERMAN.famous}`;
       description.textContent=`Description: ${citiesdata.GERMAN.description}`;
       cityimg.src=citiesdata.GERMAN.image;
        document.body.style.backgroundColor="#bc7777d4";
        document.body.style.color="#104c81";
    }else if(selectedcity==="CHINA"){
        cityname.textContent=citiesdata.CHINA.name;
       countryspan.textContent=`Country: ${citiesdata.CHINA.country}`;
       populationspan.textContent=`Population: ${citiesdata.CHINA.population}`;
       language.textContent=`Language: ${citiesdata.CHINA.language}`;
       climate.textContent=`Climate: ${citiesdata.CHINA.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.CHINA.famous}`;
       description.textContent=`Description: ${citiesdata.CHINA.description}`;
       cityimg.src=citiesdata.CHINA.image;
        document.body.style.backgroundColor="#7a1b00";
        document.body.style.color="#f6e1b5";
    }else if(selectedcity==="ARGENTINA"){
        cityname.textContent=citiesdata.ARGENTINA.name;
       countryspan.textContent=`Country: ${citiesdata.ARGENTINA.country}`;
       populationspan.textContent=`Population: ${citiesdata.ARGENTINA.population}`;
       language.textContent=`Language: ${citiesdata.ARGENTINA.language}`;
       climate.textContent=`Climate: ${citiesdata.ARGENTINA.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.ARGENTINA.famous}`;
       description.textContent=`Description: ${citiesdata.ARGENTINA.description}`;
       cityimg.src=citiesdata.ARGENTINA.image;
        document.body.style.backgroundColor="#b7e4ef";
        document.body.style.color="#090332";
    }else if(selectedcity==="ITALY"){
        cityname.textContent=citiesdata.ITALY.name;
       countryspan.textContent=`Country: ${citiesdata.ITALY.country}`;
       populationspan.textContent=`Population: ${citiesdata.ITALY.population}`;
       language.textContent=`Language: ${citiesdata.ITALY.language}`;
       climate.textContent=`Climate: ${citiesdata.ITALY.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.ITALY.famous}`;
       description.textContent=`Description: ${citiesdata.ITALY.description}`;
       cityimg.src=citiesdata.ITALY.image;
        document.body.style.backgroundColor="#432901";
        document.body.style.color="#dbcaa5";
    }else if(selectedcity==="SPAIN"){
        cityname.textContent=citiesdata.SPAIN.name;
       countryspan.textContent=`Country: ${citiesdata.SPAIN.country}`;
       populationspan.textContent=`Population: ${citiesdata.SPAIN.population}`;
       language.textContent=`Language: ${citiesdata.SPAIN.language}`;
       climate.textContent=`Climate: ${citiesdata.SPAIN.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.SPAIN.famous}`;
       description.textContent=`Description: ${citiesdata.SPAIN.description}`;
       cityimg.src=citiesdata.SPAIN.image;
        document.body.style.backgroundColor="#030b38";
        document.body.style.color="#f6dda2";
    }else if(selectedcity==="CANADA"){
        cityname.textContent=citiesdata.CANADA.name;
       countryspan.textContent=`Country: ${citiesdata.CANADA.country}`;
       populationspan.textContent=`Population: ${citiesdata.CANADA.population}`;
       language.textContent=`Language: ${citiesdata.CANADA.language}`;
       climate.textContent=`Climate: ${citiesdata.CANADA.climate}`;
       famous.textContent=`Famous Landmark: ${citiesdata.CANADA.famous}`;
       description.textContent=`Description: ${citiesdata.CANADA.description}`;
       cityimg.src=citiesdata.CANADA.image;
        document.body.style.backgroundColor="#054504";
        document.body.style.color="#ffe7b2";
    }                           
}
);