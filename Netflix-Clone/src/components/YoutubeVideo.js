import React, { useState } from 'react';

export default function YoutubeVideo(props) {
	return (
		<div
			class="hytPlayerWrapOuter"
			style={{
				height: '100%',
				width: '100%'
			}}
		>
			<div
				class="hytPlayerWrap"
				style={{
					height: '100%',
					width: '100%'
				}}
			>
				<iframe
					width="100%"
					height="100%"
					src={props.video_src}
					frameborder="0"
					allowfullscreen="true"
				></iframe>
			</div>
		</div>
	);
}
