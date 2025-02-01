function $ ( selector ) {

        return document.querySelector( selector );
};

Element.prototype.on = function on ( type, callback, boolean ) {

        this.addEventListener( type, callback, boolean );
};

$( "#push" ).on( "click", () => $( "html" ).classList.toggle( "switch-theme" ) );

$( "#insert-platform" ).textContent = platform;
