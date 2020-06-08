function validForm(){
    var form = $('#form');
    form.addClass('was-validated');
}

function listMessages(){
	$('#modal-messages').modal('show');
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