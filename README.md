# f-date
Filter method of date with specified format-template.

## Usage

```js
var FDate = require('f-date')
FDate(new Date, 'YY-MM-DD hh:mm:ss') // ==> 2015-4-1 08:00:00
FDate(new Date, 'YY-XMM-XDD h:mm:ss') // ==> 2015-04-01 8:00:00
FDate(new Date, 'YY-XMM-XDD 周WW') // ==> 2015-04-01 周一
FDate(+new Date, 'YY-XMM-XDD 周WW') // ==> 2015-04-01 周一
FDate('2015-4-1', 'YY-XMM-XDD 周WW') // ==> 2015-04-01 周一
```