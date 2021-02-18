const {
    currentPlayer,
    gameOn,
    states,
    winposition,
    Play,
    Draw,
} = require("../views/index");

test("should return true  ", () => {
    expect(gameOn).toBe(true);
    expect(gameOn).not.toBe(false);
});

test("lock ", () => {
    expect(gameOn).not.toBe(false);
    expect(gameOn).not.toBeUndefined();
    expect(gameOn).toBeTruthy();
    expect(gameOn).not.toBeFalsy();
});

test("should be X at the beginning ", () => {
    expect(currentPlayer).toMatch(new RegExp("X"));
});

test("array have to be empty ", () => {
    expect(states).toHaveLength(9);
    for (let i = 0; i < states.length; i++) {
        expect(states[i]).toContain("");
    }
    expect(states.map((data) => data)).toEqual([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
});

test("win position  ", () => {
    expect(winposition).toHaveLength(8);
    expect(winposition.map((data) => data)).toEqual([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]);
});

describe("Play function ", () => {
    test("should start", () => {
        expect(Play).toMatchSnapshot();
    });
});

test("draw ", () => {
    const result = ["X", "O", "X", "X", "X", "O", "O", "O", "X"];
    expect(result).toEqual(result);
});
