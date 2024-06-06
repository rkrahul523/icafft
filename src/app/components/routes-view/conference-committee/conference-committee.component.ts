import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference-committee',
  templateUrl: './conference-committee.component.html',
  styleUrls: ['./conference-committee.component.scss']
})
export class ConferenceCommitteeComponent implements OnInit {


  speakers:any[] = [
    { name: 'Shri Sham H. Arjunwadkar',designation:"Chairman, BoG", photo: 'https://via.placeholder.com/600x400', details: 'Chief Patron' },
    { name: 'Dr. P. P. Chattopadhyay',designation:"Director, NIAMT, Ranchi", photo: 'https://via.placeholder.com/600x400', details: 'Patron' },
    { name: 'Dr. G. Ranganath',designation:"President, IEI", photo: 'https://via.placeholder.com/600x400', details: 'Patron' },
    { name: 'Dr. K. K. Singh',designation:"HoD, Dept. of Foundry and Forge Technology", photo: 'https://via.placeholder.com/600x400', details: 'Chairman' },
    { name: 'Er. M. K. Gupta',designation:"Chairman, IEI, JSC", photo: 'https://via.placeholder.com/600x400', details: 'Chairman' },
    { name: 'Dr. Manoj Kumar',designation:"NIAMT, Ranchi | Email: icafft2024@niamt.ac.in", photo: 'https://via.placeholder.com/600x400', details: 'Org. Secretary' },
    { name: 'Er. Harun Ansari',designation:"Honorary Secretary, IEI, JSC", photo: 'https://via.placeholder.com/600x400', details: 'Org. Secretary' },
    { name: 'Er. Manda Rajananda Kumar',designation:"IEI, JSC, MCDB | Mob.: 7013806680", photo: 'https://via.placeholder.com/600x400', details: 'Org. Secretary' },
    { name: 'Dr. Vineet Chak',designation:"NIAMT, Ranchi", photo: 'https://via.placeholder.com/600x400', details: 'Convenor' },
    { name: 'Dr. Himanshu Khandelwal',designation:"NIAMT, Ranch", photo: 'https://via.placeholder.com/600x400', details: 'Convenor' }
  ];

  speakersSlides: any = [];

  constructor() { }

  ngOnInit(): void {
    this.chunkSpeakers();
  }

  chunkSpeakers() {
    for (let i = 0; i < this.speakers.length; i += 4) {
      this.speakersSlides.push(this.speakers.slice(i, i + 4));
    }
  }

}
