let likeCount = 0;
document.getElementById("likeBtn").addEventListener("click", () => {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
});

document.getElementById("commentBtn").addEventListener("click", () => {
    const commentBox = document.getElementById("commentBox");
    const comment = commentBox.value.trim();
    if (comment) {
        const div = document.createElement("div");
        div.textContent = comment;
        document.getElementById("comments").appendChild(div);
        commentBox.value = "";
    }
});