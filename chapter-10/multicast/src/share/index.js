import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';

const tick$ = Observable.interval(1000).take(3);
const sharedTick$ = tick$.share();

sharedTick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe(value => console.log('observer 2: ' + value));
}, 1500);


