import { Observable, merge, timer } from "rxjs";
import { filter, delayWhen } from 'rxjs/operators';

export function delayIf<T>(predicate: (value: T) => boolean, howLong: ((value: T) => number) | number) {
	let howLongFn : (value: T) => number;
	if(typeof howLong === "function") {
		howLongFn = howLong;
	}else {
		howLongFn = (_) => howLong;
	}
	return (source: Observable<T>) => {
		return merge(
			source.pipe(
				filter(input => predicate(input)),
				delayWhen(input => timer(howLongFn(input)))
			),
			source.pipe(filter(input => !predicate(input)))
		);
  };
}