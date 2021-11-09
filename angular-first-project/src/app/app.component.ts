import { Component } from '@angular/core';
import { interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project-angular';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDyQ2sVGbZvzFJOSMDZLEdpv6KcvdCVlCw",
      authDomain: "first-project-f1a1a.firebaseapp.com",
      projectId: "first-project-f1a1a",
      storageBucket: "first-project-f1a1a.appspot.com",
      messagingSenderId: "164016678375",
      appId: "1:164016678375:web:e8f7f727a5757100d64942",
      measurementId: "G-CEKLZGCXPS"
    };

    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  }

  // endTalkSubject$ = new Subject();

  // talkObservable2$ =  interval(1000).pipe(
  //   takeUntil(this.endTalkSubject$),
  //   tap(state => {
  //     if (state >= 10) {
  //       this.endTalkSubject$.next();
  //     }
  //   }),
  //   map(state => `Talking for the ${state} time!`),
  // );

  //observable$ = new Observable();
   i = 0;
  multiplication$ = interval(3000).pipe(
    // tap(state =>{

    // })
    takeWhile((state) => this.i <= 11),
    map(_ => ++this.i),
    map(mu => 2 * this.i)
  );

  // b$ = new BehaviorSubject(this.multiplication$);
  // behav$ = this.multiplication$.pipe(new BehaviorSubject(1));
}
