$(document).ready(function () {

    //Booleans for error
    let gameTagError = true,
        videoError = true,
        comboError = true;

    //Form Validation
    $('input').blur(function () {

        //gameTag validation
        if ($(this).hasClass('game-tag')) {
            if($(this).val().length === 0) {
                setErrorClass($(this), 'Game Tag must contain characters');
                gameTagError = true;
            } else {
                setSuccessClass($(this));
                gameTagError = false;
            }
        }

        //Video validation
        //Making sure it's an Mp4
        if($(this).hasClass('video-submit')) {

            let fileInput = $(this)[0]; //Getting the Raw DOM element
            let files = fileInput.files; //Access the files array

            if(files.length === 0) {
                setErrorClass($(this), "A file must be selected");
                videoError = true;
            } else {
                let file = files[0]; //Getting only the first selected file
                if (file.type !== "video/mp4") {
                    setErrorClass($(this), "The file must be from type video/mp4");
                    videoError = true;
                } else {
                    setSuccessClass($(this));
                    gameTagError = false;
                }
            }
        }

        //Combo Validation
        if($(this).hasClass('combo-notation')) {
            if($(this).val().length === 0) {
                setErrorClass($(this), 'Combo notation must contain characters');
                comboError = true;
            } else if ($(this).val().length > 0 && $(this).val().length < 15) {
                setErrorClass($(this), 'Combo must contain at least 3 moves (Longer than 15 chars)');
                comboError = true;
            } else {
                setSuccessClass($(this));
                comboError = false;
            }
        }
    });

    //Functions to toggle Error classes
    function setErrorClass(e, f) {
        e.siblings('span.error').text(f).fadeIn().addClass('hasError');
        e.removeClass('hasSuccess');
    }

    //Function to toggle Success classes
    function setSuccessClass(e) {
        e.siblings('.error').text('').fadeOut().removeClass('hasError');
        e.addClass('hasSuccess');
    }
});
