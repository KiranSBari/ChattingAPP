import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EncrDecrService } from 'src/app/encr-decr.service';
import { DialogComponent } from 'src/app/upload/dialog/dialog.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private EncrDecr: EncrDecrService,public dialog: MatDialog) { }

  ngOnInit(): void {
    var encrypted = this.EncrDecr.set('123456$#@$shweta', 'Sneha');
    var decrypted = this.EncrDecr.get('123456$#@$shweta', encrypted);
   
    console.log('Encrypted :' + encrypted);
    console.log('Encrypted :' + decrypted);
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
}
