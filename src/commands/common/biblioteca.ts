import { ApplicationCommandType, ActionRowBuilder, StringSelectMenuBuilder, Collection, EmbedBuilder } from "discord.js"
import { Command } from "../../structs/types/Commands";

export default new Command({
	name: "libraryath",
	description: "Este comando serve para você ver os materiais de estudos do Athenas",
	type: ApplicationCommandType.ChatInput, async run({interaction}){

    const embed = new EmbedBuilder()
		.setColor('Purple')
		.setTitle('Escolha o que lhe agrada para evoluir na programação de acordo com sua linguagem!')

		
		const row = new ActionRowBuilder<StringSelectMenuBuilder>({components: [

				new StringSelectMenuBuilder({
					customId: "library",
					placeholder: "Selecione o que você deseja estudar!",
					options: [
						{label: "Javascript", value: "Javascript"},
						{label: "React", value: "React"}
					]
				})
		]})
  


		const msg = await interaction.reply({ components: [row], embeds: [embed]})
	},
	selects: new Collection([
		["library", async (selectInteraction) => {

			const { user } = selectInteraction;
			const value = selectInteraction.values[0]
      const embedjs = new EmbedBuilder()
			.setColor('Gold')
			.setTitle('Menu JavaScript')
			.setDescription('Seja bem vindo ao Menu de JavaScript, logo abaixo você pode selecionar o que você deseja aprender com Js')
			.addFields(
				{name: 'Sugestões', value: `Para dar alguma sugestão ao que adicionar a biblioteca de estudos você pode mandar mensagem para o <@428536174294990858>`, inline: true}
			)
			  const row1 = new ActionRowBuilder<StringSelectMenuBuilder>({components: [
			new StringSelectMenuBuilder({
					customId: "js",
					placeholder: "Selecione",
					options: [
						{label: "Javascript Info", value: "infojs"}
					]
				})
		]})

      selectInteraction.update({
				content: `${user.username} selecionou ${value}`, components: [row1], embeds: [embedjs]})

      setTimeout(() => {
				selectInteraction.deferReply()
			}, 3000);
			
		}]
	])
})
