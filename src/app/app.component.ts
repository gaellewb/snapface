import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(    
      'Le cocker',
      'Le plus gentil chien du monde !',
      'https://unpointculture.com/wp-content/uploads/2023/04/race-chien-cocker-anglais-1220x600.jpg',
      new Date(),
      0
    )

    this.myOtherSnap = new FaceSnap (
      'Le panda roux',
      'Le plus beau',
      'https://img.freepik.com/photos-gratuite/beau-panda-rouge-voie-disparition-arbre-vert_475641-1326.jpg?size=626&ext=jpg&ga=GA1.1.1869783212.1694793886&semt=ais',
      new Date(),
      0
    )

    this.myLastSnap = new FaceSnap (
      'Le manchot',
      'Mon préféré',
      'https://i.pinimg.com/236x/70/3b/94/703b94e86a5dc670735b687551bb4733--penguin-bird-penguin-facts.jpg',
      new Date(),
      0
    )
  };
}
