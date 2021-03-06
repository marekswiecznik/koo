import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  page: number = 1;
  people : Person[];

  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
    let page = +this.route.snapshot.paramMap.get('page');
    if(page) {
      this.page = page;
    }
  }

  getPeople(): void {
    this.people = this.peopleService.getPeople();
  }

  pageChangeAction(newPage: number) {
    this.router.navigate(['/people/'+newPage]);
    this.page = newPage;
  }
}
