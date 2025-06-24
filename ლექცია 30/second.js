const output = document.getElementById("output")

async function fetchproducts(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        output.textContent = JSON.stringify(data, null, 2);
    }
    catch (error) {
        console.error("Error fetching products", error)
        output.textContent = "Fialed to load products"
    }
}

async function postPost() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        output.textContent = JSON.stringify(data, null, 2);
    }
    catch (error) {
        console.error("Error fetching products", error)
        output.textContent = "Fialed to load products"
    }
}