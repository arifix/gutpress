const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaUpload,
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

import GoogleFonts from "../defaults/google-fonts";
import { map, find } from "lodash";

registerBlockType("gutpress/card", {
  title: "Card",
  category: "gutpress-blocks",
  icon: "analytics",
  description:
    "Information about what you offer, benefits, features & much more",
  attributes: {
    width: {
      type: "number",
      default: 300,
    },
    height: {
      type: "number",
      default: 400,
    },
    card_image: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1550237330-a5d774594098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    title: {
      type: "string",
      default: "GutPress Card",
    },
    subtitle: {
      type: "string",
      default: "Your blog is going to look awesome with this plugin.",
    },
    border_radius: {
      type: "number",
      default: 15,
    },
    background_color: {
      type: "string",
      default: "#FFFFFF",
    },
    title_color: {
      type: "string",
      default: "#000000",
    },
    title_font_family: {
      type: "string",
      default: "Arial",
    },
    title_font_weight: {
      type: "string",
      default: 600,
    },
    title_font_size: {
      type: "number",
      default: 24,
    },
    title_styles: {
      type: "string",
      default: "",
    },
    subtitle_color: {
      type: "string",
      default: "#000000",
    },
    subtitle_font_family: {
      type: "string",
      default: "Arial",
    },
    subtitle_font_weight: {
      type: "string",
      default: 100,
    },
    subtitle_font_size: {
      type: "number",
      default: 16,
    },
    subtitle_styles: {
      type: "string",
      default: "",
    },
    show_button: {
      type: "boolean",
      default: false,
    },
    button_background_color: {
      type: "string",
      default: "#303f9f",
    },
    button_hover_background_color: {
      type: "string",
      default: "#000000",
    },
    button_text_color: {
      type: "string",
      default: "#FFFFFF",
    },
    button_hover_text_color: {
      type: "string",
      default: "#FFFFFF",
    },
    button_text: {
      type: "string",
      default: "Click Me"
    },
    button_font_family: {
      type: "string",
      default: "Arial",
    },
    button_font_weight: {
      type: "string",
      default: 100,
    },
    button_font_size: {
      type: "number",
      default: 18,
    },
    button_styles: {
      type: "string",
      default: "",
    },
    button_url: {
      type: "string",
      default: "#"
    },
    button_new_tab: {
      type: "boolean",
      default: false,
    },
    button_color_styles: {
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
    const selectTitleOptions = () => {
      return [
        { label: __("Select Font", "gutpress"), value: "" },
        { label: __("Arial", "gutpress"), value: "Arial" },
        { label: __("Helvetica", "gutpress"), value: "Helvetica" },
        { label: __("Times New Roman", "gutpress"), value: "Times New Roman" },
        { label: __("Georgia", "gutpress"), value: "Georgia" },
        ...GoogleFonts.fonts.map(({ name }) => ({ label: name, value: name })),
      ];
    };

    const googleTitleFontWeights = find(GoogleFonts.fonts, [
      "name",
      attributes.title_font_family.split("+").join(" "),
    ]);

    const titleFontWeightOptions = () => {
      const fontWeights = [
        { label: __("Select Font Weight", "gutpress"), value: "" },
      ];
      if (
        typeof googleTitleFontWeights !== "undefined" &&
        typeof googleTitleFontWeights.weights !== "undefined"
      ) {
        map(googleTitleFontWeights.weights.split(","), (weight) => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({ label: weight, value: parseInt(weight) });
          }
        });
      }

      return fontWeights;
    };

    const selectSubtitleOptions = () => {
      return [
        { label: __("Select Font", "gutpress"), value: "" },
        { label: __("Arial", "gutpress"), value: "Arial" },
        { label: __("Helvetica", "gutpress"), value: "Helvetica" },
        { label: __("Times New Roman", "gutpress"), value: "Times New Roman" },
        { label: __("Georgia", "gutpress"), value: "Georgia" },
        ...GoogleFonts.fonts.map(({ name }) => ({ label: name, value: name })),
      ];
    };

    const googleSubtitleFontWeights = find(GoogleFonts.fonts, [
      "name",
      attributes.subtitle_font_family.split("+").join(" "),
    ]);

    const subtitleFontWeightOptions = () => {
      const fontWeights = [
        { label: __("Select Font Weight", "gutpress"), value: "" },
      ];
      if (
        typeof googleSubtitleFontWeights !== "undefined" &&
        typeof googleSubtitleFontWeights.weights !== "undefined"
      ) {
        map(googleSubtitleFontWeights.weights.split(","), (weight) => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({ label: weight, value: parseInt(weight) });
          }
        });
      }

      return fontWeights;
    };

    const selectButtonOptions = () => {
      return [
        { label: __("Select Font", "gutpress"), value: "" },
        { label: __("Arial", "gutpress"), value: "Arial" },
        { label: __("Helvetica", "gutpress"), value: "Helvetica" },
        { label: __("Times New Roman", "gutpress"), value: "Times New Roman" },
        { label: __("Georgia", "gutpress"), value: "Georgia" },
        ...GoogleFonts.fonts.map(({ name }) => ({ label: name, value: name })),
      ];
    };

    const googleButtonFontWeights = find(GoogleFonts.fonts, [
      "name",
      attributes.button_font_family.split("+").join(" "),
    ]);

    const buttonFontWeightOptions = () => {
      const fontWeights = [
        { label: __("Select Font Weight", "gutpress"), value: "" },
      ];
      if (
        typeof googleButtonFontWeights !== "undefined" &&
        typeof googleButtonFontWeights.weights !== "undefined"
      ) {
        map(googleButtonFontWeights.weights.split(","), (weight) => {
          if (weight && !weight.includes("i")) {
            fontWeights.push({ label: weight, value: parseInt(weight) });
          }
        });
      }

      return fontWeights;
    };

    const onSelectTitleFontFamily = (value) => {
      setAttributes({ title_font_family: value });
      setAttributes({
        title_styles:
          "<style>@import url('https://fonts.googleapis.com/css?family=" +
          value.split(" ").join("+") +
          "&display=swap');</style>",
      });
    };

    const onSelectTitleFontWeight = (value) => {
      setAttributes({ title_font_weight: value });
    };

    const onSelectSubtitleFontFamily = (value) => {
      setAttributes({ subtitle_font_family: value });
      setAttributes({
        subtitle_styles:
          "<style>@import url('https://fonts.googleapis.com/css?family=" +
          value.split(" ").join("+") +
          "&display=swap');</style>",
      });
    };

    const onSelectSubtitleFontWeight = (value) => {
      setAttributes({ subtitle_font_weight: value });
    };

    const onSelectButtonFontFamily = (value) => {
      setAttributes({ button_font_family: value });
      setAttributes({
        button_styles:
          "<style>@import url('https://fonts.googleapis.com/css?family=" +
          value.split(" ").join("+") +
          "&display=swap');</style>",
      });
    };

    const onSelectButtonFontWeight = (value) => {
      setAttributes({ button_font_weight: value });
    };

    const onSelectHoverColor = () => {
      setAttributes({
        button_color_styles: "<style>#afxBlockCard a:hover{background: " + attributes.button_hover_background_color + " !important;color: " + attributes.button_hover_text_color + " !important;}</style>",
      });
    }

    return (
      <div {...useBlockProps()}>
        <InspectorControls key="setting">
          <PanelBody
            title={__("Global Settings", "gutpress")}
            initialOpen={true}
          >
            <RangeControl
              label={__("Width", "gutpress")}
              value={attributes.width}
              onChange={(width) => setAttributes({ width })}
              min={100}
              max={800}
              step={1}
            />

            <RangeControl
              label={__("Height", "gutpress")}
              value={attributes.height}
              onChange={(height) => setAttributes({ height })}
              min={100}
              max={800}
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

            <div>
              <MediaUpload
                onSelect={(imageObject) => {
                  setAttributes({
                    card_image: imageObject.sizes.full.url,
                  });
                }}
                allowedTypes="image"
                value={attributes.card_image}
                render={({ open }) => (
                  <Button
                    variant="primary"
                    className="image-button"
                    onClick={open}
                  >
                    {__(attributes.card_image ? "Update Card Image" : "Add Card Image", "gutpress")}
                  </Button>
                )}
              />
            </div>
            <br />

            <h4>{__("Background Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.background_color}
              onChange={(background_color) =>
                setAttributes({ background_color })
              }
              enableAlpha
              defaultValue={attributes.background_color}
            />
          </PanelBody>

          <PanelBody
            title={__("Heading", "gutpress")}
            initialOpen={false}
          >
            <h4>{__("Text Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.title_color}
              onChange={(title_color) => setAttributes({ title_color })}
              defaultValue={attributes.title_color}
            />

            <SelectControl
              label={__("Font Family", "gutpress")}
              options={selectTitleOptions()}
              value={attributes.title_font_family}
              onChange={(n) => onSelectTitleFontFamily(n)}
            />

            {titleFontWeightOptions() && titleFontWeightOptions().length > 1 ? (
              <SelectControl
                label={__("Font Weight", "gutpress")}
                options={titleFontWeightOptions()}
                value={attributes.title_font_weight}
                onChange={(n) => onSelectTitleFontWeight(n)}
              />
            ) : (
              ""
            )}

            <RangeControl
              label={__("Font Size", "gutpress")}
              value={attributes.title_font_size}
              onChange={(title_font_size) => setAttributes({ title_font_size })}
              min={14}
              max={100}
              step={1}
            />
          </PanelBody>

          <PanelBody
            title={__("Subheading", "gutpress")}
            initialOpen={false}
          >
            <h4>{__("Text Color", "gutpress")}</h4>
            <ColorPicker
              color={attributes.subtitle_color}
              onChange={(subtitle_color) => setAttributes({ subtitle_color })}
              defaultValue={attributes.subtitle_color}
            />

            <SelectControl
              label={__("Font Family", "gutpress")}
              options={selectSubtitleOptions()}
              value={attributes.subtitle_font_family}
              onChange={(n) => onSelectSubtitleFontFamily(n)}
            />

            {subtitleFontWeightOptions() &&
              subtitleFontWeightOptions().length > 1 ? (
              <SelectControl
                label={__("Font Weight", "gutpress")}
                options={subtitleFontWeightOptions()}
                value={attributes.subtitle_font_weight}
                onChange={(n) => onSelectSubtitleFontWeight(n)}
              />
            ) : (
              ""
            )}

            <RangeControl
              label={__("Font Size", "gutpress")}
              value={attributes.subtitle_font_size}
              onChange={(subtitle_font_size) =>
                setAttributes({ subtitle_font_size })
              }
              min={14}
              max={100}
              step={1}
            />
          </PanelBody>

          <PanelBody
            title={__("Button", "gutpress")}
            initialOpen={false}
          >
            <br />
            <ToggleControl
              label={__("Show Button", "gutpress")}
              checked={attributes.show_button}
              onChange={(show_button) => setAttributes({ show_button })}
            />

            {attributes.show_button ? (
              <>
                <h4>{__("Background Color", "gutpress")}</h4>
                <ColorPicker
                  color={attributes.button_background_color}
                  onChange={(button_background_color) => setAttributes({ button_background_color })}
                  defaultValue={attributes.button_background_color}
                />

                <h4>{__("Text Color", "gutpress")}</h4>
                <ColorPicker
                  color={attributes.button_text_color}
                  onChange={(button_text_color) => setAttributes({ button_text_color })}
                  defaultValue={attributes.button_text_color}
                />

                <SelectControl
                  label={__("Font Family", "gutpress")}
                  options={selectButtonOptions()}
                  value={attributes.button_font_family}
                  onChange={(n) => onSelectButtonFontFamily(n)}
                />

                {buttonFontWeightOptions() &&
                  buttonFontWeightOptions().length > 1 ? (
                  <SelectControl
                    label={__("Font Weight", "gutpress")}
                    options={buttonFontWeightOptions()}
                    value={attributes.button_font_weight}
                    onChange={(n) => onSelectButtonFontWeight(n)}
                  />
                ) : (
                  ""
                )}

                <RangeControl
                  label={__("Font Size", "gutpress")}
                  value={attributes.button_font_size}
                  onChange={(button_font_size) =>
                    setAttributes({ button_font_size })
                  }
                  min={14}
                  max={35}
                  step={1}
                />

                <h4>{__("Hover Background Color", "gutpress")}</h4>
                <ColorPicker
                  color={attributes.button_hover_background_color}
                  onChange={(button_hover_background_color) => {
                    setAttributes({ button_hover_background_color });
                    onSelectHoverColor();
                  }
                  }
                  defaultValue={attributes.button_hover_background_color}
                />

                <h4>{__("Hover Text Color", "gutpress")}</h4>
                <ColorPicker
                  color={attributes.button_hover_text_color}
                  onChange={(button_hover_text_color) => {
                    setAttributes({ button_hover_text_color });
                    onSelectHoverColor();
                  }}
                  defaultValue={attributes.button_hover_text_color}
                />

                <__experimentalInputControl
                  label={__("URL", "gutpress")}
                  value={attributes.button_url}
                  onChange={(button_url) => setAttributes({ button_url })}
                /><br />

                <ToggleControl
                  label={__("Open link in new Tab", "gutpress")}
                  checked={attributes.button_new_tab}
                  onChange={(button_new_tab) => setAttributes({ button_new_tab })}
                />
              </>
            ) : ("")}
          </PanelBody>
        </InspectorControls>

        <div id="afxBlockCard" style={{
          width: attributes.width,
          height: attributes.height,
          borderRadius: attributes.border_radius + "px",
          backgroundColor: attributes.background_color,
        }}>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.title_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.subtitle_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.button_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.button_color_styles }}
          ></span>
          <img class="card-img-top" src={attributes.card_image} alt={attributes.title} />
          <div class="card-body">
            <h4 style={{
              fontFamily: attributes.title_font_family,
              fontWeight: attributes.title_font_weight,
              fontSize: attributes.title_font_size + "px",
              color: attributes.title_color,
            }}><RichText
                value={attributes.title}
                onChange={(title) => setAttributes({ title })}
              /></h4>
            <p style={{
              fontFamily: attributes.subtitle_font_family,
              fontWeight: attributes.subtitle_font_weight,
              fontSize: attributes.subtitle_font_size + "px",
              color: attributes.subtitle_color,
            }}><RichText
                value={attributes.subtitle}
                onChange={(subtitle) => setAttributes({ subtitle })}
              /></p>
            {attributes.show_button ? (
              <a href={attributes.button_url} style={{
                backgroundColor: attributes.button_background_color,
                color: attributes.button_text_color,
                fontFamily: attributes.button_font_family,
                fontWeight: attributes.button_font_weight,
                fontSize: attributes.button_font_size,
              }} target={attributes.button_new_tab ? "_blank" : ""}>
                <RichText
                  value={attributes.button_text}
                  onChange={(button_text) => setAttributes({ button_text })}
                />
              </a>
            ) : ("")}
          </div>
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    return (
      <div {...useBlockProps.save()}>
        <div id="afxBlockCard" style={{
          width: attributes.width,
          height: attributes.height,
          borderRadius: attributes.border_radius + "px",
          backgroundColor: attributes.background_color,
        }}>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.title_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.subtitle_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.button_styles }}
          ></span>
          <span
            dangerouslySetInnerHTML={{ __html: attributes.button_color_styles }}
          ></span>
          <img class="card-img-top" src={attributes.card_image} alt={attributes.title} />
          <div class="card-body">
            <h4 style={{
              fontFamily: attributes.title_font_family,
              fontWeight: attributes.title_font_weight,
              fontSize: attributes.title_font_size + "px",
              color: attributes.title_color,
            }}><RichText.Content value={attributes.title} /></h4>
            <p style={{
              fontFamily: attributes.subtitle_font_family,
              fontWeight: attributes.subtitle_font_weight,
              fontSize: attributes.subtitle_font_size + "px",
              color: attributes.subtitle_color,
            }}><RichText.Content value={attributes.subtitle} /></p>
            {attributes.show_button ? (
              <a href={attributes.button_url} style={{
                backgroundColor: attributes.button_background_color,
                color: attributes.button_text_color,
                fontFamily: attributes.button_font_family,
                fontWeight: attributes.button_font_weight,
                fontSize: attributes.button_font_size,
              }} target={attributes.button_new_tab ? "_blank" : ""} rel="noopener"><RichText.Content value={attributes.button_text} /></a>
            ) : ("")}
          </div>
        </div>
      </div>
    );
  },
});
