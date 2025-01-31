
window.preventEnterDefault = (textarea) => {
    textarea.addEventListener('keydown', (e) => {
        var isEnterKey = e.key === 'Enter' || e.key === 'NumpadEnter';
        var hasAdditionalKey = e.shiftKey || e.ctrlKey || e.altKey || e.metaKey;
        if (isEnterKey && !hasAdditionalKey) {
            e.preventDefault();
        }
    });
};
