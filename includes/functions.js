function reformatIt(theText, textType)
{
    var c = '';
    var reformatted = "";
    for (x=0; x<theText.length; x++)
    {
        c = theText.charAt(x);
        if (c in charArray)
        {
            reformatted += charArray[c][textType];
        }
        else
        {
            reformatted += c;
        }
    }
    return reformatted;
}

$(document).ready(function() {
    $('textarea').tinymce({
        // Location of TinyMCE script
        script_url : 'includes/tiny_mce/tiny_mce.js',
        // General options
        plugins : "utf8symbol",
        theme : "advanced",
        // Theme options
        theme_advanced_buttons1 : "utf8symbol,|,mybold,myitalic,mybolditalic,mystrike,myscript,|,undo",
        theme_advanced_toolbar_location : "top",
        theme_advanced_statusbar_location : "none",
        theme_advanced_toolbar_align : "center",
        theme_advanced_resizing : false,
        theme_advanced_path : false,
        force_p_newlines : false,
        force_br_newlines : false,
        convert_newlines_to_brs : false,
        remove_linebreaks : false,
        fix_table_elements : false,
        remove_redundant_brs : false,
        validate_children : false,
        forced_root_block : false,
        cleanup : false,
        cleanup_on_startup : false,
        verify_html : false,
        entity_encoding : "raw",
        // Example content CSS (should be your site CSS)
        content_css : "includes/style.css",
        setup : function(ed) {
            ed.addButton('mybold', {
                title : 'Bold',
                image : 'includes/mybold.gif',
                onclick : function() {
                    ed.focus();
                    var textType = 0;
                    var theText = ed.selection.getContent();
                    ed.selection.setContent(reformatIt(theText, textType));
                    ed.undoManager.add();
                }
            });
            ed.addButton('myitalic', {
                title : 'Italic',
                image : 'includes/myitalic.gif',
                onclick : function() {
                    ed.focus();
                    var textType = 1;
                    var theText = ed.selection.getContent();
                    ed.selection.setContent(reformatIt(theText, textType));
                    ed.undoManager.add();
                }
            });
            ed.addButton('mybolditalic', {
                title : 'Bold-Italic',
                image : 'includes/mybolditalic.gif',
                onclick : function() {
                    ed.focus();
                    var textType = 2;
                    var theText = ed.selection.getContent();
                    ed.selection.setContent(reformatIt(theText, textType));
                    ed.undoManager.add();
                }
            });
            ed.addButton('mystrike', {
                title : 'Strikethrough',
                image : 'includes/mystrike.gif',
                onclick : function() {
                    ed.focus();
                    var textType = 3;
                    var theText = ed.selection.getContent();
                    ed.selection.setContent(reformatIt(theText, textType));
                    ed.undoManager.add();

                }
            });
            ed.addButton('myscript', {
                title : 'Script',
                image : 'includes/myscript.gif',
                onclick : function() {
                    ed.focus();
                    var textType = 4;
                    var theText = ed.selection.getContent();
                    ed.selection.setContent(reformatIt(theText, textType));
                    ed.undoManager.add();

                }
            });
            
            // Set placeholder
            var tinymce_placeholder = $('#'+ed.id);
            var attr = tinymce_placeholder.attr('placeholder');
            // For some browsers, `attr` is undefined; for others,
            // `attr` is false.  Check for both.
            if (typeof attr !== 'undefined' && attr !== false) {
                var is_default = false;
                ed.onInit.add(function(ed) {
                    // get the current content
                    var cont = ed.getContent();
                    // If its empty and we have a placeholder set the value
                    if(cont.length == 0){
                        // set content
                        cont = "<font color='gray'>"+tinymce_placeholder.attr("placeholder")+"</font>";
                        ed.setContent(cont);
                    }
                    // convert to plain text and compare strings
                    is_default = (cont.replace(/(<([^>]+)>)/ig,"") == tinymce_placeholder.attr("placeholder"));
                    // nothing to do
                    if (!is_default){
                        return;
                    }
                });
                ed.onMouseDown.add(function(ed,e) {
                    // replace the default content on focus if the same as original placeholder
                    var tinymce_placeholder = $('#'+ed.id);
                    var cont = ed.getContent();
                    is_default = (cont.replace(/(<([^>]+)>)/ig,"") == tinymce_placeholder.attr("placeholder"));
                    if (is_default){
                        ed.setContent('');
                    }
                });
            }            
        }
    });
});