// import videojs from 'video.js';
//  import 'videojs-playlist-ui';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import seriesData from '../series.json'; 
// import { VgAPI } from 'videogular2/core';
import { VgApiService } from '@videogular/ngx-videogular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  // @ViewChild('targett') targett: ElementRef;

  seriesData = seriesData;
  series;

  // player: videojs.Player;
  activeIndex = 0;
  currentVideo = this.seriesData.data[this.activeIndex];
  data: any;

  constructor() {
    console.log("RUNNIN SHIT3")
    this.series = this.seriesData
    console.log("SERIES LIST", this.series.data)

    console.log("Current Video", this.currentVideo)

  }

  videoPlayerInit(data: any) {
    console.log("WHAT DATA::",data)
    this.data = data;

    // this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.series.data.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.series.data[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item: any, index: number) {
    console.log("Want to play episode")
    this.activeIndex = index;
    this.currentVideo = item;

    this.nextVideo()
  }


  // ngAfterViewInit() {
  //   this.player = videojs(this.targett.nativeElement);
  //   this.player.playlistUi([{
  //     name: 'Disney\'s Oceans 1',
  //     description: 'Explore the depths of our planet\'s oceans. ' +
  //       'Experience the stories that connect their world to ours. ' +
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
  //       'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
  //       'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
  //       'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
  //       'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
  //       'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
  //       'laborum.',
  //     duration: 45,
  //     sources: [
  //       { src: 'http://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
  //       { src: 'http://vjs.zencdn.net/v/oceans.webm', type: 'video/webm' },
  //     ],

  //     // you can use <picture> syntax to display responsive images
  //     thumbnail: [
  //       {
  //         srcset: 'test/example/oceans.jpg',
  //         type: 'image/jpeg',
  //         media: '(min-width: 400px;)'
  //       },
  //       {
  //         src: 'test/example/oceans-low.jpg'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Disney\'s Oceans 2',
  //     description: 'Explore the depths of our planet\'s oceans. ' +
  //       'Experience the stories that connect their world to ours. ' +
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
  //       'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
  //       'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
  //       'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
  //       'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
  //       'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
  //       'laborum.',
  //     duration: 45,
  //     sources: [
  //       { src: 'http://vjs.zencdn.net/v/oceans.mp4?2', type: 'video/mp4' },
  //       { src: 'http://vjs.zencdn.net/v/oceans.webm?2', type: 'video/webm' },
  //     ],

  //     // you can use <picture> syntax to display responsive images
  //     thumbnail: [
  //       {
  //         srcset: 'test/example/oceans.jpg?2',
  //         type: 'image/jpeg',
  //         media: '(min-width: 400px;)'
  //       },
  //       {
  //         src: 'test/example/oceans-low.jpg?2'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Disney\'s Oceans 3',
  //     description: 'Explore the depths of our planet\'s oceans. ' +
  //       'Experience the stories that connect their world to ours. ' +
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
  //       'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
  //       'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
  //       'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
  //       'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
  //       'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
  //       'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
  //       'laborum.',
  //     duration: 45,
  //     sources: [
  //       { src: 'http://vjs.zencdn.net/v/oceans.mp4?3', type: 'video/mp4' },
  //       { src: 'http://vjs.zencdn.net/v/oceans.webm?3', type: 'video/webm' },
  //     ],

  //     // you can use <picture> syntax to display responsive images
  //     thumbnail: [
  //       {
  //         srcset: 'test/example/oceans.jpg?3',
  //         type: 'image/jpeg',
  //         media: '(min-width: 400px;)'
  //       },
  //       {
  //         src: 'test/example/oceans-low.jpg?3'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Disney\'s Oceans 4',
  //     description: 'Abc.',
  //     duration: 45,
  //     sources: [
  //       { src: 'http://vjs.zencdn.net/v/oceans.mp4?4', type: 'video/mp4' },
  //       { src: 'http://vjs.zencdn.net/v/oceans.webm?4', type: 'video/webm' },
  //     ],

  //     // you can use <picture> syntax to display responsive images
  //     thumbnail: [
  //       {
  //         srcset: 'test/example/oceans.jpg?4',
  //         type: 'image/jpeg',
  //         media: '(min-width: 400px;)'
  //       },
  //       {
  //         src: 'test/example/oceans-low.jpg?4'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Disney\'s Oceans 5',
  //     description: 'Abc.',
  //     duration: 45,
  //     sources: [
  //       { src: 'http://vjs.zencdn.net/v/oceans.mp4?5', type: 'video/mp4' },
  //       { src: 'http://vjs.zencdn.net/v/oceans.webm?5', type: 'video/webm' },
  //     ],

  //     // you can use <picture> syntax to display responsive images
  //     thumbnail: [
  //       {
  //         srcset: 'test/example/oceans.jpg?5',
  //         type: 'image/jpeg',
  //         media: '(min-width: 400px;)'
  //       },
  //       {
  //         src: 'test/example/oceans-low.jpg?5'
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Disney\'s Oceans 6',
  //     description: 'Abc.',
  //     duration: 45,
  //     sources: [
  //       { src: 'http://vjs.zencdn.net/v/oceans.mp4?6', type: 'video/mp4' },
  //       { src: 'http://vjs.zencdn.net/v/oceans.webm?6', type: 'video/webm' },
  //     ],

  //     // you can use <picture> syntax to display responsive images
  //     thumbnail: [
  //       {
  //         srcset: 'test/example/oceans.jpg?6',
  //         type: 'image/jpeg',
  //         media: '(min-width: 400px;)'
  //       },
  //       {
  //         src: 'test/example/oceans-low.jpg?6'
  //       }
  //     ]
  //   }, {
  //     name: 'Sintel (No Thumbnail)',
  //     description: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.',
  //     sources: [
  //       { src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', type: 'video/mp4' },
  //       { src: 'http://media.w3.org/2010/05/sintel/trailer.webm', type: 'video/webm' },
  //       { src: 'http://media.w3.org/2010/05/sintel/trailer.ogv', type: 'video/ogg' }
  //     ],
  //     thumbnail: false
  //   },

  //   // This is a really underspecified video to demonstrate the
  //   // behavior when optional parameters are missing. You'll get better
  //   // results with more video metadata!
  //   {
  //     name: 'Invalid Source',
  //     sources: [{
  //       src: 'Invalid'
  //     }]
  //   }]);

  //   // Initialize the playlist-ui plugin with no option (i.e. the defaults).
  //   this.player.playlistUi();

  // }


  ngOnInit() {

    console.log("RUNNIN SHIT")

    this.series = this.seriesData
    console.log("SERIES LIST", this.series.data)

  }

}
