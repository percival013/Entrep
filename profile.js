async function fetchUserInfo() {
    try {
        const response = await fetch('/api/user', {
            credentials: 'include' // Ensure credentials are included
        });
        console.log('Response status:', response.status); // Log the response status
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const userInfo = await response.json();
        displayUserInfo(userInfo);
    } catch (error) {
        console.error('Error fetching user info:', error);
        document.getElementById('profile-details').innerHTML = '<p>Error loading user information. Please try again later.</p>';
    }
}

// Display user information
function displayUserInfo(userInfo) {
    const profileDetails = document.getElementById('profile-details');
    profileDetails.innerHTML = `
        <p><strong>Username:</strong> ${userInfo.username}</p>
        <p><strong>Email:</strong> ${userInfo.email}</p>
        <p><strong>Joined on:</strong> ${new Date(userInfo.joinedDate).toLocaleDateString()}</p>
    `;
}

// Call the function to fetch user info
fetchUserInfo();

document.getElementById('logout-button').addEventListener('click', function() {
    // Perform logout logic
    fetch('/logout', {
        method: 'POST',
        credentials: 'include' // Include cookies for session management
    })
    .then(response => {
        if (response.redirected) {
            window.location.href = response.url; // Redirect to the login page
        }
    })
    .catch(error => {
        console.error('Error during logout:', error);
    });
});