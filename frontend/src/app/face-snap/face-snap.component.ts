import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  onViewFaceSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
}
@Input() faceSnap!: FaceSnap;
  message!: string;

  constructor(private faceSnapService: FaceSnapService,
             private router : Router) { }

  ngOnInit(): void {

    this.message = "Oh Snap";
  }

onLike() {
  if (this.message === "Oh Snap") {
    this.message = "Oop, unSnap";
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
  }
  else  {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.message = "Oh Snap";
    }
}
}
