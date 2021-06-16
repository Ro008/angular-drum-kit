import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-drum-kit';

  onKeydown(event) {
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
          //   take the event keycode and see if it matches with any audio sound
          if(audio.getAttribute('data-keyCode') === event.code) {
            audio.play();
          }
      });
  }
}
