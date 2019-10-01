function definiteIntegral(f, a, b, dx) {
	let area = 0;

	for (let x = a; x <= b - dx; x += dx) {
		const y1 = f(x);
		const y2 = f(x + dx);
		area += ((y1 + y2) / 2) * dx;
	}

	return area;
}

function display(f, a, b, dx) {
	$('#output').text(definiteIntegral(f, a, b, dx));

	const xValues = math.range(a, b, dx).toArray();
	const yValues = xValues.map(x => f(x));

	Plotly.newPlot('plot', [{
		x: xValues,
		y: yValues,
		type: 'scatter'
	}])
}

$(() => {
	$('#definiteIntegralForm').submit(e => {
		e.preventDefault();
		const a = Number($('input[name="a"]').val());
		const b = Number($('input[name="b"]').val());
		const dx = Number($('input[name="dx"]').val());
		const f = math.evaluate(`f(x) = ${$('input[name="f"]').val()}`);
		display(f, a, b, dx)
	});
});
