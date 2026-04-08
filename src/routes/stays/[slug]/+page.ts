import { getPrpBySlug } from '../../../services/api/getPrps.js';

export const load = async ({ params }) => {
	const { slug } = params;
	// const prps = await getPrps();
	const prp = await getPrpBySlug(slug);

	return {
		prp
	};
};
