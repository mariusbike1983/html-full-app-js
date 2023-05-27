async function _fetchData() {
    // using top level await to fetch the data
    const todos = await fetch('https://dummyjson.com/todos?limit=5')
        .then(response => response.json())
        .then(json => json.todos);
    return todos;
}

async function _fetchData2() {
    const response = await fetch('https://dummyjson.com/todos?limit=5');
    const json = await response.json();
    return json.todos;
}

function _asyncFetchData(callback) {
    fetch('https://dummyjson.com/todos?limit=5')
        .then(response => response.json())
        .then(json => json.todos)
        .then(todos => callback(todos));
}

async function _asyncFetchData2(callback) {
    const response = await fetch('https://dummyjson.com/todos?limit=5');
    const json = await response.json();
    callback(json.todos);
}