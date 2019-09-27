import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

declare module 'rxjs' {
	interface Observable<T> {
		debug: (...any) => Observable<T>;
	}
}

// Observable.prototype.debug = function(message: string) {
// 	return this.do(
// 		(next) => {
// 			if (!environment.production) {
// 				console.log(message, next);
// 			}
// 		},
// 		(err) => {
// 			if (!environment.production) {
// 				console.error('ERROR>>', message, err);
// 			}
// 		},
// 		() => {
// 			if (!environment.production) {
// 				console.log("Completed - ");
// 			}
// 		}
// 	);
// }

Observable.prototype.debug = function(message: string) {
	return new Observable((subscriber) => {
    this.subscribe({
      next(value) {
				if (!environment.production) {
					console.log(message, value);
				}
				subscriber.next(value);
			},
      error(err) {
				if (!environment.production) {
					console.error('ERROR>>>', message, err);
				}
				subscriber.error(err);
			},
      complete() {
				if (!environment.production) {
					console.log('Completed - ');
				}
				subscriber.complete();
			},
   });
  });
};
