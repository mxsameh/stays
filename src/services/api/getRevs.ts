import client from '../contentful';

export const getRevs = async () => {
	try {
		const { items } = await client.getEntries({
			content_type: 'review',
			limit: 100
		});

		const revs = items.map(({ fields }) => ({
			...fields
		}));

		return revs;
	} catch (err) {
		console.log(err);
		return [];
	}
};
