

//takes results of star wars API and loops over the results to give us planet names! uses two requests! first one to the api and the second the the next property the first api result gives
async function planets(){
    const response=await axios.get('https://swapi.dev/api/planets/');
    console.log(response);
    const{next, results}=response.data;
    console.log(next);
    for (let planet of results){ //can use results here instead of data.results because we destructured it from response.data above
        console.log(planet.name, planet.rotation_period,planet.orbital_period,planet.diameter,planet.climate)
    }
    // for(let tiddies of response.data.results){
    //     console.log(tiddies.name, tiddies.rotation_period,tiddies.orbital_period,tiddies.diameter,tiddies.climate)
    // }
    const secondResponse=await axios.get(next);
    console.log(secondResponse);
    const results2=secondResponse.data.results;
    console.log(results2);
    for(let planet of results2){
        console.log(planet.name, planet.rotation_period,planet.orbital_period,planet.diameter,planet.climate)
    }
    const thirdResponse=await axios.get(secondResponse.data.next)
    console.log(thirdResponse)
    const results3=thirdResponse.data.results
    console.log(results3)
    for(let planet of results3){
        console.log(planet.name, planet.rotation_period,planet.orbital_period,planet.diameter,planet.climate)
    }
}
//     console.log(secondResponse.data.results)
//     const results2=secondResponse.data.results
//     for(let planet of results2){
//         console.log(planet.name)
//     }

// }

async function getLaunches(){
    const res=await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    const ul= document.querySelector('#launches');
    for (let launch of res.data){
        const newLi=document.createElement('LI');
        const mission=document.createElement('B');
        mission.innerText=launch.mission_name;
        newLi.append(mission);
        newLi.innerHTML += `- ${launch.rocket.rocket_name}`
        ul.append(newLi)
    }
}

async function getRandomDogge(){
    const dogResult=await axios.get("https://dog.ceo/api/breeds/image/random")
    console.log(dogResult)
    dogDiv=document.getElementById('dogDiv')
    console.log(dogDiv)
   dogImage= document.createElement('img')
   dogImage.src=dogResult.data.message;
   console.log(dogImage)
   dogDiv.append(dogImage)
   
}

async function getRandomCat(){
    const catResult=await axios.get(' https://api.thecatapi.com/v1/images/search')
    console.log(catResult)
    catDiv=document.getElementById('catDiv')
    catImage=document.createElement('img')
    catImage.src=catResult.data[0].url;
    console.log(catImage)
    catDiv.append(catImage)

}

async function getDogByBreed(breed){
    const url=`https://dog.ceo/api/breed/${breed}/images/random`
    const dogBreedResult=await axios.get(url)   
    dogDiv=document.getElementById('dogDiv')
    console.log(dogDiv)
    dogImage= document.createElement('img')
    dogImage.src=dogBreedResult.data.message;
    console.log(dogImage)
    dogDiv.append(dogImage)
}   

const randomDogButton=document.getElementById('random')
const randomCatButton=document.getElementById('cat')


randomDogButton.addEventListener('click',getRandomDogge)
randomCatButton.addEventListener('click',getRandomCat)
