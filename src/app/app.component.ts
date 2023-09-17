import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {    
        title:'Le cocker',
        description: 'Le plus gentil chien du monde !',
        imageUrl: 'https://unpointculture.com/wp-content/uploads/2023/04/race-chien-cocker-anglais-1220x600.jpg',
        createdDate: new Date(),
        snaps: 60,
        location: 'Paris'
      },
      {
        title: 'Le panda roux',
        description: 'Le plus beau',
        imageUrl: 'https://parc.branfere.com/wp-content/uploads/sites/2/2018/07/panda-roux-carnivores-branfere.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Bali'
      },
      {
        title: 'Le manchot',
        description: 'Mon préféré',
        imageUrl: 'https://t4.ftcdn.net/jpg/00/01/83/73/240_F_1837302_bzSusKQ2holEpeb4NU5trJvkYnlZpd.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {    
        title:'La Nouvelle Zélande',
        description: 'Le plus beau pays du monde',
        imageUrl: 'https://static.asia.fr/cxfile/photosi/diapo-nouvelle-zelande-1-go.jpg',
        createdDate: new Date(),
        snaps: 0,
      }
    ]
  };
}
