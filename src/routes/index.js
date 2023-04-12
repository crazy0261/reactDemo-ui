export default [
	{
		path:'/about',
		element:<About/>
	},
	{
		path:'/home',
		element:<Home/>,
    children:[
      path: 'news',
      element"<News/>
    ]
	},
	{
		path:'/',
		element:<Navigate to="/about"/>
	}
]