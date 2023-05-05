import "reflect-metadata"
import {carbonite} from "$lib/entities/setup/carbonite";
import {sessionManager} from "$lib/services/session-manager";
import {pipeline} from "@affinity-lab/sk-util";
import type {Handle} from "@sveltejs/kit";

await carbonite();
process.on('uncaughtException', (err) => console.log('Caught exception: ' + err));

export const handle:Handle = input => pipeline(input.event, [sessionManager, input.resolve]);