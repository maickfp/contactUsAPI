function validForm(){
    var form = $('#form');
    form.addClass('was-validated');
    
    if(form.find('.invalid-feedback:visible').length > 0){
        addNotificaction('danger', 'Existen errores en el formulario');
    }else{
        form.find('> fieldset').prop('disabled', true);
        $('#spinner-form-message').removeClass('d-none');
        
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = parseInt($('#phone').val());
        var country = $('#country').val().trim();
        var text = $('#text').val().trim();
        
        var data = {
            name,
            email,
            text
        };
        
        if(phone){
            data['phone'] = phone;
        }
        
        if(country){
            data['country'] = country;
        }
        
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(resp => {
            if(resp.est === 1){
                addNotificaction('success', 'Se han registrado sus datos');
            }else{
                addNotificaction('danger', resp.msg);
            }
            $('#spinner-form-message').addClass('d-none');
            form.get(0).reset();
            $('#text').keyup();
        });
        
    }

}

function resetForm(form) {
    $(form).removeClass('was-validated');
    $(form).find('> fieldset').prop('disabled', false);
}

function listMessages(){
    $('#list-messages').empty();
    $("#spinner-list-messages").show();
    
    fetch('/api/messages', {
        method: 'GET'
    }).then(res => res.json())
    .then(resp => {
        if(resp.est === 1){
            $('#list-messages').append(
                resp.messages.map(function(message) {
                    return `<li class="list-group-item">
                        <div class="d-flex justify-content-between">
                            <h5 class="mb-0">${message.name}</h5>
                            <small class="text-muted">${message.createdAt}</small>
                        </div>
                        <small class="text-muted mb-1">&lt;${message.email}&gt;</small>
                        <p class="mb-1">${message.text}</p>
                        <div class="text-muted d-flex">
                            <small class="flex-fill">Teléfono: ${message.phone?message.phone:''}</small>
                            <small class="flex-fill">País: ${getCountryDesc(message.country)}</small>
                        </div>
                    </li>`
                })
            );
        }
        $("#spinner-list-messages").hide();
    });
    
    $('#modal-messages').modal('show');
}

function addNotificaction(tip, msg) {
    $('#list-notifications').append(
        `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="./img/main/notification.png" class="rounded mr-2" alt="contactUs" width="30px">
                <strong class="mr-auto">Contacto</strong>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body text-${tip}">
                ${msg}
            </div>
        </div>`
    );
    $('.toast').toast({
        animation: true, 
        autohide: true,
        delay: 5000
    })
    .toast('show')
    .on('hidden.bs.toast', function () {
        $(this).remove();
    });
}

function getCountryDesc(country) {
    switch (country) {
        case 'COL':
            return 'Colombia'
        case 'USA':
            return 'USA'
        case 'CAN':
            return 'Canadá'
        default:
            return '';
    }
}

function updateRemainingCharacterCount(element){
    var textarea = $(element);

    var maxLength = textarea.prop('maxlength');
    var textLength = textarea.val().length;
    var charactersRemaining = maxLength - textLength;

    var characterCount = textarea.find(' + .remaining-character .remaining-character-count');

    characterCount.text(charactersRemaining);
    if((charactersRemaining/maxLength) < 0.2){
        characterCount.addClass('font-weight-bold text-danger');
    }else{
        characterCount.removeClass('font-weight-bold text-danger');
    }
}
