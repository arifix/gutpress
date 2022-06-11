/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/alert/index.js":
/*!****************************!*\
  !*** ./src/alert/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/google-fonts */ "./src/defaults/google-fonts.json");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  ColorPicker,
  RangeControl,
  SelectControl
} = wp.components;


registerBlockType("gutpress/alert", {
  title: "Alert",
  category: "gutpress-blocks",
  icon: "warning",
  description: "Provides an easy way to create predefined alert messages",
  attributes: {
    full_width: {
      type: "boolean",
      default: false
    },
    message: {
      type: "string",
      default: "Your blog is going to look awesome with this plugin."
    },
    alignment: {
      type: "string",
      default: "center"
    },
    border_radius: {
      type: "number",
      default: 5
    },
    background_color: {
      type: "string",
      default: "#a94442"
    },
    text_color: {
      type: "string",
      default: "#FFFFFF"
    },
    text_font_family: {
      type: "string",
      default: "Arial"
    },
    text_font_weight: {
      type: "string",
      default: 400
    },
    text_font_size: {
      type: "number",
      default: 18
    },
    text_padding: {
      type: "number",
      default: 15
    },
    text_styles: {
      type: "string",
      default: ""
    }
  },
  example: {
    attributes: {
      preview: true
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;

    const selectOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref2 => {
        let {
          name
        } = _ref2;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.text_font_family.split("+").join(" ")]);

    const textFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleFontWeights !== "undefined" && typeof googleFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const onSelectFontFamily = value => {
      setAttributes({
        text_font_family: value
      });
      setAttributes({
        text_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectFontWeight = value => {
      setAttributes({
        text_font_weight: value
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: attributes.alignment,
      onChange: alignment => setAttributes({
        alignment
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Global Settings", "gutpress"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Full Width", "gutpress"),
      checked: attributes.full_width,
      onChange: full_width => setAttributes({
        full_width
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Padding", "gutpress"),
      value: attributes.text_padding,
      onChange: text_padding => setAttributes({
        text_padding
      }),
      min: 1,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Border Radius", "gutpress"),
      value: attributes.border_radius,
      onChange: border_radius => setAttributes({
        border_radius
      }),
      min: 0,
      max: 35,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.background_color,
      onChange: background_color => setAttributes({
        background_color
      }),
      enableAlpha: true,
      defaultValue: attributes.background_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.text_color,
      onChange: text_color => setAttributes({
        text_color
      }),
      defaultValue: attributes.text_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectOptions(),
      value: attributes.text_font_family,
      onChange: n => onSelectFontFamily(n)
    }), textFontWeightOptions() && textFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: textFontWeightOptions(),
      value: attributes.text_font_weight,
      onChange: n => onSelectFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.text_font_size,
      onChange: text_font_size => setAttributes({
        text_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockAlert",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        textAlign: attributes.alignment,
        backgroundColor: attributes.background_color,
        borderRadius: attributes.border_radius
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.text_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        fontFamily: attributes.text_font_family,
        fontWeight: attributes.text_font_weight,
        color: attributes.text_color,
        padding: attributes.text_padding,
        fontSize: attributes.text_font_size + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.message,
      onChange: message => setAttributes({
        message
      })
    }))));
  },
  save: _ref3 => {
    let {
      attributes
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockAlert",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        textAlign: attributes.alignment,
        backgroundColor: attributes.background_color,
        borderRadius: attributes.border_radius
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.text_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        fontFamily: attributes.text_font_family,
        fontWeight: attributes.text_font_weight,
        color: attributes.text_color,
        padding: attributes.text_padding,
        fontSize: attributes.text_font_size + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.message
    }))));
  }
});

/***/ }),

/***/ "./src/blockquote/index.js":
/*!*********************************!*\
  !*** ./src/blockquote/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/google-fonts */ "./src/defaults/google-fonts.json");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  ColorPicker,
  RangeControl,
  SelectControl
} = wp.components;


registerBlockType("gutpress/blockquote", {
  title: "Blockquote",
  category: "gutpress-blocks",
  icon: "format-quote",
  description: "Indicates that the enclosed text is an extended quotation",
  attributes: {
    full_width: {
      type: "boolean",
      default: false
    },
    alignment: {
      type: "string",
      default: "left"
    },
    content: {
      type: "string",
      default: "Your blog is going to look awesome with this plugin."
    },
    author: {
      type: "string",
      default: "John Doe"
    },
    border_radius: {
      type: "number",
      default: 5
    },
    background_color: {
      type: "string",
      default: "#EEEEEE"
    },
    border_color: {
      type: "string",
      default: "#78C0A8"
    },
    border_width: {
      type: "number",
      default: 5
    },
    text_color: {
      type: "string",
      default: "#555555"
    },
    author_color: {
      type: "string",
      default: "#555555"
    },
    author_font_family: {
      type: "string",
      default: "Arial"
    },
    author_font_weight: {
      type: "string",
      default: 700
    },
    text_font_family: {
      type: "string",
      default: "Arial"
    },
    text_font_weight: {
      type: "string",
      default: 400
    },
    text_font_size: {
      type: "number",
      default: 18
    },
    author_font_size: {
      type: "number",
      default: 20
    },
    author_styles: {
      type: "string",
      default: ""
    },
    text_styles: {
      type: "string",
      default: ""
    }
  },
  example: {
    attributes: {
      preview: true
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;

    const selectAuthorOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref2 => {
        let {
          name
        } = _ref2;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleAuthorFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.author_font_family.split("+").join(" ")]);

    const authorFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleAuthorFontWeights !== "undefined" && typeof googleAuthorFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleAuthorFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const onSelectAuthorFontFamily = value => {
      setAttributes({
        author_font_family: value
      });
      setAttributes({
        author_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectAuthorFontWeight = value => {
      setAttributes({
        author_font_weight: value
      });
    };

    const selectOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref3 => {
        let {
          name
        } = _ref3;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.text_font_family.split("+").join(" ")]);

    const textFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleFontWeights !== "undefined" && typeof googleFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const onSelectFontFamily = value => {
      setAttributes({
        text_font_family: value
      });
      setAttributes({
        text_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectFontWeight = value => {
      setAttributes({
        text_font_weight: value
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: attributes.alignment,
      onChange: alignment => setAttributes({
        alignment
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Global Settings", "gutpress"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Full Width", "gutpress"),
      checked: attributes.full_width,
      onChange: full_width => setAttributes({
        full_width
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.background_color,
      onChange: background_color => setAttributes({
        background_color
      }),
      enableAlpha: true,
      defaultValue: attributes.background_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Border Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.border_color,
      onChange: border_color => setAttributes({
        border_color
      }),
      defaultValue: attributes.border_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Border Width", "gutpress"),
      value: attributes.border_width,
      onChange: border_width => setAttributes({
        border_width
      }),
      min: 0,
      max: 25,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Border Radius", "gutpress"),
      value: attributes.border_radius,
      onChange: border_radius => setAttributes({
        border_radius
      }),
      min: 0,
      max: 35,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Text", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.text_color,
      onChange: text_color => setAttributes({
        text_color
      }),
      defaultValue: attributes.text_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectOptions(),
      value: attributes.text_font_family,
      onChange: n => onSelectFontFamily(n)
    }), textFontWeightOptions() && textFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: textFontWeightOptions(),
      value: attributes.text_font_weight,
      onChange: n => onSelectFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.text_font_size,
      onChange: text_font_size => setAttributes({
        text_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Author", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.author_color,
      onChange: author_color => setAttributes({
        author_color
      }),
      defaultValue: attributes.author_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectAuthorOptions(),
      value: attributes.author_font_family,
      onChange: n => onSelectAuthorFontFamily(n)
    }), authorFontWeightOptions() && authorFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: authorFontWeightOptions(),
      value: attributes.author_font_weight,
      onChange: n => onSelectAuthorFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.author_font_size,
      onChange: author_font_size => setAttributes({
        author_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockBlockquote",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        textAlign: attributes.alignment
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.text_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote", {
      style: {
        backgroundColor: attributes.background_color,
        borderRadius: attributes.border_radius,
        fontFamily: attributes.text_font_family,
        fontWeight: attributes.text_font_weight,
        color: attributes.text_color,
        fontSize: attributes.text_font_size + "px",
        borderLeftColor: attributes.border_color,
        borderLeftWidth: attributes.border_width + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.content,
      onChange: content => setAttributes({
        content
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontFamily: attributes.author_font_family,
        fontWeight: attributes.author_font_weight,
        fontSize: attributes.author_font_size + "px",
        color: attributes.author_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.author,
      onChange: author => setAttributes({
        author
      })
    })))));
  },
  save: _ref4 => {
    let {
      attributes
    } = _ref4;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockBlockquote",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        textAlign: attributes.alignment
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.text_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote", {
      style: {
        backgroundColor: attributes.background_color,
        borderRadius: attributes.border_radius,
        fontFamily: attributes.text_font_family,
        fontWeight: attributes.text_font_weight,
        color: attributes.text_color,
        fontSize: attributes.text_font_size + "px",
        borderLeftColor: attributes.border_color,
        borderLeftWidth: attributes.border_width + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.content
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontFamily: attributes.author_font_family,
        fontWeight: attributes.author_font_weight,
        fontSize: attributes.author_font_size + "px",
        color: attributes.author_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.author
    })))));
  }
});

/***/ }),

/***/ "./src/call-to-action/index.js":
/*!*************************************!*\
  !*** ./src/call-to-action/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/google-fonts */ "./src/defaults/google-fonts.json");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaUpload
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  ColorPicker,
  RangeControl,
  SelectControl,
  Button,
  __experimentalInputControl
} = wp.components;


registerBlockType("gutpress/call-to-action", {
  title: "Call to Action",
  category: "gutpress-blocks",
  icon: "align-wide",
  description: "A prompt on a website that tells the user to take some specified action",
  attributes: {
    full_width: {
      type: "boolean",
      default: false
    },
    height: {
      type: "number",
      default: 200
    },
    background_image: {
      type: "string",
      default: "https://images.unsplash.com/photo-1550237330-a5d774594098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    background_position: {
      type: "string",
      default: "center"
    },
    overlay_color: {
      type: "string",
      default: "#00000080"
    },
    title: {
      type: "string",
      default: "GutPress CTA"
    },
    subtitle: {
      type: "string",
      default: "Your blog is going to look awesome with this plugin."
    },
    border_radius: {
      type: "number",
      default: 5
    },
    background_color: {
      type: "string",
      default: "#a94442"
    },
    title_color: {
      type: "string",
      default: "#FFFFFF"
    },
    title_font_family: {
      type: "string",
      default: "Arial"
    },
    title_font_weight: {
      type: "string",
      default: 600
    },
    title_font_size: {
      type: "number",
      default: 30
    },
    title_styles: {
      type: "string",
      default: ""
    },
    subtitle_color: {
      type: "string",
      default: "#FFFFFF"
    },
    subtitle_font_family: {
      type: "string",
      default: "Arial"
    },
    subtitle_font_weight: {
      type: "string",
      default: 100
    },
    subtitle_font_size: {
      type: "number",
      default: 20
    },
    subtitle_styles: {
      type: "string",
      default: ""
    },
    show_button: {
      type: "boolean",
      default: false
    },
    button_background_color: {
      type: "string",
      default: "#303f9f"
    },
    button_hover_background_color: {
      type: "string",
      default: "#000000"
    },
    button_text_color: {
      type: "string",
      default: "#FFFFFF"
    },
    button_hover_text_color: {
      type: "string",
      default: "#FFFFFF"
    },
    button_text: {
      type: "string",
      default: "Click Me"
    },
    button_font_family: {
      type: "string",
      default: "Arial"
    },
    button_font_weight: {
      type: "string",
      default: 100
    },
    button_font_size: {
      type: "number",
      default: 18
    },
    button_styles: {
      type: "string",
      default: ""
    },
    button_url: {
      type: "string",
      default: "#"
    },
    button_new_tab: {
      type: "boolean",
      default: false
    },
    button_color_styles: {
      type: "string",
      default: ""
    }
  },
  example: {
    attributes: {
      preview: true
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;

    const selectTitleOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref2 => {
        let {
          name
        } = _ref2;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleTitleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.title_font_family.split("+").join(" ")]);

    const titleFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleTitleFontWeights !== "undefined" && typeof googleTitleFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleTitleFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const selectSubtitleOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref3 => {
        let {
          name
        } = _ref3;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleSubtitleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.subtitle_font_family.split("+").join(" ")]);

    const subtitleFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleSubtitleFontWeights !== "undefined" && typeof googleSubtitleFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleSubtitleFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const selectButtonOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref4 => {
        let {
          name
        } = _ref4;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleButtonFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.button_font_family.split("+").join(" ")]);

    const buttonFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleButtonFontWeights !== "undefined" && typeof googleButtonFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleButtonFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const onSelectTitleFontFamily = value => {
      setAttributes({
        title_font_family: value
      });
      setAttributes({
        title_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectTitleFontWeight = value => {
      setAttributes({
        title_font_weight: value
      });
    };

    const onSelectSubtitleFontFamily = value => {
      setAttributes({
        subtitle_font_family: value
      });
      setAttributes({
        subtitle_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectSubtitleFontWeight = value => {
      setAttributes({
        subtitle_font_weight: value
      });
    };

    const onSelectButtonFontFamily = value => {
      setAttributes({
        button_font_family: value
      });
      setAttributes({
        button_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectButtonFontWeight = value => {
      setAttributes({
        button_font_weight: value
      });
    };

    const onSelectHoverColor = () => {
      setAttributes({
        button_color_styles: "<style>#afxBlockCta a:hover{background: " + attributes.button_hover_background_color + " !important;color: " + attributes.button_hover_text_color + " !important;}</style>"
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Global Settings", "gutpress"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Full Width", "gutpress"),
      checked: attributes.full_width,
      onChange: full_width => setAttributes({
        full_width
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Height", "gutpress"),
      value: attributes.height,
      onChange: height => setAttributes({
        height
      }),
      min: 100,
      max: 800,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Border Radius", "gutpress"),
      value: attributes.border_radius,
      onChange: border_radius => setAttributes({
        border_radius
      }),
      min: 0,
      max: 35,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: imageObject => {
        setAttributes({
          background_image: imageObject.sizes.full.url
        });
      },
      allowedTypes: "image",
      value: attributes.background_image,
      render: _ref5 => {
        let {
          open
        } = _ref5;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          variant: "primary",
          className: "image-button",
          onClick: open
        }, __(attributes.background_image ? "Update Background Image" : "Add Background Image", "gutpress"));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), attributes.background_image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      variant: "secondary",
      className: "image-button",
      onClick: () => {
        setAttributes({
          background_image: ""
        });
      }
    }, __("Remove Background Image", "gutpress")) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), attributes.background_image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Background Position", "gutpress"),
      value: attributes.background_position,
      options: [{
        label: "Center",
        value: "Center"
      }, {
        label: "Top",
        value: "Top"
      }, {
        label: "Bottom",
        value: "Bottom"
      }],
      onChange: background_position => setAttributes({
        background_position
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Overlay Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.overlay_color,
      onChange: overlay_color => setAttributes({
        overlay_color
      }),
      enableAlpha: true,
      defaultValue: attributes.overlay_color
    })) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.background_color,
      onChange: background_color => setAttributes({
        background_color
      }),
      enableAlpha: true,
      defaultValue: attributes.background_color
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Heading", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.title_color,
      onChange: title_color => setAttributes({
        title_color
      }),
      defaultValue: attributes.title_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectTitleOptions(),
      value: attributes.title_font_family,
      onChange: n => onSelectTitleFontFamily(n)
    }), titleFontWeightOptions() && titleFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: titleFontWeightOptions(),
      value: attributes.title_font_weight,
      onChange: n => onSelectTitleFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.title_font_size,
      onChange: title_font_size => setAttributes({
        title_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Subheading", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.subtitle_color,
      onChange: subtitle_color => setAttributes({
        subtitle_color
      }),
      defaultValue: attributes.subtitle_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectSubtitleOptions(),
      value: attributes.subtitle_font_family,
      onChange: n => onSelectSubtitleFontFamily(n)
    }), subtitleFontWeightOptions() && subtitleFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: subtitleFontWeightOptions(),
      value: attributes.subtitle_font_weight,
      onChange: n => onSelectSubtitleFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.subtitle_font_size,
      onChange: subtitle_font_size => setAttributes({
        subtitle_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Button", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Show Button", "gutpress"),
      checked: attributes.show_button,
      onChange: show_button => setAttributes({
        show_button
      })
    }), attributes.show_button ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_background_color,
      onChange: button_background_color => setAttributes({
        button_background_color
      }),
      defaultValue: attributes.button_background_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_text_color,
      onChange: button_text_color => setAttributes({
        button_text_color
      }),
      defaultValue: attributes.button_text_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectButtonOptions(),
      value: attributes.button_font_family,
      onChange: n => onSelectButtonFontFamily(n)
    }), buttonFontWeightOptions() && buttonFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: buttonFontWeightOptions(),
      value: attributes.button_font_weight,
      onChange: n => onSelectButtonFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.button_font_size,
      onChange: button_font_size => setAttributes({
        button_font_size
      }),
      min: 14,
      max: 35,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Hover Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_hover_background_color,
      onChange: button_hover_background_color => {
        setAttributes({
          button_hover_background_color
        });
        onSelectHoverColor();
      },
      defaultValue: attributes.button_hover_background_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Hover Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_hover_text_color,
      onChange: button_hover_text_color => {
        setAttributes({
          button_hover_text_color
        });
        onSelectHoverColor();
      },
      defaultValue: attributes.button_hover_text_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(__experimentalInputControl, {
      label: __("URL", "gutpress"),
      value: attributes.button_url,
      onChange: button_url => setAttributes({
        button_url
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Open link in new Tab", "gutpress"),
      checked: attributes.button_new_tab,
      onChange: button_new_tab => setAttributes({
        button_new_tab
      })
    })) : "")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockCta",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        backgroundColor: attributes.background_color,
        backgroundImage: "url(" + attributes.background_image + ")",
        backgroundPosition: attributes.background_position,
        height: attributes.height,
        boxShadow: "inset 0 0 0 2000px " + attributes.overlay_color,
        borderRadius: attributes.border_radius + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.title_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.subtitle_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_color_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      style: {
        fontFamily: attributes.title_font_family,
        fontWeight: attributes.title_font_weight,
        fontSize: attributes.title_font_size + "px",
        color: attributes.title_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.title,
      onChange: title => setAttributes({
        title
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      style: {
        fontFamily: attributes.subtitle_font_family,
        fontWeight: attributes.subtitle_font_weight,
        fontSize: attributes.subtitle_font_size + "px",
        color: attributes.subtitle_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.subtitle,
      onChange: subtitle => setAttributes({
        subtitle
      })
    })), attributes.show_button ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: attributes.button_url,
      style: {
        backgroundColor: attributes.button_background_color,
        color: attributes.button_text_color,
        fontFamily: attributes.button_font_family,
        fontWeight: attributes.button_font_weight,
        fontSize: attributes.button_font_size
      },
      target: attributes.button_new_tab ? "_blank" : "",
      rel: "noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.button_text,
      onChange: button_text => setAttributes({
        button_text
      })
    })) : ""));
  },
  save: _ref6 => {
    let {
      attributes
    } = _ref6;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockCta",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        backgroundColor: attributes.background_color,
        backgroundImage: "url(" + attributes.background_image + ")",
        backgroundPosition: attributes.background_position,
        height: attributes.height,
        boxShadow: "inset 0 0 0 2000px " + attributes.overlay_color,
        borderRadius: attributes.border_radius + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.title_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.subtitle_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_color_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      style: {
        fontFamily: attributes.title_font_family,
        fontWeight: attributes.title_font_weight,
        fontSize: attributes.title_font_size + "px",
        color: attributes.title_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.title
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      style: {
        fontFamily: attributes.subtitle_font_family,
        fontWeight: attributes.subtitle_font_weight,
        fontSize: attributes.subtitle_font_size + "px",
        color: attributes.subtitle_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.subtitle
    })), attributes.show_button ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: attributes.button_url,
      style: {
        backgroundColor: attributes.button_background_color,
        color: attributes.button_text_color,
        fontFamily: attributes.button_font_family,
        fontWeight: attributes.button_font_weight,
        fontSize: attributes.button_font_size
      },
      target: attributes.button_new_tab ? "_blank" : "",
      rel: "noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.button_text
    })) : ""));
  }
});

