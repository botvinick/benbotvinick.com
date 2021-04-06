// https://fiftyexamples.readthedocs.io/en/latest/monty-hall.html


function simulate(numDoors, switchChoice) {
	const winningDoor = _.random(numDoors - 1);
	let choice = _.random(numDoors - 1);
	let closedDoors = _.range(numDoors);

	while (closedDoors.length > 2) {
		const doorToRemove = closedDoors[_.random(numDoors - 1)];
		if (doorToRemove === winningDoor || doorToRemove === choice) {
			continue;
		}

		closedDoors.splice(doorToRemove, 1);
	}

	if (switchChoice) {
		let availableDoors = closedDoors.slice();
		availableDoors.splice(availableDoors.indexOf(choice), 1);

		choice = availableDoors.pop();
	}

	return (choice === winningDoor);
}

$(() => {
	$('#simulatorOptionsForm').submit(event => {
		event.preventDefault();

		const trials = $('#trialsInput').val();
		const numDoors = $('#numDoorsInput').val();

		if (isNaN(trials) || isNaN(numDoors)) return;

		let winningSwitchers = 0;
		let winningNonSwitchers = 0;

		for (let i = 0; i < trials; i++) {
			if (simulate(numDoors, true)) winningSwitchers++;
			if (simulate(numDoors, false)) winningNonSwitchers++;
		}

		$('#resultsContainer').html(`
			<p>
				Switching won ${winningSwitchers} times out of ${trials} (${((winningSwitchers / trials) * 100).toFixed(1)}%)<br>
				Not switching won ${winningNonSwitchers} times out of ${trials} (${((winningNonSwitchers / trials) * 100).toFixed(1)}%)
			</p>
		`);

		console.log(`Switching won ${winningSwitchers} times out of ${trials} (${((winningSwitchers / trials) * 100).toFixed(1)}%)`);
		console.log(`Not switching won ${winningNonSwitchers} times out of ${trials} (${((winningNonSwitchers / trials) * 100).toFixed(1)}%)`);
	});
});