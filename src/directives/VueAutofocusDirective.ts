function focusElement(el, binding) {
    // If directive has bound value
    if (binding.value !== undefined && !binding.value) return;

    // Focus the element
    el.focus();
}

// Register a global custom directive called `v-focus`
export const VueAutofocusDirective = {
    mounted: focusElement,
};