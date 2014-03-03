MineSweeper = (function () {
    var remainingMines;
    var numberOfMines;
    var tiles;

    function Tile(hasMine) {
        this.HasMine = hasMine || false;
    }

    function setupBoard(boardSize, mineLocations) {
        var numberOfTiles = boardSize * boardSize;

        for (var i = 0; i < numberOfTiles; i++) {
            var tile = tiles[i];
            if (mineLocations.contains(i)) {
                tile.HasMine = true;
            } else {

                if (i % boardSize != 0) {
                    tile.Left = tiles[i - 1];
                }

                if (parseInt(i / boardSize) != 0) {
                    tile.Top = tiles[i - boardSize];
                }

                if (i % boardSize != (boardSize - 1)) {
                    tile.Right = tiles[i + 1];
                }

                if (parseInt(i / boardSize) <= (boardSize - 1)) {
                    tile.Bottom = tiles[i + boardSize];
                }

                if (tile.Top && tile.Left) {
                    tile.TopLeft = tiles[i - (boardSize + 1)];
                }

                if (tile.Top && tile.Right) {
                    tile.TopRight = tiles[i - (boardSize - 1)];
                }

                if (tile.Bottom && tile.Left) {
                    tile.BottomLeft = tiles[i + (boardSize - 1)];
                }

                if (tile.Bottom && tile.Right) {
                    tile.BottomRight = tiles[i + (boardSize + 1)];
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
        if (tile.Left && tile.Left.HasMine) {
            mines += 1;
        }
        if (tile.Right && tile.Right.HasMine) {
            mines += 1;
        }
        if (tile.Top && tile.Top.HasMine) {
            mines += 1;
        }
        if (tile.Bottom && tile.Bottom.HasMine) {
            mines += 1;
        }
        if (tile.TopLeft && tile.TopLeft.HasMine) {
            mines += 1;
        }
        if (tile.TopRight && tile.TopRight.HasMine) {
            mines += 1;
        }
        if (tile.BottomLeft && tile.BottomLeft.HasMine) {
            mines += 1;
        }
        if (tile.BottomRight && tile.BottomRight.HasMine) {
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
