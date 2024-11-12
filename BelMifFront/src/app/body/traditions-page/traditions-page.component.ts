import { Component } from '@angular/core';
import { TraditionCardComponent } from "../tradition-card/tradition-card.component";
import { TraditionModel } from '../../models/traditionModel';

@Component({
  selector: 'app-traditions-page',
  standalone: true,
  imports: [TraditionCardComponent],
  templateUrl: './traditions-page.component.html',
  styleUrl: './traditions-page.component.scss'
})

export class TraditionsPageComponent {
  readonly cardsList: TraditionModel[] = [
    {
        name: "Коляды",
        photo: "https://probelarus.by/images/thumbs/6504/blog-4078.jpg",
        description: "Коляды для предков современных белорусов были главным зимним праздником, который был связан в первую очередь с днем зимнего солнцестояния и символизировал начало нового года – и солнечного, и сельскохозяйственного."
    },
    {
      name: "Купалье",
      photo: "https://probelarus.by/images/thumbs/6505/blog-4079.jpg",
      description: "Купалье В этот день деревья передвигаются с места на место, животные разговаривают между собой, а в реках можно увидеть русалок, которые плавают в кристально чистой воде."
    },
    {
      name: "Масленица",
      photo: "https://probelarus.by/images/thumbs/6506/blog-4080.jpg",
      description: "Масленица Этот яркий красочный праздник в конце зимы радует и малышей, и взрослых. Игры, песни, танцы, веселый смех и шум – главные его приметы. А называется он – Масленица."
    },
    {
      name: "Дожинки",
      photo: "https://probelarus.by/images/thumbs/6503/blog-4077.jpg",
      description: "Дожинки Культура белорусов тесно связана с землей, земледелием. Многие праздники, обычаи и традиции берут свое начало из событий, тесно связанных с земледельческим календарем."
    },
    {
      name: "Пасха",
      photo: "https://probelarus.by/images/thumbs/6507/blog-4081.jpg",
      description: "Пасха Одним из самых главных христианских праздников в Беларуси является Пасха (или Вялікдзень). Этот праздник связан с большим количеством самых разных обрядов и традиций, многие из которых выполняются и сейчас."
    },
    {
      name: "Дзяды",
      photo: "https://probelarus.by/images/thumbs/6510/blog-4084.jpg",
      description: "Дзяды Отличительной чертой белорусского народа всегда являлось уважение к своим предкам, к своим корням. В календаре белорусов было больше пяти дней в году, когда поминали умерших, и эти дни обычно назывались Дзяды."
    },
    {
      name: "Гуканне вясны",
      photo: "https://probelarus.by/images/thumbs/6509/blog-4083.jpg",
      description: "«Гуканне вясны» Этот белорусский обычай – один из самых жизнерадостных и оптимистичных. Заканчивается долгая зима, а на смену ей идет красавица-весна."
    },
    {
      name: "Семуха",
      photo: "https://probelarus.by/images/thumbs/6512/blog-4086.jpg",
      description: "Семуха Семуха, Зеленые святки – именно так называют белорусы праздник Троицы. Этот день является одним из самых важных праздников православного календаря."
    },
    {
      name: "Сороки",
      photo: "https://probelarus.by/images/thumbs/6513/blog-4087.jpg",
      description: "Сороки В конце марта – в день весеннего равноденствия – белорусы всегда празднуют Сороки. Происходит это 22 марта."
    }
  ]
}
