class Rook extends Piece {
	constructor(pos, name) {
		super(pos, 'rook', name);
		this.ableToCastle = true;
	}

	changePosition(pos) {
		this.pos = parseInt(pos);
		this.ableToCastle = false;
	}

	getAllowedMoves() {
		return [this.getMovesTop(), this.getMovesBottom(), this.getMovesRight(), this.getMovesLeft()];
	}
}