import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent implements OnInit {

  sponsorships = [
    { title: 'Platinum Sponsor',amount:'2,00,000 + 18 % GST',delegates:'3', description: 'Full Page Colour Ad in Souvenir' },
    { title: 'Gold Sponsor',amount:'1,00,000 + 18 % GST',delegates:'2', description: 'Full Page B & W Ad in Souvenir'  },
    { title: 'Silver Sponsor',amount:'75,000 + 18 % GST',delegates:'2', description: 'Half Page Colour Ad in Souvenir'  },
    { title: 'Kit (Co-Sponsor)',amount:'50,000 + 18 % GST',delegates:'2', description: 'Half Page Colour Ad in Souvenir'  },
    { title: 'Dinner Sponsor',amount:'1,00,000 + 18 % GST',delegates:'-', description: 'Banner at Venue Ad in Souvenir'  },
    { title: 'Lunch Sponsor',amount:'50,000 + 18% GST',delegates:'-', description: 'Banner at Venue Ad in Souvenir'  }
    // Add more sponsorships as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
