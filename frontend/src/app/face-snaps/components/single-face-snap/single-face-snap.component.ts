import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapService } from 'src/app/core/services/face-snaps.service';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap$!: Observable<FaceSnap>;
  message!: string;

  constructor(private faceSnapService: FaceSnapService,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.message = "Snap";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onLike(faceSnapId: number) {
    if (this.message === "Snap") {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.message = 'Unsnap')
      );
    } 
    else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.message = 'Snap')
      );
    }
  }
}