
// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE"/>
      <div class="card-body">
        <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
        <p class="card-text">ALBUM TITLE HERE</p>
      </div>
    </div>
  </div>
*/

function validateAlbumTitle(title) {
    if (!title || title.length > 60) {
        return false;
    }
    return true;
}


function validateAlbumDescription(description) {
    if (!description || description.length > 255) {
        return false;
    }
    return true;
}


function validateAlbumArt(art) {
    if (!art) {
        return false;
    }
    return true;
}


function validateInputs(elements) {
    const title = elements["album-title"].value.trim();
    const description = elements["album-description"].value.trim();
    const art = elements["album-art"].value;

    let valid = true;

    if (!validateAlbumTitle(title)) {
        elements["album-title"].classList.add("is-invalid");
        valid = false;
    } else {
        elements["album-title"].classList.remove("is-invalid");
    }

    if (!validateAlbumDescription(description)) {
        elements["album-description"].classList.add("is-invalid");
        valid = false;
    } else {
        elements["album-description"].classList.remove("is-invalid");
    }

    if (!validateAlbumArt(art)) {
        elements["album-art"].classList.add("is-invalid");
        valid = false;
    } else {
        elements["album-art"].classList.remove("is-invalid");
    }

    return valid;
}


function addAlbumCard(title, description, art) {
    const albumList = document.getElementById("all-albums-list");
    
    
    const albumCard = document.createElement("div");
    albumCard.className = "col";
    albumCard.innerHTML = `
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" src="${art}" alt="${title} cover"/>
            <div class="card-body">
                <h5 class="card-title">${description}</h5>
                <p class="card-text">${title}</p>
            </div>
        </div>
    `;

   
    albumList.prepend(albumCard);
}


document.getElementById("album-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const elements = event.target.elements;

   
    if (validateInputs(elements)) {
       
        const title = elements["album-title"].value.trim();
        const description = elements["album-description"].value.trim();
        const art = elements["album-art"].value;

       
        addAlbumCard(title, description, art);

        event.target.reset();

        
        elements["album-title"].focus();
    }
});


const inputs = document.querySelectorAll("#album-form input, #album-form select");
inputs.forEach(input => {
    input.addEventListener("input", function() {
        input.classList.remove("is-invalid");
    });
});
