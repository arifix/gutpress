const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
} = wp.blockEditor;
const { PanelBody, ToggleControl, ColorPicker, RangeControl, SelectControl } =
  wp.components;

import GoogleFonts from "../defaults/google-fonts";
import { map, find } from "lodash";

registerBlockType("gutpress/alert", {
  title: "Alert",
  category: "gutpress-blocks",
  icon: "warning",
  description: "Provides an easy way to create predefined alert messages",
  attributes: {
    full_width: {
      type: "boolean",
      default: false,
    },
    message: {
      type: "string",
      default: "Your blog is going to look awesome with this plugin.",
    },
    alignment: {
      type: "string",
      default: "center",
    },
    border_radius: {
      type: "number",
      default: 5,
    },
    background_color: {
      type: "string",
      default: "#a94442",
    },
    text_color: {
      type: "string",
      default: "#FFFFFF",
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
    text_padding: {
      type: "number",
      default: 15,
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
          <PanelBody title={__("Global Settings", "gutpress")} initialOpen={true}>
            <ToggleControl
              label={__("Full Width", "gutpress")}
              checked={attributes.full_width}
              onChange={(full_width) => setAttributes({ full_width })}
            />

            <RangeControl
              label={__("Padding", "gutpress")}
              value={attributes.text_padding}
              onChange={(text_padding) => setAttributes({ text_padding })}
              min={1}
              max={100}
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

            <h4>{__("Background Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.background_color}
              onChange={(background_color) =>
                setAttributes({ background_color })
              }
              enableAlpha
              defaultValue={attributes.background_color}
            />

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
        </InspectorControls>

        <div
          id="afxBlockAlert"
          class={attributes.full_width ? "afx-block-full-width" : ""}
          style={{
            textAlign: attributes.alignment,
            backgroundColor: attributes.background_color,
            borderRadius: attributes.border_radius,
          }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: attributes.text_styles }}
          ></span>
          <p
            style={{
              fontFamily: attributes.text_font_family,
              fontWeight: attributes.text_font_weight,
              color: attributes.text_color,
              padding: attributes.text_padding,
              fontSize: attributes.text_font_size + "px",
            }}
          >
            <RichText
              value={attributes.message}
              onChange={(message) => setAttributes({ message })}
            />
          </p>
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    return (
      <div {...useBlockProps.save()}>
        <div
          id="afxBlockAlert"
          class={attributes.full_width ? "afx-block-full-width" : ""}
          style={{
            textAlign: attributes.alignment,
            backgroundColor: attributes.background_color,
            borderRadius: attributes.border_radius,
          }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: attributes.text_styles }}
          ></span>
          <p
            style={{
              fontFamily: attributes.text_font_family,
              fontWeight: attributes.text_font_weight,
              color: attributes.text_color,
              padding: attributes.text_padding,
              fontSize: attributes.text_font_size + "px",
            }}
          >
            <RichText.Content value={attributes.message} />
          </p>
        </div>
      </div>
    );
  },
});
