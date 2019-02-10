

// Calculate runtime
var t0;
function initTime(){
    t0 = performance.now();
}

function endTime(){
    return (performance.now() - t0);
}


// rumtime complexity calculator
var runtimeOptions = [ "constant", "linear", "quadratic", "logarithmic" ];
var runtimeValues = [ "1", "n" ,"n<sup>2</sup>" , "log n" ];
function runtimeComplexityCalculator( operations = array() ){
    function getFormula( option ){
        var index = runtimeOptions.findIndex( function( element ){
            return element == option;
        } );
        if( index >= 0){
            return runtimeValues[ index ];
        }
        else{
            return option;
        }
    }

    var output = "O(";
    for( var i = 0; i < operations.length; i++ ){
        for( var ii = 0; ii < operations[ i ].length; ii++ ){
            var operation = ( i == 0 && ii == 0 ? "" : ( ii == 0 ? " + " : " * " ) );
            var needsParenthesis = operations[ i ][ ii ] == "logarithmic" ;
            output += operation 
                   + (needsParenthesis ? "(" : "") 
                   + getFormula( operations[ i ][ ii ] ) 
                   + (needsParenthesis ? ")" : "");
        }
    }
    return output + ")";
}


// write output
// index: int. 0 if there is only one solution. 1, 2, 3, n in case there is multiple solutions
// value: int, the output answer value itself
// operations: matrix, userd to calculate runtime complexity
function writeOutput( index, value, operations = array() ){
    document.write( "<br />answer" + ( index > 0 ? " " + index : "" ) + ": " + value );
    document.write( "<br />runtime: " + endTime() + " milliseconds.")
    document.write( "<br />runtume complexity: " + runtimeComplexityCalculator( operations ) );
    document.write( "<br />" );
}


// check if a number is prime
function isPrime( input ){
    if( input == 1 ){
        return false;
    }
    else if( input < 4 ){
        return true;
    }
    else if( input % 2 == 0 ){
        return false;
    }
    else if( input < 9 ){
        return true;
    }
    else if( input % 3 == 0 ){
        return false;
    }
    else{
        var limit = Math.floor( Math.sqrt( input ) );
        var n = 5;
        while( n <= limit ){
            if( input % n == 0 ){
                return false;
            }
            if( input % ( n + 2 ) == 0 ){
                return false;
            }
            n += 6;
        }
        return true;
    }
}


// find next prime number
var lastPrime = 2;
function findNextPrimeNumber(){
    var found = false;
    var i = lastPrime;
    if( lastPrime == 2 ){
        lastPrime = 3;
        found = true;
    }
    while( !found ){
        i += 2;
        found = isPrime( i );
        if( found ){
            lastPrime = i;
            break;
        }
    }
    return lastPrime;
}