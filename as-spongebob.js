class AsSpongebob extends HTMLElement {
    connectedCallback() {
        const chars = this.textContent.split('')
        this.textContent = chars.reduce((acc, val, idx)=>{
            return acc + (idx % 2 ? val.toUpperCase() : val.toLocaleLowerCase())
        }, "")
    }
}
customElements.define('as-spongebob', AsSpongebob)