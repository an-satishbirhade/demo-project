import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 interface IFormContent {
  type: string
  name: string
  label: string
  placeholder: string
  required: boolean
}


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit{
  myDynamicForm!:FormGroup;
  formContent:{
    fields: {
        type?: string;
        name: string;
        label?: string;
        placeholder?: string;
        required?: boolean;
        options?: {
          label: string;
          value: string;
        }[]
    }[]} ={
    fields: [
      {
        type: 'text',
        name: 'textQuestion',
        label: 'Text Input',
        placeholder: 'Enter your answer',
        required: true
      },
      {
        type: 'email',
        name: 'emailQuestion',
        label: 'Email Input',
        placeholder: 'Enter your email',
        required: true
      },
      {
        type: 'password',
        name: 'passwordQuestion',
        label: 'Password Input',
        placeholder: 'Enter your password',
        required: true
      },
      {
        type: 'number',
        name: 'numberQuestion',
        label: 'Number Input',
        placeholder: 'Enter a number',
        required: true
      },
      {
        type: 'tel',
        name: 'telQuestion',
        label: 'Telephone Input',
        placeholder: 'Enter your phone number',
        required: true
      },
      {
        type: 'date',
        name: 'dateQuestion',
        label: 'Date Input',
        required: true
      },
      {
        type: 'time',
        name: 'timeQuestion',
        label: 'Time Input',
        required: true
      },
      {
        type: 'checkbox',
        name: 'checkboxQuestion',
        label: 'Checkbox',
        options: [
          {
            label: 'Option 1',
            value: 'option1'
          },
          {
            label: 'Option 2',
            value: 'option2'
          },
          {
            label: 'Option 3',
            value: 'option3'
          }
        ]
      },
      {
        type: 'radio',
        name: 'radioQuestion',
        label: 'Radio Buttons',
        options: [
          {
            label: 'Option 1',
            value: 'option1'
          },
          {
            label: 'Option 2',
            value: 'option2'
          },
          {
            label: 'Option 3',
            value: 'option3'
          }
        ]
      },
      {
        type: 'textarea',
        name: 'textareaQuestion',
        label: 'Textarea',
        placeholder: 'Enter your text',
        required: true
      }
    ]
  }

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.initForm();
    this.generateFormDynamically();
  }

  initForm():void{
    this.myDynamicForm=this.fb.group({})
  }

  generateFormDynamically() {
    if (!this.formContent || !this.formContent.fields || !this.myDynamicForm) {
      console.error('Form content or form group is not properly initialized.');
      return;
    }

    this.formContent.fields.forEach(field => {
      if (!field.name) {
        console.error('Field name is missing:', field);
        return;
      }
      this.myDynamicForm.addControl(field.name, this.fb.control('', field.required ? [Validators.required] : []));
    });

    console.log('Dynamic form created:', this.myDynamicForm);
  }

  submitForm(): void {
    console.log("submitted Form", this.myDynamicForm.value)
  }

}
