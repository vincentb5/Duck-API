async function getduck() {
    try {
        const url = "https://random-d.uk/api/v2/random";
        const grab = await fetch(url)
        const picture = await grab.json();
        console.log(picture);


        const duckHolder = document.getElementById("duckHolder");
        duckHolder.src = picture.url
       
        duckHolder.width = 500;
        duckHolder.height = 500;

    } catch (error) {
        console.log(error);
    }
}