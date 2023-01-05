class Knight extends Piece {
	constructor(pos, name) {
		super(pos, 'knight', name);
	}

	getAllowedMoves() {
		let pos = this.pos;
		return [
			[parseInt(pos) + 21],
			[parseInt(pos) - 21],
			[parseInt(pos) + 19],
			[parseInt(pos) - 19],
			[parseInt(pos) + 12],
			[parseInt(pos) - 12],
			[parseInt(pos) + 8],
			[parseInt(pos) - 8]
		];
	}
}