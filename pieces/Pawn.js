class Pawn extends Piece {
	constructor(pos, name) {
		super(pos, 'pawn', name)
	}

	getAllowedMoves() {
		let pos = this.pos;
		let mathSign = (this.color == 'white') ? '+' : '-';
		let allowedMoves = [eval(pos + mathSign + '10')];

		if ((pos > 20 && pos < 29) || (pos > 70 && pos < 79))
			allowedMoves.push(eval(pos + mathSign + '20'));

		let attackMoves = [eval(pos + mathSign + '9'), eval(pos + mathSign + '11')]
		return [attackMoves, allowedMoves];
	}

	changePosition(pos, promote = false) {
		this.pos = parseInt(pos);
		if (promote && (pos > 80 || pos < 20)) game.promote(this);
	}
}