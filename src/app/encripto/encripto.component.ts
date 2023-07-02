import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encripto',
  templateUrl: './encripto.component.html',
  styleUrls: ['./encripto.component.css'],
})
export class EncriptoComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: any;

  public typedEncodeValue: string = '';
  public typedDecodeValue: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  handleEncodeClick() {
    this.http
      .post(
        `https://localhost:7156/api/Encripto/Encode?inputString=${this.typedEncodeValue}`,
        {}
      )
      .subscribe((data) => {
        console.log(data);
        this.postJsonValue = data;
      });
  }

  handleDecodeClick() {
    this.http
      .get(
        `https://localhost:7156/api/Encripto/Decode?inputString=${encodeURIComponent(
          this.typedDecodeValue
        )}`
      )
      .subscribe((data) => {
        console.log(data);
        this.getJsonValue = data;
      });
  }
}