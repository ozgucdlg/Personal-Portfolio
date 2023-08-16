import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



if (toastTrigger: { addEventListener: (arg0: string, arg1: () => void) => void; }) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(this.toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

}
