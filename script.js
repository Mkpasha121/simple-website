// Small interactive feature: show an alert when clicking the email link
document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', function() {
            alert('Thanks for reaching out!');
        });
    }
});
