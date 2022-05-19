import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  id: number | undefined;
  flower: {
  "id": Number,
  "name": String,
  "count": number,
  "color": String,
  "description": String,
  "image": String
} = {
  "id": 1,
  "count": 0,
  "name": "",
  "color": "",
  "description": "",
  "image": ""
};
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute){
    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  }
  ngOnInit(): void {
    this.getFlower()
  }

  getFlower() {
    fetch("http://localhost:8080/api/flower/" + this.id,
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
        console.log(data);
        this.flower = data
      });
  }

}
