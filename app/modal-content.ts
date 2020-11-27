import {Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.html'
})
export class MyModalContent implements OnInit{
  @Input() name;
  addPaymentForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addPaymentForm = this.formBuilder.group({
      jobId: ['', [Validators.required, Validators.maxLength(9)]],
      grossAmount:  ['', [Validators.required, Validators.max(10000), Validators.min(-10000)]]
    });
  }

  get f() { return this.addPaymentForm.controls; }

  close() {
    this.activeModal.close({ dataModified: false });
  }
}