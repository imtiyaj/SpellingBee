/**
 * Created with JetBrains WebStorm.
 * User: imtiyaj
 * Date: 4/9/12
 * Time: 3:40 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SpellBee.store.Wordstore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'SpellBee.model.Words',
        sorters: 'spelling',
        grouper : function(record) {
            return record.get('spelling')[0];
        },
        data: [
            { spelling: "carrot" },
            { spelling: "parrot" },
            { spelling: "boat" },
            { spelling: "quiet" },
            { spelling: "spelling" }
        ]
    }
});
