/*
 * @Author: xiaohuolong
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-19 10:28:06
 * @FilePath: /react-xy/create-next/pages/index.js
 */
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href='/test?id=123'>
        去 test
      </Link>
    </div>
  )
}
