import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http'; // required for getting products from JSON file
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // required by the .map method



@Component({
    moduleId: module.id,
    selector: 'saved',
    styleUrls: ['saved.component.css'],
    templateUrl: './saved.component.html'
})

export class SavedComponent implements OnInit {



      ngOnInit(): void {
    
  }

}
