document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and DOM fully constructed');
});



// Project Toggle Script
function toggleProject(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}




function toggleDescription() {
    const description = document.getElementById("ptp-description");
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}






// Toggle Emoji Picker
function toggleEmojiPicker() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.classList.toggle('hidden');
}

// Add selected emoji to the feedback
function addEmoji(emoji) {
    const feedbackField = document.getElementById('feedback');
    feedbackField.value += emoji;
}

// Preview Feedback
function previewFeedback() {
    const feedback = document.getElementById('feedback').value;
    const previewContainer = document.getElementById('feedback-preview');
    previewContainer.innerHTML = feedback || "No feedback to preview.";
    previewContainer.classList.remove('hidden');
}

// Validate Feedback Form
function validateFeedbackForm() {
    const feedback = document.getElementById('feedback').value;
    const messageContainer = document.getElementById('message-container');
    
    if (!feedback.trim()) {
        messageContainer.innerHTML = '<p style="color: red;">Please enter your feedback before submitting.</p>';
        return false;
    }
    messageContainer.innerHTML = '<p style="color: green;">Thank you for your feedback!</p>';
    return true;
}

// Like/Dislike Comments
function likeComment(button) {
    const likeCountSpan = button.nextElementSibling;
    let likeCount = parseInt(likeCountSpan.textContent);
    likeCount++;
    likeCountSpan.textContent = likeCount;
}

function dislikeComment(button) {
    const dislikeCountSpan = button.nextElementSibling;
    let dislikeCount = parseInt(dislikeCountSpan.textContent);
    dislikeCount++;
    dislikeCountSpan.textContent = dislikeCount;
}

// Reply to Comment
function replyToComment(button) {
    const replyContainer = button.closest('li').querySelector('.reply-container');
    replyContainer.classList.toggle('hidden');
}

function submitReply(button) {
    const replyContainer = button.closest('.reply-container');
    const replyText = replyContainer.querySelector('textarea').value;
    
    if (replyText.trim()) {
        const replyList = replyContainer.closest('li').querySelector('.replies-list');
        const newReply = document.createElement('li');
        newReply.innerHTML = `<p><strong>You:</strong> ${replyText}</p>`;
        replyList.appendChild(newReply);
        
        // Clear the reply textarea and hide reply container
        replyContainer.querySelector('textarea').value = '';
        replyContainer.classList.add('hidden');
    }
}
