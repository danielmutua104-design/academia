$(document).ready(function() {
    // Function to remove specific elements
    function removeElements() {
        const elementsToRemove = [
            '[data-name="version-history-lnk"]',
            '[data-name="edu-admin-panel-lnk"]',
            '[data-name="support-lnk"]',
            '[data-name="logout-lnk"]',
            '[data-name="username"]',
            '[data-name="documentSettings-subscription"]',
            '[data-name="documentSettings-logout"]',
            '._d6f0c040-document_settings-userNameHeader',
            '._08a25b52-document_settings-emailHeader',
            '._7b5192ca-index_navigation-item._e172f345-index_navigation-apps',
            '._7b5192ca-index_navigation-item._f64c5eab-index_navigation-trash'
        ];

        $(elementsToRemove.join(',')).each(function() {
            $(this).remove();
        });
    }

    // Initial removal
    removeElements();

    // Observe DOM changes to handle dynamically loaded content
    const observer = new MutationObserver(function(mutations) {
        removeElements();
    });

    // Start observing the body for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Add custom text below "My Grammarly"
    function updateMyGrammarlyText() {
        const myGrammarlySelector = '._7b5192ca-index_navigation-item._918cd819-index_navigation-myGrammarly';
        if ($(myGrammarlySelector).length && $(myGrammarlySelector).find('.custom-message').length === 0) {
            $(myGrammarlySelector).append(`
                <div class='custom-message' style='margin-top: 10px; color: #ffffff; font-size: 14px; padding: 10px; background-color: transparent;'>
                    Welcome to Grammarly account of <a href='https://academiatechtools.com' target='_blank' style='color: red; text-decoration: none; font-weight: bold;'>academiatechtools</a>
                </div>
            `);
        }
    }

    // Set an interval to ensure changes are consistently applied, similar to the Semrush approach
    window.setInterval(function() {
        updateMyGrammarlyText();
    }, 100);
});
