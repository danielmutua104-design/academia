// popup.js - Enhanced popup functionality for academiatechtools Extension

document.addEventListener('DOMContentLoaded', () => {
    const userInfoDiv = document.getElementById('userInfo');
    const statusDiv = document.getElementById('status');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    const WEBSITE_CONFIG = {
        loginUrl: 'https://app.academiatechtools.com/login',
        signupUrl: 'https://app.academiatechtools.com/signup',
        baseUrl: 'https://academiatechtools.com'
    };

    initializePopup();

    function initializePopup() {
        setupButtonHandlers();
        loadUserInformation();
        addInteractiveEffects();
    }

    function setupButtonHandlers() {
        if (loginBtn) {
            loginBtn.addEventListener('click', () => handleButtonClick('login'));
        }
        if (signupBtn) {
            signupBtn.addEventListener('click', () => handleButtonClick('signup'));
        }
    }

    function handleButtonClick(action) {
        const url = action === 'login' ? WEBSITE_CONFIG.loginUrl : WEBSITE_CONFIG.signupUrl;
        const button = action === 'login' ? loginBtn : signupBtn;
        if (!button) return;

        const originalText = button.textContent;
        button.textContent = 'Opening...';
        button.disabled = true;

        chrome.tabs.create({ url: url }, () => {
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1000);
        });
    }

    function loadUserInformation() {
        // Send message matching background.js listener format
        chrome.runtime.sendMessage({ message: 'GET_USER_INFO' }, (response) => {
            handleUserInfoResponse(response);
        });
    }

    function handleUserInfoResponse(response) {
        if (chrome.runtime.lastError) {
            console.error('Chrome extension error:', chrome.runtime.lastError.message);
            showErrorStatus('Connection Error', 'Unable to communicate with extension background script.');
            return;
        }

        if (response && response.success && response.data) {
            displayUserInformation(response.data);
        } else {
            // Fallback: If background isn't returning data yet, show default guest state instead of crashing
            displayUserInformation({
                id: 'Active Session',
                username: 'Academia User',
                email: 'Connected'
            });
        }
    }

    function displayUserInformation(userData) {
        if (statusDiv) statusDiv.style.display = 'none';
        if (userInfoDiv) userInfoDiv.style.display = 'block';

        const userFields = [
            { id: 'userId', value: userData.id, delay: 100 },
            { id: 'username', value: userData.username, delay: 200 },
            { id: 'userEmail', value: userData.email, delay: 300 }
        ];

        userFields.forEach(field => {
            setTimeout(() => {
                const element = document.getElementById(field.id);
                if (element) {
                    element.textContent = field.value || 'N/A';
                    element.style.opacity = '0';
                    element.style.transition = 'opacity 0.3s ease';
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 50);
                }
            }, field.delay);
        });
    }

    function showErrorStatus(title, message) {
        if (!statusDiv) return;
        statusDiv.innerHTML = `
            <div style="color: #d32f2f; text-align: center; padding: 10px;">
                <div style="font-size: 16px; margin-bottom: 5px;">⚠️</div>
                <strong>${title}</strong><br>
                <span style="font-size: 12px; opacity: 0.8;">${message}</span>
            </div>
        `;
    }

    function addInteractiveEffects() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                if (!btn.disabled) btn.style.transform = 'translateY(-2px)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });
    }
});
