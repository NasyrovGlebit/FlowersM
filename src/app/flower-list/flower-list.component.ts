import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit {
  constructor(private router: Router){}

  flowers: {
    "id": Number,
    "name": String,
    "count": number,
    "color": String,
    "description": String,
    "image": String
  }[] = [{
    "id": 1,
    "name": "",
    "count": 0,
    "color": "",
    "description": "",
    "image": ""
  }];

  getFlowers() {
    fetch("http://localhost:8080/api/flower/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.flowers = [...data]
      });
  }

  ngOnInit(): void {
    this.getFlowers()
  }

  goToItem(flower: any) {
    console.log(flower)
    this.router.navigate(['/flower', flower.id]);
  }
}
