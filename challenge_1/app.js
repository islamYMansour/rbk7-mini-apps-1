const PLAYERX = "x";
const PLAYERO = "o";
class TicTacToe {
    constructor() {
        this.player1_name = prompt("Please enter player1 name", "Player 1");
        this.player2_name = prompt("Please enter player2 name", "Player 2");
        this.palyer1Result = 0;
        this.player2Result = 0;
        this.player = PLAYERX;
        this.board = this.initBoard();
        this._table = $("#board");
        this.rotation = false;

        $("body").on("click", "#board tr td", function() {
            if ($(this).children().length === 0) {
                $(this)
                    .append(`<img  src='${t.togglePlayer()}_img.png'  style='display:block;'
             width='100%' height='auto' />`);

                var col = $(this)
                    .parent()
                    .children()
                    .index($(this));
                var row = $(this)
                    .parent()
                    .parent()
                    .children()
                    .index($(this).parent());

                t.board[row][col] = t.player;
                t.checkResult();
            }
        });

        $("button").on("click", function() {
            t.palyer1Result = 0;
            t.player2Result = 0;
            t.board = t.initBoard();
        });

        $(".checkbox").change(function() {
            t.rotation = $(this).is(":checked");
            console.log(t.rotation);
        });
    }
    checkResult() {
        this.checkRows();
        this.checkCoulmns();
        this.checkMDiagonal();
        this.checkSDiagonal();
    }

    rotateBoard() {
        if (this.rotation) {
            $("#board").rotate(90);
        }
    }
    check(obj, ZeroCount) {
        var X_WON = false;
        if (obj[PLAYERX] === 3 || obj[PLAYERO] === 3) {
            if (obj[PLAYERO] === 3) {
                X_WON = false;
                this.palyer1Result = this.palyer1Result + 1;
            } else {
                X_WON = true;
                this.player2Result = this.player2Result + 1;
            }
            var str = X_WON ? this.player2_name : this.player1_name;

            setTimeout(function() {
                alert(`${str} WON !!`);
                t.board = t.initBoard();
            }, 200);
        } else if (ZeroCount === 0) {
            setTimeout(function() {
                alert("Draw try again ");
                t.board = t.initBoard();
            }, 200);
        }
        // this.rotateBoard();
    }

    checkRows() {
        for (var i = 0; i < this.board.length; i++) {
            this.checkRow(i);
        }
    }

    checkCoulmns() {
        for (var i = 0; i < this.board.length; i++) {
            this.checkCoulmn(i);
        }
    }
    checkMDiagonal() {
        var ZeroCount = 0;
        var obj = { 0: 0, x: 0, o: 0 };
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                if (i === j) {
                    obj[this.board[i][j]] = obj[this.board[i][j]] + 1;
                }
                if (this.board[i][j] === 0) {
                    ZeroCount++;
                }
            }
        }

        this.check(obj, ZeroCount);
    }

    checkSDiagonal() {
        var obj = { 0: 0, x: 0, o: 0 };
        for (var i = 0; i < this.board.length; i++) {
            for (var j = 0; j < this.board[i].length; j++) {
                if (i + j === 2) {
                    obj[this.board[i][j]] = obj[this.board[i][j]] + 1;
                }
            }
        }

        this.check(obj);
    }

    checkRow(index) {
        var obj = { 0: 0, x: 0, o: 0 };
        var row = this.board[index];
        for (var i = 0; i < row.length; i++) {
            obj[row[i]] = obj[row[i]] + 1;
        }
        this.check(obj);
    }
    checkCoulmn(index) {
        var obj = { 0: 0, x: 0, o: 0 };
        var row = this.board;
        for (var i = 0; i < row.length; i++) {
            obj[row[i][index]] = obj[row[i][index]] + 1;
        }
        this.check(obj);
    }
    togglePlayer() {
        if (this.player === PLAYERX) {
            this.player = PLAYERO;
            return PLAYERO;
        } else {
            this.player = PLAYERX;
            return PLAYERX;
        }
    }

    initBoard() {
        $("#player1_result").text(this.palyer1Result);
        $("#player2_result").text(this.player2Result);
        $("#player1_name").text(this.player1_name + "  O");
        $("#player2_name").text(this.player2_name + "  X");
        $("#player_turn").text(
            `${this.player === PLAYERX ? this.player1_name : this.player2_name} turn`
        );
        $("td").empty();
        return [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    }
}
var t = new TicTacToe();
// jQuery.fn.rotate = function(degrees) {
//     $(this).css({ transform: "rotate(" + degrees + "deg)" });
//     return $(this);
// };