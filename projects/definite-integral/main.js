function f(x) {
	return 2 * x;
}

function definiteIntegral(f, a, b, dx) {
	let area = 0;

	for (let x = a; x <= b - dx; x += dx) {
		const y1 = f(x);
		const y2 = f(x + dx);
		area += ((y1 + y2) / 2) * dx;
	}

	return area;
}

$(() => {
	$('#definiteIntegralForm').submit(e => {
		e.preventDefault();
		const a = Number($('input[name="a"]').val());
		const b = Number($('input[name="b"]').val());
		const dx = Number($('input[name="dx"]').val());
		const f = x => eval($('input[name="f"]').val());
		$('#output').text(definiteIntegral(f, a, b, dx));
	});
});