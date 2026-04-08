import client from '../contentful';

export const getPrpBySlug = async (slug: string) => {
	const { items } = await client.getEntries({
		content_type: 'space',
		'fields.slug': slug,
		limit: 1
	});

	if (!items.length) return null;

	const { fields, sys } = items[0];

	return {
		...fields,
		id: sys.id
	};
};

export const getPrps = async () => {
	try {
		const { items } = await client.getEntries({
			content_type: 'space',
			limit: 100
		});

		const prps = items.map(({ fields }) => ({
			...fields
		}));

		return prps;
	} catch (err) {
		console.log(err);
		return [];
	}
};
