const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;
const { PanelBody, ToggleControl, ColorPicker, RangeControl, SelectControl } =
  wp.components;

import GoogleFonts from "../defaults/google-fonts";
import { map, find } from "lodash";

registerBlockType("gutpress/blockquote", {
  title: "Blockquote",
  category: "gutpress-blocks",
  icon: "format-quote",
  description: "Indicates that the enclosed text is an extended quotation",
  attributes: {
    full_width: {
      type: "boolean",
      default: false,
    },
    alignment: {
      type: "string",
      default: "left",
    },
    content: {
      type: "string",
      default: "Your blog is going to look awesome with this plugin.",
    },
    author: {
      type: "string",
      default: "John Doe",
    },
    border_radius: {
      type: "number",
      default: 5,
    },
    background_color: {
      type: "string",
      default: "#EEEEEE",
    },
    border_color: {
      type: "string",
      default: "#78C0A8",
    },
    border_width: {
      type: "number",
      default: 5,
    },
    text_color: {
      type: "string",
      default: "#555555",
    },
    author_color: {
      type: "string",
      default: "#555555",
    },
    author_font_family: {
      type: "string",
      default: "Arial",
    },
    author_font_weight: {
      type: "string",
      default: 700,
    },
    text_font_family: {
      type: "string",
      default: "Arial",
    },
    text_font_weight: {
      type: "string",
      default: 400,
    },
    text_font_size: {
      type: "number",
      default: 18,
    },
    author_font_size: {
      type: "number",
      default: 20,
    },
    author_styles: {
      type: "string",
      default: "",
    },
    text_styles: {
      type: "string",
      default: "",
    },
  },
  example: {
    attributes: {
      preview: true,
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const selectAuthorOptions = () => {
      return [
        { label: __("Select Font", "gutpress"), value: "" },
        { label: __("Arial", "gutpress"), value: "Arial" },
        { label: __("Helvetica", "gutpress"), value: "Helvetica" },
        { label: __("Times New Roman", "gutpress"), value: "Times New Roman" },
        { label: __("Georgia", "gutpress"), value: "Georgia" },
        ...GoogleFonts.fonts.map(({ name }) => ({ label: name, value: name })),
      ];
    };

    const googleAuthorFontWeights = find(GoogleFonts.fonts, [
      "name",
      attributes.author_font_family.split("+").join(" "),
    ]);

    const authorFontWeightOptions = () => {
      const fontWeights = [
        { label: __("Select Font Weight", "gutpress"), value: "" },
      ];
      if (
        typeof googleAuthorFontWeights !== "undefined" &&
        typeof googleAuthorFontWeights.weights !== "undefined"
      ) {
        map(googleAuthorFontWeights.weights.split(","), (weight) => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({ label: weight, value: parseInt(weight) });
          }
        });
      }

      return fontWeights;
    };

    const onSelectAuthorFontFamily = (value) => {
      setAttributes({ author_font_family: value });
      setAttributes({
        author_styles:
          "<style>@import url('https://fonts.googleapis.com/css?family=" +
          value.split(" ").join("+") +
          "&display=swap');</style>",
      });
    };

    const onSelectAuthorFontWeight = (value) => {
      setAttributes({ author_font_weight: value });
    };

    const selectOptions = () => {
      return [
        { label: __("Select Font", "gutpress"), value: "" },
        { label: __("Arial", "gutpress"), value: "Arial" },
        { label: __("Helvetica", "gutpress"), value: "Helvetica" },
        { label: __("Times New Roman", "gutpress"), value: "Times New Roman" },
        { label: __("Georgia", "gutpress"), value: "Georgia" },
        ...GoogleFonts.fonts.map(({ name }) => ({ label: name, value: name })),
      ];
    };

    const googleFontWeights = find(GoogleFonts.fonts, [
      "name",
      attributes.text_font_family.split("+").join(" "),
    ]);
    const textFontWeightOptions = () => {
      const fontWeights = [
        { label: __("Select Font Weight", "gutpress"), value: "" },
      ];
      if (
        typeof googleFontWeights !== "undefined" &&
        typeof googleFontWeights.weights !== "undefined"
      ) {
        map(googleFontWeights.weights.split(","), (weight) => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({ label: weight, value: parseInt(weight) });
          }
        });
      }

      return fontWeights;
    };

    const onSelectFontFamily = (value) => {
      setAttributes({ text_font_family: value });
      setAttributes({
        text_styles:
          "<style>@import url('https://fonts.googleapis.com/css?family=" +
          value.split(" ").join("+") +
          "&display=swap');</style>",
      });
    };

    const onSelectFontWeight = (value) => {
      setAttributes({ text_font_weight: value });
    };

    return (
      <div {...useBlockProps()}>
        <BlockControls>
          <AlignmentToolbar
            value={attributes.alignment}
            onChange={(alignment) => setAttributes({ alignment })}
          />
        </BlockControls>

        <InspectorControls key="setting">
          <PanelBody
            title={__("Global Settings", "gutpress")}
            initialOpen={true}
          >
            <ToggleControl
              label={__("Full Width", "gutpress")}
              checked={attributes.full_width}
              onChange={(full_width) => setAttributes({ full_width })}
            />

            <h4>{__("Background Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.background_color}
              onChange={(background_color) =>
                setAttributes({ background_color })
              }
              enableAlpha
              defaultValue={attributes.background_color}
            />

            <h4>{__("Border Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.border_color}
              onChange={(border_color) => setAttributes({ border_color })}
              defaultValue={attributes.border_color}
            />

            <RangeControl
              label={__("Border Width", "gutpress")}
              value={attributes.border_width}
              onChange={(border_width) => setAttributes({ border_width })}
              min={0}
              max={25}
              step={1}
            />

            <RangeControl
              label={__("Border Radius", "gutpress")}
              value={attributes.border_radius}
              onChange={(border_radius) => setAttributes({ border_radius })}
              min={0}
              max={35}
              step={1}
            />
          </PanelBody>

          <PanelBody title={__("Text", "gutpress")} initialOpen={false}>
            <h4>{__("Text Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.text_color}
              onChange={(text_color) => setAttributes({ text_color })}
              defaultValue={attributes.text_color}
            />

            <SelectControl
              label={__("Font Family", "gutpress")}
              options={selectOptions()}
              value={attributes.text_font_family}
              onChange={(n) => onSelectFontFamily(n)}
            />

            {textFontWeightOptions() && textFontWeightOptions().length > 1 ? (
              <SelectControl
                label={__("Font Weight", "gutpress")}
                options={textFontWeightOptions()}
                value={attributes.text_font_weight}
                onChange={(n) => onSelectFontWeight(n)}
              />
            ) : (
              ""
            )}

            <RangeControl
              label={__("Font Size", "gutpress")}
              value={attributes.text_font_size}
              onChange={(text_font_size) => setAttributes({ text_font_size })}
              min={14}
              max={100}
              step={1}
            />
          </PanelBody>

          <PanelBody title={__("Author", "gutpress")} initialOpen={false}>
            <h4>{__("Text Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.author_color}
              onChange={(author_color) => setAttributes({ author_color })}
              defaultValue={attributes.author_color}
            />

            <SelectControl
              label={__("Font Family", "gutpress")}
              options={selectAuthorOptions()}
              value={attributes.author_font_family}
              onChange={(n) => onSelectAuthorFontFamily(n)}
            />

            {authorFontWeightOptions() && authorFontWeightOptions().length > 1 ? (
              <SelectControl
                label={__("Font Weight", "gutpress")}
                options={authorFontWeightOptions()}
                value={attributes.author_font_weight}
                onChange={(n) => onSelectAuthorFontWeight(n)}
              />
            ) : (
              ""
            )}

            <RangeControl
              label={__("Font Size", "gutpress")}
              value={attributes.author_font_size}
              onChange={(author_font_size) =>
                setAttributes({ author_font_size })
              }
              min={14}
              max={100}
              step={1}
            />
          </PanelBody>
        </InspectorControls>

        <div
          id="afxBlockBlockquote"
          class={attributes.full_width ? "afx-block-full-width" : ""}
          style={{
            textAlign: attributes.alignment,
          }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: attributes.text_styles }}
          ></span>
          <blockquote
            style={{
              backgroundColor: attributes.background_color,
              borderRadius: attributes.border_radius,
              fontFamily: attributes.text_font_family,
              fontWeight: attributes.text_font_weight,
              color: attributes.text_color,
              fontSize: attributes.text_font_size + "px",
              borderLeftColor: attributes.border_color,
              borderLeftWidth: attributes.border_width + "px",
            }}
          >
            <RichText
              value={attributes.content}
              onChange={(content) => setAttributes({ content })}
            />
            <span
              style={{
                fontFamily: attributes.author_font_family,
                fontWeight: attributes.author_font_weight,
                fontSize: attributes.author_font_size + "px",
                color: attributes.author_color,
              }}
            >
              <RichText
                value={attributes.author}
                onChange={(author) => setAttributes({ author })}
              />
            </span>
          </blockquote>
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    return (
      <div {...useBlockProps.save()}>
        <div
          id="afxBlockBlockquote"
          class={attributes.full_width ? "afx-block-full-width" : ""}
          style={{
            textAlign: attributes.alignment,
          }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: attributes.text_styles }}
          ></span>
          <blockquote
            style={{
              backgroundColor: attributes.background_color,
              borderRadius: attributes.border_radius,
              fontFamily: attributes.text_font_family,
              fontWeight: attributes.text_font_weight,
              color: attributes.text_color,
              fontSize: attributes.text_font_size + "px",
              borderLeftColor: attributes.border_color,
              borderLeftWidth: attributes.border_width + "px",
            }}
          >
            <RichText.Content value={attributes.content} />
            <span
              style={{
                fontFamily: attributes.author_font_family,
                fontWeight: attributes.author_font_weight,
                fontSize: attributes.author_font_size + "px",
                color: attributes.author_color,
              }}
            >
              <RichText.Content value={attributes.author} />
            </span>
          </blockquote>
        </div>
      </div>
    );
  },
});
