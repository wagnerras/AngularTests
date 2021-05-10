import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() liked = new EventEmitter();
  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;
  private debounceSubject = new Subject();
  private unsubscribe = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.liked.emit();
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public like() {
    this.debounceSubject.next();
  }



}
