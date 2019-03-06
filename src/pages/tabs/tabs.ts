import { HomePage } from '../home/home';
import { CameraPage } from '../camera/camera';
import { FileUploadPage } from '../file-upload/file-upload';
import { Component } from '@angular/core';


@Component({
 selector: 'page-tabs',
 templateUrl: 'tabs.html',
})
export class TabsPage {
 HomePage = HomePage;
 CameraPage = CameraPage;
 FileUploadPage = FileUploadPage;
}
