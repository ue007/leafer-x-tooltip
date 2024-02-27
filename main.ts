/*
 * @Author: zi.yang
 * @Date: 2024-02-01 14:42:21
 * @LastEditors: zi.yang
 * @LastEditTime: 2024-02-27 00:52:04
 * @Description:
 * @FilePath: /leafer-x-tooltip/main.ts
 */
import { Ellipse, Leafer, Rect } from 'leafer-ui';

import { TooltipPlugin } from './src'; // 引入插件代码

const leafer = new Leafer({ view: window })

const rect = new Rect({
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  fill: '#32cd79',
  draggable: true,
})

leafer.add(rect)


const ellipse = new Ellipse({
  x: 220,
  y: 100,
  width: 100,
  height: 100,
  fill: 'orange',
  draggable: true,
})

leafer.add(ellipse)

new TooltipPlugin(leafer, {
  includeTypes: ['Ellipse'],
  getContent: (node) => {
    return `<ul style="list-style: none; margin: 0; padding: 0">
        <li>节点类型：${node.tag}</li>
        <li>宽度：${node.width}</li>
        <li>高度：${node.height}</li>
      </ul>
      `
  },
})