/***/ }),

/***/ "./src/card/index.js":
/*!***************************!*\
  !*** ./src/card/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/google-fonts */ "./src/defaults/google-fonts.json");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaUpload
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  ColorPicker,
  RangeControl,
  SelectControl,
  Button,
  __experimentalInputControl
} = wp.components;


registerBlockType("gutpress/card", {
  title: "Card",
  category: "gutpress-blocks",
  icon: "analytics",
  description: "Information about what you offer, benefits, features & much more",
  attributes: {
    width: {
      type: "number",
      default: 300
    },
    height: {
      type: "number",
      default: 400
    },
    card_image: {
      type: "string",
      default: "https://images.unsplash.com/photo-1550237330-a5d774594098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    title: {
      type: "string",
      default: "GutPress Card"
    },
    subtitle: {
      type: "string",
      default: "Your blog is going to look awesome with this plugin."
    },
    border_radius: {
      type: "number",
      default: 15
    },
    background_color: {
      type: "string",
      default: "#FFFFFF"
    },
    title_color: {
      type: "string",
      default: "#000000"
    },
    title_font_family: {
      type: "string",
      default: "Arial"
    },
    title_font_weight: {
      type: "string",
      default: 600
    },
    title_font_size: {
      type: "number",
      default: 24
    },
    title_styles: {
      type: "string",
      default: ""
    },
    subtitle_color: {
      type: "string",
      default: "#000000"
    },
    subtitle_font_family: {
      type: "string",
      default: "Arial"
    },
    subtitle_font_weight: {
      type: "string",
      default: 100
    },
    subtitle_font_size: {
      type: "number",
      default: 16
    },
    subtitle_styles: {
      type: "string",
      default: ""
    },
    show_button: {
      type: "boolean",
      default: false
    },
    button_background_color: {
      type: "string",
      default: "#303f9f"
    },
    button_hover_background_color: {
      type: "string",
      default: "#000000"
    },
    button_text_color: {
      type: "string",
      default: "#FFFFFF"
    },
    button_hover_text_color: {
      type: "string",
      default: "#FFFFFF"
    },
    button_text: {
      type: "string",
      default: "Click Me"
    },
    button_font_family: {
      type: "string",
      default: "Arial"
    },
    button_font_weight: {
      type: "string",
      default: 100
    },
    button_font_size: {
      type: "number",
      default: 18
    },
    button_styles: {
      type: "string",
      default: ""
    },
    button_url: {
      type: "string",
      default: "#"
    },
    button_new_tab: {
      type: "boolean",
      default: false
    },
    button_color_styles: {
      type: "string",
      default: ""
    }
  },
  example: {
    attributes: {
      preview: true
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;

    const selectTitleOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref2 => {
        let {
          name
        } = _ref2;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleTitleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.title_font_family.split("+").join(" ")]);

    const titleFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleTitleFontWeights !== "undefined" && typeof googleTitleFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleTitleFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const selectSubtitleOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref3 => {
        let {
          name
        } = _ref3;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleSubtitleFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.subtitle_font_family.split("+").join(" ")]);

    const subtitleFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleSubtitleFontWeights !== "undefined" && typeof googleSubtitleFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleSubtitleFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const selectButtonOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref4 => {
        let {
          name
        } = _ref4;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleButtonFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.button_font_family.split("+").join(" ")]);

    const buttonFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleButtonFontWeights !== "undefined" && typeof googleButtonFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleButtonFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const onSelectTitleFontFamily = value => {
      setAttributes({
        title_font_family: value
      });
      setAttributes({
        title_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectTitleFontWeight = value => {
      setAttributes({
        title_font_weight: value
      });
    };

    const onSelectSubtitleFontFamily = value => {
      setAttributes({
        subtitle_font_family: value
      });
      setAttributes({
        subtitle_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectSubtitleFontWeight = value => {
      setAttributes({
        subtitle_font_weight: value
      });
    };

    const onSelectButtonFontFamily = value => {
      setAttributes({
        button_font_family: value
      });
      setAttributes({
        button_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectButtonFontWeight = value => {
      setAttributes({
        button_font_weight: value
      });
    };

    const onSelectHoverColor = () => {
      setAttributes({
        button_color_styles: "<style>#afxBlockCard a:hover{background: " + attributes.button_hover_background_color + " !important;color: " + attributes.button_hover_text_color + " !important;}</style>"
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Global Settings", "gutpress"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Width", "gutpress"),
      value: attributes.width,
      onChange: width => setAttributes({
        width
      }),
      min: 100,
      max: 800,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Height", "gutpress"),
      value: attributes.height,
      onChange: height => setAttributes({
        height
      }),
      min: 100,
      max: 800,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Border Radius", "gutpress"),
      value: attributes.border_radius,
      onChange: border_radius => setAttributes({
        border_radius
      }),
      min: 0,
      max: 35,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: imageObject => {
        setAttributes({
          card_image: imageObject.sizes.full.url
        });
      },
      allowedTypes: "image",
      value: attributes.card_image,
      render: _ref5 => {
        let {
          open
        } = _ref5;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          variant: "primary",
          className: "image-button",
          onClick: open
        }, __(attributes.card_image ? "Update Card Image" : "Add Card Image", "gutpress"));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.background_color,
      onChange: background_color => setAttributes({
        background_color
      }),
      enableAlpha: true,
      defaultValue: attributes.background_color
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Heading", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.title_color,
      onChange: title_color => setAttributes({
        title_color
      }),
      defaultValue: attributes.title_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectTitleOptions(),
      value: attributes.title_font_family,
      onChange: n => onSelectTitleFontFamily(n)
    }), titleFontWeightOptions() && titleFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: titleFontWeightOptions(),
      value: attributes.title_font_weight,
      onChange: n => onSelectTitleFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.title_font_size,
      onChange: title_font_size => setAttributes({
        title_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Subheading", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.subtitle_color,
      onChange: subtitle_color => setAttributes({
        subtitle_color
      }),
      defaultValue: attributes.subtitle_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectSubtitleOptions(),
      value: attributes.subtitle_font_family,
      onChange: n => onSelectSubtitleFontFamily(n)
    }), subtitleFontWeightOptions() && subtitleFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: subtitleFontWeightOptions(),
      value: attributes.subtitle_font_weight,
      onChange: n => onSelectSubtitleFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.subtitle_font_size,
      onChange: subtitle_font_size => setAttributes({
        subtitle_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Button", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Show Button", "gutpress"),
      checked: attributes.show_button,
      onChange: show_button => setAttributes({
        show_button
      })
    }), attributes.show_button ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_background_color,
      onChange: button_background_color => setAttributes({
        button_background_color
      }),
      defaultValue: attributes.button_background_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_text_color,
      onChange: button_text_color => setAttributes({
        button_text_color
      }),
      defaultValue: attributes.button_text_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectButtonOptions(),
      value: attributes.button_font_family,
      onChange: n => onSelectButtonFontFamily(n)
    }), buttonFontWeightOptions() && buttonFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: buttonFontWeightOptions(),
      value: attributes.button_font_weight,
      onChange: n => onSelectButtonFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.button_font_size,
      onChange: button_font_size => setAttributes({
        button_font_size
      }),
      min: 14,
      max: 35,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Hover Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_hover_background_color,
      onChange: button_hover_background_color => {
        setAttributes({
          button_hover_background_color
        });
        onSelectHoverColor();
      },
      defaultValue: attributes.button_hover_background_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Hover Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.button_hover_text_color,
      onChange: button_hover_text_color => {
        setAttributes({
          button_hover_text_color
        });
        onSelectHoverColor();
      },
      defaultValue: attributes.button_hover_text_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(__experimentalInputControl, {
      label: __("URL", "gutpress"),
      value: attributes.button_url,
      onChange: button_url => setAttributes({
        button_url
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Open link in new Tab", "gutpress"),
      checked: attributes.button_new_tab,
      onChange: button_new_tab => setAttributes({
        button_new_tab
      })
    })) : "")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockCard",
      style: {
        width: attributes.width,
        height: attributes.height,
        borderRadius: attributes.border_radius + "px",
        backgroundColor: attributes.background_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.title_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.subtitle_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_color_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      class: "card-img-top",
      src: attributes.card_image,
      alt: attributes.title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "card-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      style: {
        fontFamily: attributes.title_font_family,
        fontWeight: attributes.title_font_weight,
        fontSize: attributes.title_font_size + "px",
        color: attributes.title_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.title,
      onChange: title => setAttributes({
        title
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        fontFamily: attributes.subtitle_font_family,
        fontWeight: attributes.subtitle_font_weight,
        fontSize: attributes.subtitle_font_size + "px",
        color: attributes.subtitle_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.subtitle,
      onChange: subtitle => setAttributes({
        subtitle
      })
    })), attributes.show_button ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: attributes.button_url,
      style: {
        backgroundColor: attributes.button_background_color,
        color: attributes.button_text_color,
        fontFamily: attributes.button_font_family,
        fontWeight: attributes.button_font_weight,
        fontSize: attributes.button_font_size
      },
      target: attributes.button_new_tab ? "_blank" : ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.button_text,
      onChange: button_text => setAttributes({
        button_text
      })
    })) : "")));
  },
  save: _ref6 => {
    let {
      attributes
    } = _ref6;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockCard",
      style: {
        width: attributes.width,
        height: attributes.height,
        borderRadius: attributes.border_radius + "px",
        backgroundColor: attributes.background_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.title_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.subtitle_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.button_color_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      class: "card-img-top",
      src: attributes.card_image,
      alt: attributes.title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "card-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      style: {
        fontFamily: attributes.title_font_family,
        fontWeight: attributes.title_font_weight,
        fontSize: attributes.title_font_size + "px",
        color: attributes.title_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.title
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        fontFamily: attributes.subtitle_font_family,
        fontWeight: attributes.subtitle_font_weight,
        fontSize: attributes.subtitle_font_size + "px",
        color: attributes.subtitle_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.subtitle
    })), attributes.show_button ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: attributes.button_url,
      style: {
        backgroundColor: attributes.button_background_color,
        color: attributes.button_text_color,
        fontFamily: attributes.button_font_family,
        fontWeight: attributes.button_font_weight,
        fontSize: attributes.button_font_size
      },
      target: attributes.button_new_tab ? "_blank" : "",
      rel: "noopener"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.button_text
    })) : "")));
  }
});

/***/ }),

/***/ "./src/testimonial/index.js":
/*!**********************************!*\
  !*** ./src/testimonial/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/google-fonts */ "./src/defaults/google-fonts.json");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaUpload
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  ColorPicker,
  RangeControl,
  SelectControl,
  Button
} = wp.components;


