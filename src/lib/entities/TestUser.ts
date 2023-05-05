import {Atom} from "@affinity-lab/carbonite";
import {Column, Entity} from "typeorm";

function Export(): any {

}

@Entity()
class TestUser extends Atom {
	@Export() @Column({type: "varchar", length: 128}) name: string = "";
}
