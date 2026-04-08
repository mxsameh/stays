import { getPrps } from '$lib/../services/api/getPrps.js';
import { getRevs } from '../../services/api/getRevs';

export const load = async () => {
	const prps = await getPrps();
	const revs = await getRevs();

	return {
		prps,
		revs
	};
};
