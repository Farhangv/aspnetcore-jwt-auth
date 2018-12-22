import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const token = localStorage.getItem('jwt');
    this.http.get('http://localhost:5000/api/products', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.products = response;
    }, err => {
      console.log(err)
    });
  }

}
