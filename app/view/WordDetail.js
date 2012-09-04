Ext.define('SpellBee.view.WordDetail', {
    extend: 'Ext.Panel',
    xtype: 'worddetail',

    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            'Hello {spelling}!'
        ]
    }
});
