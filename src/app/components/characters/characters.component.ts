import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/service/apis.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(private apisService: ApisService) {}

  allCharacters: any = [];
  comics: any = [];

  showComicsDiv: boolean = false;
  characterName: string = '';
  showSearchResult: boolean = false;
  searchedCharacter: any = [];

  ngOnInit(): void {
    this.showComicsDiv = false;
    this.showSearchResult = false;
    this.apisService.getCharacters().subscribe((result) => {
      console.log(result);
      this.allCharacters = result.data.results;
    });
  }

  findCharacter(event: any) {
    this.characterName = event.target.value;
    console.log(this.characterName);
    this.apisService
      .getCharacterByName(this.characterName)
      .subscribe((result) => {
        console.log(result);
        if (result.data.count > 0) {
          this.showSearchResult = true;
          this.searchedCharacter = result.data.results;
        } else {
          this.ngOnInit();
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
