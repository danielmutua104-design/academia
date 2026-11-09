// popup.js - Enhanced popup functionality for academiatechtools Extension

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const userInfoDiv = document.getElementById('userInfo');
    const statusDiv = document.getElementById('status');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    // Configuration - Replace these URLs with your actual website URLs
    const WEBSITE_CONFIG = {
        loginUrl: 'https://app.academiatechtools.com/login',
        signupUrl: 'https://app.academiatechtools.com/signup',
        baseUrl: 'https://academiatechtools.com'
    };

    // Initialize popup
    initializePopup();

    function initializePopup() {
        setupButtonHandlers();
        loadUserInformation();
        addInteractiveEffects();
    }

    function setupButtonHandlers() {
        // Login button click handler
        loginBtn.addEventListener('click', () => {
            handleButtonClick('login');
        });

        // Signup button click handler
        signupBtn.addEventListener('click', () => {
            handleButtonClick('signup');
        });
    }

    function handleButtonClick(action) {
        const url = action === 'login' ? WEBSITE_CONFIG.loginUrl : WEBSITE_CONFIG.signupUrl;
        
        // Add button loading state
        const button = action === 'login' ? loginBtn : signupBtn;
        const originalText = button.textContent;
        
        button.textContent = 'Opening...';
        button.disabled = true;
        
        // Open URL in new tab
        chrome.tabs.create({ url: url }, () => {
            // Reset button state after a short delay
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1000);
        });
    }

    function loadUserInformation() {
        // Send a message to the background script to request the user info
        chrome.runtime.sendMessage({ message: 'getUserInfo' }, (response) => {
            handleUserInfoResponse(response);
        });
    }

    function handleUserInfoResponse(response) {
        // Check if there was a communication error
        if (chrome.runtime.lastError) {
            console.error('Chrome extension error:', chrome.runtime.lastError.message);
            showErrorStatus('Connection Error', 'Unable to communicate with extension background script.');
            return;
        }

        // Check if response exists and was successful
        if (response && response.success) {
            displayUserInformation(response.data);
        } else {
            const errorMessage = response ? response.error : 'Unknown error occurred';
            showErrorStatus('Load Failed', errorMessage);
        }
    }

    function displayUserInformation(userData) {
        // Hide loading status
        statusDiv.style.display = 'none';
        
        // Show user info container
        userInfoDiv.style.display = 'block';
        
        // Populate user data with staggered animation
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
                    
                    // Add fade-in animation
                    element.style.opacity = '0';
                    element.style.transition = 'opacity 0.3s ease';
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 50);
                }
            }, field.delay);
        });

        // Log successful load
        console.log('User information loaded successfully:', userData);
    }

    function showErrorStatus(title, message) {
        statusDiv.innerHTML = `
            <div style="color: #d32f2f; text-align: center; padding: 10px;">
                <div style="font-size: 16px; margin-bottom: 5px;">⚠️</div>
                <strong>${title}</strong><br>
                <span style="font-size: 12px; opacity: 0.8;">${message}</span>
            </div>
        `;
    }

    function addInteractiveEffects() {
        // Add hover effects to buttons
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                if (!btn.disabled) {
                    btn.style.transform = 'translateY(-2px)';
                }
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });

            // Add click ripple effect
            btn.addEventListener('click', function(e) {
                if (btn.disabled) return;
                
                const ripple = document.createElement('span');
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                btn.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add CSS for ripple animation
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Debug function - you can remove this in production
    function debugLog(message, data = null) {
        if (typeof chrome !== 'undefined' && chrome.runtime) {
            console.log(`[academiatechtools Popup] ${message}`, data);
        }
    }

    // Error handling for uncaught errors
    window.addEventListener('error', (event) => {
        console.error('Popup error:', event.error);
        showErrorStatus('Script Error', 'An unexpected error occurred in the popup.');
    });

    // Initial debug log
    debugLog('Popup initialized successfully');
});