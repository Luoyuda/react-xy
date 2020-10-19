/*
 * @Author: xiaohuolong
 * @Date: 2020-10-19 10:13:07
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-19 15:54:26
 * @FilePath: /react-xy/create-next/pages/test.js
 */
import Button from '../components/Button'
import Router, { withRouter } from 'next/router'


export default withRouter(({router}) => <div>
    <Button onClick={() => Router.push('/')}>{router.query.id || '1'}</Button>
</div>)