registerBlockType("gutpress/testimonial", {
  title: "Testimonial",
  category: "gutpress-blocks",
  icon: "id",
  description: "An honest endorsement of your product or service",
  attributes: {
    full_width: {
      type: "boolean",
      default: false
    },
    height: {
      type: "number",
      default: 250
    },
    background_image: {
      type: "string",
      default: "https://images.unsplash.com/photo-1550237330-a5d774594098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    background_position: {
      type: "string",
      default: "center"
    },
    overlay_color: {
      type: "string",
      default: "#00000080"
    },
    author_image: {
      type: "string",
      default: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=200"
    },
    author_image_width: {
      type: "number",
      default: 80
    },
    author_image_border_radius: {
      type: "number",
      default: 0
    },
    author: {
      type: "string",
      default: "John Doe"
    },
    text: {
      type: "string",
      default: "\"Your blog is going to look awesome with this plugin.\""
    },
    border_radius: {
      type: "number",
      default: 5
    },
    background_color: {
      type: "string",
      default: "#a94442"
    },
    author_color: {
      type: "string",
      default: "#FFFFFF"
    },
    author_font_family: {
      type: "string",
      default: "Arial"
    },
    author_font_weight: {
      type: "string",
      default: 600
    },
    author_font_size: {
      type: "number",
      default: 30
    },
    author_styles: {
      type: "string",
      default: ""
    },
    text_color: {
      type: "string",
      default: "#FFFFFF"
    },
    text_font_family: {
      type: "string",
      default: "Arial"
    },
    text_font_weight: {
      type: "string",
      default: 100
    },
    text_font_size: {
      type: "number",
      default: 20
    },
    text_styles: {
      type: "string",
      default: ""
    }
  },
  example: {
    attributes: {
      preview: true
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;

    const selectAuthorOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref2 => {
        let {
          name
        } = _ref2;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleAuthorFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.author_font_family.split("+").join(" ")]);

    const authorFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleAuthorFontWeights !== "undefined" && typeof googleAuthorFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleAuthorFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const selectTextOptions = () => {
      return [{
        label: __("Select Font", "gutpress"),
        value: ""
      }, {
        label: __("Arial", "gutpress"),
        value: "Arial"
      }, {
        label: __("Helvetica", "gutpress"),
        value: "Helvetica"
      }, {
        label: __("Times New Roman", "gutpress"),
        value: "Times New Roman"
      }, {
        label: __("Georgia", "gutpress"),
        value: "Georgia"
      }, ..._defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts.map(_ref3 => {
        let {
          name
        } = _ref3;
        return {
          label: name,
          value: name
        };
      })];
    };

    const googleTextFontWeights = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.find)(_defaults_google_fonts__WEBPACK_IMPORTED_MODULE_1__.fonts, ["name", attributes.text_font_family.split("+").join(" ")]);

    const textFontWeightOptions = () => {
      const fontWeights = [{
        label: __("Select Font Weight", "gutpress"),
        value: ""
      }];

      if (typeof googleTextFontWeights !== "undefined" && typeof googleTextFontWeights.weights !== "undefined") {
        (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(googleTextFontWeights.weights.split(","), weight => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({
              label: weight,
              value: parseInt(weight)
            });
          }
        });
      }

      return fontWeights;
    };

    const onSelectAuthorFontFamily = value => {
      setAttributes({
        author_font_family: value
      });
      setAttributes({
        author_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectAuthorFontWeight = value => {
      setAttributes({
        author_font_weight: value
      });
    };

    const onSelectTextFontFamily = value => {
      setAttributes({
        text_font_family: value
      });
      setAttributes({
        text_styles: "<style>@import url('https://fonts.googleapis.com/css?family=" + value.split(" ").join("+") + "&display=swap');</style>"
      });
    };

    const onSelectTextFontWeight = value => {
      setAttributes({
        text_font_weight: value
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "setting"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Global Settings", "gutpress"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Full Width", "gutpress"),
      checked: attributes.full_width,
      onChange: full_width => setAttributes({
        full_width
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Height", "gutpress"),
      value: attributes.height,
      onChange: height => setAttributes({
        height
      }),
      min: 100,
      max: 800,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: imageObject => {
        setAttributes({
          background_image: imageObject.sizes.full.url
        });
      },
      allowedTypes: "image",
      value: attributes.background_image,
      render: _ref4 => {
        let {
          open
        } = _ref4;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          variant: "primary",
          className: "image-button",
          onClick: open
        }, __(attributes.background_image ? "Update Background Image" : "Add Background Image", "gutpress"));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), attributes.background_image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      variant: "secondary",
      className: "image-button",
      onClick: () => {
        setAttributes({
          background_image: ""
        });
      }
    }, __("Remove Background Image", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)) : "", attributes.background_image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Background Position", "gutpress"),
      value: attributes.background_position,
      options: [{
        label: "Center",
        value: "Center"
      }, {
        label: "Top",
        value: "Top"
      }, {
        label: "Bottom",
        value: "Bottom"
      }],
      onChange: background_position => setAttributes({
        background_position
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Overlay Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.overlay_color,
      onChange: overlay_color => setAttributes({
        overlay_color
      }),
      enableAlpha: true,
      defaultValue: attributes.overlay_color
    })) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Background Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.background_color,
      onChange: background_color => setAttributes({
        background_color
      }),
      enableAlpha: true,
      defaultValue: attributes.background_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Border Radius", "gutpress"),
      value: attributes.border_radius,
      onChange: border_radius => setAttributes({
        border_radius
      }),
      min: 0,
      max: 35,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Text", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.text_color,
      onChange: text_color => setAttributes({
        text_color
      }),
      defaultValue: attributes.text_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectTextOptions(),
      value: attributes.text_font_family,
      onChange: n => onSelectTextFontFamily(n)
    }), textFontWeightOptions() && textFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: textFontWeightOptions(),
      value: attributes.text_font_weight,
      onChange: n => onSelectTextFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Font Size", "gutpress"),
      value: attributes.text_font_size,
      onChange: text_font_size => setAttributes({
        text_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Author", "gutpress"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: imageObject => {
        setAttributes({
          author_image: imageObject.sizes.full.url
        });
      },
      allowedTypes: "image",
      value: attributes.author_image,
      render: _ref5 => {
        let {
          open
        } = _ref5;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          variant: "primary",
          className: "image-button",
          onClick: open
        }, __(attributes.author_image ? "Update Author Image" : "Add Author Image", "gutpress"));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Image Width", "gutpress"),
      value: attributes.author_image_width,
      onChange: author_image_width => setAttributes({
        author_image_width
      }),
      min: 80,
      max: 200,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Image Border Radius", "gutpress"),
      value: attributes.author_image_border_radius,
      onChange: author_image_border_radius => setAttributes({
        author_image_border_radius
      }),
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __("Text Color", "gutpress")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.author_color,
      onChange: author_color => setAttributes({
        author_color
      }),
      defaultValue: attributes.author_color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Family", "gutpress"),
      options: selectAuthorOptions(),
      value: attributes.author_font_family,
      onChange: n => onSelectAuthorFontFamily(n)
    }), authorFontWeightOptions() && authorFontWeightOptions().length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Font Weight", "gutpress"),
      options: authorFontWeightOptions(),
      value: attributes.author_font_weight,
      onChange: n => onSelectAuthorFontWeight(n)
    }) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Author Font Size", "gutpress"),
      value: attributes.author_font_size,
      onChange: author_font_size => setAttributes({
        author_font_size
      }),
      min: 14,
      max: 100,
      step: 1
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockTestimonial",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        textAlign: attributes.alignment,
        backgroundColor: attributes.background_color,
        backgroundImage: "url(" + attributes.background_image + ")",
        backgroundPosition: attributes.background_position,
        height: attributes.height,
        boxShadow: "inset 0 0 0 2000px " + attributes.overlay_color,
        textAlign: attributes.alignment,
        borderRadius: attributes.border_radius + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.author_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.text_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.author_image,
      alt: attributes.author,
      style: {
        maxWidth: attributes.author_image_width,
        borderRadius: attributes.author_image_border_radius
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        fontFamily: attributes.text_font_family,
        fontWeight: attributes.text_font_weight,
        fontSize: attributes.text_font_size + "px",
        color: attributes.text_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.text,
      onChange: text => setAttributes({
        text
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      style: {
        fontFamily: attributes.author_font_family,
        fontWeight: attributes.author_font_weight,
        fontSize: attributes.author_font_size + "px",
        color: attributes.author_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: attributes.author,
      onChange: author => setAttributes({
        author
      })
    }))));
  },
  save: _ref6 => {
    let {
      attributes
    } = _ref6;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "afxBlockTestimonial",
      class: attributes.full_width ? "afx-block-full-width" : "",
      style: {
        backgroundColor: attributes.background_color,
        backgroundImage: "url(" + attributes.background_image + ")",
        backgroundPosition: attributes.background_position,
        height: attributes.height,
        boxShadow: "inset 0 0 0 2000px " + attributes.overlay_color,
        textAlign: attributes.alignment,
        borderRadius: attributes.border_radius + "px"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.author_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      dangerouslySetInnerHTML: {
        __html: attributes.text_styles
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributes.author_image,
      alt: attributes.author,
      style: {
        maxWidth: attributes.author_image_width,
        borderRadius: attributes.author_image_border_radius
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        fontFamily: attributes.text_font_family,
        fontWeight: attributes.text_font_weight,
        fontSize: attributes.text_font_size + "px",
        color: attributes.text_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.text
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      style: {
        fontFamily: attributes.author_font_family,
        fontWeight: attributes.author_font_weight,
        fontSize: attributes.author_font_size + "px",
        color: attributes.author_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: attributes.author
    }))));
  }
});

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/defaults/google-fonts.json":
/*!****************************************!*\
  !*** ./src/defaults/google-fonts.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"fonts":[{"name":"ABeeZee","font-family":"\'ABeeZee\', sans-serif","weights":"400"},{"name":"Abel","font-family":"\'Abel\', sans-serif","weights":"400"},{"name":"Abhaya Libre","font-family":"\'Abhaya Libre\', serif","weights":"400,500,600,700,800"},{"name":"Abril Fatface","font-family":"\'Abril Fatface\', display","weights":"400"},{"name":"Aclonica","font-family":"\'Aclonica\', sans-serif","weights":"400"},{"name":"Acme","font-family":"\'Acme\', sans-serif","weights":"400"},{"name":"Actor","font-family":"\'Actor\', sans-serif","weights":"400"},{"name":"Adamina","font-family":"\'Adamina\', serif","weights":"400"},{"name":"Advent Pro","font-family":"\'Advent Pro\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"Aguafina Script","font-family":"\'Aguafina Script\', handwriting","weights":"400"},{"name":"Akaya Kanadaka","font-family":"\'Akaya Kanadaka\', display","weights":"400"},{"name":"Akaya Telivigala","font-family":"\'Akaya Telivigala\', display","weights":"400"},{"name":"Akronim","font-family":"\'Akronim\', display","weights":"400"},{"name":"Aladin","font-family":"\'Aladin\', handwriting","weights":"400"},{"name":"Alata","font-family":"\'Alata\', sans-serif","weights":"400"},{"name":"Alatsi","font-family":"\'Alatsi\', sans-serif","weights":"400"},{"name":"Aldrich","font-family":"\'Aldrich\', sans-serif","weights":"400"},{"name":"Alef","font-family":"\'Alef\', sans-serif","weights":"400,700"},{"name":"Alegreya","font-family":"\'Alegreya\', serif","weights":"400,500,600,700,800,900"},{"name":"Alegreya SC","font-family":"\'Alegreya SC\', serif","weights":"400,500,700,800,900"},{"name":"Alegreya Sans","font-family":"\'Alegreya Sans\', sans-serif","weights":"100,300,400,500,700,800,900"},{"name":"Alegreya Sans SC","font-family":"\'Alegreya Sans SC\', sans-serif","weights":"100,300,400,500,700,800,900"},{"name":"Aleo","font-family":"\'Aleo\', serif","weights":"300,400,700"},{"name":"Alex Brush","font-family":"\'Alex Brush\', handwriting","weights":"400"},{"name":"Alfa Slab One","font-family":"\'Alfa Slab One\', display","weights":"400"},{"name":"Alice","font-family":"\'Alice\', serif","weights":"400"},{"name":"Alike","font-family":"\'Alike\', serif","weights":"400"},{"name":"Alike Angular","font-family":"\'Alike Angular\', serif","weights":"400"},{"name":"Allan","font-family":"\'Allan\', display","weights":"400,700"},{"name":"Allerta","font-family":"\'Allerta\', sans-serif","weights":"400"},{"name":"Allerta Stencil","font-family":"\'Allerta Stencil\', sans-serif","weights":"400"},{"name":"Allison","font-family":"\'Allison\', handwriting","weights":"400"},{"name":"Allura","font-family":"\'Allura\', handwriting","weights":"400"},{"name":"Almarai","font-family":"\'Almarai\', sans-serif","weights":"300,400,700,800"},{"name":"Almendra","font-family":"\'Almendra\', serif","weights":"400,700"},{"name":"Almendra Display","font-family":"\'Almendra Display\', display","weights":"400"},{"name":"Almendra SC","font-family":"\'Almendra SC\', serif","weights":"400"},{"name":"Alumni Sans","font-family":"\'Alumni Sans\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Amarante","font-family":"\'Amarante\', display","weights":"400"},{"name":"Amaranth","font-family":"\'Amaranth\', sans-serif","weights":"400,700"},{"name":"Amatic SC","font-family":"\'Amatic SC\', handwriting","weights":"400,700"},{"name":"Amethysta","font-family":"\'Amethysta\', serif","weights":"400"},{"name":"Amiko","font-family":"\'Amiko\', sans-serif","weights":"400,600,700"},{"name":"Amiri","font-family":"\'Amiri\', serif","weights":"400,700"},{"name":"Amita","font-family":"\'Amita\', handwriting","weights":"400,700"},{"name":"Anaheim","font-family":"\'Anaheim\', sans-serif","weights":"400"},{"name":"Andada Pro","font-family":"\'Andada Pro\', serif","weights":"400,500,600,700,800"},{"name":"Andika","font-family":"\'Andika\', sans-serif","weights":"400"},{"name":"Andika New Basic","font-family":"\'Andika New Basic\', sans-serif","weights":"400,700"},{"name":"Angkor","font-family":"\'Angkor\', display","weights":"400"},{"name":"Annie Use Your Telescope","font-family":"\'Annie Use Your Telescope\', handwriting","weights":"400"},{"name":"Anonymous Pro","font-family":"\'Anonymous Pro\', monospace","weights":"400,700"},{"name":"Antic","font-family":"\'Antic\', sans-serif","weights":"400"},{"name":"Antic Didone","font-family":"\'Antic Didone\', serif","weights":"400"},{"name":"Antic Slab","font-family":"\'Antic Slab\', serif","weights":"400"},{"name":"Anton","font-family":"\'Anton\', sans-serif","weights":"400"},{"name":"Antonio","font-family":"\'Antonio\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"Arapey","font-family":"\'Arapey\', serif","weights":"400"},{"name":"Arbutus","font-family":"\'Arbutus\', display","weights":"400"},{"name":"Arbutus Slab","font-family":"\'Arbutus Slab\', serif","weights":"400"},{"name":"Architects Daughter","font-family":"\'Architects Daughter\', handwriting","weights":"400"},{"name":"Archivo","font-family":"\'Archivo\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Archivo Black","font-family":"\'Archivo Black\', sans-serif","weights":"400"},{"name":"Archivo Narrow","font-family":"\'Archivo Narrow\', sans-serif","weights":"400,500,600,700"},{"name":"Are You Serious","font-family":"\'Are You Serious\', handwriting","weights":"400"},{"name":"Aref Ruqaa","font-family":"\'Aref Ruqaa\', serif","weights":"400,700"},{"name":"Arima Madurai","font-family":"\'Arima Madurai\', display","weights":"100,200,300,400,500,700,800,900"},{"name":"Arimo","font-family":"\'Arimo\', sans-serif","weights":"400,500,600,700"},{"name":"Arizonia","font-family":"\'Arizonia\', handwriting","weights":"400"},{"name":"Armata","font-family":"\'Armata\', sans-serif","weights":"400"},{"name":"Arsenal","font-family":"\'Arsenal\', sans-serif","weights":"400,700"},{"name":"Artifika","font-family":"\'Artifika\', serif","weights":"400"},{"name":"Arvo","font-family":"\'Arvo\', serif","weights":"400,700"},{"name":"Arya","font-family":"\'Arya\', sans-serif","weights":"400,700"},{"name":"Asap","font-family":"\'Asap\', sans-serif","weights":"400,500,600,700"},{"name":"Asap Condensed","font-family":"\'Asap Condensed\', sans-serif","weights":"400,500,600,700"},{"name":"Asar","font-family":"\'Asar\', serif","weights":"400"},{"name":"Asset","font-family":"\'Asset\', display","weights":"400"},{"name":"Assistant","font-family":"\'Assistant\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Astloch","font-family":"\'Astloch\', display","weights":"400,700"},{"name":"Asul","font-family":"\'Asul\', sans-serif","weights":"400,700"},{"name":"Athiti","font-family":"\'Athiti\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Atkinson Hyperlegible","font-family":"\'Atkinson Hyperlegible\', sans-serif","weights":"400,700"},{"name":"Atma","font-family":"\'Atma\', display","weights":"300,400,500,600,700"},{"name":"Atomic Age","font-family":"\'Atomic Age\', display","weights":"400"},{"name":"Aubrey","font-family":"\'Aubrey\', display","weights":"400"},{"name":"Audiowide","font-family":"\'Audiowide\', display","weights":"400"},{"name":"Autour One","font-family":"\'Autour One\', display","weights":"400"},{"name":"Average","font-family":"\'Average\', serif","weights":"400"},{"name":"Average Sans","font-family":"\'Average Sans\', sans-serif","weights":"400"},{"name":"Averia Gruesa Libre","font-family":"\'Averia Gruesa Libre\', display","weights":"400"},{"name":"Averia Libre","font-family":"\'Averia Libre\', display","weights":"300,400,700"},{"name":"Averia Sans Libre","font-family":"\'Averia Sans Libre\', display","weights":"300,400,700"},{"name":"Averia Serif Libre","font-family":"\'Averia Serif Libre\', display","weights":"300,400,700"},{"name":"Azeret Mono","font-family":"\'Azeret Mono\', monospace","weights":"100,200,300,400,500,600,700,800,900"},{"name":"B612","font-family":"\'B612\', sans-serif","weights":"400,700"},{"name":"B612 Mono","font-family":"\'B612 Mono\', monospace","weights":"400,700"},{"name":"Bad Script","font-family":"\'Bad Script\', handwriting","weights":"400"},{"name":"Bahiana","font-family":"\'Bahiana\', display","weights":"400"},{"name":"Bahianita","font-family":"\'Bahianita\', display","weights":"400"},{"name":"Bai Jamjuree","font-family":"\'Bai Jamjuree\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Ballet","font-family":"\'Ballet\', handwriting","weights":"400"},{"name":"Baloo 2","font-family":"\'Baloo 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Bhai 2","font-family":"\'Baloo Bhai 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Bhaina 2","font-family":"\'Baloo Bhaina 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Chettan 2","font-family":"\'Baloo Chettan 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Da 2","font-family":"\'Baloo Da 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Paaji 2","font-family":"\'Baloo Paaji 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Tamma 2","font-family":"\'Baloo Tamma 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Tammudu 2","font-family":"\'Baloo Tammudu 2\', display","weights":"400,500,600,700,800"},{"name":"Baloo Thambi 2","font-family":"\'Baloo Thambi 2\', display","weights":"400,500,600,700,800"},{"name":"Balsamiq Sans","font-family":"\'Balsamiq Sans\', display","weights":"400,700"},{"name":"Balthazar","font-family":"\'Balthazar\', serif","weights":"400"},{"name":"Bangers","font-family":"\'Bangers\', display","weights":"400"},{"name":"Barlow","font-family":"\'Barlow\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Barlow Condensed","font-family":"\'Barlow Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Barlow Semi Condensed","font-family":"\'Barlow Semi Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Barriecito","font-family":"\'Barriecito\', display","weights":"400"},{"name":"Barrio","font-family":"\'Barrio\', display","weights":"400"},{"name":"Basic","font-family":"\'Basic\', sans-serif","weights":"400"},{"name":"Baskervville","font-family":"\'Baskervville\', serif","weights":"400"},{"name":"Battambang","font-family":"\'Battambang\', display","weights":"100,300,400,700,900"},{"name":"Baumans","font-family":"\'Baumans\', display","weights":"400"},{"name":"Bayon","font-family":"\'Bayon\', sans-serif","weights":"400"},{"name":"Be Vietnam","font-family":"\'Be Vietnam\', sans-serif","weights":"100,300,400,500,600,700,800"},{"name":"Be Vietnam Pro","font-family":"\'Be Vietnam Pro\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Bebas Neue","font-family":"\'Bebas Neue\', display","weights":"400"},{"name":"Belgrano","font-family":"\'Belgrano\', serif","weights":"400"},{"name":"Bellefair","font-family":"\'Bellefair\', serif","weights":"400"},{"name":"Belleza","font-family":"\'Belleza\', sans-serif","weights":"400"},{"name":"Bellota","font-family":"\'Bellota\', display","weights":"300,400,700"},{"name":"Bellota Text","font-family":"\'Bellota Text\', display","weights":"300,400,700"},{"name":"BenchNine","font-family":"\'BenchNine\', sans-serif","weights":"300,400,700"},{"name":"Benne","font-family":"\'Benne\', serif","weights":"400"},{"name":"Bentham","font-family":"\'Bentham\', serif","weights":"400"},{"name":"Berkshire Swash","font-family":"\'Berkshire Swash\', handwriting","weights":"400"},{"name":"Besley","font-family":"\'Besley\', serif","weights":"400,500,600,700,800,900"},{"name":"Beth Ellen","font-family":"\'Beth Ellen\', handwriting","weights":"400"},{"name":"Bevan","font-family":"\'Bevan\', display","weights":"400"},{"name":"Big Shoulders Display","font-family":"\'Big Shoulders Display\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Big Shoulders Inline Display","font-family":"\'Big Shoulders Inline Display\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Big Shoulders Inline Text","font-family":"\'Big Shoulders Inline Text\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Big Shoulders Stencil Display","font-family":"\'Big Shoulders Stencil Display\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Big Shoulders Stencil Text","font-family":"\'Big Shoulders Stencil Text\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Big Shoulders Text","font-family":"\'Big Shoulders Text\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Bigelow Rules","font-family":"\'Bigelow Rules\', display","weights":"400"},{"name":"Bigshot One","font-family":"\'Bigshot One\', display","weights":"400"},{"name":"Bilbo","font-family":"\'Bilbo\', handwriting","weights":"400"},{"name":"Bilbo Swash Caps","font-family":"\'Bilbo Swash Caps\', handwriting","weights":"400"},{"name":"BioRhyme","font-family":"\'BioRhyme\', serif","weights":"200,300,400,700,800"},{"name":"BioRhyme Expanded","font-family":"\'BioRhyme Expanded\', serif","weights":"200,300,400,700,800"},{"name":"Birthstone","font-family":"\'Birthstone\', handwriting","weights":"400"},{"name":"Birthstone Bounce","font-family":"\'Birthstone Bounce\', handwriting","weights":"400,500"},{"name":"Biryani","font-family":"\'Biryani\', sans-serif","weights":"200,300,400,600,700,800,900"},{"name":"Bitter","font-family":"\'Bitter\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Black And White Picture","font-family":"\'Black And White Picture\', sans-serif","weights":"400"},{"name":"Black Han Sans","font-family":"\'Black Han Sans\', sans-serif","weights":"400"},{"name":"Black Ops One","font-family":"\'Black Ops One\', display","weights":"400"},{"name":"Blinker","font-family":"\'Blinker\', sans-serif","weights":"100,200,300,400,600,700,800,900"},{"name":"Bodoni Moda","font-family":"\'Bodoni Moda\', serif","weights":"400,500,600,700,800,900"},{"name":"Bokor","font-family":"\'Bokor\', display","weights":"400"},{"name":"Bona Nova","font-family":"\'Bona Nova\', serif","weights":"400,700"},{"name":"Bonbon","font-family":"\'Bonbon\', handwriting","weights":"400"},{"name":"Bonheur Royale","font-family":"\'Bonheur Royale\', handwriting","weights":"400"},{"name":"Boogaloo","font-family":"\'Boogaloo\', display","weights":"400"},{"name":"Bowlby One","font-family":"\'Bowlby One\', display","weights":"400"},{"name":"Bowlby One SC","font-family":"\'Bowlby One SC\', display","weights":"400"},{"name":"Brawler","font-family":"\'Brawler\', serif","weights":"400"},{"name":"Bree Serif","font-family":"\'Bree Serif\', serif","weights":"400"},{"name":"Brygada 1918","font-family":"\'Brygada 1918\', serif","weights":"400,500,600,700"},{"name":"Bubblegum Sans","font-family":"\'Bubblegum Sans\', display","weights":"400"},{"name":"Bubbler One","font-family":"\'Bubbler One\', sans-serif","weights":"400"},{"name":"Buda","font-family":"\'Buda\', display","weights":"300"},{"name":"Buenard","font-family":"\'Buenard\', serif","weights":"400,700"},{"name":"Bungee","font-family":"\'Bungee\', display","weights":"400"},{"name":"Bungee Hairline","font-family":"\'Bungee Hairline\', display","weights":"400"},{"name":"Bungee Inline","font-family":"\'Bungee Inline\', display","weights":"400"},{"name":"Bungee Outline","font-family":"\'Bungee Outline\', display","weights":"400"},{"name":"Bungee Shade","font-family":"\'Bungee Shade\', display","weights":"400"},{"name":"Butcherman","font-family":"\'Butcherman\', display","weights":"400"},{"name":"Butterfly Kids","font-family":"\'Butterfly Kids\', handwriting","weights":"400"},{"name":"Cabin","font-family":"\'Cabin\', sans-serif","weights":"400,500,600,700"},{"name":"Cabin Condensed","font-family":"\'Cabin Condensed\', sans-serif","weights":"400,500,600,700"},{"name":"Cabin Sketch","font-family":"\'Cabin Sketch\', display","weights":"400,700"},{"name":"Caesar Dressing","font-family":"\'Caesar Dressing\', display","weights":"400"},{"name":"Cagliostro","font-family":"\'Cagliostro\', sans-serif","weights":"400"},{"name":"Cairo","font-family":"\'Cairo\', sans-serif","weights":"200,300,400,600,700,900"},{"name":"Caladea","font-family":"\'Caladea\', serif","weights":"400,700"},{"name":"Calistoga","font-family":"\'Calistoga\', display","weights":"400"},{"name":"Calligraffitti","font-family":"\'Calligraffitti\', handwriting","weights":"400"},{"name":"Cambay","font-family":"\'Cambay\', sans-serif","weights":"400,700"},{"name":"Cambo","font-family":"\'Cambo\', serif","weights":"400"},{"name":"Candal","font-family":"\'Candal\', sans-serif","weights":"400"},{"name":"Cantarell","font-family":"\'Cantarell\', sans-serif","weights":"400,700"},{"name":"Cantata One","font-family":"\'Cantata One\', serif","weights":"400"},{"name":"Cantora One","font-family":"\'Cantora One\', sans-serif","weights":"400"},{"name":"Capriola","font-family":"\'Capriola\', sans-serif","weights":"400"},{"name":"Caramel","font-family":"\'Caramel\', handwriting","weights":"400"},{"name":"Carattere","font-family":"\'Carattere\', handwriting","weights":"400"},{"name":"Cardo","font-family":"\'Cardo\', serif","weights":"400,700"},{"name":"Carme","font-family":"\'Carme\', sans-serif","weights":"400"},{"name":"Carrois Gothic","font-family":"\'Carrois Gothic\', sans-serif","weights":"400"},{"name":"Carrois Gothic SC","font-family":"\'Carrois Gothic SC\', sans-serif","weights":"400"},{"name":"Carter One","font-family":"\'Carter One\', display","weights":"400"},{"name":"Castoro","font-family":"\'Castoro\', serif","weights":"400"},{"name":"Catamaran","font-family":"\'Catamaran\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Caudex","font-family":"\'Caudex\', serif","weights":"400,700"},{"name":"Caveat","font-family":"\'Caveat\', handwriting","weights":"400,500,600,700"},{"name":"Caveat Brush","font-family":"\'Caveat Brush\', handwriting","weights":"400"},{"name":"Cedarville Cursive","font-family":"\'Cedarville Cursive\', handwriting","weights":"400"},{"name":"Ceviche One","font-family":"\'Ceviche One\', display","weights":"400"},{"name":"Chakra Petch","font-family":"\'Chakra Petch\', sans-serif","weights":"300,400,500,600,700"},{"name":"Changa","font-family":"\'Changa\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Changa One","font-family":"\'Changa One\', display","weights":"400"},{"name":"Chango","font-family":"\'Chango\', display","weights":"400"},{"name":"Charm","font-family":"\'Charm\', handwriting","weights":"400,700"},{"name":"Charmonman","font-family":"\'Charmonman\', handwriting","weights":"400,700"},{"name":"Chathura","font-family":"\'Chathura\', sans-serif","weights":"100,300,400,700,800"},{"name":"Chau Philomene One","font-family":"\'Chau Philomene One\', sans-serif","weights":"400"},{"name":"Chela One","font-family":"\'Chela One\', display","weights":"400"},{"name":"Chelsea Market","font-family":"\'Chelsea Market\', display","weights":"400"},{"name":"Chenla","font-family":"\'Chenla\', display","weights":"400"},{"name":"Cherish","font-family":"\'Cherish\', handwriting","weights":"400"},{"name":"Cherry Cream Soda","font-family":"\'Cherry Cream Soda\', display","weights":"400"},{"name":"Cherry Swash","font-family":"\'Cherry Swash\', display","weights":"400,700"},{"name":"Chewy","font-family":"\'Chewy\', display","weights":"400"},{"name":"Chicle","font-family":"\'Chicle\', display","weights":"400"},{"name":"Chilanka","font-family":"\'Chilanka\', handwriting","weights":"400"},{"name":"Chivo","font-family":"\'Chivo\', sans-serif","weights":"300,400,700,900"},{"name":"Chonburi","font-family":"\'Chonburi\', display","weights":"400"},{"name":"Cinzel","font-family":"\'Cinzel\', serif","weights":"400,500,600,700,800,900"},{"name":"Cinzel Decorative","font-family":"\'Cinzel Decorative\', display","weights":"400,700,900"},{"name":"Clicker Script","font-family":"\'Clicker Script\', handwriting","weights":"400"},{"name":"Coda","font-family":"\'Coda\', display","weights":"400,800"},{"name":"Coda Caption","font-family":"\'Coda Caption\', sans-serif","weights":"800"},{"name":"Codystar","font-family":"\'Codystar\', display","weights":"300,400"},{"name":"Coiny","font-family":"\'Coiny\', display","weights":"400"},{"name":"Combo","font-family":"\'Combo\', display","weights":"400"},{"name":"Comfortaa","font-family":"\'Comfortaa\', display","weights":"300,400,500,600,700"},{"name":"Comic Neue","font-family":"\'Comic Neue\', handwriting","weights":"300,400,700"},{"name":"Coming Soon","font-family":"\'Coming Soon\', handwriting","weights":"400"},{"name":"Commissioner","font-family":"\'Commissioner\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Concert One","font-family":"\'Concert One\', display","weights":"400"},{"name":"Condiment","font-family":"\'Condiment\', handwriting","weights":"400"},{"name":"Content","font-family":"\'Content\', display","weights":"400,700"},{"name":"Contrail One","font-family":"\'Contrail One\', display","weights":"400"},{"name":"Convergence","font-family":"\'Convergence\', sans-serif","weights":"400"},{"name":"Cookie","font-family":"\'Cookie\', handwriting","weights":"400"},{"name":"Copse","font-family":"\'Copse\', serif","weights":"400"},{"name":"Corben","font-family":"\'Corben\', display","weights":"400,700"},{"name":"Cormorant","font-family":"\'Cormorant\', serif","weights":"300,400,500,600,700"},{"name":"Cormorant Garamond","font-family":"\'Cormorant Garamond\', serif","weights":"300,400,500,600,700"},{"name":"Cormorant Infant","font-family":"\'Cormorant Infant\', serif","weights":"300,400,500,600,700"},{"name":"Cormorant SC","font-family":"\'Cormorant SC\', serif","weights":"300,400,500,600,700"},{"name":"Cormorant Unicase","font-family":"\'Cormorant Unicase\', serif","weights":"300,400,500,600,700"},{"name":"Cormorant Upright","font-family":"\'Cormorant Upright\', serif","weights":"300,400,500,600,700"},{"name":"Courgette","font-family":"\'Courgette\', handwriting","weights":"400"},{"name":"Courier Prime","font-family":"\'Courier Prime\', monospace","weights":"400,700"},{"name":"Cousine","font-family":"\'Cousine\', monospace","weights":"400,700"},{"name":"Coustard","font-family":"\'Coustard\', serif","weights":"400,900"},{"name":"Covered By Your Grace","font-family":"\'Covered By Your Grace\', handwriting","weights":"400"},{"name":"Crafty Girls","font-family":"\'Crafty Girls\', handwriting","weights":"400"},{"name":"Creepster","font-family":"\'Creepster\', display","weights":"400"},{"name":"Crete Round","font-family":"\'Crete Round\', serif","weights":"400"},{"name":"Crimson Pro","font-family":"\'Crimson Pro\', serif","weights":"200,300,400,500,600,700,800,900"},{"name":"Crimson Text","font-family":"\'Crimson Text\', serif","weights":"400,600,700"},{"name":"Croissant One","font-family":"\'Croissant One\', display","weights":"400"},{"name":"Crushed","font-family":"\'Crushed\', display","weights":"400"},{"name":"Cuprum","font-family":"\'Cuprum\', sans-serif","weights":"400,500,600,700"},{"name":"Cute Font","font-family":"\'Cute Font\', display","weights":"400"},{"name":"Cutive","font-family":"\'Cutive\', serif","weights":"400"},{"name":"Cutive Mono","font-family":"\'Cutive Mono\', monospace","weights":"400"},{"name":"DM Mono","font-family":"\'DM Mono\', monospace","weights":"300,400,500"},{"name":"DM Sans","font-family":"\'DM Sans\', sans-serif","weights":"400,500,700"},{"name":"DM Serif Display","font-family":"\'DM Serif Display\', serif","weights":"400"},{"name":"DM Serif Text","font-family":"\'DM Serif Text\', serif","weights":"400"},{"name":"Damion","font-family":"\'Damion\', handwriting","weights":"400"},{"name":"Dancing Script","font-family":"\'Dancing Script\', handwriting","weights":"400,500,600,700"},{"name":"Dangrek","font-family":"\'Dangrek\', display","weights":"400"},{"name":"Darker Grotesque","font-family":"\'Darker Grotesque\', sans-serif","weights":"300,400,500,600,700,800,900"},{"name":"David Libre","font-family":"\'David Libre\', serif","weights":"400,500,700"},{"name":"Dawning of a New Day","font-family":"\'Dawning of a New Day\', handwriting","weights":"400"},{"name":"Days One","font-family":"\'Days One\', sans-serif","weights":"400"},{"name":"Dekko","font-family":"\'Dekko\', handwriting","weights":"400"},{"name":"Dela Gothic One","font-family":"\'Dela Gothic One\', display","weights":"400"},{"name":"Delius","font-family":"\'Delius\', handwriting","weights":"400"},{"name":"Delius Swash Caps","font-family":"\'Delius Swash Caps\', handwriting","weights":"400"},{"name":"Delius Unicase","font-family":"\'Delius Unicase\', handwriting","weights":"400,700"},{"name":"Della Respira","font-family":"\'Della Respira\', serif","weights":"400"},{"name":"Denk One","font-family":"\'Denk One\', sans-serif","weights":"400"},{"name":"Devonshire","font-family":"\'Devonshire\', handwriting","weights":"400"},{"name":"Dhurjati","font-family":"\'Dhurjati\', sans-serif","weights":"400"},{"name":"Didact Gothic","font-family":"\'Didact Gothic\', sans-serif","weights":"400"},{"name":"Diplomata","font-family":"\'Diplomata\', display","weights":"400"},{"name":"Diplomata SC","font-family":"\'Diplomata SC\', display","weights":"400"},{"name":"Do Hyeon","font-family":"\'Do Hyeon\', sans-serif","weights":"400"},{"name":"Dokdo","font-family":"\'Dokdo\', handwriting","weights":"400"},{"name":"Domine","font-family":"\'Domine\', serif","weights":"400,500,600,700"},{"name":"Donegal One","font-family":"\'Donegal One\', serif","weights":"400"},{"name":"Doppio One","font-family":"\'Doppio One\', sans-serif","weights":"400"},{"name":"Dorsa","font-family":"\'Dorsa\', sans-serif","weights":"400"},{"name":"Dosis","font-family":"\'Dosis\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"DotGothic16","font-family":"\'DotGothic16\', sans-serif","weights":"400"},{"name":"Dr Sugiyama","font-family":"\'Dr Sugiyama\', handwriting","weights":"400"},{"name":"Duru Sans","font-family":"\'Duru Sans\', sans-serif","weights":"400"},{"name":"Dynalight","font-family":"\'Dynalight\', display","weights":"400"},{"name":"EB Garamond","font-family":"\'EB Garamond\', serif","weights":"400,500,600,700,800"},{"name":"Eagle Lake","font-family":"\'Eagle Lake\', handwriting","weights":"400"},{"name":"East Sea Dokdo","font-family":"\'East Sea Dokdo\', handwriting","weights":"400"},{"name":"Eater","font-family":"\'Eater\', display","weights":"400"},{"name":"Economica","font-family":"\'Economica\', sans-serif","weights":"400,700"},{"name":"Eczar","font-family":"\'Eczar\', serif","weights":"400,500,600,700,800"},{"name":"El Messiri","font-family":"\'El Messiri\', sans-serif","weights":"400,500,600,700"},{"name":"Electrolize","font-family":"\'Electrolize\', sans-serif","weights":"400"},{"name":"Elsie","font-family":"\'Elsie\', display","weights":"400,900"},{"name":"Elsie Swash Caps","font-family":"\'Elsie Swash Caps\', display","weights":"400,900"},{"name":"Emblema One","font-family":"\'Emblema One\', display","weights":"400"},{"name":"Emilys Candy","font-family":"\'Emilys Candy\', display","weights":"400"},{"name":"Encode Sans","font-family":"\'Encode Sans\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Encode Sans Condensed","font-family":"\'Encode Sans Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Encode Sans Expanded","font-family":"\'Encode Sans Expanded\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Encode Sans SC","font-family":"\'Encode Sans SC\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Encode Sans Semi Condensed","font-family":"\'Encode Sans Semi Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Encode Sans Semi Expanded","font-family":"\'Encode Sans Semi Expanded\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Engagement","font-family":"\'Engagement\', handwriting","weights":"400"},{"name":"Englebert","font-family":"\'Englebert\', sans-serif","weights":"400"},{"name":"Enriqueta","font-family":"\'Enriqueta\', serif","weights":"400,500,600,700"},{"name":"Ephesis","font-family":"\'Ephesis\', handwriting","weights":"400"},{"name":"Epilogue","font-family":"\'Epilogue\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Erica One","font-family":"\'Erica One\', display","weights":"400"},{"name":"Esteban","font-family":"\'Esteban\', serif","weights":"400"},{"name":"Euphoria Script","font-family":"\'Euphoria Script\', handwriting","weights":"400"},{"name":"Ewert","font-family":"\'Ewert\', display","weights":"400"},{"name":"Exo","font-family":"\'Exo\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Exo 2","font-family":"\'Exo 2\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Expletus Sans","font-family":"\'Expletus Sans\', display","weights":"400,500,600,700"},{"name":"Explora","font-family":"\'Explora\', handwriting","weights":"400"},{"name":"Fahkwang","font-family":"\'Fahkwang\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Fanwood Text","font-family":"\'Fanwood Text\', serif","weights":"400"},{"name":"Farro","font-family":"\'Farro\', sans-serif","weights":"300,400,500,700"},{"name":"Farsan","font-family":"\'Farsan\', display","weights":"400"},{"name":"Fascinate","font-family":"\'Fascinate\', display","weights":"400"},{"name":"Fascinate Inline","font-family":"\'Fascinate Inline\', display","weights":"400"},{"name":"Faster One","font-family":"\'Faster One\', display","weights":"400"},{"name":"Fasthand","font-family":"\'Fasthand\', display","weights":"400"},{"name":"Fauna One","font-family":"\'Fauna One\', serif","weights":"400"},{"name":"Faustina","font-family":"\'Faustina\', serif","weights":"400,500,600,700"},{"name":"Federant","font-family":"\'Federant\', display","weights":"400"},{"name":"Federo","font-family":"\'Federo\', sans-serif","weights":"400"},{"name":"Felipa","font-family":"\'Felipa\', handwriting","weights":"400"},{"name":"Fenix","font-family":"\'Fenix\', serif","weights":"400"},{"name":"Festive","font-family":"\'Festive\', handwriting","weights":"400"},{"name":"Finger Paint","font-family":"\'Finger Paint\', display","weights":"400"},{"name":"Fira Code","font-family":"\'Fira Code\', monospace","weights":"300,400,500,600,700"},{"name":"Fira Mono","font-family":"\'Fira Mono\', monospace","weights":"400,500,700"},{"name":"Fira Sans","font-family":"\'Fira Sans\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Fira Sans Condensed","font-family":"\'Fira Sans Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Fira Sans Extra Condensed","font-family":"\'Fira Sans Extra Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Fjalla One","font-family":"\'Fjalla One\', sans-serif","weights":"400"},{"name":"Fjord One","font-family":"\'Fjord One\', serif","weights":"400"},{"name":"Flamenco","font-family":"\'Flamenco\', display","weights":"300,400"},{"name":"Flavors","font-family":"\'Flavors\', display","weights":"400"},{"name":"Fleur De Leah","font-family":"\'Fleur De Leah\', handwriting","weights":"400"},{"name":"Fondamento","font-family":"\'Fondamento\', handwriting","weights":"400"},{"name":"Fontdiner Swanky","font-family":"\'Fontdiner Swanky\', display","weights":"400"},{"name":"Forum","font-family":"\'Forum\', display","weights":"400"},{"name":"Francois One","font-family":"\'Francois One\', sans-serif","weights":"400"},{"name":"Frank Ruhl Libre","font-family":"\'Frank Ruhl Libre\', serif","weights":"300,400,500,700,900"},{"name":"Fraunces","font-family":"\'Fraunces\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Freckle Face","font-family":"\'Freckle Face\', display","weights":"400"},{"name":"Fredericka the Great","font-family":"\'Fredericka the Great\', display","weights":"400"},{"name":"Fredoka One","font-family":"\'Fredoka One\', display","weights":"400"},{"name":"Freehand","font-family":"\'Freehand\', display","weights":"400"},{"name":"Fresca","font-family":"\'Fresca\', sans-serif","weights":"400"},{"name":"Frijole","font-family":"\'Frijole\', display","weights":"400"},{"name":"Fruktur","font-family":"\'Fruktur\', display","weights":"400"},{"name":"Fugaz One","font-family":"\'Fugaz One\', display","weights":"400"},{"name":"Fuggles","font-family":"\'Fuggles\', handwriting","weights":"400"},{"name":"GFS Didot","font-family":"\'GFS Didot\', serif","weights":"400"},{"name":"GFS Neohellenic","font-family":"\'GFS Neohellenic\', sans-serif","weights":"400,700"},{"name":"Gabriela","font-family":"\'Gabriela\', serif","weights":"400"},{"name":"Gaegu","font-family":"\'Gaegu\', handwriting","weights":"300,400,700"},{"name":"Gafata","font-family":"\'Gafata\', sans-serif","weights":"400"},{"name":"Galada","font-family":"\'Galada\', display","weights":"400"},{"name":"Galdeano","font-family":"\'Galdeano\', sans-serif","weights":"400"},{"name":"Galindo","font-family":"\'Galindo\', display","weights":"400"},{"name":"Gamja Flower","font-family":"\'Gamja Flower\', handwriting","weights":"400"},{"name":"Gayathri","font-family":"\'Gayathri\', sans-serif","weights":"100,400,700"},{"name":"Gelasio","font-family":"\'Gelasio\', serif","weights":"400,500,600,700"},{"name":"Gemunu Libre","font-family":"\'Gemunu Libre\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Gentium Basic","font-family":"\'Gentium Basic\', serif","weights":"400,700"},{"name":"Gentium Book Basic","font-family":"\'Gentium Book Basic\', serif","weights":"400,700"},{"name":"Geo","font-family":"\'Geo\', sans-serif","weights":"400"},{"name":"Georama","font-family":"\'Georama\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Geostar","font-family":"\'Geostar\', display","weights":"400"},{"name":"Geostar Fill","font-family":"\'Geostar Fill\', display","weights":"400"},{"name":"Germania One","font-family":"\'Germania One\', display","weights":"400"},{"name":"Gideon Roman","font-family":"\'Gideon Roman\', display","weights":"400"},{"name":"Gidugu","font-family":"\'Gidugu\', sans-serif","weights":"400"},{"name":"Gilda Display","font-family":"\'Gilda Display\', serif","weights":"400"},{"name":"Girassol","font-family":"\'Girassol\', display","weights":"400"},{"name":"Give You Glory","font-family":"\'Give You Glory\', handwriting","weights":"400"},{"name":"Glass Antiqua","font-family":"\'Glass Antiqua\', display","weights":"400"},{"name":"Glegoo","font-family":"\'Glegoo\', serif","weights":"400,700"},{"name":"Gloria Hallelujah","font-family":"\'Gloria Hallelujah\', handwriting","weights":"400"},{"name":"Glory","font-family":"\'Glory\', sans-serif","weights":"100,200,300,400,500,600,700,800"},{"name":"Gluten","font-family":"\'Gluten\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Goblin One","font-family":"\'Goblin One\', display","weights":"400"},{"name":"Gochi Hand","font-family":"\'Gochi Hand\', handwriting","weights":"400"},{"name":"Goldman","font-family":"\'Goldman\', display","weights":"400,700"},{"name":"Gorditas","font-family":"\'Gorditas\', display","weights":"400,700"},{"name":"Gothic A1","font-family":"\'Gothic A1\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Gotu","font-family":"\'Gotu\', sans-serif","weights":"400"},{"name":"Goudy Bookletter 1911","font-family":"\'Goudy Bookletter 1911\', serif","weights":"400"},{"name":"Gowun Batang","font-family":"\'Gowun Batang\', serif","weights":"400,700"},{"name":"Gowun Dodum","font-family":"\'Gowun Dodum\', sans-serif","weights":"400"},{"name":"Graduate","font-family":"\'Graduate\', display","weights":"400"},{"name":"Grand Hotel","font-family":"\'Grand Hotel\', handwriting","weights":"400"},{"name":"Grandstander","font-family":"\'Grandstander\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Gravitas One","font-family":"\'Gravitas One\', display","weights":"400"},{"name":"Great Vibes","font-family":"\'Great Vibes\', handwriting","weights":"400"},{"name":"Grechen Fuemen","font-family":"\'Grechen Fuemen\', handwriting","weights":"400"},{"name":"Grenze","font-family":"\'Grenze\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Grenze Gotisch","font-family":"\'Grenze Gotisch\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Grey Qo","font-family":"\'Grey Qo\', handwriting","weights":"400"},{"name":"Griffy","font-family":"\'Griffy\', display","weights":"400"},{"name":"Gruppo","font-family":"\'Gruppo\', display","weights":"400"},{"name":"Gudea","font-family":"\'Gudea\', sans-serif","weights":"400,700"},{"name":"Gugi","font-family":"\'Gugi\', display","weights":"400"},{"name":"Gupter","font-family":"\'Gupter\', serif","weights":"400,500,700"},{"name":"Gurajada","font-family":"\'Gurajada\', serif","weights":"400"},{"name":"Habibi","font-family":"\'Habibi\', serif","weights":"400"},{"name":"Hachi Maru Pop","font-family":"\'Hachi Maru Pop\', handwriting","weights":"400"},{"name":"Hahmlet","font-family":"\'Hahmlet\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Halant","font-family":"\'Halant\', serif","weights":"300,400,500,600,700"},{"name":"Hammersmith One","font-family":"\'Hammersmith One\', sans-serif","weights":"400"},{"name":"Hanalei","font-family":"\'Hanalei\', display","weights":"400"},{"name":"Hanalei Fill","font-family":"\'Hanalei Fill\', display","weights":"400"},{"name":"Handlee","font-family":"\'Handlee\', handwriting","weights":"400"},{"name":"Hanuman","font-family":"\'Hanuman\', serif","weights":"100,300,400,700,900"},{"name":"Happy Monkey","font-family":"\'Happy Monkey\', display","weights":"400"},{"name":"Harmattan","font-family":"\'Harmattan\', sans-serif","weights":"400,700"},{"name":"Headland One","font-family":"\'Headland One\', serif","weights":"400"},{"name":"Heebo","font-family":"\'Heebo\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Henny Penny","font-family":"\'Henny Penny\', display","weights":"400"},{"name":"Hepta Slab","font-family":"\'Hepta Slab\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Herr Von Muellerhoff","font-family":"\'Herr Von Muellerhoff\', handwriting","weights":"400"},{"name":"Hi Melody","font-family":"\'Hi Melody\', handwriting","weights":"400"},{"name":"Hina Mincho","font-family":"\'Hina Mincho\', serif","weights":"400"},{"name":"Hind","font-family":"\'Hind\', sans-serif","weights":"300,400,500,600,700"},{"name":"Hind Guntur","font-family":"\'Hind Guntur\', sans-serif","weights":"300,400,500,600,700"},{"name":"Hind Madurai","font-family":"\'Hind Madurai\', sans-serif","weights":"300,400,500,600,700"},{"name":"Hind Siliguri","font-family":"\'Hind Siliguri\', sans-serif","weights":"300,400,500,600,700"},{"name":"Hind Vadodara","font-family":"\'Hind Vadodara\', sans-serif","weights":"300,400,500,600,700"},{"name":"Holtwood One SC","font-family":"\'Holtwood One SC\', serif","weights":"400"},{"name":"Homemade Apple","font-family":"\'Homemade Apple\', handwriting","weights":"400"},{"name":"Homenaje","font-family":"\'Homenaje\', sans-serif","weights":"400"},{"name":"IBM Plex Mono","font-family":"\'IBM Plex Mono\', monospace","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans","font-family":"\'IBM Plex Sans\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans Arabic","font-family":"\'IBM Plex Sans Arabic\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans Condensed","font-family":"\'IBM Plex Sans Condensed\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans Devanagari","font-family":"\'IBM Plex Sans Devanagari\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans Hebrew","font-family":"\'IBM Plex Sans Hebrew\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans KR","font-family":"\'IBM Plex Sans KR\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans Thai","font-family":"\'IBM Plex Sans Thai\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Sans Thai Looped","font-family":"\'IBM Plex Sans Thai Looped\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"IBM Plex Serif","font-family":"\'IBM Plex Serif\', serif","weights":"100,200,300,400,500,600,700"},{"name":"IM Fell DW Pica","font-family":"\'IM Fell DW Pica\', serif","weights":"400"},{"name":"IM Fell DW Pica SC","font-family":"\'IM Fell DW Pica SC\', serif","weights":"400"},{"name":"IM Fell Double Pica","font-family":"\'IM Fell Double Pica\', serif","weights":"400"},{"name":"IM Fell Double Pica SC","font-family":"\'IM Fell Double Pica SC\', serif","weights":"400"},{"name":"IM Fell English","font-family":"\'IM Fell English\', serif","weights":"400"},{"name":"IM Fell English SC","font-family":"\'IM Fell English SC\', serif","weights":"400"},{"name":"IM Fell French Canon","font-family":"\'IM Fell French Canon\', serif","weights":"400"},{"name":"IM Fell French Canon SC","font-family":"\'IM Fell French Canon SC\', serif","weights":"400"},{"name":"IM Fell Great Primer","font-family":"\'IM Fell Great Primer\', serif","weights":"400"},{"name":"IM Fell Great Primer SC","font-family":"\'IM Fell Great Primer SC\', serif","weights":"400"},{"name":"Ibarra Real Nova","font-family":"\'Ibarra Real Nova\', serif","weights":"400,500,600,700"},{"name":"Iceberg","font-family":"\'Iceberg\', display","weights":"400"},{"name":"Iceland","font-family":"\'Iceland\', display","weights":"400"},{"name":"Imbue","font-family":"\'Imbue\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Imprima","font-family":"\'Imprima\', sans-serif","weights":"400"},{"name":"Inconsolata","font-family":"\'Inconsolata\', monospace","weights":"200,300,400,500,600,700,800,900"},{"name":"Inder","font-family":"\'Inder\', sans-serif","weights":"400"},{"name":"Indie Flower","font-family":"\'Indie Flower\', handwriting","weights":"400"},{"name":"Inika","font-family":"\'Inika\', serif","weights":"400,700"},{"name":"Inknut Antiqua","font-family":"\'Inknut Antiqua\', serif","weights":"300,400,500,600,700,800,900"},{"name":"Inria Sans","font-family":"\'Inria Sans\', sans-serif","weights":"300,400,700"},{"name":"Inria Serif","font-family":"\'Inria Serif\', serif","weights":"300,400,700"},{"name":"Inter","font-family":"\'Inter\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Irish Grover","font-family":"\'Irish Grover\', display","weights":"400"},{"name":"Istok Web","font-family":"\'Istok Web\', sans-serif","weights":"400,700"},{"name":"Italiana","font-family":"\'Italiana\', serif","weights":"400"},{"name":"Italianno","font-family":"\'Italianno\', handwriting","weights":"400"},{"name":"Itim","font-family":"\'Itim\', handwriting","weights":"400"},{"name":"Jacques Francois","font-family":"\'Jacques Francois\', serif","weights":"400"},{"name":"Jacques Francois Shadow","font-family":"\'Jacques Francois Shadow\', display","weights":"400"},{"name":"Jaldi","font-family":"\'Jaldi\', sans-serif","weights":"400,700"},{"name":"JetBrains Mono","font-family":"\'JetBrains Mono\', monospace","weights":"100,200,300,400,500,600,700,800"},{"name":"Jim Nightshade","font-family":"\'Jim Nightshade\', handwriting","weights":"400"},{"name":"Jockey One","font-family":"\'Jockey One\', sans-serif","weights":"400"},{"name":"Jolly Lodger","font-family":"\'Jolly Lodger\', display","weights":"400"},{"name":"Jomhuria","font-family":"\'Jomhuria\', display","weights":"400"},{"name":"Jomolhari","font-family":"\'Jomolhari\', serif","weights":"400"},{"name":"Josefin Sans","font-family":"\'Josefin Sans\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"Josefin Slab","font-family":"\'Josefin Slab\', serif","weights":"100,200,300,400,500,600,700"},{"name":"Jost","font-family":"\'Jost\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Joti One","font-family":"\'Joti One\', display","weights":"400"},{"name":"Jua","font-family":"\'Jua\', sans-serif","weights":"400"},{"name":"Judson","font-family":"\'Judson\', serif","weights":"400,700"},{"name":"Julee","font-family":"\'Julee\', handwriting","weights":"400"},{"name":"Julius Sans One","font-family":"\'Julius Sans One\', sans-serif","weights":"400"},{"name":"Junge","font-family":"\'Junge\', serif","weights":"400"},{"name":"Jura","font-family":"\'Jura\', sans-serif","weights":"300,400,500,600,700"},{"name":"Just Another Hand","font-family":"\'Just Another Hand\', handwriting","weights":"400"},{"name":"Just Me Again Down Here","font-family":"\'Just Me Again Down Here\', handwriting","weights":"400"},{"name":"K2D","font-family":"\'K2D\', sans-serif","weights":"100,200,300,400,500,600,700,800"},{"name":"Kadwa","font-family":"\'Kadwa\', serif","weights":"400,700"},{"name":"Kaisei Decol","font-family":"\'Kaisei Decol\', serif","weights":"400,500,700"},{"name":"Kaisei HarunoUmi","font-family":"\'Kaisei HarunoUmi\', serif","weights":"400,500,700"},{"name":"Kaisei Opti","font-family":"\'Kaisei Opti\', serif","weights":"400,500,700"},{"name":"Kaisei Tokumin","font-family":"\'Kaisei Tokumin\', serif","weights":"400,500,700,800"},{"name":"Kalam","font-family":"\'Kalam\', handwriting","weights":"300,400,700"},{"name":"Kameron","font-family":"\'Kameron\', serif","weights":"400,700"},{"name":"Kanit","font-family":"\'Kanit\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Kantumruy","font-family":"\'Kantumruy\', sans-serif","weights":"300,400,700"},{"name":"Karantina","font-family":"\'Karantina\', display","weights":"300,400,700"},{"name":"Karla","font-family":"\'Karla\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Karma","font-family":"\'Karma\', serif","weights":"300,400,500,600,700"},{"name":"Katibeh","font-family":"\'Katibeh\', display","weights":"400"},{"name":"Kaushan Script","font-family":"\'Kaushan Script\', handwriting","weights":"400"},{"name":"Kavivanar","font-family":"\'Kavivanar\', handwriting","weights":"400"},{"name":"Kavoon","font-family":"\'Kavoon\', display","weights":"400"},{"name":"Kdam Thmor","font-family":"\'Kdam Thmor\', display","weights":"400"},{"name":"Keania One","font-family":"\'Keania One\', display","weights":"400"},{"name":"Kelly Slab","font-family":"\'Kelly Slab\', display","weights":"400"},{"name":"Kenia","font-family":"\'Kenia\', display","weights":"400"},{"name":"Khand","font-family":"\'Khand\', sans-serif","weights":"300,400,500,600,700"},{"name":"Khmer","font-family":"\'Khmer\', display","weights":"400"},{"name":"Khula","font-family":"\'Khula\', sans-serif","weights":"300,400,600,700,800"},{"name":"Kirang Haerang","font-family":"\'Kirang Haerang\', display","weights":"400"},{"name":"Kite One","font-family":"\'Kite One\', sans-serif","weights":"400"},{"name":"Kiwi Maru","font-family":"\'Kiwi Maru\', serif","weights":"300,400,500"},{"name":"Klee One","font-family":"\'Klee One\', handwriting","weights":"400,600"},{"name":"Knewave","font-family":"\'Knewave\', display","weights":"400"},{"name":"KoHo","font-family":"\'KoHo\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Kodchasan","font-family":"\'Kodchasan\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Koh Santepheap","font-family":"\'Koh Santepheap\', display","weights":"100,300,400,700,900"},{"name":"Kosugi","font-family":"\'Kosugi\', sans-serif","weights":"400"},{"name":"Kosugi Maru","font-family":"\'Kosugi Maru\', sans-serif","weights":"400"},{"name":"Kotta One","font-family":"\'Kotta One\', serif","weights":"400"},{"name":"Koulen","font-family":"\'Koulen\', display","weights":"400"},{"name":"Kranky","font-family":"\'Kranky\', display","weights":"400"},{"name":"Kreon","font-family":"\'Kreon\', serif","weights":"300,400,500,600,700"},{"name":"Kristi","font-family":"\'Kristi\', handwriting","weights":"400"},{"name":"Krona One","font-family":"\'Krona One\', sans-serif","weights":"400"},{"name":"Krub","font-family":"\'Krub\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Kufam","font-family":"\'Kufam\', sans-serif","weights":"400,500,600,700,800,900"},{"name":"Kulim Park","font-family":"\'Kulim Park\', sans-serif","weights":"200,300,400,600,700"},{"name":"Kumar One","font-family":"\'Kumar One\', display","weights":"400"},{"name":"Kumar One Outline","font-family":"\'Kumar One Outline\', display","weights":"400"},{"name":"Kumbh Sans","font-family":"\'Kumbh Sans\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Kurale","font-family":"\'Kurale\', serif","weights":"400"},{"name":"La Belle Aurore","font-family":"\'La Belle Aurore\', handwriting","weights":"400"},{"name":"Lacquer","font-family":"\'Lacquer\', display","weights":"400"},{"name":"Laila","font-family":"\'Laila\', sans-serif","weights":"300,400,500,600,700"},{"name":"Lakki Reddy","font-family":"\'Lakki Reddy\', handwriting","weights":"400"},{"name":"Lalezar","font-family":"\'Lalezar\', display","weights":"400"},{"name":"Lancelot","font-family":"\'Lancelot\', display","weights":"400"},{"name":"Langar","font-family":"\'Langar\', display","weights":"400"},{"name":"Lateef","font-family":"\'Lateef\', handwriting","weights":"400"},{"name":"Lato","font-family":"\'Lato\', sans-serif","weights":"100,300,400,700,900"},{"name":"League Script","font-family":"\'League Script\', handwriting","weights":"400"},{"name":"Leckerli One","font-family":"\'Leckerli One\', handwriting","weights":"400"},{"name":"Ledger","font-family":"\'Ledger\', serif","weights":"400"},{"name":"Lekton","font-family":"\'Lekton\', sans-serif","weights":"400,700"},{"name":"Lemon","font-family":"\'Lemon\', display","weights":"400"},{"name":"Lemonada","font-family":"\'Lemonada\', display","weights":"300,400,500,600,700"},{"name":"Lexend","font-family":"\'Lexend\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Lexend Deca","font-family":"\'Lexend Deca\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Lexend Exa","font-family":"\'Lexend Exa\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Lexend Giga","font-family":"\'Lexend Giga\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Lexend Mega","font-family":"\'Lexend Mega\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Lexend Peta","font-family":"\'Lexend Peta\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Lexend Tera","font-family":"\'Lexend Tera\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Lexend Zetta","font-family":"\'Lexend Zetta\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Libre Barcode 128","font-family":"\'Libre Barcode 128\', display","weights":"400"},{"name":"Libre Barcode 128 Text","font-family":"\'Libre Barcode 128 Text\', display","weights":"400"},{"name":"Libre Barcode 39","font-family":"\'Libre Barcode 39\', display","weights":"400"},{"name":"Libre Barcode 39 Extended","font-family":"\'Libre Barcode 39 Extended\', display","weights":"400"},{"name":"Libre Barcode 39 Extended Text","font-family":"\'Libre Barcode 39 Extended Text\', display","weights":"400"},{"name":"Libre Barcode 39 Text","font-family":"\'Libre Barcode 39 Text\', display","weights":"400"},{"name":"Libre Barcode EAN13 Text","font-family":"\'Libre Barcode EAN13 Text\', display","weights":"400"},{"name":"Libre Baskerville","font-family":"\'Libre Baskerville\', serif","weights":"400,700"},{"name":"Libre Caslon Display","font-family":"\'Libre Caslon Display\', serif","weights":"400"},{"name":"Libre Caslon Text","font-family":"\'Libre Caslon Text\', serif","weights":"400,700"},{"name":"Libre Franklin","font-family":"\'Libre Franklin\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Life Savers","font-family":"\'Life Savers\', display","weights":"400,700,800"},{"name":"Lilita One","font-family":"\'Lilita One\', display","weights":"400"},{"name":"Lily Script One","font-family":"\'Lily Script One\', display","weights":"400"},{"name":"Limelight","font-family":"\'Limelight\', display","weights":"400"},{"name":"Linden Hill","font-family":"\'Linden Hill\', serif","weights":"400"},{"name":"Literata","font-family":"\'Literata\', serif","weights":"200,300,400,500,600,700,800,900"},{"name":"Liu Jian Mao Cao","font-family":"\'Liu Jian Mao Cao\', handwriting","weights":"400"},{"name":"Livvic","font-family":"\'Livvic\', sans-serif","weights":"100,200,300,400,500,600,700,900"},{"name":"Lobster","font-family":"\'Lobster\', display","weights":"400"},{"name":"Lobster Two","font-family":"\'Lobster Two\', display","weights":"400,700"},{"name":"Londrina Outline","font-family":"\'Londrina Outline\', display","weights":"400"},{"name":"Londrina Shadow","font-family":"\'Londrina Shadow\', display","weights":"400"},{"name":"Londrina Sketch","font-family":"\'Londrina Sketch\', display","weights":"400"},{"name":"Londrina Solid","font-family":"\'Londrina Solid\', display","weights":"100,300,400,900"},{"name":"Long Cang","font-family":"\'Long Cang\', handwriting","weights":"400"},{"name":"Lora","font-family":"\'Lora\', serif","weights":"400,500,600,700"},{"name":"Love Ya Like A Sister","font-family":"\'Love Ya Like A Sister\', display","weights":"400"},{"name":"Loved by the King","font-family":"\'Loved by the King\', handwriting","weights":"400"},{"name":"Lovers Quarrel","font-family":"\'Lovers Quarrel\', handwriting","weights":"400"},{"name":"Luckiest Guy","font-family":"\'Luckiest Guy\', display","weights":"400"},{"name":"Lusitana","font-family":"\'Lusitana\', serif","weights":"400,700"},{"name":"Lustria","font-family":"\'Lustria\', serif","weights":"400"},{"name":"M PLUS 1p","font-family":"\'M PLUS 1p\', sans-serif","weights":"100,300,400,500,700,800,900"},{"name":"M PLUS Rounded 1c","font-family":"\'M PLUS Rounded 1c\', sans-serif","weights":"100,300,400,500,700,800,900"},{"name":"Ma Shan Zheng","font-family":"\'Ma Shan Zheng\', handwriting","weights":"400"},{"name":"Macondo","font-family":"\'Macondo\', display","weights":"400"},{"name":"Macondo Swash Caps","font-family":"\'Macondo Swash Caps\', display","weights":"400"},{"name":"Mada","font-family":"\'Mada\', sans-serif","weights":"200,300,400,500,600,700,900"},{"name":"Magra","font-family":"\'Magra\', sans-serif","weights":"400,700"},{"name":"Maiden Orange","font-family":"\'Maiden Orange\', display","weights":"400"},{"name":"Maitree","font-family":"\'Maitree\', serif","weights":"200,300,400,500,600,700"},{"name":"Major Mono Display","font-family":"\'Major Mono Display\', monospace","weights":"400"},{"name":"Mako","font-family":"\'Mako\', sans-serif","weights":"400"},{"name":"Mali","font-family":"\'Mali\', handwriting","weights":"200,300,400,500,600,700"},{"name":"Mallanna","font-family":"\'Mallanna\', sans-serif","weights":"400"},{"name":"Mandali","font-family":"\'Mandali\', sans-serif","weights":"400"},{"name":"Manjari","font-family":"\'Manjari\', sans-serif","weights":"100,400,700"},{"name":"Manrope","font-family":"\'Manrope\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Mansalva","font-family":"\'Mansalva\', handwriting","weights":"400"},{"name":"Manuale","font-family":"\'Manuale\', serif","weights":"300,400,500,600,700,800"},{"name":"Marcellus","font-family":"\'Marcellus\', serif","weights":"400"},{"name":"Marcellus SC","font-family":"\'Marcellus SC\', serif","weights":"400"},{"name":"Marck Script","font-family":"\'Marck Script\', handwriting","weights":"400"},{"name":"Margarine","font-family":"\'Margarine\', display","weights":"400"},{"name":"Markazi Text","font-family":"\'Markazi Text\', serif","weights":"400,500,600,700"},{"name":"Marko One","font-family":"\'Marko One\', serif","weights":"400"},{"name":"Marmelad","font-family":"\'Marmelad\', sans-serif","weights":"400"},{"name":"Martel","font-family":"\'Martel\', serif","weights":"200,300,400,600,700,800,900"},{"name":"Martel Sans","font-family":"\'Martel Sans\', sans-serif","weights":"200,300,400,600,700,800,900"},{"name":"Marvel","font-family":"\'Marvel\', sans-serif","weights":"400,700"},{"name":"Mate","font-family":"\'Mate\', serif","weights":"400"},{"name":"Mate SC","font-family":"\'Mate SC\', serif","weights":"400"},{"name":"Material Icons","font-family":"\'Material Icons\', icon","weights":"400"},{"name":"Maven Pro","font-family":"\'Maven Pro\', sans-serif","weights":"400,500,600,700,800,900"},{"name":"McLaren","font-family":"\'McLaren\', display","weights":"400"},{"name":"Meddon","font-family":"\'Meddon\', handwriting","weights":"400"},{"name":"MedievalSharp","font-family":"\'MedievalSharp\', display","weights":"400"},{"name":"Medula One","font-family":"\'Medula One\', display","weights":"400"},{"name":"Meera Inimai","font-family":"\'Meera Inimai\', sans-serif","weights":"400"},{"name":"Megrim","font-family":"\'Megrim\', display","weights":"400"},{"name":"Meie Script","font-family":"\'Meie Script\', handwriting","weights":"400"},{"name":"Merienda","font-family":"\'Merienda\', handwriting","weights":"400,700"},{"name":"Merienda One","font-family":"\'Merienda One\', handwriting","weights":"400"},{"name":"Merriweather","font-family":"\'Merriweather\', serif","weights":"300,400,700,900"},{"name":"Merriweather Sans","font-family":"\'Merriweather Sans\', sans-serif","weights":"300,400,500,600,700,800"},{"name":"Metal","font-family":"\'Metal\', display","weights":"400"},{"name":"Metal Mania","font-family":"\'Metal Mania\', display","weights":"400"},{"name":"Metamorphous","font-family":"\'Metamorphous\', display","weights":"400"},{"name":"Metrophobic","font-family":"\'Metrophobic\', sans-serif","weights":"400"},{"name":"Michroma","font-family":"\'Michroma\', sans-serif","weights":"400"},{"name":"Milonga","font-family":"\'Milonga\', display","weights":"400"},{"name":"Miltonian","font-family":"\'Miltonian\', display","weights":"400"},{"name":"Miltonian Tattoo","font-family":"\'Miltonian Tattoo\', display","weights":"400"},{"name":"Mina","font-family":"\'Mina\', sans-serif","weights":"400,700"},{"name":"Miniver","font-family":"\'Miniver\', display","weights":"400"},{"name":"Miriam Libre","font-family":"\'Miriam Libre\', sans-serif","weights":"400,700"},{"name":"Mirza","font-family":"\'Mirza\', display","weights":"400,500,600,700"},{"name":"Miss Fajardose","font-family":"\'Miss Fajardose\', handwriting","weights":"400"},{"name":"Mitr","font-family":"\'Mitr\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Modak","font-family":"\'Modak\', display","weights":"400"},{"name":"Modern Antiqua","font-family":"\'Modern Antiqua\', display","weights":"400"},{"name":"Mogra","font-family":"\'Mogra\', display","weights":"400"},{"name":"Molengo","font-family":"\'Molengo\', sans-serif","weights":"400"},{"name":"Molle","font-family":"\'Molle\', handwriting","weights":"400"},{"name":"Monda","font-family":"\'Monda\', sans-serif","weights":"400,700"},{"name":"Monofett","font-family":"\'Monofett\', display","weights":"400"},{"name":"Monoton","font-family":"\'Monoton\', display","weights":"400"},{"name":"Monsieur La Doulaise","font-family":"\'Monsieur La Doulaise\', handwriting","weights":"400"},{"name":"Montaga","font-family":"\'Montaga\', serif","weights":"400"},{"name":"MonteCarlo","font-family":"\'MonteCarlo\', handwriting","weights":"400"},{"name":"Montez","font-family":"\'Montez\', handwriting","weights":"400"},{"name":"Montserrat","font-family":"\'Montserrat\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Montserrat Alternates","font-family":"\'Montserrat Alternates\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Montserrat Subrayada","font-family":"\'Montserrat Subrayada\', sans-serif","weights":"400,700"},{"name":"Moul","font-family":"\'Moul\', display","weights":"400"},{"name":"Moulpali","font-family":"\'Moulpali\', display","weights":"400"},{"name":"Mountains of Christmas","font-family":"\'Mountains of Christmas\', display","weights":"400,700"},{"name":"Mouse Memoirs","font-family":"\'Mouse Memoirs\', sans-serif","weights":"400"},{"name":"Mr Bedfort","font-family":"\'Mr Bedfort\', handwriting","weights":"400"},{"name":"Mr Dafoe","font-family":"\'Mr Dafoe\', handwriting","weights":"400"},{"name":"Mr De Haviland","font-family":"\'Mr De Haviland\', handwriting","weights":"400"},{"name":"Mrs Saint Delafield","font-family":"\'Mrs Saint Delafield\', handwriting","weights":"400"},{"name":"Mrs Sheppards","font-family":"\'Mrs Sheppards\', handwriting","weights":"400"},{"name":"Mukta","font-family":"\'Mukta\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Mukta Mahee","font-family":"\'Mukta Mahee\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Mukta Malar","font-family":"\'Mukta Malar\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Mukta Vaani","font-family":"\'Mukta Vaani\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Mulish","font-family":"\'Mulish\', sans-serif","weights":"200,300,400,500,600,700,800,900"},{"name":"MuseoModerno","font-family":"\'MuseoModerno\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Mystery Quest","font-family":"\'Mystery Quest\', display","weights":"400"},{"name":"NTR","font-family":"\'NTR\', sans-serif","weights":"400"},{"name":"Nanum Brush Script","font-family":"\'Nanum Brush Script\', handwriting","weights":"400"},{"name":"Nanum Gothic","font-family":"\'Nanum Gothic\', sans-serif","weights":"400,700,800"},{"name":"Nanum Gothic Coding","font-family":"\'Nanum Gothic Coding\', monospace","weights":"400,700"},{"name":"Nanum Myeongjo","font-family":"\'Nanum Myeongjo\', serif","weights":"400,700,800"},{"name":"Nanum Pen Script","font-family":"\'Nanum Pen Script\', handwriting","weights":"400"},{"name":"Nerko One","font-family":"\'Nerko One\', handwriting","weights":"400"},{"name":"Neucha","font-family":"\'Neucha\', handwriting","weights":"400"},{"name":"Neuton","font-family":"\'Neuton\', serif","weights":"400,200,300,700,800"},{"name":"New Rocker","font-family":"\'New Rocker\', display","weights":"400"},{"name":"New Tegomin","font-family":"\'New Tegomin\', serif","weights":"400"},{"name":"News Cycle","font-family":"\'News Cycle\', sans-serif","weights":"400,700"},{"name":"Newsreader","font-family":"\'Newsreader\', serif","weights":"200,300,400,500,600,700,800"},{"name":"Niconne","font-family":"\'Niconne\', handwriting","weights":"400"},{"name":"Niramit","font-family":"\'Niramit\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Nixie One","font-family":"\'Nixie One\', display","weights":"400"},{"name":"Nobile","font-family":"\'Nobile\', sans-serif","weights":"400,500,700"},{"name":"Nokora","font-family":"\'Nokora\', serif","weights":"400,700"},{"name":"Norican","font-family":"\'Norican\', handwriting","weights":"400"},{"name":"Nosifer","font-family":"\'Nosifer\', display","weights":"400"},{"name":"Notable","font-family":"\'Notable\', sans-serif","weights":"400"},{"name":"Nothing You Could Do","font-family":"\'Nothing You Could Do\', handwriting","weights":"400"},{"name":"Noticia Text","font-family":"\'Noticia Text\', serif","weights":"400,700"},{"name":"Noto Kufi Arabic","font-family":"\'Noto Kufi Arabic\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Music","font-family":"\'Noto Music\', sans-serif","weights":"400"},{"name":"Noto Naskh Arabic","font-family":"\'Noto Naskh Arabic\', serif","weights":"400,500,600,700"},{"name":"Noto Nastaliq Urdu","font-family":"\'Noto Nastaliq Urdu\', serif","weights":"400,700"},{"name":"Noto Rashi Hebrew","font-family":"\'Noto Rashi Hebrew\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans","font-family":"\'Noto Sans\', sans-serif","weights":"400,700"},{"name":"Noto Sans Adlam","font-family":"\'Noto Sans Adlam\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Adlam Unjoined","font-family":"\'Noto Sans Adlam Unjoined\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Anatolian Hieroglyphs","font-family":"\'Noto Sans Anatolian Hieroglyphs\', sans-serif","weights":"400"},{"name":"Noto Sans Arabic","font-family":"\'Noto Sans Arabic\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Armenian","font-family":"\'Noto Sans Armenian\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Avestan","font-family":"\'Noto Sans Avestan\', sans-serif","weights":"400"},{"name":"Noto Sans Balinese","font-family":"\'Noto Sans Balinese\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Bamum","font-family":"\'Noto Sans Bamum\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Bassa Vah","font-family":"\'Noto Sans Bassa Vah\', sans-serif","weights":"400"},{"name":"Noto Sans Batak","font-family":"\'Noto Sans Batak\', sans-serif","weights":"400"},{"name":"Noto Sans Bengali","font-family":"\'Noto Sans Bengali\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Bhaiksuki","font-family":"\'Noto Sans Bhaiksuki\', sans-serif","weights":"400"},{"name":"Noto Sans Brahmi","font-family":"\'Noto Sans Brahmi\', sans-serif","weights":"400"},{"name":"Noto Sans Buginese","font-family":"\'Noto Sans Buginese\', sans-serif","weights":"400"},{"name":"Noto Sans Buhid","font-family":"\'Noto Sans Buhid\', sans-serif","weights":"400"},{"name":"Noto Sans Canadian Aboriginal","font-family":"\'Noto Sans Canadian Aboriginal\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Carian","font-family":"\'Noto Sans Carian\', sans-serif","weights":"400"},{"name":"Noto Sans Caucasian Albanian","font-family":"\'Noto Sans Caucasian Albanian\', sans-serif","weights":"400"},{"name":"Noto Sans Chakma","font-family":"\'Noto Sans Chakma\', sans-serif","weights":"400"},{"name":"Noto Sans Cham","font-family":"\'Noto Sans Cham\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Cherokee","font-family":"\'Noto Sans Cherokee\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Coptic","font-family":"\'Noto Sans Coptic\', sans-serif","weights":"400"},{"name":"Noto Sans Cuneiform","font-family":"\'Noto Sans Cuneiform\', sans-serif","weights":"400"},{"name":"Noto Sans Cypriot","font-family":"\'Noto Sans Cypriot\', sans-serif","weights":"400"},{"name":"Noto Sans Deseret","font-family":"\'Noto Sans Deseret\', sans-serif","weights":"400"},{"name":"Noto Sans Devanagari","font-family":"\'Noto Sans Devanagari\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Display","font-family":"\'Noto Sans Display\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Duployan","font-family":"\'Noto Sans Duployan\', sans-serif","weights":"400"},{"name":"Noto Sans Egyptian Hieroglyphs","font-family":"\'Noto Sans Egyptian Hieroglyphs\', sans-serif","weights":"400"},{"name":"Noto Sans Elbasan","font-family":"\'Noto Sans Elbasan\', sans-serif","weights":"400"},{"name":"Noto Sans Elymaic","font-family":"\'Noto Sans Elymaic\', sans-serif","weights":"400"},{"name":"Noto Sans Georgian","font-family":"\'Noto Sans Georgian\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Glagolitic","font-family":"\'Noto Sans Glagolitic\', sans-serif","weights":"400"},{"name":"Noto Sans Gothic","font-family":"\'Noto Sans Gothic\', sans-serif","weights":"400"},{"name":"Noto Sans Grantha","font-family":"\'Noto Sans Grantha\', sans-serif","weights":"400"},{"name":"Noto Sans Gujarati","font-family":"\'Noto Sans Gujarati\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Gunjala Gondi","font-family":"\'Noto Sans Gunjala Gondi\', sans-serif","weights":"400"},{"name":"Noto Sans Gurmukhi","font-family":"\'Noto Sans Gurmukhi\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans HK","font-family":"\'Noto Sans HK\', sans-serif","weights":"100,300,400,500,700,900"},{"name":"Noto Sans Hanifi Rohingya","font-family":"\'Noto Sans Hanifi Rohingya\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Hanunoo","font-family":"\'Noto Sans Hanunoo\', sans-serif","weights":"400"},{"name":"Noto Sans Hatran","font-family":"\'Noto Sans Hatran\', sans-serif","weights":"400"},{"name":"Noto Sans Hebrew","font-family":"\'Noto Sans Hebrew\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Imperial Aramaic","font-family":"\'Noto Sans Imperial Aramaic\', sans-serif","weights":"400"},{"name":"Noto Sans Indic Siyaq Numbers","font-family":"\'Noto Sans Indic Siyaq Numbers\', sans-serif","weights":"400"},{"name":"Noto Sans Inscriptional Pahlavi","font-family":"\'Noto Sans Inscriptional Pahlavi\', sans-serif","weights":"400"},{"name":"Noto Sans Inscriptional Parthian","font-family":"\'Noto Sans Inscriptional Parthian\', sans-serif","weights":"400"},{"name":"Noto Sans JP","font-family":"\'Noto Sans JP\', sans-serif","weights":"100,300,400,500,700,900"},{"name":"Noto Sans Javanese","font-family":"\'Noto Sans Javanese\', sans-serif","weights":"400,700"},{"name":"Noto Sans KR","font-family":"\'Noto Sans KR\', sans-serif","weights":"100,300,400,500,700,900"},{"name":"Noto Sans Kaithi","font-family":"\'Noto Sans Kaithi\', sans-serif","weights":"400"},{"name":"Noto Sans Kannada","font-family":"\'Noto Sans Kannada\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Kayah Li","font-family":"\'Noto Sans Kayah Li\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Kharoshthi","font-family":"\'Noto Sans Kharoshthi\', sans-serif","weights":"400"},{"name":"Noto Sans Khmer","font-family":"\'Noto Sans Khmer\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Khojki","font-family":"\'Noto Sans Khojki\', sans-serif","weights":"400"},{"name":"Noto Sans Khudawadi","font-family":"\'Noto Sans Khudawadi\', sans-serif","weights":"400"},{"name":"Noto Sans Lao","font-family":"\'Noto Sans Lao\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Lepcha","font-family":"\'Noto Sans Lepcha\', sans-serif","weights":"400"},{"name":"Noto Sans Limbu","font-family":"\'Noto Sans Limbu\', sans-serif","weights":"400"},{"name":"Noto Sans Linear A","font-family":"\'Noto Sans Linear A\', sans-serif","weights":"400"},{"name":"Noto Sans Linear B","font-family":"\'Noto Sans Linear B\', sans-serif","weights":"400"},{"name":"Noto Sans Lisu","font-family":"\'Noto Sans Lisu\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Lycian","font-family":"\'Noto Sans Lycian\', sans-serif","weights":"400"},{"name":"Noto Sans Lydian","font-family":"\'Noto Sans Lydian\', sans-serif","weights":"400"},{"name":"Noto Sans Mahajani","font-family":"\'Noto Sans Mahajani\', sans-serif","weights":"400"},{"name":"Noto Sans Malayalam","font-family":"\'Noto Sans Malayalam\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Mandaic","font-family":"\'Noto Sans Mandaic\', sans-serif","weights":"400"},{"name":"Noto Sans Manichaean","font-family":"\'Noto Sans Manichaean\', sans-serif","weights":"400"},{"name":"Noto Sans Marchen","font-family":"\'Noto Sans Marchen\', sans-serif","weights":"400"},{"name":"Noto Sans Masaram Gondi","font-family":"\'Noto Sans Masaram Gondi\', sans-serif","weights":"400"},{"name":"Noto Sans Math","font-family":"\'Noto Sans Math\', sans-serif","weights":"400"},{"name":"Noto Sans Mayan Numerals","font-family":"\'Noto Sans Mayan Numerals\', sans-serif","weights":"400"},{"name":"Noto Sans Medefaidrin","font-family":"\'Noto Sans Medefaidrin\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Meroitic","font-family":"\'Noto Sans Meroitic\', sans-serif","weights":"400"},{"name":"Noto Sans Miao","font-family":"\'Noto Sans Miao\', sans-serif","weights":"400"},{"name":"Noto Sans Modi","font-family":"\'Noto Sans Modi\', sans-serif","weights":"400"},{"name":"Noto Sans Mongolian","font-family":"\'Noto Sans Mongolian\', sans-serif","weights":"400"},{"name":"Noto Sans Mono","font-family":"\'Noto Sans Mono\', monospace","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Mro","font-family":"\'Noto Sans Mro\', sans-serif","weights":"400"},{"name":"Noto Sans Multani","font-family":"\'Noto Sans Multani\', sans-serif","weights":"400"},{"name":"Noto Sans Myanmar","font-family":"\'Noto Sans Myanmar\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans N Ko","font-family":"\'Noto Sans N Ko\', sans-serif","weights":"400"},{"name":"Noto Sans Nabataean","font-family":"\'Noto Sans Nabataean\', sans-serif","weights":"400"},{"name":"Noto Sans New Tai Lue","font-family":"\'Noto Sans New Tai Lue\', sans-serif","weights":"400"},{"name":"Noto Sans Newa","font-family":"\'Noto Sans Newa\', sans-serif","weights":"400"},{"name":"Noto Sans Nushu","font-family":"\'Noto Sans Nushu\', sans-serif","weights":"400"},{"name":"Noto Sans Ogham","font-family":"\'Noto Sans Ogham\', sans-serif","weights":"400"},{"name":"Noto Sans Ol Chiki","font-family":"\'Noto Sans Ol Chiki\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Old Hungarian","font-family":"\'Noto Sans Old Hungarian\', sans-serif","weights":"400"},{"name":"Noto Sans Old Italic","font-family":"\'Noto Sans Old Italic\', sans-serif","weights":"400"},{"name":"Noto Sans Old North Arabian","font-family":"\'Noto Sans Old North Arabian\', sans-serif","weights":"400"},{"name":"Noto Sans Old Permic","font-family":"\'Noto Sans Old Permic\', sans-serif","weights":"400"},{"name":"Noto Sans Old Persian","font-family":"\'Noto Sans Old Persian\', sans-serif","weights":"400"},{"name":"Noto Sans Old Sogdian","font-family":"\'Noto Sans Old Sogdian\', sans-serif","weights":"400"},{"name":"Noto Sans Old South Arabian","font-family":"\'Noto Sans Old South Arabian\', sans-serif","weights":"400"},{"name":"Noto Sans Old Turkic","font-family":"\'Noto Sans Old Turkic\', sans-serif","weights":"400"},{"name":"Noto Sans Oriya","font-family":"\'Noto Sans Oriya\', sans-serif","weights":"100,400,700,900"},{"name":"Noto Sans Osage","font-family":"\'Noto Sans Osage\', sans-serif","weights":"400"},{"name":"Noto Sans Osmanya","font-family":"\'Noto Sans Osmanya\', sans-serif","weights":"400"},{"name":"Noto Sans Pahawh Hmong","font-family":"\'Noto Sans Pahawh Hmong\', sans-serif","weights":"400"},{"name":"Noto Sans Palmyrene","font-family":"\'Noto Sans Palmyrene\', sans-serif","weights":"400"},{"name":"Noto Sans Pau Cin Hau","font-family":"\'Noto Sans Pau Cin Hau\', sans-serif","weights":"400"},{"name":"Noto Sans Phags Pa","font-family":"\'Noto Sans Phags Pa\', sans-serif","weights":"400"},{"name":"Noto Sans Phoenician","font-family":"\'Noto Sans Phoenician\', sans-serif","weights":"400"},{"name":"Noto Sans Psalter Pahlavi","font-family":"\'Noto Sans Psalter Pahlavi\', sans-serif","weights":"400"},{"name":"Noto Sans Rejang","font-family":"\'Noto Sans Rejang\', sans-serif","weights":"400"},{"name":"Noto Sans Runic","font-family":"\'Noto Sans Runic\', sans-serif","weights":"400"},{"name":"Noto Sans SC","font-family":"\'Noto Sans SC\', sans-serif","weights":"100,300,400,500,700,900"},{"name":"Noto Sans Samaritan","font-family":"\'Noto Sans Samaritan\', sans-serif","weights":"400"},{"name":"Noto Sans Saurashtra","font-family":"\'Noto Sans Saurashtra\', sans-serif","weights":"400"},{"name":"Noto Sans Sharada","font-family":"\'Noto Sans Sharada\', sans-serif","weights":"400"},{"name":"Noto Sans Shavian","font-family":"\'Noto Sans Shavian\', sans-serif","weights":"400"},{"name":"Noto Sans Siddham","font-family":"\'Noto Sans Siddham\', sans-serif","weights":"400"},{"name":"Noto Sans Sinhala","font-family":"\'Noto Sans Sinhala\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Sogdian","font-family":"\'Noto Sans Sogdian\', sans-serif","weights":"400"},{"name":"Noto Sans Sora Sompeng","font-family":"\'Noto Sans Sora Sompeng\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Soyombo","font-family":"\'Noto Sans Soyombo\', sans-serif","weights":"400"},{"name":"Noto Sans Sundanese","font-family":"\'Noto Sans Sundanese\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Syloti Nagri","font-family":"\'Noto Sans Syloti Nagri\', sans-serif","weights":"400"},{"name":"Noto Sans Symbols","font-family":"\'Noto Sans Symbols\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Symbols 2","font-family":"\'Noto Sans Symbols 2\', sans-serif","weights":"400"},{"name":"Noto Sans Syriac","font-family":"\'Noto Sans Syriac\', sans-serif","weights":"100,400,900"},{"name":"Noto Sans TC","font-family":"\'Noto Sans TC\', sans-serif","weights":"100,300,400,500,700,900"},{"name":"Noto Sans Tagalog","font-family":"\'Noto Sans Tagalog\', sans-serif","weights":"400"},{"name":"Noto Sans Tagbanwa","font-family":"\'Noto Sans Tagbanwa\', sans-serif","weights":"400"},{"name":"Noto Sans Tai Le","font-family":"\'Noto Sans Tai Le\', sans-serif","weights":"400"},{"name":"Noto Sans Tai Tham","font-family":"\'Noto Sans Tai Tham\', sans-serif","weights":"400,500,600,700"},{"name":"Noto Sans Tai Viet","font-family":"\'Noto Sans Tai Viet\', sans-serif","weights":"400"},{"name":"Noto Sans Takri","font-family":"\'Noto Sans Takri\', sans-serif","weights":"400"},{"name":"Noto Sans Tamil","font-family":"\'Noto Sans Tamil\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Tamil Supplement","font-family":"\'Noto Sans Tamil Supplement\', sans-serif","weights":"400"},{"name":"Noto Sans Telugu","font-family":"\'Noto Sans Telugu\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Thaana","font-family":"\'Noto Sans Thaana\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Thai","font-family":"\'Noto Sans Thai\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Thai Looped","font-family":"\'Noto Sans Thai Looped\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Sans Tifinagh","font-family":"\'Noto Sans Tifinagh\', sans-serif","weights":"400"},{"name":"Noto Sans Tirhuta","font-family":"\'Noto Sans Tirhuta\', sans-serif","weights":"400"},{"name":"Noto Sans Ugaritic","font-family":"\'Noto Sans Ugaritic\', sans-serif","weights":"400"},{"name":"Noto Sans Vai","font-family":"\'Noto Sans Vai\', sans-serif","weights":"400"},{"name":"Noto Sans Wancho","font-family":"\'Noto Sans Wancho\', sans-serif","weights":"400"},{"name":"Noto Sans Warang Citi","font-family":"\'Noto Sans Warang Citi\', sans-serif","weights":"400"},{"name":"Noto Sans Yi","font-family":"\'Noto Sans Yi\', sans-serif","weights":"400"},{"name":"Noto Sans Zanabazar Square","font-family":"\'Noto Sans Zanabazar Square\', sans-serif","weights":"400"},{"name":"Noto Serif","font-family":"\'Noto Serif\', serif","weights":"400,700"},{"name":"Noto Serif Ahom","font-family":"\'Noto Serif Ahom\', serif","weights":"400"},{"name":"Noto Serif Armenian","font-family":"\'Noto Serif Armenian\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Balinese","font-family":"\'Noto Serif Balinese\', serif","weights":"400"},{"name":"Noto Serif Bengali","font-family":"\'Noto Serif Bengali\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Devanagari","font-family":"\'Noto Serif Devanagari\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Display","font-family":"\'Noto Serif Display\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Dogra","font-family":"\'Noto Serif Dogra\', serif","weights":"400"},{"name":"Noto Serif Ethiopic","font-family":"\'Noto Serif Ethiopic\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Georgian","font-family":"\'Noto Serif Georgian\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Grantha","font-family":"\'Noto Serif Grantha\', serif","weights":"400"},{"name":"Noto Serif Gujarati","font-family":"\'Noto Serif Gujarati\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Gurmukhi","font-family":"\'Noto Serif Gurmukhi\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Hebrew","font-family":"\'Noto Serif Hebrew\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif JP","font-family":"\'Noto Serif JP\', serif","weights":"200,300,400,500,600,700,900"},{"name":"Noto Serif KR","font-family":"\'Noto Serif KR\', serif","weights":"200,300,400,500,600,700,900"},{"name":"Noto Serif Kannada","font-family":"\'Noto Serif Kannada\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Khmer","font-family":"\'Noto Serif Khmer\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Lao","font-family":"\'Noto Serif Lao\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Malayalam","font-family":"\'Noto Serif Malayalam\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Myanmar","font-family":"\'Noto Serif Myanmar\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Nyiakeng Puachue Hmong","font-family":"\'Noto Serif Nyiakeng Puachue Hmong\', serif","weights":"400,500,600,700"},{"name":"Noto Serif SC","font-family":"\'Noto Serif SC\', serif","weights":"200,300,400,500,600,700,900"},{"name":"Noto Serif Sinhala","font-family":"\'Noto Serif Sinhala\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif TC","font-family":"\'Noto Serif TC\', serif","weights":"200,300,400,500,600,700,900"},{"name":"Noto Serif Tamil","font-family":"\'Noto Serif Tamil\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Tangut","font-family":"\'Noto Serif Tangut\', serif","weights":"400"},{"name":"Noto Serif Telugu","font-family":"\'Noto Serif Telugu\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Thai","font-family":"\'Noto Serif Thai\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Tibetan","font-family":"\'Noto Serif Tibetan\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Noto Serif Yezidi","font-family":"\'Noto Serif Yezidi\', serif","weights":"400,500,600,700"},{"name":"Noto Traditional Nushu","font-family":"\'Noto Traditional Nushu\', sans-serif","weights":"400"},{"name":"Nova Cut","font-family":"\'Nova Cut\', display","weights":"400"},{"name":"Nova Flat","font-family":"\'Nova Flat\', display","weights":"400"},{"name":"Nova Mono","font-family":"\'Nova Mono\', monospace","weights":"400"},{"name":"Nova Oval","font-family":"\'Nova Oval\', display","weights":"400"},{"name":"Nova Round","font-family":"\'Nova Round\', display","weights":"400"},{"name":"Nova Script","font-family":"\'Nova Script\', display","weights":"400"},{"name":"Nova Slim","font-family":"\'Nova Slim\', display","weights":"400"},{"name":"Nova Square","font-family":"\'Nova Square\', display","weights":"400"},{"name":"Numans","font-family":"\'Numans\', sans-serif","weights":"400"},{"name":"Nunito","font-family":"\'Nunito\', sans-serif","weights":"200,300,400,600,700,800,900"},{"name":"Nunito Sans","font-family":"\'Nunito Sans\', sans-serif","weights":"200,300,400,600,700,800,900"},{"name":"Odibee Sans","font-family":"\'Odibee Sans\', display","weights":"400"},{"name":"Odor Mean Chey","font-family":"\'Odor Mean Chey\', serif","weights":"400"},{"name":"Offside","font-family":"\'Offside\', display","weights":"400"},{"name":"Oi","font-family":"\'Oi\', display","weights":"400"},{"name":"Old Standard TT","font-family":"\'Old Standard TT\', serif","weights":"400,700"},{"name":"Oldenburg","font-family":"\'Oldenburg\', display","weights":"400"},{"name":"Oleo Script","font-family":"\'Oleo Script\', display","weights":"400,700"},{"name":"Oleo Script Swash Caps","font-family":"\'Oleo Script Swash Caps\', display","weights":"400,700"},{"name":"Open Sans","font-family":"\'Open Sans\', sans-serif","weights":"300,400,500,600,700,800"},{"name":"Open Sans Condensed","font-family":"\'Open Sans Condensed\', sans-serif","weights":"300,700"},{"name":"Oranienbaum","font-family":"\'Oranienbaum\', serif","weights":"400"},{"name":"Orbitron","font-family":"\'Orbitron\', sans-serif","weights":"400,500,600,700,800,900"},{"name":"Oregano","font-family":"\'Oregano\', display","weights":"400"},{"name":"Orelega One","font-family":"\'Orelega One\', display","weights":"400"},{"name":"Orienta","font-family":"\'Orienta\', sans-serif","weights":"400"},{"name":"Original Surfer","font-family":"\'Original Surfer\', display","weights":"400"},{"name":"Oswald","font-family":"\'Oswald\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Otomanopee One","font-family":"\'Otomanopee One\', sans-serif","weights":"400"},{"name":"Over the Rainbow","font-family":"\'Over the Rainbow\', handwriting","weights":"400"},{"name":"Overlock","font-family":"\'Overlock\', display","weights":"400,700,900"},{"name":"Overlock SC","font-family":"\'Overlock SC\', display","weights":"400"},{"name":"Overpass","font-family":"\'Overpass\', sans-serif","weights":"100,200,300,400,600,700,800,900"},{"name":"Overpass Mono","font-family":"\'Overpass Mono\', monospace","weights":"300,400,600,700"},{"name":"Ovo","font-family":"\'Ovo\', serif","weights":"400"},{"name":"Oxanium","font-family":"\'Oxanium\', display","weights":"200,300,400,500,600,700,800"},{"name":"Oxygen","font-family":"\'Oxygen\', sans-serif","weights":"300,400,700"},{"name":"Oxygen Mono","font-family":"\'Oxygen Mono\', monospace","weights":"400"},{"name":"PT Mono","font-family":"\'PT Mono\', monospace","weights":"400"},{"name":"PT Sans","font-family":"\'PT Sans\', sans-serif","weights":"400,700"},{"name":"PT Sans Caption","font-family":"\'PT Sans Caption\', sans-serif","weights":"400,700"},{"name":"PT Sans Narrow","font-family":"\'PT Sans Narrow\', sans-serif","weights":"400,700"},{"name":"PT Serif","font-family":"\'PT Serif\', serif","weights":"400,700"},{"name":"PT Serif Caption","font-family":"\'PT Serif Caption\', serif","weights":"400"},{"name":"Pacifico","font-family":"\'Pacifico\', handwriting","weights":"400"},{"name":"Padauk","font-family":"\'Padauk\', sans-serif","weights":"400,700"},{"name":"Palanquin","font-family":"\'Palanquin\', sans-serif","weights":"100,200,300,400,500,600,700"},{"name":"Palanquin Dark","font-family":"\'Palanquin Dark\', sans-serif","weights":"400,500,600,700"},{"name":"Palette Mosaic","font-family":"\'Palette Mosaic\', display","weights":"400"},{"name":"Pangolin","font-family":"\'Pangolin\', handwriting","weights":"400"},{"name":"Paprika","font-family":"\'Paprika\', display","weights":"400"},{"name":"Parisienne","font-family":"\'Parisienne\', handwriting","weights":"400"},{"name":"Passero One","font-family":"\'Passero One\', display","weights":"400"},{"name":"Passion One","font-family":"\'Passion One\', display","weights":"400,700,900"},{"name":"Pathway Gothic One","font-family":"\'Pathway Gothic One\', sans-serif","weights":"400"},{"name":"Patrick Hand","font-family":"\'Patrick Hand\', handwriting","weights":"400"},{"name":"Patrick Hand SC","font-family":"\'Patrick Hand SC\', handwriting","weights":"400"},{"name":"Pattaya","font-family":"\'Pattaya\', sans-serif","weights":"400"},{"name":"Patua One","font-family":"\'Patua One\', display","weights":"400"},{"name":"Pavanam","font-family":"\'Pavanam\', sans-serif","weights":"400"},{"name":"Paytone One","font-family":"\'Paytone One\', sans-serif","weights":"400"},{"name":"Peddana","font-family":"\'Peddana\', serif","weights":"400"},{"name":"Peralta","font-family":"\'Peralta\', display","weights":"400"},{"name":"Permanent Marker","font-family":"\'Permanent Marker\', handwriting","weights":"400"},{"name":"Petit Formal Script","font-family":"\'Petit Formal Script\', handwriting","weights":"400"},{"name":"Petrona","font-family":"\'Petrona\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Philosopher","font-family":"\'Philosopher\', sans-serif","weights":"400,700"},{"name":"Piazzolla","font-family":"\'Piazzolla\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Piedra","font-family":"\'Piedra\', display","weights":"400"},{"name":"Pinyon Script","font-family":"\'Pinyon Script\', handwriting","weights":"400"},{"name":"Pirata One","font-family":"\'Pirata One\', display","weights":"400"},{"name":"Plaster","font-family":"\'Plaster\', display","weights":"400"},{"name":"Play","font-family":"\'Play\', sans-serif","weights":"400,700"},{"name":"Playball","font-family":"\'Playball\', display","weights":"400"},{"name":"Playfair Display","font-family":"\'Playfair Display\', serif","weights":"400,500,600,700,800,900"},{"name":"Playfair Display SC","font-family":"\'Playfair Display SC\', serif","weights":"400,700,900"},{"name":"Podkova","font-family":"\'Podkova\', serif","weights":"400,500,600,700,800"},{"name":"Poiret One","font-family":"\'Poiret One\', display","weights":"400"},{"name":"Poller One","font-family":"\'Poller One\', display","weights":"400"},{"name":"Poly","font-family":"\'Poly\', serif","weights":"400"},{"name":"Pompiere","font-family":"\'Pompiere\', display","weights":"400"},{"name":"Pontano Sans","font-family":"\'Pontano Sans\', sans-serif","weights":"400"},{"name":"Poor Story","font-family":"\'Poor Story\', display","weights":"400"},{"name":"Poppins","font-family":"\'Poppins\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Port Lligat Sans","font-family":"\'Port Lligat Sans\', sans-serif","weights":"400"},{"name":"Port Lligat Slab","font-family":"\'Port Lligat Slab\', serif","weights":"400"},{"name":"Potta One","font-family":"\'Potta One\', display","weights":"400"},{"name":"Pragati Narrow","font-family":"\'Pragati Narrow\', sans-serif","weights":"400,700"},{"name":"Prata","font-family":"\'Prata\', serif","weights":"400"},{"name":"Preahvihear","font-family":"\'Preahvihear\', sans-serif","weights":"400"},{"name":"Press Start 2P","font-family":"\'Press Start 2P\', display","weights":"400"},{"name":"Pridi","font-family":"\'Pridi\', serif","weights":"200,300,400,500,600,700"},{"name":"Princess Sofia","font-family":"\'Princess Sofia\', handwriting","weights":"400"},{"name":"Prociono","font-family":"\'Prociono\', serif","weights":"400"},{"name":"Prompt","font-family":"\'Prompt\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Prosto One","font-family":"\'Prosto One\', display","weights":"400"},{"name":"Proza Libre","font-family":"\'Proza Libre\', sans-serif","weights":"400,500,600,700,800"},{"name":"Public Sans","font-family":"\'Public Sans\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Puritan","font-family":"\'Puritan\', sans-serif","weights":"400,700"},{"name":"Purple Purse","font-family":"\'Purple Purse\', display","weights":"400"},{"name":"Qahiri","font-family":"\'Qahiri\', sans-serif","weights":"400"},{"name":"Quando","font-family":"\'Quando\', serif","weights":"400"},{"name":"Quantico","font-family":"\'Quantico\', sans-serif","weights":"400,700"},{"name":"Quattrocento","font-family":"\'Quattrocento\', serif","weights":"400,700"},{"name":"Quattrocento Sans","font-family":"\'Quattrocento Sans\', sans-serif","weights":"400,700"},{"name":"Questrial","font-family":"\'Questrial\', sans-serif","weights":"400"},{"name":"Quicksand","font-family":"\'Quicksand\', sans-serif","weights":"300,400,500,600,700"},{"name":"Quintessential","font-family":"\'Quintessential\', handwriting","weights":"400"},{"name":"Qwigley","font-family":"\'Qwigley\', handwriting","weights":"400"},{"name":"Racing Sans One","font-family":"\'Racing Sans One\', display","weights":"400"},{"name":"Radley","font-family":"\'Radley\', serif","weights":"400"},{"name":"Rajdhani","font-family":"\'Rajdhani\', sans-serif","weights":"300,400,500,600,700"},{"name":"Rakkas","font-family":"\'Rakkas\', display","weights":"400"},{"name":"Raleway","font-family":"\'Raleway\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Raleway Dots","font-family":"\'Raleway Dots\', display","weights":"400"},{"name":"Ramabhadra","font-family":"\'Ramabhadra\', sans-serif","weights":"400"},{"name":"Ramaraja","font-family":"\'Ramaraja\', serif","weights":"400"},{"name":"Rambla","font-family":"\'Rambla\', sans-serif","weights":"400,700"},{"name":"Rammetto One","font-family":"\'Rammetto One\', display","weights":"400"},{"name":"Rampart One","font-family":"\'Rampart One\', display","weights":"400"},{"name":"Ranchers","font-family":"\'Ranchers\', display","weights":"400"},{"name":"Rancho","font-family":"\'Rancho\', handwriting","weights":"400"},{"name":"Ranga","font-family":"\'Ranga\', display","weights":"400,700"},{"name":"Rasa","font-family":"\'Rasa\', serif","weights":"300,400,500,600,700"},{"name":"Rationale","font-family":"\'Rationale\', sans-serif","weights":"400"},{"name":"Ravi Prakash","font-family":"\'Ravi Prakash\', display","weights":"400"},{"name":"Recursive","font-family":"\'Recursive\', sans-serif","weights":"300,400,500,600,700,800,900"},{"name":"Red Hat Display","font-family":"\'Red Hat Display\', sans-serif","weights":"300,400,500,600,700,800,900"},{"name":"Red Hat Text","font-family":"\'Red Hat Text\', sans-serif","weights":"300,400,500,600,700"},{"name":"Red Rose","font-family":"\'Red Rose\', display","weights":"300,400,500,600,700"},{"name":"Redressed","font-family":"\'Redressed\', handwriting","weights":"400"},{"name":"Reem Kufi","font-family":"\'Reem Kufi\', sans-serif","weights":"400,500,600,700"},{"name":"Reenie Beanie","font-family":"\'Reenie Beanie\', handwriting","weights":"400"},{"name":"Reggae One","font-family":"\'Reggae One\', display","weights":"400"},{"name":"Revalia","font-family":"\'Revalia\', display","weights":"400"},{"name":"Rhodium Libre","font-family":"\'Rhodium Libre\', serif","weights":"400"},{"name":"Ribeye","font-family":"\'Ribeye\', display","weights":"400"},{"name":"Ribeye Marrow","font-family":"\'Ribeye Marrow\', display","weights":"400"},{"name":"Righteous","font-family":"\'Righteous\', display","weights":"400"},{"name":"Risque","font-family":"\'Risque\', display","weights":"400"},{"name":"Roboto","font-family":"\'Roboto\', sans-serif","weights":"100,300,400,500,700,900"},{"name":"Roboto Condensed","font-family":"\'Roboto Condensed\', sans-serif","weights":"300,400,700"},{"name":"Roboto Mono","font-family":"\'Roboto Mono\', monospace","weights":"100,200,300,400,500,600,700"},{"name":"Roboto Slab","font-family":"\'Roboto Slab\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Rochester","font-family":"\'Rochester\', handwriting","weights":"400"},{"name":"Rock Salt","font-family":"\'Rock Salt\', handwriting","weights":"400"},{"name":"RocknRoll One","font-family":"\'RocknRoll One\', sans-serif","weights":"400"},{"name":"Rokkitt","font-family":"\'Rokkitt\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Romanesco","font-family":"\'Romanesco\', handwriting","weights":"400"},{"name":"Ropa Sans","font-family":"\'Ropa Sans\', sans-serif","weights":"400"},{"name":"Rosario","font-family":"\'Rosario\', sans-serif","weights":"300,400,500,600,700"},{"name":"Rosarivo","font-family":"\'Rosarivo\', serif","weights":"400"},{"name":"Rouge Script","font-family":"\'Rouge Script\', handwriting","weights":"400"},{"name":"Rowdies","font-family":"\'Rowdies\', display","weights":"300,400,700"},{"name":"Rozha One","font-family":"\'Rozha One\', serif","weights":"400"},{"name":"Rubik","font-family":"\'Rubik\', sans-serif","weights":"300,400,500,600,700,800,900"},{"name":"Rubik Beastly","font-family":"\'Rubik Beastly\', display","weights":"400"},{"name":"Rubik Mono One","font-family":"\'Rubik Mono One\', sans-serif","weights":"400"},{"name":"Ruda","font-family":"\'Ruda\', sans-serif","weights":"400,500,600,700,800,900"},{"name":"Rufina","font-family":"\'Rufina\', serif","weights":"400,700"},{"name":"Ruge Boogie","font-family":"\'Ruge Boogie\', handwriting","weights":"400"},{"name":"Ruluko","font-family":"\'Ruluko\', sans-serif","weights":"400"},{"name":"Rum Raisin","font-family":"\'Rum Raisin\', sans-serif","weights":"400"},{"name":"Ruslan Display","font-family":"\'Ruslan Display\', display","weights":"400"},{"name":"Russo One","font-family":"\'Russo One\', sans-serif","weights":"400"},{"name":"Ruthie","font-family":"\'Ruthie\', handwriting","weights":"400"},{"name":"Rye","font-family":"\'Rye\', display","weights":"400"},{"name":"STIX Two Text","font-family":"\'STIX Two Text\', serif","weights":"400,500,600,700"},{"name":"Sacramento","font-family":"\'Sacramento\', handwriting","weights":"400"},{"name":"Sahitya","font-family":"\'Sahitya\', serif","weights":"400,700"},{"name":"Sail","font-family":"\'Sail\', display","weights":"400"},{"name":"Saira","font-family":"\'Saira\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Saira Condensed","font-family":"\'Saira Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Saira Extra Condensed","font-family":"\'Saira Extra Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Saira Semi Condensed","font-family":"\'Saira Semi Condensed\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Saira Stencil One","font-family":"\'Saira Stencil One\', display","weights":"400"},{"name":"Salsa","font-family":"\'Salsa\', display","weights":"400"},{"name":"Sanchez","font-family":"\'Sanchez\', serif","weights":"400"},{"name":"Sancreek","font-family":"\'Sancreek\', display","weights":"400"},{"name":"Sansita","font-family":"\'Sansita\', sans-serif","weights":"400,700,800,900"},{"name":"Sansita Swashed","font-family":"\'Sansita Swashed\', display","weights":"300,400,500,600,700,800,900"},{"name":"Sarabun","font-family":"\'Sarabun\', sans-serif","weights":"100,200,300,400,500,600,700,800"},{"name":"Sarala","font-family":"\'Sarala\', sans-serif","weights":"400,700"},{"name":"Sarina","font-family":"\'Sarina\', display","weights":"400"},{"name":"Sarpanch","font-family":"\'Sarpanch\', sans-serif","weights":"400,500,600,700,800,900"},{"name":"Satisfy","font-family":"\'Satisfy\', handwriting","weights":"400"},{"name":"Sawarabi Gothic","font-family":"\'Sawarabi Gothic\', sans-serif","weights":"400"},{"name":"Sawarabi Mincho","font-family":"\'Sawarabi Mincho\', sans-serif","weights":"400"},{"name":"Scada","font-family":"\'Scada\', sans-serif","weights":"400,700"},{"name":"Scheherazade","font-family":"\'Scheherazade\', serif","weights":"400,700"},{"name":"Scheherazade New","font-family":"\'Scheherazade New\', serif","weights":"400,700"},{"name":"Schoolbell","font-family":"\'Schoolbell\', handwriting","weights":"400"},{"name":"Scope One","font-family":"\'Scope One\', serif","weights":"400"},{"name":"Seaweed Script","font-family":"\'Seaweed Script\', display","weights":"400"},{"name":"Secular One","font-family":"\'Secular One\', sans-serif","weights":"400"},{"name":"Sedgwick Ave","font-family":"\'Sedgwick Ave\', handwriting","weights":"400"},{"name":"Sedgwick Ave Display","font-family":"\'Sedgwick Ave Display\', handwriting","weights":"400"},{"name":"Sen","font-family":"\'Sen\', sans-serif","weights":"400,700,800"},{"name":"Sevillana","font-family":"\'Sevillana\', display","weights":"400"},{"name":"Seymour One","font-family":"\'Seymour One\', sans-serif","weights":"400"},{"name":"Shadows Into Light","font-family":"\'Shadows Into Light\', handwriting","weights":"400"},{"name":"Shadows Into Light Two","font-family":"\'Shadows Into Light Two\', handwriting","weights":"400"},{"name":"Shanti","font-family":"\'Shanti\', sans-serif","weights":"400"},{"name":"Share","font-family":"\'Share\', display","weights":"400,700"},{"name":"Share Tech","font-family":"\'Share Tech\', sans-serif","weights":"400"},{"name":"Share Tech Mono","font-family":"\'Share Tech Mono\', monospace","weights":"400"},{"name":"Shippori Mincho","font-family":"\'Shippori Mincho\', serif","weights":"400,500,600,700,800"},{"name":"Shippori Mincho B1","font-family":"\'Shippori Mincho B1\', serif","weights":"400,500,600,700,800"},{"name":"Shojumaru","font-family":"\'Shojumaru\', display","weights":"400"},{"name":"Short Stack","font-family":"\'Short Stack\', handwriting","weights":"400"},{"name":"Shrikhand","font-family":"\'Shrikhand\', display","weights":"400"},{"name":"Siemreap","font-family":"\'Siemreap\', display","weights":"400"},{"name":"Sigmar One","font-family":"\'Sigmar One\', display","weights":"400"},{"name":"Signika","font-family":"\'Signika\', sans-serif","weights":"300,400,500,600,700"},{"name":"Signika Negative","font-family":"\'Signika Negative\', sans-serif","weights":"300,400,600,700"},{"name":"Simonetta","font-family":"\'Simonetta\', display","weights":"400,900"},{"name":"Single Day","font-family":"\'Single Day\', display","weights":"400"},{"name":"Sintony","font-family":"\'Sintony\', sans-serif","weights":"400,700"},{"name":"Sirin Stencil","font-family":"\'Sirin Stencil\', display","weights":"400"},{"name":"Six Caps","font-family":"\'Six Caps\', sans-serif","weights":"400"},{"name":"Skranji","font-family":"\'Skranji\', display","weights":"400,700"},{"name":"Slabo 13px","font-family":"\'Slabo 13px\', serif","weights":"400"},{"name":"Slabo 27px","font-family":"\'Slabo 27px\', serif","weights":"400"},{"name":"Slackey","font-family":"\'Slackey\', display","weights":"400"},{"name":"Smokum","font-family":"\'Smokum\', display","weights":"400"},{"name":"Smythe","font-family":"\'Smythe\', display","weights":"400"},{"name":"Sniglet","font-family":"\'Sniglet\', display","weights":"400,800"},{"name":"Snippet","font-family":"\'Snippet\', sans-serif","weights":"400"},{"name":"Snowburst One","font-family":"\'Snowburst One\', display","weights":"400"},{"name":"Sofadi One","font-family":"\'Sofadi One\', display","weights":"400"},{"name":"Sofia","font-family":"\'Sofia\', handwriting","weights":"400"},{"name":"Solway","font-family":"\'Solway\', serif","weights":"300,400,500,700,800"},{"name":"Song Myung","font-family":"\'Song Myung\', serif","weights":"400"},{"name":"Sonsie One","font-family":"\'Sonsie One\', display","weights":"400"},{"name":"Sora","font-family":"\'Sora\', sans-serif","weights":"100,200,300,400,500,600,700,800"},{"name":"Sorts Mill Goudy","font-family":"\'Sorts Mill Goudy\', serif","weights":"400"},{"name":"Source Code Pro","font-family":"\'Source Code Pro\', monospace","weights":"200,300,400,500,600,700,900"},{"name":"Source Sans Pro","font-family":"\'Source Sans Pro\', sans-serif","weights":"200,300,400,600,700,900"},{"name":"Source Serif Pro","font-family":"\'Source Serif Pro\', serif","weights":"200,300,400,600,700,900"},{"name":"Space Grotesk","font-family":"\'Space Grotesk\', sans-serif","weights":"300,400,500,600,700"},{"name":"Space Mono","font-family":"\'Space Mono\', monospace","weights":"400,700"},{"name":"Spartan","font-family":"\'Spartan\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Special Elite","font-family":"\'Special Elite\', display","weights":"400"},{"name":"Spectral","font-family":"\'Spectral\', serif","weights":"200,300,400,500,600,700,800"},{"name":"Spectral SC","font-family":"\'Spectral SC\', serif","weights":"200,300,400,500,600,700,800"},{"name":"Spicy Rice","font-family":"\'Spicy Rice\', display","weights":"400"},{"name":"Spinnaker","font-family":"\'Spinnaker\', sans-serif","weights":"400"},{"name":"Spirax","font-family":"\'Spirax\', display","weights":"400"},{"name":"Squada One","font-family":"\'Squada One\', display","weights":"400"},{"name":"Sree Krushnadevaraya","font-family":"\'Sree Krushnadevaraya\', serif","weights":"400"},{"name":"Sriracha","font-family":"\'Sriracha\', handwriting","weights":"400"},{"name":"Srisakdi","font-family":"\'Srisakdi\', display","weights":"400,700"},{"name":"Staatliches","font-family":"\'Staatliches\', display","weights":"400"},{"name":"Stalemate","font-family":"\'Stalemate\', handwriting","weights":"400"},{"name":"Stalinist One","font-family":"\'Stalinist One\', display","weights":"400"},{"name":"Stardos Stencil","font-family":"\'Stardos Stencil\', display","weights":"400,700"},{"name":"Stick","font-family":"\'Stick\', sans-serif","weights":"400"},{"name":"Stick No Bills","font-family":"\'Stick No Bills\', sans-serif","weights":"200,300,400,500,600,700,800"},{"name":"Stint Ultra Condensed","font-family":"\'Stint Ultra Condensed\', display","weights":"400"},{"name":"Stint Ultra Expanded","font-family":"\'Stint Ultra Expanded\', display","weights":"400"},{"name":"Stoke","font-family":"\'Stoke\', serif","weights":"300,400"},{"name":"Strait","font-family":"\'Strait\', sans-serif","weights":"400"},{"name":"Style Script","font-family":"\'Style Script\', handwriting","weights":"400"},{"name":"Stylish","font-family":"\'Stylish\', sans-serif","weights":"400"},{"name":"Sue Ellen Francisco","font-family":"\'Sue Ellen Francisco\', handwriting","weights":"400"},{"name":"Suez One","font-family":"\'Suez One\', serif","weights":"400"},{"name":"Sulphur Point","font-family":"\'Sulphur Point\', sans-serif","weights":"300,400,700"},{"name":"Sumana","font-family":"\'Sumana\', serif","weights":"400,700"},{"name":"Sunflower","font-family":"\'Sunflower\', sans-serif","weights":"300,500,700"},{"name":"Sunshiney","font-family":"\'Sunshiney\', handwriting","weights":"400"},{"name":"Supermercado One","font-family":"\'Supermercado One\', display","weights":"400"},{"name":"Sura","font-family":"\'Sura\', serif","weights":"400,700"},{"name":"Suranna","font-family":"\'Suranna\', serif","weights":"400"},{"name":"Suravaram","font-family":"\'Suravaram\', serif","weights":"400"},{"name":"Suwannaphum","font-family":"\'Suwannaphum\', serif","weights":"100,300,400,700,900"},{"name":"Swanky and Moo Moo","font-family":"\'Swanky and Moo Moo\', handwriting","weights":"400"},{"name":"Syncopate","font-family":"\'Syncopate\', sans-serif","weights":"400,700"},{"name":"Syne","font-family":"\'Syne\', sans-serif","weights":"400,500,600,700,800"},{"name":"Syne Mono","font-family":"\'Syne Mono\', monospace","weights":"400"},{"name":"Syne Tactile","font-family":"\'Syne Tactile\', display","weights":"400"},{"name":"Tajawal","font-family":"\'Tajawal\', sans-serif","weights":"200,300,400,500,700,800,900"},{"name":"Tangerine","font-family":"\'Tangerine\', handwriting","weights":"400,700"},{"name":"Taprom","font-family":"\'Taprom\', display","weights":"400"},{"name":"Tauri","font-family":"\'Tauri\', sans-serif","weights":"400"},{"name":"Taviraj","font-family":"\'Taviraj\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Teko","font-family":"\'Teko\', sans-serif","weights":"300,400,500,600,700"},{"name":"Telex","font-family":"\'Telex\', sans-serif","weights":"400"},{"name":"Tenali Ramakrishna","font-family":"\'Tenali Ramakrishna\', sans-serif","weights":"400"},{"name":"Tenor Sans","font-family":"\'Tenor Sans\', sans-serif","weights":"400"},{"name":"Text Me One","font-family":"\'Text Me One\', sans-serif","weights":"400"},{"name":"Texturina","font-family":"\'Texturina\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Thasadith","font-family":"\'Thasadith\', sans-serif","weights":"400,700"},{"name":"The Girl Next Door","font-family":"\'The Girl Next Door\', handwriting","weights":"400"},{"name":"Tienne","font-family":"\'Tienne\', serif","weights":"400,700,900"},{"name":"Tillana","font-family":"\'Tillana\', handwriting","weights":"400,500,600,700,800"},{"name":"Timmana","font-family":"\'Timmana\', sans-serif","weights":"400"},{"name":"Tinos","font-family":"\'Tinos\', serif","weights":"400,700"},{"name":"Titan One","font-family":"\'Titan One\', display","weights":"400"},{"name":"Titillium Web","font-family":"\'Titillium Web\', sans-serif","weights":"200,300,400,600,700,900"},{"name":"Tomorrow","font-family":"\'Tomorrow\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Tourney","font-family":"\'Tourney\', display","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Trade Winds","font-family":"\'Trade Winds\', display","weights":"400"},{"name":"Train One","font-family":"\'Train One\', display","weights":"400"},{"name":"Trirong","font-family":"\'Trirong\', serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Trispace","font-family":"\'Trispace\', sans-serif","weights":"100,200,300,400,500,600,700,800"},{"name":"Trocchi","font-family":"\'Trocchi\', serif","weights":"400"},{"name":"Trochut","font-family":"\'Trochut\', display","weights":"400,700"},{"name":"Truculenta","font-family":"\'Truculenta\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Trykker","font-family":"\'Trykker\', serif","weights":"400"},{"name":"Tulpen One","font-family":"\'Tulpen One\', display","weights":"400"},{"name":"Turret Road","font-family":"\'Turret Road\', display","weights":"200,300,400,500,700,800"},{"name":"Ubuntu","font-family":"\'Ubuntu\', sans-serif","weights":"300,400,500,700"},{"name":"Ubuntu Condensed","font-family":"\'Ubuntu Condensed\', sans-serif","weights":"400"},{"name":"Ubuntu Mono","font-family":"\'Ubuntu Mono\', monospace","weights":"400,700"},{"name":"Uchen","font-family":"\'Uchen\', serif","weights":"400"},{"name":"Ultra","font-family":"\'Ultra\', serif","weights":"400"},{"name":"Uncial Antiqua","font-family":"\'Uncial Antiqua\', display","weights":"400"},{"name":"Underdog","font-family":"\'Underdog\', display","weights":"400"},{"name":"Unica One","font-family":"\'Unica One\', display","weights":"400"},{"name":"UnifrakturCook","font-family":"\'UnifrakturCook\', display","weights":"700"},{"name":"UnifrakturMaguntia","font-family":"\'UnifrakturMaguntia\', display","weights":"400"},{"name":"Unkempt","font-family":"\'Unkempt\', display","weights":"400,700"},{"name":"Unlock","font-family":"\'Unlock\', display","weights":"400"},{"name":"Unna","font-family":"\'Unna\', serif","weights":"400,700"},{"name":"Urbanist","font-family":"\'Urbanist\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"VT323","font-family":"\'VT323\', monospace","weights":"400"},{"name":"Vampiro One","font-family":"\'Vampiro One\', display","weights":"400"},{"name":"Varela","font-family":"\'Varela\', sans-serif","weights":"400"},{"name":"Varela Round","font-family":"\'Varela Round\', sans-serif","weights":"400"},{"name":"Varta","font-family":"\'Varta\', sans-serif","weights":"300,400,500,600,700"},{"name":"Vast Shadow","font-family":"\'Vast Shadow\', display","weights":"400"},{"name":"Vesper Libre","font-family":"\'Vesper Libre\', serif","weights":"400,500,700,900"},{"name":"Viaoda Libre","font-family":"\'Viaoda Libre\', display","weights":"400"},{"name":"Vibes","font-family":"\'Vibes\', display","weights":"400"},{"name":"Vibur","font-family":"\'Vibur\', handwriting","weights":"400"},{"name":"Vidaloka","font-family":"\'Vidaloka\', serif","weights":"400"},{"name":"Viga","font-family":"\'Viga\', sans-serif","weights":"400"},{"name":"Voces","font-family":"\'Voces\', display","weights":"400"},{"name":"Volkhov","font-family":"\'Volkhov\', serif","weights":"400,700"},{"name":"Vollkorn","font-family":"\'Vollkorn\', serif","weights":"400,500,600,700,800,900"},{"name":"Vollkorn SC","font-family":"\'Vollkorn SC\', serif","weights":"400,600,700,900"},{"name":"Voltaire","font-family":"\'Voltaire\', sans-serif","weights":"400"},{"name":"Waiting for the Sunrise","font-family":"\'Waiting for the Sunrise\', handwriting","weights":"400"},{"name":"Wallpoet","font-family":"\'Wallpoet\', display","weights":"400"},{"name":"Walter Turncoat","font-family":"\'Walter Turncoat\', handwriting","weights":"400"},{"name":"Warnes","font-family":"\'Warnes\', display","weights":"400"},{"name":"Wellfleet","font-family":"\'Wellfleet\', display","weights":"400"},{"name":"Wendy One","font-family":"\'Wendy One\', sans-serif","weights":"400"},{"name":"WindSong","font-family":"\'WindSong\', handwriting","weights":"400,500"},{"name":"Wire One","font-family":"\'Wire One\', sans-serif","weights":"400"},{"name":"Work Sans","font-family":"\'Work Sans\', sans-serif","weights":"100,200,300,400,500,600,700,800,900"},{"name":"Xanh Mono","font-family":"\'Xanh Mono\', monospace","weights":"400"},{"name":"Yaldevi","font-family":"\'Yaldevi\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Yanone Kaffeesatz","font-family":"\'Yanone Kaffeesatz\', sans-serif","weights":"200,300,400,500,600,700"},{"name":"Yantramanav","font-family":"\'Yantramanav\', sans-serif","weights":"100,300,400,500,700,900"},{"name":"Yatra One","font-family":"\'Yatra One\', display","weights":"400"},{"name":"Yellowtail","font-family":"\'Yellowtail\', handwriting","weights":"400"},{"name":"Yeon Sung","font-family":"\'Yeon Sung\', display","weights":"400"},{"name":"Yeseva One","font-family":"\'Yeseva One\', display","weights":"400"},{"name":"Yesteryear","font-family":"\'Yesteryear\', handwriting","weights":"400"},{"name":"Yomogi","font-family":"\'Yomogi\', handwriting","weights":"400"},{"name":"Yrsa","font-family":"\'Yrsa\', serif","weights":"300,400,500,600,700"},{"name":"Yusei Magic","font-family":"\'Yusei Magic\', sans-serif","weights":"400"},{"name":"ZCOOL KuaiLe","font-family":"\'ZCOOL KuaiLe\', display","weights":"400"},{"name":"ZCOOL QingKe HuangYou","font-family":"\'ZCOOL QingKe HuangYou\', display","weights":"400"},{"name":"ZCOOL XiaoWei","font-family":"\'ZCOOL XiaoWei\', serif","weights":"400"},{"name":"Zen Antique","font-family":"\'Zen Antique\', serif","weights":"400"},{"name":"Zen Antique Soft","font-family":"\'Zen Antique Soft\', serif","weights":"400"},{"name":"Zen Dots","font-family":"\'Zen Dots\', display","weights":"400"},{"name":"Zen Kaku Gothic Antique","font-family":"\'Zen Kaku Gothic Antique\', sans-serif","weights":"300,400,500,700,900"},{"name":"Zen Kaku Gothic New","font-family":"\'Zen Kaku Gothic New\', sans-serif","weights":"300,400,500,700,900"},{"name":"Zen Kurenaido","font-family":"\'Zen Kurenaido\', sans-serif","weights":"400"},{"name":"Zen Loop","font-family":"\'Zen Loop\', display","weights":"400"},{"name":"Zen Maru Gothic","font-family":"\'Zen Maru Gothic\', sans-serif","weights":"300,400,500,700,900"},{"name":"Zen Old Mincho","font-family":"\'Zen Old Mincho\', serif","weights":"400,700,900"},{"name":"Zen Tokyo Zoo","font-family":"\'Zen Tokyo Zoo\', display","weights":"400"},{"name":"Zeyada","font-family":"\'Zeyada\', handwriting","weights":"400"},{"name":"Zhi Mang Xing","font-family":"\'Zhi Mang Xing\', handwriting","weights":"400"},{"name":"Zilla Slab","font-family":"\'Zilla Slab\', serif","weights":"300,400,500,600,700"},{"name":"Zilla Slab Highlight","font-family":"\'Zilla Slab Highlight\', display","weights":"400,700"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/alert/index.js");
/* harmony import */ var _blockquote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockquote */ "./src/blockquote/index.js");
/* harmony import */ var _call_to_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-to-action */ "./src/call-to-action/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/card/index.js");
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial */ "./src/testimonial/index.js");
/**
 * Import blocks as components
 */





}();
/******/ })()
;
//# sourceMappingURL=index.js.map