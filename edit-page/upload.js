const form = document.querySelector("#new-art");

async function upload() {
    let img = document.getElementById("image").files[0];
    db.collection("images").add({
        src: await toBase64(img),
        title: form.title.value,
        description: form.description.value,
        likes: 0
    })
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

db.collection("images").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == "added") {
            let art = document.createElement("img")
            art.src = change.doc.data().src
            document.body.appendChild(art)
        } else if (change.type == "removed") {
            let li = houseList.querySelector("[data-id=" + change.doc.id + "]");
            houseList.removeChild(li);
        }
    })
})