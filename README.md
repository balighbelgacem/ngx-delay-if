# NgxDelayIf

If you need to delay emitting values based on their content you are right here. Use this library to implement conditional delaying emitting values.

## Installation

```bash
npm install ngx-delay-if
# Or if you use yarn
yarn add ngx-delay-if
```


## Usage

import `delayIf` follows:
```ts
import { delayIf } from 'ngx-delay-if';
```
and then use it as as the samples below.

### Sample 1
```ts
// Delay emitting even values for 10 seconds
obs$.pipe(delayIf(
	value => value % 2 === 0, 
	value => value * 1000)).subscribe(
	value => {
		console.log(value);
	});
```
```
Output:
1  3  5  7  9  0  2  4  6  8  10  
```

### Sample 2
```ts
const obs$ = interval(10);

// Delay emitting odd values for (1 * value) seconds
obs$.pipe(delayIf(
	value => value % 2 === 1, 
	value => value * 1000)).subscribe(
	value => {
		console.log(value);
	});
```
```
Output:
0  2  1  4  6  3  8  10  5  7  9   
```


## Live demo
Try it on [stackblitz](https://stackblitz.com/edit/ngx-delay-if-demo)