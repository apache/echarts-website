# option.media

## query
- **Type**: `Object`

If more than one properties used, it means "and".

### query.minAspectRatio
- **Type**: `number`
- **Default**: `undefined`

That is the radio of `width / height`. The value can be like `1.3`.

## option
- **Type**: `Object`

Each item of this array is an echarts option (`ECUnitOption`). It will be applied when this query is matched.
