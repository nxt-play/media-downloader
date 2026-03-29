import { NextResponse } from "next/server";
import { dataFound, dataNotFound, exception } from "../helpers/api-result";
export const dynamic = 'force-dynamic';import { webAgent } from "../helpers/web-agent";
export const dynamic = 'force-dynamic';

export const POST = async (request) => {
    try {
        const body = await request.json();
        if (!body || !body.url) return NextResponse.json(dataNotFound());
        const result = await webAgent.post(`/v1/social/autolink`, { url: body.url });
        if (!result || !result.data) return NextResponse.json(dataNotFound());
        return NextResponse.json(dataFound(result.data));

    } catch (ex) {
        return NextResponse.json(exception(ex));
    }
}
