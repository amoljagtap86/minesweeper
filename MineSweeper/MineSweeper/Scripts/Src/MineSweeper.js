MineSweeper = (function () {
    var remainingMines;
    var numberOfMines;
    var tiles;

    function Tile(hasMine) {
        this.HasMine = hasMine || false;
        this.Neighbours = [];
    }

    function setupBoard(boardSize, mineLocations) {
        var numberOfTiles = boardSize * boardSize;

        for (var i = 0; i < numberOfTiles; i++) {
            var tile = tiles[i];
            if (mineLocations.contains(i)) {
                tile.HasMine = true;
            } else {

                if (i % boardSize != 0) {
                    tile.Neighbours.add(tiles[i - 1]);
                }

                if (parseInt(i / boardSize) != 0) {
                    tile.Neighbours.add(tiles[i - boardSize]);
                }

                if (i % boardSize != (boardSize - 1)) {
                    tile.Neighbours.add(tiles[i + 1]);
                }

                if (parseInt(i / boardSize) <= (boardSize - 1)) {
                    tile.Neighbours.add(tiles[i + boardSize]);
                }

                if (tile.Top && tile.Left) {
                    tile.Neighbours.add(tiles[i - (boardSize + 1)]);
                }

                if (tile.Top && tile.Right) {
                    tile.Neighbours.add(tiles[i - (boardSize - 1)]);
                }

                if (tile.Bottom && tile.Left) {
                    tile.Neighbours.add(tiles[i + (boardSize - 1)]);
                }

                if (tile.Bottom && tile.Right) {
                    tile.Neighbours.add(tiles[i + (boardSize + 1)]);
                }
            }
        }
    }

    var initialize = function (size, mineLocations) {
        var mines = 0;

        if (mineLocations !== undefined && mineLocations !== null)
            mines = mineLocations.length;

        remainingMines = mines;
        numberOfMines = mines;

        tiles = [];
        for (var i = 0; i < size * size; i++) {
            tiles.push(new Tile());
        }

        setupBoard(size, mineLocations);
    };

    var getNumberOfRemainingMines = function () {
        return remainingMines;
    };

    var getTilesWithMines = function () {
        var mines = [];
        for (var i = 0; i < tiles.length; i++) {
            if (tiles[i].HasMine) {
                mines.push(tiles[i]);
            }
        }
        return mines;
    };

    var getNumberOfSurroundingMines = function (tileIndex) {
        var tile = tiles[tileIndex];
        if (tile.HasMine)
            return -1;
        var mines = 0;

        var neighbourCount = tile.Neighbours.length;

        for (var i = 0; i < neighbourCount; i++) {
            if (tile.Neighbours[i].HasMine)
                mines += 1;
        }

        return mines;
    };

    return {
        initialize: initialize,
        getNumberOfRemainingMines: getNumberOfRemainingMines,
        getTilesWithMines: getTilesWithMines,
        getNumberOfSurroundingMines: getNumberOfSurroundingMines
    };
})();
