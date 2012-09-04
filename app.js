
Ext.application({
    name: 'SpellBee',

    controllers: ['Main'],
    views: ['Main'],
    stores: ['Wordstore'],
    models: ['Words'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel'
        });
    }
});