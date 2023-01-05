class Piece {
	constructor(pos, rank, name) {
		this.pos = pos;
		this.rank = rank;
		this.name = name;
		this.color = this.name.substring(0, 5);
		this.img = document.getElementById(this.name);
	}


	hasRank(rank) {
		return this.rank == rank;
	}

	changePosition(pos) {
		this.pos = parseInt(pos);
	}

	getMovesTop() {
		let movesTop = [];
		for (let move = this.pos + 10; move <= 88; move += 10) movesTop.push(move);
		return movesTop;
	}

	getMovesBottom() {
		let movesBottom = [];
		for (let move = this.pos - 10; move >= 11; move -= 10) movesBottom.push(move);
		return movesBottom;
	}

	getMovesRight() {
		let num = this.pos + '';
		let movesRight = [];
		for (let move = this.pos + 1; move <= parseInt(num[0] + '8'); move++) movesRight.push(move);
		return movesRight;
	}

	getMovesLeft() {
		let num = this.pos + '';
		let movesLeft = [];
		for (let move = this.pos - 1; move >= parseInt(num[0] + '1'); move--) movesLeft.push(move);
		return movesLeft;
	}

	getMovesTopRight() {
		let movesTopRight = [];
		for (let move = this.pos + 11; move <= 88; move += 11) {
			let firstDigit = ('' + move)[1];
			if (firstDigit > 8 || firstDigit < 1) break;
			movesTopRight.push(move);
		}
		return movesTopRight;
	}

	getMovesTopLeft() {
		let movesTopLeft = [];
		for (let move = this.pos + 9; move <= 88; move += 9) {
			let firstDigit = ('' + move)[1];
			if (firstDigit > 8 || firstDigit < 1) break;
			movesTopLeft.push(move);
		}
		return movesTopLeft;
	}

	getMovesBottomRight() {
		let movesBottomRight = [];
		for (let move = this.pos - 9; move >= 11; move -= 9) {
			let firstDigit = ('' + move)[1];
			if (firstDigit > 8 || firstDigit < 1) break;
			movesBottomRight.push(move);
		}
		return movesBottomRight;
	}

	getMovesBottomLeft() {
		let movesBottomLeft = [];
		for (let move = this.pos - 11; move >= 11; move -= 11) {
			let firstDigit = ('' + move)[1];
			if (firstDigit > 8 || firstDigit < 1) break;
			movesBottomLeft.push(move);
		}
		return movesBottomLeft;
	}
}