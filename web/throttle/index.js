function throttlePromises(limit, promises) {
	let index = 0;
	let results = [];
	let queue = [];

	const resolveNext = () => {
		// Stop if we've done all promises
		if (index >= promises.length) return;

		// Get next promise
		const currentIndex = index++;
		const promise = promises[currentIndex];

		// Resolve promise and store result
		return Promise.resolve(promise())
			.then(result => {  
				results[currentIndex] = result;
				return;
			}).then(resolveNext);
	}

	// Add to queue until limit is reached
	while (index < limit && index < promises.length) {
		queue.push(resolveNext());
	}

	return Promise
		.all(queue)
		.then(() => results);
};

module.exports = throttlePromises;
