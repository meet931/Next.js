// We have creating named export for each HTTP method.

import {products} from './data';

export async function GET() {
    return Response.json(products)
}