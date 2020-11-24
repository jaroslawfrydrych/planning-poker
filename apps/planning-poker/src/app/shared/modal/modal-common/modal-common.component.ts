import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'planning-poker-modal-common',
  templateUrl: './modal-common.component.html',
  styleUrls: ['./modal-common.component.scss']
})
export class ModalCommonComponent implements OnInit {

  @ViewChild('modalContent') public modalContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
