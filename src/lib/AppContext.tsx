'use client';
import { LatLng, Mode } from './types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface User {name: string; email: string}
interface Ctx {
    loc: LatLng; source: 'locating' | 'device' | 'default'; locate: () => void;
    mode: Mode; setMode: (m: Mode) => void;
    user: User | null; login: (u:User)=> void; logout: () => void;
}
const Appctx = createContext<Ctx | null>(null);
export const useApp = () => useContext(AppCtx) as Ctx;