const commentSection = document.getElementById("commentsection");
const textBox = document.getElementById("textbox");
const submitBtn = document.getElementById("endsub");

// Load existing comments from local storage
if (localStorage.getItem("comments")) {
  commentSection.innerHTML = localStorage.getItem("comments");
}

// Add event listener to submit button
submitBtn.addEventListener("click", function() {
  const comment = textBox.value;

  // Create new comment element
  const commentElem = document.createElement("div");
  commentElem.classList.add("comment");

  // Create comment text element and add to comment element
  const commentTextElem = document.createElement("p");
  commentTextElem.textContent = comment;
  commentElem.appendChild(commentTextElem);

  // Create delete button and add to comment element
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete";
  commentElem.appendChild(deleteBtn);

  // Add comment element to comment section
  commentSection.appendChild(commentElem);

  // Save comments to local storage
  localStorage.setItem("comments", commentSection.innerHTML);

  // Clear text box after submitting comment
  textBox.value = "";

  // Add event listener to delete button
  deleteBtn.addEventListener("click", function() {
    commentElem.remove();
    // Save comments to local storage after deleting comment
    localStorage.setItem("comments", commentSection.innerHTML);
  });
});

// Add event listener to window
window.addEventListener("load", function() {
  // Add event listener to delete buttons of existing comments
  const deleteBtns = document.getElementsByClassName("deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function() {
      const commentElem = deleteBtns[i].parentNode;
      commentElem.remove();
      // Save comments to local storage after deleting comment
      localStorage.setItem("comments", commentSection.innerHTML);
    });
  }
});
