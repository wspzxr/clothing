let arr =[
  {
    name: '数据统计',
    icon: 'area-chart',
    id:'0',
    path:'/home'
  },
  {
    name:'商品管理',
    icon:"shopping",
    id:'1',
    children:[
      {
        name:'商品列表',
        icon:"unordered-list",
        id:'1-0',
        path:'/shop/list'
      },
      {
        name:'商品修改',
        icon:"scissor",
        id:'1-1',
        path:'/shop/update'
      }
    ]
  },
  {
    name:'订单管理',
    icon:"file-done",
    id:'2',
    children:[
      {
        name:'订单列表',
        icon:"unordered-list",
        id:'2-0',
        path:'/goods/list'
      },
      {
        name:'订单修改',
        icon:"scissor",
        id:'2-1',
        path:'/goods/update'
      }
    ]
  },
  {
    name:'文章管理',
    icon:"book",
    id:'3',
    children:[
      {
        name:'文章列表',
        icon:"unordered-list",
        id:'3-0',
        path:'/book/list'
      },
      {
        name:'文章添加',
        icon:"scissor",
        id:'3-1',
        path:'/book/addbook'
      }
    ]
  },
  {
    name:'营销中心',
    icon:"notification",
    id:'4',
    path:'/conter'
  },
  {
    name:'功能设置',
    icon:"setting",
    id:'5',
    path:'/setting'
  },
]
// ['0','1-0','1-1','2-0','2-1','3-0','3-1','4','5']
export default arr