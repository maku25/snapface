import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { AuthGard } from "../core/guards/auth.gard";

const routes: Routes = [
    { path: "create", component: NewFaceSnapComponent, canActivate: [AuthGard] },
    { path: ":id", component: SingleFaceSnapComponent, canActivate: [AuthGard] },
    { path: "", component: FaceSnapListComponent, canActivate: [AuthGard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class FaceSnapsRoutingModule { }