$(document).ready(function() {
    //Primer mètode de validació: en fer clic al botó de registre
    $('#form-user-register').submit(function(e) {
        e.preventDefault(); //Evita l'enviament del formulari per defecte

        //Comprovació de cada camp i validació
        validateNomCognoms();
        validateDNI();
        validateEmail();
        validatePhone();

        //Envia el formulari si totes les validacions són correctes
        if ($('.is-invalid').length === 0) {
            alert('Formulari enviat correctament!!!! o7');
            //Aquí aniria el codi per enviar les dades del formulari
        }
    });

    //Funció per validar el camp de nom i cognoms
    function validateNomCognoms() {
        var nom = $('#validationNom').val();
        var cognoms = $('#validationCognoms').val();

        if (nom !== '') {
            $('#validationNom').addClass('is-valid').removeClass('is-invalid');
            $('#feedbackNom').html('');
        } else {
            $('#validationNom').addClass('is-invalid').removeClass('is-valid');
            $('#feedbackNom').html('Camp obligatori');
        }

        if (cognoms !== '') {
            $('#validationCognoms').addClass('is-valid').removeClass('is-invalid');
            $('#feedbackCognoms').html('');
        } else {
            $('#validationCognoms').addClass('is-invalid').removeClass('is-valid');
            $('#feedbackCognoms').html('Camp obligatori');
        }
    }

    //Funció per validar el camp de DNI
    function validateDNI() {
        var dni = $('#validationDNI').val();

        if (dni !== '') {
            if (validateNIF_NIE(dni)) {
                $('#validationDNI').addClass('is-valid').removeClass('is-invalid');
                $('#feedbackDNI').html('');
            } else {
                $('#validationDNI').addClass('is-invalid').removeClass('is-valid');
                $('#feedbackDNI').html('DNI/NIE invàlid');
            }
        } else {
            $('#validationDNI').addClass('is-invalid').removeClass('is-valid');
            $('#feedbackDNI').html('Camp obligatori');
        }
    }

    //Funció per validar el format de correu electrònic
    function validateEmail() {
        var email = $('#validationEmail').val();

        if (email !== '') {
            if (validateEmailFormat(email)) {
                $('#validationEmail').addClass('is-valid').removeClass('is-invalid');
                $('#feedbackEmail').html('');
            } else {
                $('#validationEmail').addClass('is-invalid').removeClass('is-valid');
                $('#feedbackEmail').html('Correu electrònic invàlid');
            }
        } else {
            $('#validationEmail').addClass('is-invalid').removeClass('is-valid');
            $('#feedbackEmail').html('Camp obligatori');
        }
    }

    //Funció per validar el format de telèfon
    function validatePhone() {
        var phone = $('#validationTelf').val();
    
        if (phone !== '') {
            if (validatePhoneFormat(phone)) {
                $('#validationTelf').addClass('is-valid').removeClass('is-invalid');
                $('#feedbackTelf').html('');
            } else {
                $('#validationTelf').addClass('is-invalid').removeClass('is-valid');
                $('#feedbackTelf').html('Telèfon invàlid');
            }
        } else {
            $('#validationTelf').addClass('is-invalid').removeClass('is-valid');
            $('#feedbackTelf').html('Camp obligatori');
        }
    }

    //Segon mètode de validació en temps real
    $('#validationNom, #validationCognoms, #validationDNI, #validationEmail, #validationTelf').blur(function() {
        validateNomCognoms();
        validateDNI();
        validateEmail();
        validatePhone();
    });
});