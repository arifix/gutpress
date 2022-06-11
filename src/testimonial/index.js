const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaUpload
} = wp.blockEditor;
const { PanelBody, ToggleControl, ColorPicker, RangeControl, SelectControl, Button } =
  wp.components;

import GoogleFonts from "../defaults/google-fonts";
import { map, find } from "lodash";

registerBlockType("gutpress/testimonial", {
  title: "Testimonial",
  category: "gutpress-blocks",
  icon: "id",
  description: "An honest endorsement of your product or service",
  attributes: {
    full_width: {
      type: "boolean",
      default: false,
    },
    height: {
      type: "number",
      default: 250,
    },
    background_image: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1550237330-a5d774594098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    background_position: {
      type: "string",
      default: "center",
    },
    overlay_color: {
      type: "string",
      default: "#00000080",
    },
    author_image: {
      type: "string",
      default: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=200"
    },
    author_image_width: {
      type: "number",
      default: 80,
    },
    author_image_border_radius: {
      type: "number",
      default: 0,
    },
    author: {
      type: "string",
      default: "John Doe",
    },
    text: {
      type: "string",
      default: "\"Your blog is going to look awesome with this plugin.\"",
    },
    border_radius: {
      type: "number",
      default: 5,
    },
    background_color: {
      type: "string",
      default: "#a94442",
    },
    author_color: {
      type: "string",
      default: "#FFFFFF",
    },
    author_font_family: {
      type: "string",
      default: "Arial",
    },
    author_font_weight: {
      type: "string",
      default: 600,
    },
    author_font_size: {
      type: "number",
      default: 30,
    },
    author_styles: {
      type: "string",
      default: "",
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
      default: 100,
    },
    text_font_size: {
      type: "number",
      default: 20,
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

    const selectTextOptions = () => {
      return [
        { label: __("Select Font", "gutpress"), value: "" },
        { label: __("Arial", "gutpress"), value: "Arial" },
        { label: __("Helvetica", "gutpress"), value: "Helvetica" },
        { label: __("Times New Roman", "gutpress"), value: "Times New Roman" },
        { label: __("Georgia", "gutpress"), value: "Georgia" },
        ...GoogleFonts.fonts.map(({ name }) => ({ label: name, value: name })),
      ];
    };

    const googleTextFontWeights = find(GoogleFonts.fonts, [
      "name",
      attributes.text_font_family.split("+").join(" "),
    ]);

    const textFontWeightOptions = () => {
      const fontWeights = [
        { label: __("Select Font Weight", "gutpress"), value: "" },
      ];
      if (
        typeof googleTextFontWeights !== "undefined" &&
        typeof googleTextFontWeights.weights !== "undefined"
      ) {
        map(googleTextFontWeights.weights.split(","), (weight) => {
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

    const onSelectTextFontFamily = (value) => {
      setAttributes({ text_font_family: value });
      setAttributes({
        text_styles:
          "<style>@import url('https://fonts.googleapis.com/css?family=" +
          value.split(" ").join("+") +
          "&display=swap');</style>",
      });
    };

    const onSelectTextFontWeight = (value) => {
      setAttributes({ text_font_weight: value });
    };

    return (
      <div {...useBlockProps()}>
        <InspectorControls key="setting">
          <PanelBody title={__("Global Settings", "gutpress")} initialOpen={true}>
            <ToggleControl
              label={__("Full Width", "gutpress")}
              checked={attributes.full_width}
              onChange={(full_width) => setAttributes({ full_width })}
            />

            <RangeControl
              label={__("Height", "gutpress")}
              value={attributes.height}
              onChange={(height) => setAttributes({ height })}
              min={100}
              max={800}
              step={1}
            />

            <div>
              <MediaUpload
                onSelect={(imageObject) => {
                  setAttributes({
                    background_image: imageObject.sizes.full.url,
                  });
                }}
                allowedTypes="image"
                value={attributes.background_image}
                render={({ open }) => (
                  <Button
                    variant="primary"
                    className="image-button"
                    onClick={open}
                  >
                    {__(attributes.background_image ? "Update Background Image" : "Add Background Image", "gutpress")}
                  </Button>
                )}
              />
            </div>
            <br />

            {attributes.background_image ? (
              <>
                <Button
                  variant="secondary"
                  className="image-button"
                  onClick={() => {
                    setAttributes({ background_image: "" });
                  }}
                >
                  {__("Remove Background Image", "gutpress")}
                </Button>
                <br /><br />
              </>
            ) : (
              ""
            )}

            {attributes.background_image ? (
              <>
                <SelectControl
                  label={__("Background Position", "gutpress")}
                  value={attributes.background_position}
                  options={[
                    { label: "Center", value: "Center" },
                    { label: "Top", value: "Top" },
                    { label: "Bottom", value: "Bottom" },
                  ]}
                  onChange={(background_position) =>
                    setAttributes({ background_position })
                  }
                />

                <h4>{__("Overlay Color", "gutpress")}</h4>
                <ColorPicker
                  color={attributes.overlay_color}
                  onChange={(overlay_color) => setAttributes({ overlay_color })}
                  enableAlpha
                  defaultValue={attributes.overlay_color}
                />
              </>) : ("")}

            <h4>{__("Background Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.background_color}
              onChange={(background_color) =>
                setAttributes({ background_color })
              }
              enableAlpha
              defaultValue={attributes.background_color}
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
            <h4>{__("Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.text_color}
              onChange={(text_color) => setAttributes({ text_color })}
              defaultValue={attributes.text_color}
            />

            <SelectControl
              label={__("Font Family", "gutpress")}
              options={selectTextOptions()}
              value={attributes.text_font_family}
              onChange={(n) => onSelectTextFontFamily(n)}
            />

            {textFontWeightOptions() &&
              textFontWeightOptions().length > 1 ? (
              <SelectControl
                label={__("Font Weight", "gutpress")}
                options={textFontWeightOptions()}
                value={attributes.text_font_weight}
                onChange={(n) => onSelectTextFontWeight(n)}
              />
            ) : (
              ""
            )}

            <RangeControl
              label={__("Font Size", "gutpress")}
              value={attributes.text_font_size}
              onChange={(text_font_size) =>
                setAttributes({ text_font_size })
              }
              min={14}
              max={100}
              step={1}
            />
          </PanelBody>

          <PanelBody title={__("Author", "gutpress")} initialOpen={false}>
            <div>
              <br />
              <MediaUpload
                onSelect={(imageObject) => {
                  setAttributes({
                    author_image: imageObject.sizes.full.url,
                  });
                }}
                allowedTypes="image"
                value={attributes.author_image}
                render={({ open }) => (
                  <Button
                    variant="primary"
                    className="image-button"
                    onClick={open}
                  >
                    {__(attributes.author_image ? "Update Author Image" : "Add Author Image", "gutpress")}
                  </Button>
                )}
              />
            </div>
            <br />

            <RangeControl
              label={__("Image Width", "gutpress")}
              value={attributes.author_image_width}
              onChange={(author_image_width) => setAttributes({ author_image_width })}
              min={80}
              max={200}
              step={1}
            />

            <RangeControl
              label={__("Image Border Radius", "gutpress")}
              value={attributes.author_image_border_radius}
              onChange={(author_image_border_radius) => setAttributes({ author_image_border_radius })}
              min={0}
              max={50}
              step={1}
            />

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
              label={__("Author Font Size", "gutpress")}
              value={attributes.author_font_size}
              onChange={(author_font_size) => setAttributes({ author_font_size })}
              min={14}
              max={100}
              step={1}
            />
          </PanelBody>
        </InspectorControls>

        <div id="afxBlockTestimonial" class={attributes.full_width ? "afx-block-full-width" : ""}
          style={{
            textAlign: attributes.alignment,
            backgroundColor: attributes.background_color,
            backgroundImage: "url(" + attributes.background_image + ")",
            backgroundPosition: attributes.background_position,
            height: attributes.height,
            boxShadow: "inset 0 0 0 2000px " + attributes.overlay_color,
            textAlign: attributes.alignment,
            borderRadius: attributes.border_radius + "px",
          }}>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.author_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.text_styles }}
          ></span>
          <img src={attributes.author_image} alt={attributes.author} style={{ maxWidth: attributes.author_image_width, borderRadius: attributes.author_image_border_radius }} />
          <p style={{
            fontFamily: attributes.text_font_family,
            fontWeight: attributes.text_font_weight,
            fontSize: attributes.text_font_size + "px",
            color: attributes.text_color,
          }}><RichText
              value={attributes.text}
              onChange={(text) => setAttributes({ text })}
            /></p>
          <h4 style={{
            fontFamily: attributes.author_font_family,
            fontWeight: attributes.author_font_weight,
            fontSize: attributes.author_font_size + "px",
            color: attributes.author_color,
          }}><RichText
              value={attributes.author}
              onChange={(author) => setAttributes({ author })}
            /></h4>
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    return (
      <div {...useBlockProps.save()}>
        <div id="afxBlockTestimonial" class={attributes.full_width ? "afx-block-full-width" : ""}
          style={{
            backgroundColor: attributes.background_color,
            backgroundImage: "url(" + attributes.background_image + ")",
            backgroundPosition: attributes.background_position,
            height: attributes.height,
            boxShadow: "inset 0 0 0 2000px " + attributes.overlay_color,
            textAlign: attributes.alignment,
            borderRadius: attributes.border_radius + "px",
          }}>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.author_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.text_styles }}
          ></span>
          <img src={attributes.author_image} alt={attributes.author} style={{ maxWidth: attributes.author_image_width, borderRadius: attributes.author_image_border_radius }} />
          <p style={{
            fontFamily: attributes.text_font_family,
            fontWeight: attributes.text_font_weight,
            fontSize: attributes.text_font_size + "px",
            color: attributes.text_color,
          }}><RichText.Content value={attributes.text} /></p>
          <h4 style={{
            fontFamily: attributes.author_font_family,
            fontWeight: attributes.author_font_weight,
            fontSize: attributes.author_font_size + "px",
            color: attributes.author_color,
          }}><RichText.Content value={attributes.author} /></h4>
        </div>
      </div>
    );
  },
});
