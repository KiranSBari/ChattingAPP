import { Component, OnInit } from '@angular/core';
import { EncrDecrService } from 'src/app/encr-decr.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private EncrDecr: EncrDecrService) { }

  ngOnInit(): void {
    var encrypted = this.EncrDecr.set('123456$#@$shweta', 'Sneha');
    var decrypted = this.EncrDecr.get('123456$#@$shweta', encrypted);
   
    console.log('Encrypted :' + encrypted);
    console.log('Encrypted :' + decrypted);
  }

}
