import "./attachment-service";
import {dataSource} from "./data-source";
import {Carbonite} from "@affinity-lab/carbonite";

process.on('exit', () => dataSource.destroy());

export const carbonite = () => {
	!dataSource.isInitialized && dataSource.initialize().then(Carbonite.initialize);
}