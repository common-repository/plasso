
/* The Plasso MCE Button
---------------------------------------------------------------------------------------------------- */

(function() {
  tinymce.create("tinymce.plugins.plasso_button_plugin", {

    // URL argument holds the absolute url of our plugin directory.
    init : function(ed, url) {

      // Add the button.
      ed.addButton("plasso", {
        title : "Insert a Plasso Payment Button",
        cmd : "plasso_command",
        image : url + "/plasso-mce-button.png"
      });

      // Button functionality.
      ed.addCommand("plasso_command", function() {
        var selected_text = ed.selection.getContent();
        var return_text = '[plasso id="SpaceID" text="Buy Something" cart="false"]';
        ed.execCommand("mceInsertContent", 0, return_text);
      });
    },

    createControl : function(n, cm) {
      return null;
    },

    getInfo : function() {
      return {
        longname : "Plasso Button",
        author : "Plasso",
        version : "1"
      };
    }
  });

  tinymce.PluginManager.add("plasso_button_plugin", tinymce.plugins.plasso_button_plugin);
})();
