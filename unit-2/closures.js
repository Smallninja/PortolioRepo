document.addEventListener("DOMContentLoaded", function(event){

    window.globalThis.randomVar ="hi";
    function moves(name, hp, ...rest){
        var moves = {
            name: name,
            hp: hp,
            moves: rest
        }
    
        moves.getHp = function(){
            return this.hp;
        }
        moves.getName = function(){
            return this.name;
        }

        moves.setMove = function(){
            var movesDiv = document.querySelector('.moves');
            if (movesDiv) {
                for (var move of [this.name]) {
                    var paragraph = document.createElement('p');
                    paragraph.textContent = move;
                    movesDiv.appendChild(paragraph);
                }
            }
        }
        return moves;
    };

    var moves1 = moves("Joseph", 100, "Yes");
    console.log(moves1.getHp() + moves1.getName());
    moves1.setMove();

});