import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';




@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent  implements OnInit,OnDestroy   {
  text = "I am, Oguchi Dalga";
  typedText = '';
  currentIndex = 0;
  typeSpeed = 100; // Hızı ayarlayabilirsiniz
  typingSubscription: Subscription | undefined;

  constructor(){

  }
 
  ngOnInit(): void {
    this.typingSubscription = interval(this.typeSpeed).subscribe(() => {
      if (this.currentIndex < this.text.length) {
        this.typedText += this.text.charAt(this.currentIndex);
        this.currentIndex++;
      } else {
        this.typingSubscription?.unsubscribe();
      }
    });
  }


  ngOnDestroy(): void {
    this.typingSubscription?.unsubscribe();
  }
  

}
