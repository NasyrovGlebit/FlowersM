import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-flower-edit',
  templateUrl: './flower-edit.component.html',
  styleUrls: ['./flower-edit.component.css']
})
export class FlowerEditComponent implements OnInit {
  flower: {
    "id": Number,
    "name": String,
    "count": number,
    "color": String,
    "description": String,
    "image": String
  } = {
    "id": 1,
    "name": "",
    "count": 0,
    "color": "",
    "description": "",
    "image": ""
  };

  done: boolean = false;

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  getFlowerId(): Number {
    let id: string = this.router.url.replace("/edit", "");

    return Number(id.charAt(id.length - 1));
  }

  submit(flower: any) {
    fetch("http://localhost:8080/api/flower/" + this.getFlowerId(),
      {
        method: "PUT",
        body: JSON.stringify(flower),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        if (response.status == 200) {
          this.done = true
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
}
