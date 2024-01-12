const uri = "https://api.nasa.gov/planetary/apod?api_key=79Nr41pzNDhCwyeNkiOw2mIDcJSi2scyEPAmkcav "
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
            const img = document.querySelector("img");
            const urlImg = obj.hdurl;
            img.alt = "Image du jour de la Nasa : " + obj.date;
            img.src = urlImg;
        })
        .catch(err => {
            console.error(err);
        })