var Node = function(data) {
    this.data = data;
    this.next = null;
};

var processInput = function() {
    var userInput = document.getElementById('userInput').value;
    var outputDiv = document.getElementById('output');

    var head = null;

    for (var i = 0; i < userInput.length; i++) {
        var newNode = new Node(userInput[i]);
        if (!head) {
            head = newNode;
        } else {
            var current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    var outputText = 'Linked List Elements: ';
    var current = head;
    while (current) {
        outputText += current.data + ' ';
        current = current.next;
    }

    outputDiv.textContent = outputText;
};
