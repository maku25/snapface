import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapService } from 'src/app/services/face-snaps.service';
import { FaceSnap } from '../face-snap/models/face-snap.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
    faceSnap$!: Observable<FaceSnap>;
    message!: string;

  constructor(private faceSnapService: FaceSnapService,
              private route : ActivatedRoute) { }

    ngOnInit(): void {
      this.message = "Oh Snap";
      // le + permet de convertir le string en number
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
    }

  onLike() {
    // if (this.message === "Oh Snap") {
    //   this.message = "Oop, unSnap";
    //   this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    // }
    // else  {
    //   this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    //   this.message = "Oh Snap";
    //   }
  }
}