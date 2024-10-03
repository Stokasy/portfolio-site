function switchGeneral(){
    const actProButton = document.getElementById("actProButton");
    const actArtButton = document.getElementById("actArtButton");
    const nonGenButton = document.getElementById("nonGenButton");

    if(actProButton != null){
        actProButton.id = "nonProButton"
    }
    if(actArtButton != null){
        actArtButton.id = "nonArtButton"
    }
    if(nonGenButton != null){
        nonGenButton.id = "actGenButton";
    }

    const genPosts = document.getElementById("genPosts")
    genPosts.style.display = "block"

    const proPosts = document.getElementById("proPosts")
    const artPosts = document.getElementById("artPosts")
    proPosts.style.display = "none"
    artPosts.style.display = "none"
}
function switchProgramming(){
    const actGenButton = document.getElementById("actGenButton");
    const actArtButton = document.getElementById("actArtButton");
    const nonProButton = document.getElementById("nonProButton");

    if(actGenButton != null){
        actGenButton.id = "nonGenButton"
    }
    if(actArtButton != null){
        actArtButton.id = "nonArtButton"
    }
    if(nonProButton != null){
        nonProButton.id = "actProButton";
    }

    const proPosts = document.getElementById("proPosts")
    proPosts.style.display = "block"

    const genPosts = document.getElementById("genPosts")
    const artPosts = document.getElementById("artPosts")
    genPosts.style.display = "none"
    artPosts.style.display = "none"
}
function switchArt(){
    const actProButton = document.getElementById("actProButton");
    const actGenButton = document.getElementById("actGenButton");
    const nonArtButton = document.getElementById("nonArtButton");

    if(actProButton != null){
        actProButton.id = "nonProButton"
    }
    if(actGenButton != null){
        actGenButton.id = "nonGenButton"
    }
    if(nonArtButton != null){
        nonArtButton.id = "actArtButton";
    }

    const artPosts = document.getElementById("artPosts")
    artPosts.style.display = "block"

    const genPosts = document.getElementById("genPosts")
    const proPosts = document.getElementById("proPosts")
    genPosts.style.display = "none"
    proPosts.style.display = "none"
}