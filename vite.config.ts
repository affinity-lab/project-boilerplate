import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import mkcert from 'vite-plugin-mkcert';
import {config} from "dotenv";

config();

export default defineConfig({
										 plugins: process.env.DEVSERVER === "yes" ? [sveltekit(), mkcert()] : [sveltekit()],
										 ssr: {external: ["reflect-metadata"]},
										 server: {
											 https: process.env.DEVSERVER === "yes",
											 proxy: {}
										 }
									 }
);
