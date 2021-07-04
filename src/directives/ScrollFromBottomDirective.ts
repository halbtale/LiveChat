export const scrollFromBottomDirective = {
    created(element: HTMLElement): void {
        document.onreadystatechange = () => {
            element.scrollTop = element.scrollHeight;
        }
    },
}