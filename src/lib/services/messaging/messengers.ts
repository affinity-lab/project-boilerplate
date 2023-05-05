import {MessageID} from "./message-id";
import {MessageResult, Messenger} from "@affinity-lab/sk-messaging";

export const messenger = (data: any, messageId: number): Messenger => new Messenger(
	data,
	"/message",
	messageId,
	(res: MessageResult) => res.isHandled ? false : console.log(res)
);

export const messengers = {};