class King extends Piece {
	constructor(pos, name) {
		super(pos, 'king', name);
		this.ableToCastle = true;
	}


	getAllowedMoves() {
		const pos = this.pos;
		const allowedMoves = [
			[parseInt(pos) + 1],
			[parseInt(pos) - 1],
			[parseInt(pos) + 10],
			[parseInt(pos) - 10],
			[parseInt(pos) + 11],
			[parseInt(pos) - 11],
			[parseInt(pos) + 9],
			[parseInt(pos) - 9]
		];
		return allowedMoves;
	}

	remove_castling_ability() {
		this.ableToCastle = false;
	}

	changepos(pos, castle = false) {
		if (castle) {
			if (pos - this.pos == 2) game.castleRook(this.color + 'Rook2');
			if (pos - this.pos == -2) game.castleRook(this.color + 'Rook1');
			this.ableToCastle = false;
		}
		this.pos = parseInt(pos);
	}
}