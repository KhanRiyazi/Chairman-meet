function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("I had a productive meeting with the Chairman of our department!");
    window.open(`https://www.facebook.com/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("I had a productive meeting with the Chairman of our department!");
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("I had a productive meeting with the Chairman of our department!");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}
