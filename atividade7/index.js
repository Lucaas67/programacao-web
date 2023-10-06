function validarForm() {
    var form = document.getElementById("consultaForm");
    var errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        if (element.required && element.value.trim() === "") {
            var fieldName = element.getAttribute("name");
            errorMessages.innerHTML += fieldName + " é obrigatório.<br>";
        }
    }

    if (errorMessages.innerHTML !== "") {
        return false;
    }

    return true;
}