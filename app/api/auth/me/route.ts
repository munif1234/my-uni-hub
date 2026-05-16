import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_dev_only';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('auth_token')?.value;

        if (!token) {
            return NextResponse.json({ success: false, user: null }, { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({ success: true, user: decoded });
    } catch (error) {
        return NextResponse.json({ success: false, user: null }, { status: 401 });
    }
}
