/**
 * http://usejsdoc.org/
 */
Ext.define('MyAppNamespace.store.Students', {
	extend : 'Ext.data.Store',
	data : [ {
		id : 1,
		name : '张三',
		age : 30,
		sex : '男'
	}, {
		id : 2,
		name : '李四',
		age : 20,
		sex : '女'
	} ]
});