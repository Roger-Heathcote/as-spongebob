// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    // return {};

    class AsSpongebob extends HTMLElement {
        connectedCallback() {
            const chars = this.textContent.split('')
            this.textContent = chars.reduce((acc, val, idx)=>{
                return acc + (idx % 2 ? val.toUpperCase() : val.toLocaleLowerCase())
            }, "")
        } // test
    }
    customElements.define('as-spongebob', AsSpongebob)
    return AsSpongebob

}));




