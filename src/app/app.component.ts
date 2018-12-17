import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 postes: any[];
 users: any[];
 constructor(private db: AngularFireDatabase) { 

db.list('/postes').valueChanges().subscribe(postes=>{
this.postes=postes;
console.log(this.postes);


});



 }
}
