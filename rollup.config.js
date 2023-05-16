// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/bundle.js',
                format: 'cjs'
            },
            {
                file: 'dist/esm/index.js',
                format: "esm",
                sourcemap: true,
            }
        ],
        plugins: [
            resolve(),
            commonjs(),

            typescript({ tsconfig: "./tsconfig.json" }),

            postcss(),
        ],
        external: ["react", "react-dom"],

    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],

        external: [/\.css$/, /\.scss$/, "react", "react-dom"], 
    },
];