import { Component, OnInit } from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

export interface PlanSupport {
  option: string;
  standardOption: string;
  premiumOption: string;
  enterpriseOption: string;
}

const ELEMENT_DATA: PlanSupport[] = [
  {option: 'Guaranteed', standardOption: '24 hours', premiumOption: '12 hours', enterpriseOption: '4 hours'},
  {option: 'Ticket', standardOption: 'Y', premiumOption: 'Y', enterpriseOption: 'Y'},
  {option: 'Monitoring', standardOption: 'Y', premiumOption: 'Y', enterpriseOption: 'Y'},
  {option: 'Programmatic case management', standardOption: 'Y', premiumOption: 'Y', enterpriseOption: 'Y'},
  {option: 'Hotline', standardOption: '-', premiumOption: '9AM - 6PM', enterpriseOption: '24/7'},
  {option: 'Dedicated Premium Support', standardOption: '?', premiumOption: '?', enterpriseOption: '?'},
  {option: 'Technical account manager', standardOption: '?', premiumOption: '?', enterpriseOption: '?'},
  {option: 'Custom onboarding', standardOption: '-', premiumOption: '4 hours', enterpriseOption: '2 x half days'},
  {option: 'On-demand architecture review', standardOption: '-', premiumOption: '-', enterpriseOption: '-'},
  {option: 'Third-party Software Support', standardOption: '?', premiumOption: '?', enterpriseOption: '?'},
  {option: 'Pricing', standardOption: 'Included', premiumOption: '59€/month excl. tax', enterpriseOption: '499€/month excl. tax'}
];

@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
  // standalone: true
  // imports: [MatTableModule],
})

export class TableComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['option', 'standardOption', 'premiumOption', 'enterpriseOption'];
  tableH8lio = ELEMENT_DATA;

  onViewSubscription () {
    // this.router.navigateByUrl();
  }

}




