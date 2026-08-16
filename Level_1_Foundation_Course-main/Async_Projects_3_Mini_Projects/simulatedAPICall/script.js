async function fetchData(){
    const loadingText = document.getElementById("loading");
    const dataText = document.getElementById("data");

    loadingText.style.display = "block";
    dataText.textContent = "";

    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.5 ? resolve("Data Loaded Successfully") : reject();
            }, 3000);
        })
        loadingText.style.display = "none";
        dataText.textContent = response;
    } catch (error) {
        loadingText.style.display = "none";
        dataText.textContent = "Error Loading data";
    }
}