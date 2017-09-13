$(document).ready(function() {

    // PLACEHOLDER
    var test = document.createElement('input');
    if (!('placeholder' in test)) {
        $('input').each(function () {
            if ($(this).attr('placeholder') != "" && this.value == '') {
                $(this).val($(this).attr('placeholder')).on({
                   focus: function () {
                        if (this.value == $(this).attr('placeholder')) {
                            $(this).val('');
                        }
                    },
                    blur: function () {
                        if (this.value == '') {
                            $(this).val( $(this).attr('placeholder') );
                        }
                    }
               });
            }
        });
    } 




});