import {useState} from "react";

function Square({color, onSquareClick }){
    return (
        <button
        className={`square ${color}`}
        onClick={onSquareClick}
        >
        </button>
    )
}


export default function Board(){
    const [squares, setSquares] = useState(Array(42).fill(null))
    const [redIsNext, setRedIsNext] = useState(true);
    const [countTurns, setCountTurns] = useState(0);


    function handleClick(i){
        const nextSquares = squares.slice();
        
        if(checkWin(squares) || countTurns === 42){
            return;
        }


        //logic of finding the selected col of the clicked square
        let colNumber = i % 7;
        for(let focusedRow = 5; focusedRow >= 0; focusedRow--){
            if(squares[colNumber + (focusedRow*7)] !== "red" && squares[colNumber + (focusedRow*7)] !== "blue"){
                //console.log("colNumber: " + colNumber + " i: " + i + " focusedRow: " + focusedRow + " colNumber + (focusedRow*7): " + (colNumber + (focusedRow*7)) + "nextSquare[]: " + squares[colNumber + (i*7)] )
                if(redIsNext){
                    nextSquares[colNumber + (focusedRow*7)] = "red"
                } else{
                    nextSquares[colNumber + (focusedRow*7)] = "blue"
                }
                setSquares(nextSquares)
                setRedIsNext(!redIsNext)
                setCountTurns(countTurns+1)


                break;
            }
        }
    }
    const winner = checkWin(squares);
    let status;
    if(winner){
        status = "Winner: " + winner;
    } else if (countTurns === 42){
        status = "TIE";
    } else{
        status = "Next player: " + (redIsNext ? "Red" : "Blue")
    }

    return (
    <>
        <div className="status">{status}</div>

        <div className="board-row">
            <Square color={squares[0]} onSquareClick={()=> handleClick(0)}/>
            <Square color={squares[1]} onSquareClick={()=> handleClick(1)}/>
            <Square color={squares[2]} onSquareClick={()=> handleClick(2)}/>
            <Square color={squares[3]} onSquareClick={()=> handleClick(3)}/>            
            <Square color={squares[4]} onSquareClick={()=> handleClick(4)}/>
            <Square color={squares[5]} onSquareClick={()=> handleClick(5)}/>
            <Square color={squares[6]} onSquareClick={()=> handleClick(6)}/>
        </div>
        <div className="board-row">
            <Square color={squares[7]} onSquareClick={()=> handleClick(7)}/>
            <Square color={squares[8]} onSquareClick={()=> handleClick(8)}/>
            <Square color={squares[9]} onSquareClick={()=> handleClick(9)}/>
            <Square color={squares[10]} onSquareClick={()=> handleClick(10)}/>            
            <Square color={squares[11]} onSquareClick={()=> handleClick(11)}/>
            <Square color={squares[12]} onSquareClick={()=> handleClick(12)}/>
            <Square color={squares[13]} onSquareClick={()=> handleClick(13)}/>
        </div>
        <div className="board-row">
            <Square color={squares[14]} onSquareClick={()=> handleClick(14)}/>
            <Square color={squares[15]} onSquareClick={()=> handleClick(15)}/>
            <Square color={squares[16]} onSquareClick={()=> handleClick(16)}/>
            <Square color={squares[17]} onSquareClick={()=> handleClick(17)}/>            
            <Square color={squares[18]} onSquareClick={()=> handleClick(18)}/>
            <Square color={squares[19]} onSquareClick={()=> handleClick(19)}/>
            <Square color={squares[20]} onSquareClick={()=> handleClick(20)}/>
        </div>
        <div className="board-row">
            <Square color={squares[21]} onSquareClick={()=> handleClick(21)}/>
            <Square color={squares[22]} onSquareClick={()=> handleClick(22)}/>
            <Square color={squares[23]} onSquareClick={()=> handleClick(23)}/>
            <Square color={squares[24]} onSquareClick={()=> handleClick(24)}/>            
            <Square color={squares[25]} onSquareClick={()=> handleClick(25)}/>
            <Square color={squares[26]} onSquareClick={()=> handleClick(26)}/>
            <Square color={squares[27]} onSquareClick={()=> handleClick(27)}/>
        </div>
        <div className="board-row">
            <Square color={squares[28]} onSquareClick={()=> handleClick(28)}/>
            <Square color={squares[29]} onSquareClick={()=> handleClick(29)}/>
            <Square color={squares[30]} onSquareClick={()=> handleClick(30)}/>
            <Square color={squares[31]} onSquareClick={()=> handleClick(31)}/>            
            <Square color={squares[32]} onSquareClick={()=> handleClick(32)}/>
            <Square color={squares[33]} onSquareClick={()=> handleClick(33)}/>
            <Square color={squares[34]} onSquareClick={()=> handleClick(34)}/>
        </div>
        <div className="board-row">
            <Square color={squares[35]} onSquareClick={()=> handleClick(35)}/>
            <Square color={squares[36]} onSquareClick={()=> handleClick(36)}/>
            <Square color={squares[37]} onSquareClick={()=> handleClick(37)}/>
            <Square color={squares[38]} onSquareClick={()=> handleClick(38)}/>            
            <Square color={squares[39]} onSquareClick={()=> handleClick(39)}/>
            <Square color={squares[40]} onSquareClick={()=> handleClick(40)}/>
            <Square color={squares[41]} onSquareClick={()=> handleClick(41)}/>
        </div>
    
    </>);
}

function checkWin(squares){
    //ONE ETERNITY LATER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const lines = [
        [0,1,2,3],
        [1,2,3,4],
        [2,3,4,5],
        [3,4,5,6],
        [7,8,9,10],
        [8,9,10,11],
        [9,10,11,12],
        [10,11,12,13],
        [14,15,16,17],
        [15,16,17,18],
        [16,17,18,19],
        [17,18,19,20],
        [21,22,23,24],
        [22,23,24,25],
        [23,24,25,26],
        [24,25,26,27],
        [28,29,30,31],
        [29,30,31,32],
        [30,31,32,33],
        [31,32,33,34],
        [35,36,37,38],
        [36,37,38,39],
        [37,38,39,40],
        [38,39,40,41],
        [0,7,14,21],
        [7,14,21,28],
        [14,21,28,35],
        [1,8,15,22],
        [8,15,22,29],
        [15,22,29,36],
        [2,9,16,23],
        [9,16,23,30],
        [16,23,30,37],
        [3,10,17,24],
        [10,17,24,31],
        [17,24,31,38],
        [4,11,18,25],
        [11,18,25,32],
        [18,25,32,39],
        [5,12,19,26],
        [12,19,26,33],
        [19,26,33,40],
        [6,13,20,27],
        [13,20,27,34],
        [20,27,34,41],
        [0,8,16,24],
        [1,9,17,25],
        [2,10,18,26],
        [3,11,19,27],
        [7,15,23,31],
        [8,16,24,32],
        [9,17,25,33],
        [10,18,26,34],
        [14,22,30,38],
        [15,23,31,39],
        [16,24,32,40],
        [17,25,33,41],
        [21,15,9,3],
        [22,16,10,4],
        [23,17,11,5],
        [24,18,12,6],
        [28,22,16,10],
        [29,23,17,11],
        [30,24,18,12],
        [31,25,19,13],
        [35,29,23,17],
        [36,30,24,18],
        [37,31,25,19],
        [38,32,26,20]
    ];
    for (let i = 0; i < lines.length; i++){
        const [a,b,c,d] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]){
            return squares[a];
        }
    }
    return null;
}

