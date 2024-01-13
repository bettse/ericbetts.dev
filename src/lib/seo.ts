import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'bettse ─ developer';
	const description = "Hey 👋 I'm Eric, a developer";

	return {
		title,
		description,
		canonical: `https://ericbetts.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'ericbetts.dev',
			url: `https://ericbetts.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://ericbetts.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
