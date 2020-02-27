import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent  {

  selectedFiles: FileList;
	currentFile: File;

    constructor(private fileService: FileService) {}
	
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.fileService.uploadFile(this.currentFile).subscribe(response => {
		//this.selectedFiles.value="";
     if (response instanceof HttpResponse) {
		// this.msg = response.body;
        console.log(response.body);
      }	  
    });    
  }
  

}
