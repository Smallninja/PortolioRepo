document.addEventListener('DOMContentLoaded', () => {
    class Leaf {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    const head = new Leaf(5);

    head.left = new Leaf(3);
    head.right = new Leaf(8);
    head.left.left = new Leaf(1);
    head.left.right = new Leaf(4);
    head.right.left = new Leaf(6);
    head.right.right = new Leaf(9);
    head.left.left.left = new Leaf(0);
    head.left.left.right = new Leaf(2);
    head.right.right.left = new Leaf(7);
    head.right.right.right = new Leaf(10);

    let depth = [];
    let breadth = [];

    function depthFirstSearch(node = head) {
        if (node !== null) {
            depth.push(node.value);
            depthFirstSearch(node.left);
            depthFirstSearch(node.right);
        }
    }

    function breadthFirstSearch() {
        const queue = [];
        queue.push(head);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            breadth.push(currentNode.value);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }

    function displayResults() {
        document.getElementById('depthArray').innerText = depth.join(', ');
        document.getElementById('breadthArray').innerText = breadth.join(', ');
    }

    document.getElementById('depthBtn').addEventListener('click', () => {
        depthFirstSearch();
        displayResults();
    });

    document.getElementById('breadthBtn').addEventListener('click', () => {
        breadthFirstSearch();
        displayResults();
    });
});
