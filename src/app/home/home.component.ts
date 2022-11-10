// import videojs from 'video.js';
//  import 'videojs-playlist-ui';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import seriesData from '../series.json'; 
// import { VgAPI } from 'videogular2/core';
// import { VgApiService } from '@videogular/ngx-videogular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  videoItems = [
    {
      name: 'Video one',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Video two',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      name: 'Video three',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];
  activeIndex = 0;
  // currentVideo2 = this.videoItems[this.activeIndex];

  seriesData = seriesData;
  series;

  // player: videojs.Player;
  // activeIndex = 0;
  currentVideo = this.seriesData.data[this.activeIndex];
  data: any;
  private url = 'https://homitv.traytontech.com/test/response.json';

  constructor(private http: HttpClient) {

    // this.http.get(this.url).subscribe(
    //   (response) => {
    //     console.log("JSON RESPONSE",response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
   
    this.series = this.seriesData
    console.log("SERIES LIST", this.series.data)
    console.log("ActiveIndex", this.activeIndex)
    console.log("Current Video", this.currentVideo.trailer)
    //  console.log("Current Video2", this.currentVideo2.src)

    

  }

  videoPlayerInit(data: any) {
    console.log("RUNS ONCE")
    this.data = data;

     this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));

    console.log("What is this?", this)
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.series.data.length) {
      this.activeIndex = 0;
    }
    console.log("Index of next video", this.activeIndex)
    this.currentVideo = this.series.data[this.activeIndex];
    console.log("Next Current Video is", this.currentVideo.trailer)
  }

  initVdo() {
    console.log("PLAY INITIATED")
    this.data.play();
  }

  startPlaylistVdo(item: any, index: number) {
 
    this.activeIndex = index;
    this.currentVideo = item;
    console.log("Series Item is", item)
    console.log("Index of Current video", this.activeIndex)
    console.log("Episode Current Video is", this.currentVideo)
    console.log("Sinlge  Current Video2 is", this.currentVideo.trailer)

    // this.nextVideo()
  }





  // videoPlayerInit2(data: any) {
  //   console.log("RUN ONCE")
  //   this.data = data;
  //   //  this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo2.bind(this));
  //   // this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo2.bind(this));
  // }
  // nextVideo2() {
  //   this.activeIndex++;
  //   if (this.activeIndex === this.videoItems.length) {
  //     this.activeIndex = 0;
  //   }
  //   this.currentVideo2 = this.videoItems[this.activeIndex];
  //   console.log("Next Current Video2 is", this.currentVideo2)
  // }
  // initVdo2() {
  //   console.log("PLAY INITIATED")
  //   this.data.play();
  // }
  // startPlaylistVdo2(item: any, index: number) {
  //   this.activeIndex = index;
  //   this.currentVideo2 = item;

  //   console.log("Series Item2 is", item)
  //   console.log("Index of Current vide2o", this.activeIndex)
  //   console.log("Episode Current Video2 is", this.currentVideo2)
  //   console.log("Sinlge  Current Video2 is", this.currentVideo2.src)
  // }


  ngOnInit() {

    // console.log("RUNNIN SHIT")

    // this.series = this.seriesData
    // console.log("SERIES LIST", this.series.data)

  }

}
