
function getAllTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json =>{
        console.log(json)
        renderAllTodos(json)
    


        
    } )
        
        
        
       

}


async function renderAllTodos(data) {
    
    let html = '';
    data.forEach(todo => {
        let htmlSegment = `<tr class="user">
                            
                            <td>${todo.userId} </td>
                            <td class="email">${todo.title}</td>
                        </tr>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}


getAllTodos()
