import { getPrps } from '$lib/../services/api/getPrps.js';
import { getRevs } from '../../services/api/getRevs';

export const load = async () => {
	const prps = await getPrps() as any;
	prps.sort((a, b) => a.index - b.index);

	const revs = await getRevs();

	return {
		prps,
		revs
	};
};
