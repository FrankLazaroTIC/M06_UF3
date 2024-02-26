// Funció per validar el correu electrònic
function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// Funció per validar la contrasenya
function validatePassword(password) {
    const paraulesMinus = /[a-z]/;
    const paraulesMajus = /[A-Z]/;
    const nums = /[0-9]/;
    const caractEspecials = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    let requerimentsPassword = []; // Guardem els missatges a un array per mostrar-los

    if (password.length < 8 || password.length > 15) {
        requerimentsPassword.push("<span style='color:red;'>La contrasenya ha de tenir entre 8 i 15 caràcters</span>");
    } else {
        requerimentsPassword.push("<span style='color:green;'>La contrasenya ha de tenir entre 8 i 15 caràcters</span>");
    }
    if (!paraulesMinus.test(password)) {
        requerimentsPassword.push("<span style='color:red;'>La contrasenya ha de contenir almenys una lletra minúscula</span>");
    } else {
        requerimentsPassword.push("<span style='color:green;'>La contrasenya ha de contenir almenys una lletra minúscula</span>");
    }
    if (!paraulesMajus.test(password)) {
        requerimentsPassword.push("<span style='color:red;'>La contrasenya ha de contenir almenys una lletra majúscula</span>");
    } else {
        requerimentsPassword.push("<span style='color:green;'>La contrasenya ha de contenir almenys una lletra majúscula</span>");
    }
    if (!nums.test(password)) {
        requerimentsPassword.push("<span style='color:red;'>La contrasenya ha de contenir almenys un número</span>");
    } else {
        requerimentsPassword.push("<span style='color:green;'>La contrasenya ha de contenir almenys un número</span>");
    }
    if (!caractEspecials.test(password)) {
        requerimentsPassword.push("<span style='color:red;'>La contrasenya ha de contenir almenys un caràcter especial</span>");
    } else {
        requerimentsPassword.push("<span style='color:green;'>La contrasenya ha de contenir almenys un caràcter especial</span>");
    }

    return requerimentsPassword; // Retorna els missatges de validació
}

// Event per validar la contrasenya a mesura que es va escrivint
document.getElementById("password").addEventListener("input", function() {
    const passwordInput = this;
    const requerimentsPassword = validatePassword(passwordInput.value);
    const validacioMisstge = document.getElementById("requisitosPass");

    let passwordValid = true; // Variable per verificar si tots els requisits estan complets

    // Iterar sobre els missatges de validació
    requerimentsPassword.forEach(message => {
        if (message.includes("red")) {
            passwordValid = false; // Si hi ha algun missatge de color vermell, establir passwordValid en false
        }
    });

    if (passwordValid) {
        passwordInput.style.borderColor = "green"; // Canviar el borde a verd si tots els requisits estan complets
    } else {
        passwordInput.style.borderColor = "black"; // Altrament, mantenir el borde en vermell
    }

    // Mostrar els missatges de validació
    validacioMisstge.innerHTML = requerimentsPassword.join("<br>");
});

// Funció per validar el formulari complet
function validateForm() {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const codiPostalInput = document.getElementById("postalAddress");

    // Validació del nom d'usuari
    if (usernameInput.value.trim() === "") {
        alert("El camp del nom d'usuari és obligatori");
        return false;
    }

    // Validació del correu electrònic
    if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
        alert("Si us plau, introdueix un correu electrònic vàlid");
        return false;
    }

    // Validació de la contrasenya
    const passwordValidation = validatePassword(passwordInput.value);
    const passwordMessages = passwordValidation.filter(msg => msg.includes("red")).map(msg => msg.replace(/<[^>]+>/g, '')); // Filtrar missatges en vermell i eliminar etiquetes HTML
    if (passwordMessages.length > 0) {
        alert("Requisits no complets en la contrasenya:\n" + passwordMessages.join("\n"));
        return false;
    }

    // Validació de la confirmació de contrasenya
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Les contrasenyes no coincideixen");
        return false;
    }

    // Validació de l'adreça postal
    if (codiPostalInput.value.trim() === "") {
        alert("El camp de l'adreça postal és obligatori");
        return false;
    }

    return true; 
}

// Afegir event per validar el camp del nom d'usuari
document.getElementById("username").addEventListener("focusout", function() {
    const usernameInput = this;
    if (usernameInput.value.trim() === "") {
        usernameInput.style.borderColor = "red";
    } else {
        usernameInput.style.borderColor = "green";
    }
});

// Afegir event per validar el camp del correu electrònic
document.getElementById("email").addEventListener("focusout", function() {
    const emailInput = this;
    if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "green";
    }
});

// Afegir event per validar el camp de la contrasenya
document.getElementById("password").addEventListener("input", function() {
    const passwordInput = this;
    const passwordValidation = validatePassword(passwordInput.value);
    if (passwordValidation !== true) {
        passwordInput.style.borderColor = "black";
    } else {
        passwordInput.style.borderColor = "green";
    }
});

// Afegir event per validar el camp de la confirmació de contrasenya
document.getElementById("confirmPassword").addEventListener("focusout", function() {
    const confirmPasswordInput = this;
    const passwordInput = document.getElementById("password");
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.borderColor = "red";
    }else {
        confirmPasswordInput.style.borderColor = "green";
    }
});