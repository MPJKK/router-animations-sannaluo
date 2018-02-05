import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';
import {Media} from '../models/media';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  file = new Media('', '');
  formData = new FormData();

  constructor(private mediaService: MediaService) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    const file: File = evt.target.files[0];
    this.formData.append('file', file);
  }

  uploadFile() {
    const token = localStorage.getItem('token');
    this.formData.append('title', this.file.title);
    this.formData.append('description', this.file.description);

    this.mediaService.upload(this.formData, token).subscribe(data => {
      console.log(data);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  ngOnInit() {
    // const token = localStorage.getItem('token');
  }

}
