import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from '../models/action';
import { ActionsService } from '../actions.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  action: Action;
  constructor(private route: ActivatedRoute, private actionService: ActionsService) { }

  ngOnInit(): void {
    this.getAction();
  }

  getAction(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.action = this.actionService.getAction(id);
  }
}
