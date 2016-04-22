/**
 * editor_plugin_src.js
 *
 * Copyright 2012, gschoppe.com
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.UTF8SymbolPlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			
		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			switch (n) {
                case 'utf8symbol':
                    var c = cm.createSplitButton('utf8symbol', {
                        title : 'Add Symbol',
                        image : 'includes/mysymbol.gif',
                        onclick : function() {
                            tinyMCE.activeEditor.selection.setContent("♥");;
                        }
                    });
                    
                    c.onRenderMenu.add(function(c, m) {
                        var sub = m.addMenu({title : "Hearts"});
                        for (var i = 0; i < symbolHearts.length; i++) {
                            sub.add({title : symbolHearts[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolHearts[index]);
                                };
                            })(i)});
                        }
                        
                        var sub = m.addMenu({title : "Weather"});
                        for (var i = 0; i < symbolWeather.length; i++) {
                            sub.add({title : symbolWeather[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolWeather[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Space"});
                        for (var i = 0; i < symbolSpace.length; i++) {
                            sub.add({title : symbolSpace[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolSpace[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Music"});
                        for (var i = 0; i < symbolMusic.length; i++) {
                            sub.add({title : symbolMusic[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolMusic[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Religious"});
                        for (var i = 0; i < symbolReligious.length; i++) {
                            sub.add({title : symbolReligious[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolReligious[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Flowers"});
                        for (var i = 0; i < symbolFlowers.length; i++) {
                            sub.add({title : symbolFlowers[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolFlowers[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Chess"});
                        sub.add({title : "Set Board", onclick : function() {
                            tinyMCE.activeEditor.selection.setContent(symbolBoard);
                        }});
                        for (var i = 0; i < symbolChess.length; i++) {
                            sub.add({title : symbolChess[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolChess[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Cards"});
                        for (var i = 0; i < symbolCards.length; i++) {
                            sub.add({title : symbolCards[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolCards[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Dice"});
                        for (var i = 0; i < symbolDice.length; i++) {
                            sub.add({title : symbolDice[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolDice[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Zodiac"});
                        for (var i = 0; i < symbolZodiac.length; i++) {
                            sub.add({title : symbolZodiac[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolZodiac[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Gender"});
                        for (var i = 0; i < symbolGender.length; i++) {
                            sub.add({title : symbolGender[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolGender[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Tally"});
                        for (var i = 0; i < symbolTally.length; i++) {
                            sub.add({title : symbolTally[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolTally[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Hands"});
                        for (var i = 0; i < symbolHands.length; i++) {
                            sub.add({title : symbolHands[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolHands[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Environmental"});
                        for (var i = 0; i < symbolEnvironmental.length; i++) {
                            sub.add({title : symbolEnvironmental[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolEnvironmental[index]);
                                };
                            })(i)});
                        }
                        var sub = m.addMenu({title : "Misc"});
                        for (var i = 0; i < symbolMisc.length; i++) {
                            sub.add({title : symbolMisc[i], onclick : (function(index) {
                                return function() {
                                    tinyMCE.activeEditor.selection.setContent(symbolMisc[index]);
                                };
                            })(i)});
                        }
                    });
                    
                    return c;
			}
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'UTF8 Symbol Plugin',
				author : 'Greg Schoppe',
				authorurl : 'http://gschoppe.com',
				infourl : 'http://gschoppe.com/projects/fbformat',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('utf8symbol', tinymce.plugins.UTF8SymbolPlugin);
})();