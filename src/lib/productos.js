let seed = [
    { id: 1, nombre: "Harina", precio: 2 },
    { id: 2, nombre: "Leche", precio: 3 },
    { id: 3, nombre: "pan", precio: 1 }
]

let productos = null;

export default function getUsers() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!productos) 
        productos = seed;
    
    return productos;
}

