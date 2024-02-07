import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray-demo',
  templateUrl: './formarray-demo.component.html',
  styleUrls: ['./formarray-demo.component.scss'],
})
export class FormarrayDemoComponent implements OnInit {
  factoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form
    this.initForm();
  }

  // Initialize the form with form controls and form array
  initForm(): void {
    this.factoryForm = this.fb.group({
      // Form control for new product input
      newProduct: [''],
      // Form array for storing products
      products: this.fb.array([]),
    });
  }

  // Getter method to access the products form array
  public get products(): FormArray {
    return this.factoryForm.get('products') as FormArray;
  }

  // Add a new product to the products form array
  addNewProduct(): void {
    // Create a new product form group
    const newProduct = this.getNewProduct();
    // Push the new product to the products form array
    this.products.push(newProduct);
  }

  // Create a new product form group with the new product name
  getNewProduct(): FormGroup {
    return this.fb.group({
      newProductName: this.factoryForm.get('newProduct')?.value,
    });
  }

}
