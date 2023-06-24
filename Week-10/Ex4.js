function findValidPath(n, edges, source, destination) {
    
let length = edges.length;

if(length == 0)
return true;

let visited = [];
let queue = [source];

while(queue.length > 0) {
    let element = queue.shift();
    visited[element] = true;
    let i = 0;
    while(i < edges.length) {
        let index = (edges[i]).indexOf(element);
        if(index != -1) {
            let secondElement = edges[i][1-index];
            if(secondElement == destination) {
                    return true;
            } else {
                if(!visited[secondElement]) {
                    queue.push(secondElement);
                }
            }   
        }
        i++;
    }
}

return false;

};

console.log(findValidPath(3, [[0,1],[1,2],[2,0]], 0, 2));
console.log(findValidPath(3, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));
