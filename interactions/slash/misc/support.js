const { EmbedBuilder, SlashCommandBuilder, SlashCommandMentionableOption, Role, GuildMemberFlags, GuildMemberFlagsBitField, GatewayIntentBits, GuildMemberManager } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("support")
        .setDescription(
            "Triggers a support request interaction! Woohoo!"
        )
        .addRoleOption((option) =>
            option
                .setName("helper")
                .setDescription("Choose a helper to ping for asistance.")
                .setRequired(true)
        ),

    async execute(interaction) {
        const helperRoleId = "1153047914596290751";

        const guild = interaction.client.guilds.fetch(1152995657704017930);

        
        let helperRoleApiCallResponse = interaction.guild.roles.cache.get(helperRoleId);

        const membersWithHelperRole = helperRoleApiCallResponse.members;
        
        interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence?.status === 'online');
            // Now you have a collection with all online member objects in the totalOnline variable
            console.log(`There are currently ${totalOnline.size} members online in this guild!`);
        });

        
        //console.log([...membersWithHelperRole.entries()][1][1].presence)
        },
};
