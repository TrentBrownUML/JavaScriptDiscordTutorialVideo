const { EmbedBuilder, SlashCommandBuilder, RoleFlags, RoleManager, PermissionsBitField, RoleFlagsBitField, SlashCommandMentionableOption, Role, GuildMemberFlags, GuildMemberFlagsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("support")
        .setDescription(
            "Triggers a support request interaction! Woohoo!"
        )
        .addUserOption((option) =>
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
        
        membersWithHelperRole.forEach(member => {
            console.log(member.user.tag);
        });
    },
};