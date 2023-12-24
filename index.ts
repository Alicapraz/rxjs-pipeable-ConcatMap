import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';
import { take } from 'rxjs/operators';

//ConcatMap her emit edilen değer için içerisindeki creation fonksiyonunu çalıştırır,
//ve yeni bir observable oluşturur.

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
result.subscribe((x) => console.log(x));

// const source$ = new Observable((subscriber) => {
//   setTimeout(() => subscriber.next('Can'), 2000);
//   setTimeout(() => subscriber.next('Canan'), 4000);
// });

// source$
//   .pipe(concatMap((value) => of(1, 2)))
//   .subscribe((value) => console.log(value));
