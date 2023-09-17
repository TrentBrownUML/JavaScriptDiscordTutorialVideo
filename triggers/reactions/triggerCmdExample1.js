/**
 * @file Sample Trigger command.
 * @author Naman Vrati
 * @since 2.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').TriggerCommand}
 */
module.exports = {
    name: ["lost"],

    execute(message, args) {
        /**multiline comment */
        // single line comment

        message.channel.send({
            content: "Haha you are found lul",
        });
    },
};