class Queen extends Piece {
	constructor(pos, name) {
		super(pos, 'queen', name);
	}

	getAllowedMoves() {
		return [
			this.getMovesTop(),
			this.getMovesTopRight(),
			this.getMovesTopLeft(),
			this.getMovesBottom(),
			this.getMovesBottomRight(),
			this.getMovesBottomLeft(),
			this.getMovesRight(),
			this.getMovesLeft()
		];
	}
}