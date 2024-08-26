import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApisService } from 'src/app/service/apis.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  constructor(
    private apisService: ApisService,
    private route: ActivatedRoute
  ) {}
  comics: any = [];
  showComicsDiv: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const characterId = params.get('characterId');
      if (characterId) {
        this.fetchComicsByCharacter(characterId);
      }
    });
  }

  fetchComicsByCharacter(characterId: string) {
    console.log(characterId);
    this.apisService.getComicsByCharacter(characterId).subscribe((result) => {
      console.log(result, 'fetchComicsByCharacter');

      if (result.data.count > 0) {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    });
  }
}
