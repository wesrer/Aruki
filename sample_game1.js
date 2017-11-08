    function samplegame1(newboard){

    // white move 1
    var firstpawn = positionOf("Z5", newboard, 1);
    var somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 1);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
    

    print_board(newboard);

    // black move 1
    firstpawn = positionOf("Z2", newboard, 2);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 2);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
    

    print_board(newboard);

    // white move 2
    firstpawn = positionOf("Z5", newboard, 1);
    somemove = computePawnMoves(firstpawn.row, firstpawn.col, false, 1);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);
    
    
    print_board(newboard);

    // black move 2
    firstpawn = positionOf("L1", newboard, 2);
    somemove = computeLanceMoves(firstpawn.row, firstpawn.col, false, 2);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    
    print_board(newboard);

    // white move 3
    firstpawn = positionOf("J", newboard, 1);
    somemove = computeJesterMoves(firstpawn.row, firstpawn.col, false, 1, newboard);
    makeNonCaptureMove(firstpawn.row, firstpawn.col, somemove[0].row, somemove[0].col, newboard);

    print_board(newboard);

    

    firstpawn = positionOf("Z0", newboard, 1);
    console.log(isValidMove("Z0", firstpawn.row, firstpawn.col, firstpawn.row-1, firstpawn.col, false, newboard));
}

