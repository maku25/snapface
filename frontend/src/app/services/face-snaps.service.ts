import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "src/app/face-snap/models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {

  constructor(private http: HttpClient) {}

  faceSnaps: FaceSnap[] = [
    {
      id: 5,
      title: "panthère rose",
      description: "Desin animé",
      imageUrl: "https://e7.pngegg.com/pngimages/334/955/png-clipart-pink-panther-illustration-the-pink-panther-inspector-clouseau-pink-panthers-the-pink-panther-fictional-character-flower.png",
      createdDate: new Date(),
      snaps: 0,
      location: "Paris"
    },
    {
      id: 2,
      title: "Souris verte",
      description: "Comptine",
      imageUrl: "https://maiasaura.fr/cdn/shop/products/Unesourisverte_540x.jpg?v=1602174563",
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 3,
      title: "chaton",
      description: "photo de chat mignon",
      imageUrl: "https://www.wanimo.com/veterinaire/wp-content/uploads/2015/08/images_articles_chat_chaton-peureux.jpg",
      createdDate: new Date(),
      snaps: 0,
      location: "Lille"
    },
  ];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapById(faceSnapId: number,snapType: 'snap' | 'unsnap'): void {
    // const faceSnap = this.getFaceSnapById(faceSnapId);
    // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }
}