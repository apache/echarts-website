# option.media

## query
- **Type**: `Object`

同时写两个属性，表示 “且”。

### query.minWidth
- **Type**: `number`
- **Default**: `undefined`

`minWidth: 200` 表示『大于等于 200px 宽度』。

### query.maxHeight
- **Type**: `number`
- **Default**: `undefined`

`minHeight: 200` 表示『大于等于 200px 高度』。

### query.minAspectRatio
- **Type**: `number`
- **Default**: `undefined`

长宽比。值如 `1.3`。

## option
- **Type**: `Object`

数组的每一项是一个 echarts option (`ECUnitOption`)，当此 query 被匹配时，会使用这个 option 。
