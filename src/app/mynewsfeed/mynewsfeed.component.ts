import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http'; // required for getting products from JSON file
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // required by the .map method



@Component({
    moduleId: module.id,
    selector: 'mynewsfeed',
    styleUrls: ['mynewsfeed.component.css'],
    templateUrl: './mynewsfeed.component.html'
})

export class MyNewsFeedComponent implements OnInit {



      ngOnInit(): void {
    
  }

}