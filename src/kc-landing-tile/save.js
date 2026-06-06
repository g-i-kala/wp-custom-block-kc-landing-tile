import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const {
		title,
		url,
		mediaUrl,
		overlayColor,
		overlayOpacity,
		hoverZoom,
		shadow,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `kc-tile ${shadow ? "has-shadow" : ""}`,
		style: {
			"--kc-overlay-opacity": overlayOpacity,
			"--kc-hover-zoom": hoverZoom,
		},
	});

	const TagName = url ? "a" : "div";
	const linkProps = url ? { href: url } : {};

	return (
		<TagName {...blockProps} {...linkProps}>
			<span className="kc-tile__media" aria-hidden="true">
				{mediaUrl ? <img src={mediaUrl} alt="" /> : null}
			</span>

			<span
				className="kc-tile__overlay"
				aria-hidden="true"
				style={{
					"--kc-overlay-color": overlayColor,
					"--kc-overlay-opacity": overlayOpacity,
				}}
			/>

			<span className="kc-tile__content">
				<RichText.Content
					tagName="h3"
					className="kc-tile__title"
					value={title}
				/>
			</span>
		</TagName>
	);
}
