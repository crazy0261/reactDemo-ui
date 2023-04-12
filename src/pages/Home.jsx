// import React,{useState} from 'react'

// export default function Home() {
//     // 传入初始值
//     const [sum,setNum] = useState(1)
//   return (
//     <div>
//         <h3>我是Home的内容</h3>
//         <h4>当前sum的值是：{sum}</h4>
//         <button onClick={() => setNum(2)}>点我将sum变为2</button>
//     </div>
//   )
// }

import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Home() {
    // 传入初始值
    const [sum,setNum] = useState(1)
  return (
    <div>
        <h3>我是Home的内容</h3>
        <ul className='nav nav-tabs'>
            <li>
                <NavLink className= "list-group-item" to="news">News</NavLink>
            </li>
            <li>
                {/* end 子集高亮，父级不高亮 */}
                <NavLink className= "list-group-item"  end to="message">Message</NavLink>
            </li>
            {/* 指定路由组件呈现的位置 */}
            <Outlet/>
        </ul>
    </div>
  )
}
