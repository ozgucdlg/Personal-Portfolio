import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';




@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent  implements OnInit   {
  textArray = ["Youteber", "FullStack developer", "Application Developer"];
  currentTextIndex = 0;
  currentCharIndex = 0;
  typedText = '';

  constructor(){

  }
 
  ngOnInit(): void {
   this.typeText();
  }

  typeText() {
    if (this.currentCharIndex < this.textArray[this.currentTextIndex].length) {
      this.typedText += this.textArray[this.currentTextIndex].charAt(this.currentCharIndex);
      this.currentCharIndex++;
      setTimeout(() => this.typeText(), 100); // Hızı ve zamanlamayı ayarlayabilirsiniz
    } else {
      this.currentCharIndex = 0;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length; // Döngü için metin dizisini dolaş
      this.typedText = ''; // Metni temizle
      setTimeout(() => this.typeText(), 1000); // Bir sonraki metin için bekleme süresi
    }
  }
  

}
