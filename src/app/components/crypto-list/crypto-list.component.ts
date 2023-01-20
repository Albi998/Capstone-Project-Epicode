import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coins } from 'src/app/models/coins';
import { map } from 'rxjs';

@Component({
    selector: 'app-crypto-list',
    templateUrl: './crypto-list.component.html',
    styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
    finalList: Coins[] = []
    coinsList: any
    index = 1
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getCoinsList()
        // this.finalList[0].oggetto.name
    }



    getCoinsList() {
        // interface Response { results: Coins[] }
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4c10ffb7eemsha0cedbbe44177e3p1b0292jsn06e3680b3b7b',
                'X-RapidAPI-Host': 'cryptocurrency-markets.p.rapidapi.com'
            }
        }



        return this.http.get('https://cryptocurrency-markets.p.rapidapi.com/coins?page=1', options).subscribe((res: any) => {
            this.coinsList = Object.keys(res).map((key) => { return res[key] })
            this.finalList.push(this.coinsList[1])
            // console.log(this.coinsList[1]);
            // console.log(this.finalList[0]);
            // console.log(this.finalList.entries);

        })


    }




}
