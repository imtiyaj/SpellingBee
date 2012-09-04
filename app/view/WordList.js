Ext.define('SpellBee.view.WordList', {
    extend: 'Ext.List',
    xtype: 'wordlist',
    requires: ['SpellBee.store.Wordstore'],
    
    config: {
        title: 'Your Words',
        grouped: true,
        //itemTpl: '{firstName} {lastName}',
        store: 'Wordstore'
       //onItemDisclosure: true
    }
});
