import type {RequestEvent} from "@sveltejs/kit";
import {handler, ServerTypes} from "@affinity-lab/sk-messaging";

const handlers: ServerTypes.MessageHandlerCollection = {};

export const messageHandler = (event: RequestEvent) => handler(event, handlers);