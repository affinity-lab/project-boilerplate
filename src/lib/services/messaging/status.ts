import {DefaultResponseStatus} from "@affinity-lab/sk-messaging";

enum MyResponseStatus {
}

export const Status = {
	...DefaultResponseStatus,
	...MyResponseStatus
}