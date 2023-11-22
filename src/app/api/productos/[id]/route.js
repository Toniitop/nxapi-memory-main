import getProductos from "@/lib/productos";

export function GET(request, { params }) {
    let prod = getProductos();
    let productos = prod.find(user => user.id == params.id)

    return Response.json(productos)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let prod = getProductos();
    // Obtenemos posición    
    const pos = prod.findIndex(user => user.id == params.id)

    // Modificamos usuario
    const newUser = await request.json()
    prod.splice(pos, 1, { id: Number(params.id), ...newUser })

    return Response.json(prod)
}


export function DELETE(request, { params }) {
    let prod = getProductos();
    // Obtenemos posición    
    const pos = prod.findIndex(user => user.id == Number(params.id))

    // Eliminamos usuario
    if (pos != -1)  // Si es encontrado
        prod.splice(pos, 1)

    return Response.json(prod)
}