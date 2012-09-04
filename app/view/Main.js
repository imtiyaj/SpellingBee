Ext.define('SpellBee.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainpanel',
    requires: [
        'SpellBee.view.WordList',
        'SpellBee.view.WordDetail'
    ],

    config: {
        items: [{
            xtype: 'wordlist'
        }]
    }
});