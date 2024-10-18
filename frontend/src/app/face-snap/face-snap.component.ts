import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  message!: string;
  
  constructor(private faceSnapService: FaceSnapService,
              private router : Router) {}

  ngOnInit(): void {
    this.message = "Snap";
  }

  onLike() {
    if (this.message === "Snap") {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.message = "Unsnap";
    } else  {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.message = "Snap";
      }
  }
  
  onViewFaceSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
