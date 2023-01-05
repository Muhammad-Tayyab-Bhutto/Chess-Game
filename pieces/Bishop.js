class Bishop extends Piece {
	constructor(pos, name) {
		super(pos, 'bishop', name);
	}

	getAllowedMoves() {
		return [this.getMovesTopRight(), this.getMovesTopLeft(), this.getMovesBottomRight(), this.getMovesBottomLeft()];
	}
}

exports = Bishop;