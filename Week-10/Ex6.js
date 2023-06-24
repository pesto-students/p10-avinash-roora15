function graphDFS(node, current, graph) {

let result = [];
let n = graph.length;

if (node === n - 1) {
    result.push(current);
    return;
}

for (let i = 0; i < graph[node].length; i++) {
    graphDFS(graph[node][i], [...current, graph[node][i]], graph);
}

return result;
}

function allPathsDAG(graph) {
let paths = graphDFS(0, [0], graph);
return paths;
};

let graph = [[1,2],[3],[3],[]];

console.log(allPathsDAG(n, graph));