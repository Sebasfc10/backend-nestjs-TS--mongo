/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Stat extends Document {
    readonly hp: number;
    readonly atk: number;
    readonly def: number;
    readonly atks: number;
    readonly defs: number;
    readonly vel: number;
    readonly pre: number;
    readonly eva: number;
    readonly createdAt: Date
}