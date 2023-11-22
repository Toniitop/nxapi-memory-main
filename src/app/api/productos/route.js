import getProductos from "@/lib/productos";

export function GET() {
    let prod = getProductos();
    return Response.json(prod)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let prod = getProductos();
    let sig = Math.max(...prod.map(u => u.id)) + 1

    const newUser = await request.json()
    prod.push({ id: sig, ...newUser })
    return Response.json(prod)
}

