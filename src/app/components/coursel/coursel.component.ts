import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursel',
  templateUrl: './coursel.component.html',
  styleUrls: ['./coursel.component.scss'],
})
export class CourselComponent implements OnInit {
  responsiveOptions;
  images = [
    {
      previewImageSrc: '/assets/images/coursel/photo-1.jpg',
      thumbnailImageSrc: 'assets/images/coursel/photo-1.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc: '/assets/images/coursel/photo-2.JPG',
      thumbnailImageSrc: '/assets/images/coursel/photo-2.JPG',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      previewImageSrc: '/assets/images/coursel/photo-3.JPG',
      thumbnailImageSrc: '/assets/images/coursel/photo-3.JPG',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      previewImageSrc: '/assets/images/coursel/photo-4.JPG',
      thumbnailImageSrc: '/assets/images/coursel/photo-4.JPG',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
    {
      previewImageSrc: '/assets/images/coursel/photo-5.JPG',
      thumbnailImageSrc: '/assets/images/coursel/photo-5.JPG',
      alt: 'Description for Image 5',
      title: 'Title 5',
    },
    {
      previewImageSrc: '/assets/images/coursel/photo-6.JPG',
      thumbnailImageSrc: '/assets/images/coursel/photo-6.JPG',
      alt: 'Description for Image 6',
      title: 'Title 6',
    },
    {
      previewImageSrc: '/images/coursel/photo-7.JPG',
      thumbnailImageSrc: 'images/coursel/photo-7.JPG',
      alt: 'Description for Image 7',
      title: 'Title 7',
    },
    {
      previewImageSrc: '/../../../assets/images/coursel/photo-8.JPG',
      thumbnailImageSrc: '/assets/images/coursel/photo-8.JPG',
      alt: 'Description for Image 8',
      title: 'Title 8',
    },
    {
      previewImageSrc: 'images/coursel/photo-9.jpg',
      thumbnailImageSrc: '/assets/images/coursel/photo-9.jpg',
      alt: 'Description for Image 9',
      title: 'Title 9',
    }
  ];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {}
}
