import { client } from "../..";
import { Event } from "../../structs/types/Events";

export default new Event({
	name: "ready",
	once: true,
	run(){

    const { commands, buttons, modals, selects } = client;

		console.log('✅️ Dorama Bot On'.green)
    console.log(`Commands loaded: ${commands.size}`.black);
		console.log(`Buttons loaded: ${buttons.size}`.black);
		console.log(`Selects loaded: ${selects.size}`.black);
		console.log(`Modals loaded: ${modals.size}`.black);
		
	},
})