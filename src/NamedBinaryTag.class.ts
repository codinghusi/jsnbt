import { Parser } from 'binary-parser';


namespace NamedBinaryTag {
    interface NBT {
        [key: string]: number | string | NBT | [number] | [string] | [NBT] 
    }

    const enum Tag {
        End,
        Byte,
        Short,
        Int,
        Long,
        Float,
        Double,
        Byte_Array,
        String,
        List,
        Compound,
        Int_Array,
        Long_Array
    }

    const tagParsers = {
        [Tag.Byte]: new Parser().int8('payload'),

        [Tag.Short]: new Parser().int16('payload'),

        [Tag.Int]: new Parser().int32('payload'),

        // [Tag.Long]: new Parser().int64be('payload'), // not working
        [Tag.Long]: new Parser().int32('part1').int32('part2'),

        [Tag.Float]: new Parser().float('payload'),

        [Tag.Double]: new Parser().double('payload'),

        [Tag.Byte_Array]: new Parser()
            .int32('length')
            .array('payload', {
                type: 'byte',
                length: 'length'
            }),

    };

    async function parse(): NBT {

    }
}
