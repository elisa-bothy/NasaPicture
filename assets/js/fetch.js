const today1 = new Date();
let year = today1.getFullYear();
let month = (today1.getMonth()+1);
let day = today1.getDate();

function twoDigit(n) {
    if(n<10)
        return '0'+n;
    else 
        return n;
}

month=twoDigit(month);
day=twoDigit(day);

const today = year + "-" + month + "-" + day;
const input = document.getElementById("date");
input.max = today;
input.value = today;
const input2 = document.getElementById("submit");
input2.addEventListener("click", fonctionResponse);
const datechoose = today;


function fonctionResponse(){
    const datechoose1 = new Date(input.value);
    let year2 = datechoose1.getFullYear();
    let month2 = (datechoose1.getMonth()+1);
    let day2 = datechoose1.getDate();
    month2=twoDigit(month2);
    day2=twoDigit(day2);
    const datechoose = year2 + "-" + month2 + "-" + day2;
    console.log(datechoose);
    const uri = "https://api.nasa.gov/planetary/apod?api_key=79Nr41pzNDhCwyeNkiOw2mIDcJSi2scyEPAmkcav&date="+datechoose;
    fetch(uri)
        .then(resp => {
            if (resp.ok){
                return resp.json();
            }
            else{
                throw new Error("Données non collectées");
            }
        })
        .then(obj => {
            if(obj.media_type==="image"){
                const choix = datechoose;
                const img = document.querySelector("img");
                const urlImg = obj.url;
                img.alt = "Image du jour de la Nasa : " + obj.date;
                img.src = urlImg;
                const legend = document.querySelector("legend");
                legend.textContent = obj.title;
                const p = document.querySelector("p");
                p.textContent = obj.explanation
            }
            else{
                const legend = document.querySelector("legend");
                legend.textContent = "La nasa n'a pas envoyée une image aujourd'hui" + obj.title;
                const p = document.querySelector("p");
                p.textContent = obj.explanation
            }
        })
        .catch(err => {
            console.error(err);
        })
}


