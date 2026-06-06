import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		url,
		mediaUrl,
		mediaId,
		overlayColor,
		overlayOpacity,
		hoverZoom,
		shadow,
	} = attributes;

	const blockProps = useBlockProps({
		className: `kc-tile ${shadow ? "has-shadow" : ""}`,
		style: {
			"--kc-overlay-opacity": overlayOpacity,
			"--kc-hover-zoom": hoverZoom,
		},
	});

	const onSelectImage = (media) => {
		setAttributes({
			mediaUrl: media?.url || "",
			mediaId: media?.id || 0,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Tile Image", "kc")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["image"]}
							value={mediaId}
							render={({ open }) => (
								<Button variant="primary" onClick={open}>
									{mediaUrl
										? __("Replace image", "kc")
										: __("Choose image", "kc")}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					{mediaUrl && (
						<Button
							variant="secondary"
							isDestructive
							onClick={() =>
								setAttributes({
									mediaUrl: "",
									mediaId: 0,
								})
							}
						>
							{__("Remove image", "kc")}
						</Button>
					)}
				</PanelBody>

				<PanelBody title={__("Tile Settings", "kc")} initialOpen={false}>
					<TextControl
						label={__("Link URL", "kc")}
						value={url}
						onChange={(value) => setAttributes({ url: value })}
						placeholder="https://example.com"
					/>

					<RangeControl
						label={__("Overlay opacity", "kc")}
						value={overlayOpacity}
						onChange={(value) => setAttributes({ overlayOpacity: value })}
						min={0}
						max={1}
						step={0.05}
					/>

					<RangeControl
						label={__("Hover zoom", "kc")}
						value={hoverZoom}
						onChange={(value) => setAttributes({ hoverZoom: value })}
						min={1}
						max={1.25}
						step={0.01}
					/>

					<ToggleControl
						label={__("Shadow", "kc")}
						checked={shadow}
						onChange={(value) => setAttributes({ shadow: value })}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__("Overlay color", "kc")}
					colorSettings={[
						{
							value: overlayColor,
							onChange: (value) => setAttributes({ overlayColor: value }),
							label: __("Overlay color", "kc"),
						},
					]}
				/>
			</InspectorControls>

			<div {...blockProps}>
				<div className="kc-tile__media">
					{mediaUrl ? (
						<img src={mediaUrl} alt="" />
					) : (
						<div className="kc-tile__media-placeholder">
							{__("No image selected", "kc")}
						</div>
					)}
				</div>

				<div
					className="kc-tile__overlay"
					aria-hidden="true"
					style={{
						"--kc-overlay-color": overlayColor,
						"--kc-overlay-opacity": overlayOpacity,
					}}
				/>

				<div className="kc-tile__content">
					<RichText
						tagName="h3"
						className="kc-tile__title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__("Tile title", "kc")}
					/>
				</div>
			</div>
		</>
	);
}
