const today1 = new Date();
const today = today1.getFullYear()+ "-" + (today1.getMonth()+1) + "-" + today1.getDate();
const input = document.getElementById("date");
input.max = today;
input.value =today;
const input2 = document.getElementById("submit");
input2.addEventListener("click", fonctionResponse);
const datechoose = today;


function fonctionResponse(){
    const datechoose1 = new Date(document.getElementById('date').value);
    const datechoose = datechoose1.getFullYear()+ "-" + (datechoose1.getMonth()+1) + "-" + datechoose1.getDate();
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
                const legend = "La nasa n'a pas envoyée une image aujourd'hui"+ document.querySelector("legend");
                legend.textContent = obj.title;
                const p = document.querySelector("p");
                p.textContent = obj.explanation
            }
        })
        .catch(err => {
            console.error(err);
        })
}


