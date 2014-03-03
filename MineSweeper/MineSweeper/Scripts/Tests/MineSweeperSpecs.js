describe("MineSweeper", function () {
    var boardSize = 4;
    var mineLocations = [0, 6, 10, 13];
    var numberOfMines = mineLocations.length;

    it("can be initialized by providing board size, number of mines and mine locations", function () {
        MineSweeper.initialize(boardSize, mineLocations);
        expect(MineSweeper.getNumberOfRemainingMines()).toEqual(numberOfMines);
        expect(MineSweeper.getTilesWithMines().length).toEqual(numberOfMines);
    });

    it("can display correct number for one surrounding mine", function () {
        MineSweeper.initialize(boardSize, mineLocations);
        expect(MineSweeper.getNumberOfSurroundingMines(2)).toEqual(1);
        expect(MineSweeper.getNumberOfSurroundingMines(3)).toEqual(1);
        expect(MineSweeper.getNumberOfSurroundingMines(4)).toEqual(1);
        expect(MineSweeper.getNumberOfSurroundingMines(8)).toEqual(1);
        expect(MineSweeper.getNumberOfSurroundingMines(12)).toEqual(1);
        expect(MineSweeper.getNumberOfSurroundingMines(15)).toEqual(1);
    });

    it("can display correct number for two surrounding mines", function () {
        MineSweeper.initialize(boardSize, mineLocations);
        expect(MineSweeper.getNumberOfSurroundingMines(1)).toEqual(2);
        expect(MineSweeper.getNumberOfSurroundingMines(7)).toEqual(2);
        expect(MineSweeper.getNumberOfSurroundingMines(11)).toEqual(2);
        expect(MineSweeper.getNumberOfSurroundingMines(14)).toEqual(2);
    });

    it("can display correct number for three surrounding mines", function () {
        MineSweeper.initialize(boardSize, mineLocations);
        expect(MineSweeper.getNumberOfSurroundingMines(9)).toEqual(3);
        expect(MineSweeper.getNumberOfSurroundingMines(5)).toEqual(3);
    });

});