// Vecteezy Content Script - Hide elements and block URLs
(function() {
    'use strict';

    // Configuration
    const config = {
        // URLs to block (will prevent navigation)
        blockedUrls: [
            '/settings',
            '/account',
            '/billing',
            '/subscription',
            '/profile',
            '/premium',
            '/upgrade',
            '/pricing'
        ],
        
        // CSS selectors for elements to hide
        elementsToHide: [
            // Settings/Account buttons
            '[data-testid="settings-button"]',
            'button[aria-label*="Settings"]',
            'a[href*="/settings"]',
            'a[href*="/account"]',
            
            // Profile/Account related
            '[data-testid="profile-button"]',
            'button[aria-label*="Account"]',
            'button[aria-label*="Profile"]',
            '.profile-dropdown',
            '.account-menu',
            
            // Premium/Billing/Subscription
            'a[href*="/billing"]',
            'a[href*="/subscription"]',
            'a[href*="/premium"]',
            'a[href*="/upgrade"]',
            'a[href*="/pricing"]',
            'button[aria-label*="Upgrade"]',
            'button[aria-label*="Premium"]',
            '.premium-badge',
            '.upgrade-button',
            
            // Common Vecteezy elements that might need hiding
            '.user-menu',
            '.account-settings',
            '.billing-section',
            '.subscription-info',
            '.premium-features',
            
            // Navigation items
            'nav a[href*="/account"]',
            'nav a[href*="/settings"]',
            'nav a[href*="/premium"]',
            
            // Header/Footer account links
            'header a[href*="/account"]',
            'footer a[href*="/account"]',
            
            // Add more selectors as needed
            '.settings-menu',
            '.account-dropdown'
        ]
    };

    // Function to hide elements
    function hideElements() {
        config.elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element && element.style.display !== 'none') {
                    element.style.display = 'none !important';
                    element.style.visibility = 'hidden !important';
                    console.log('Hidden element on Vecteezy:', selector);
                }
            });
        });
    }

    // Function to block URLs
    function blockUrls() {
        // Block link clicks
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href) {
                const url = new URL(link.href);
                const isBlocked = config.blockedUrls.some(blockedUrl => 
                    url.pathname.includes(blockedUrl)
                );
                
                if (isBlocked) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Blocked navigation to:', link.href);
                    return false;
                }
            }
        }, true);

        // Block programmatic navigation
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;
        
        history.pushState = function(state, title, url) {
            if (url && config.blockedUrls.some(blockedUrl => url.includes(blockedUrl))) {
                console.log('Blocked pushState to:', url);
                return;
            }
            return originalPushState.apply(this, arguments);
        };
        
        history.replaceState = function(state, title, url) {
            if (url && config.blockedUrls.some(blockedUrl => url.includes(blockedUrl))) {
                console.log('Blocked replaceState to:', url);
                return;
            }
            return originalReplaceState.apply(this, arguments);
        };
    }

    // Function to add custom CSS for more robust hiding
    function addCustomCSS() {
        const style = document.createElement('style');
        style.textContent = `
            /* Hide specific elements more aggressively */
            ${config.elementsToHide.join(', ')} {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
            
            /* Hide settings-related text content */
            *[class*="settings" i],
            *[id*="settings" i],
            *[aria-label*="settings" i] {
                display: none !important;
            }
            
            /* Hide account-related elements */
            *[class*="account" i],
            *[id*="account" i],
            *[aria-label*="account" i] {
                display: none !important;
            }
            
            /* Hide premium/subscription elements */
            *[class*="premium" i],
            *[class*="subscription" i],
            *[class*="upgrade" i],
            *[id*="premium" i],
            *[id*="subscription" i] {
                display: none !important;
            }
            
            /* Hide billing-related elements */
            *[class*="billing" i],
            *[id*="billing" i],
            *[aria-label*="billing" i] {
                display: none !important;
            }
            
            /* Hide profile elements */
            *[class*="profile" i]:not([class*="color-profile" i]):not([class*="icc-profile" i]),
            *[id*="profile" i] {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Function to handle dynamic content
    function observeChanges() {
        const observer = new MutationObserver(function(mutations) {
            let shouldHide = false;
            
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    shouldHide = true;
                }
            });
            
            if (shouldHide) {
                // Delay slightly to ensure elements are fully rendered
                setTimeout(hideElements, 100);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Function to check if we're on Vecteezy
    function isVecteezy() {
        return window.location.hostname.includes('vecteezy.com');
    }

    // Main initialization function
    function init() {
        if (!isVecteezy()) {
            return; // Only run on Vecteezy
        }

        console.log('Vecteezy Content Script: Initializing...');
        
        // Add custom CSS immediately
        addCustomCSS();
        
        // Set up URL blocking
        blockUrls();
        
        // Hide elements when page loads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', hideElements);
        } else {
            hideElements();
        }
        
        // Set up observer for dynamic content
        if (document.body) {
            observeChanges();
        } else {
            document.addEventListener('DOMContentLoaded', observeChanges);
        }
        
        // Periodically check and hide elements (backup method)
        setInterval(hideElements, 2000);
        
        console.log('Vecteezy Content Script: Initialized successfully');
    }

    // Start the script
    init();

    // Re-run when page changes (for SPA navigation)
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(init, 500); // Delay to let page load
        }
    }).observe(document, { subtree: true, childList: true });

})();