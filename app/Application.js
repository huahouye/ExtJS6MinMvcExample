/**
 * 代码来源参考了 http://www.cnblogs.com/lslvxy/p/3395018.html
 * 
 * 这是 ExtJS MVC 的入口。不管这个文件叫 Application.js 还是 app.js，他都必须是 Ext.application，
 * 也就是说 ExtJS MVC 应用要从 Application 类的实例开始。
 * 之后，在 HTML 文件里面引入该文件，然后该文件去加载 M、V 和 C。
 */
Ext.application({
	requires : [ 'Ext.container.Viewport' ],
	
	// ****** 下面两行代码定义的变量很重要 *******
	/**
	 * name 定义了这整个 MVC 应用的命名空间。
	 * appFolder 定义了根目录。
	 * 
	 * 在 https://docs.sencha.com/extjs/6.0/application_architecture/application_architecture.html 文档上有介绍。
	 * 规则大概就是 <AppName>.<foldername>.<ClassAndFileName>
	 */
	name : 'MyAppNamespace', // 定义的命名空间
	appFolder : 'app', // 指明应用的根目录
	
	/**
	 * 下面的代码就是 MVC 的加载文件规则了。
	 */
	// 其实翻译出来就是“从根 app 开始找 controller（注意没带 s 哦） 目录，在这个目录下加载 Students.js 这个文件”
	controllers : [ 'Students' ],

	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : {
				xtype : 'studentlist'
			}
		});
	}
});