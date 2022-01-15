//Contact Form
$(document).ready(function () {
    $('#contact_form').on('submit', function (e) {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: $(this).serialize(),
            success: function (response) {
                var message_type = 'alert-' + response.type;
                var message_text = response.message;
                var message = '<div class="alert ' + message_type + ' alert-dismissable">' + message_text + '</div>';
                if (message_type && message_text) {
                    $('#contact_form').find('.messages').html(message);
                    $('#contact_form')[0].reset();
                    grecaptcha.reset();
                }
            }
        });
        return false;
    })
});


//Contact Form Modal
$(document).ready(function () {
    $('#contact_form_modal').on('submit', function (e) {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: $(this).serialize(),
            success: function (response) {
                var message_type = 'alert-' + response.type;
                var message_text = response.message;
                var message = '<div class="alert ' + message_type + ' alert-dismissable">' + message_text + '</div>';
                if (message_type && message_text) {
                    $('#contact_form_modal').find('.messages').html(message);
                    $('#contact_form_modal')[0].reset();
                    grecaptcha.reset();
                }
            }
        });
        return false;
    })
});