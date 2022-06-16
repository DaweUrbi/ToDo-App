let input = prompt('What would you like to do?');
const todos = ['Buy milk', 'Buy eggs', 'Buy bread'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list' || input === 'l') {
        console.log('**************************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**************************');
    } else if (input === 'new') {
        const newTodo = prompt('Enter a new todo');
        todos.push(newTodo);
        console.log(`Added "${newTodo}" to the list`);
    }
    else if (input === 'delete' || input === 'd') {
        const index = parseInt(prompt('Enter the index of the todo you want to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted "${deleted[0]}" from the list`);
        } else {
            console.log('Invalid index');
        }
    }
    input = prompt('What would you like to do?');
    
}
    
console.log('You quit APP! Goodbye!');