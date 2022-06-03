import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maindiv',
  templateUrl: './maindiv.component.html',
  styleUrls: ['./maindiv.component.scss'],
})
export class MaindivComponent implements OnInit {
  @Input() datafromdb: any;

  constructor() {}

  ngOnInit(): void {}

  styleFunction(data: any): any {
    // console.log(data);
    let regone = /<p>Responsibilities(.)*/gi;
    let regtwo = /<p>Additional Responsibilities(.)*/gi;
    let strin1 = data.replace(
      regone,
      '<p class="h5 fw-normal py-3"> <span class="border-bottom border-3 border-success pb-1 pe-4">Responsibilities</span>'
    );
    let strin2 = strin1.replace(
      regtwo,
      '<p class="h5 fw-normal py-3"> <span class="border-bottom border-3 border-success pb-1 pe-4">Additional Responsibilities</span>'
    );
    // console.log(strin3);
    // const nameList = data.split(myregexp8);
    // console.log(nameList);

    return strin2;
  }
}
